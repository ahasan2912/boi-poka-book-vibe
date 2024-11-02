import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, tags, category, rating, totalPages } = book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 space-y-4 border p-3">
                <figure className="bg-gray-300 py-8 rounded-2xl">
                    <img
                        className="h-[166px] rounded-md"
                        src={image} />
                </figure>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-start items-center gap-10">
                        {
                            tags.map((tag, idx) => <button key={idx} className="btn btn-sm bg-green-400 text-white">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p>{author}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <div className="card-actions justify-between items-center py-2">
                        <div className="badge badge-outline">{category}</div>
                        <p className="btn btn-xs">{totalPages}</p>
                        <div className="rating">
                            <p className="mt-1 mr-2">{rating}</p>
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-400" defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;