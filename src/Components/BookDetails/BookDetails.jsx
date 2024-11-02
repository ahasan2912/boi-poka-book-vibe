import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../Utilities/markasead";

const BookDetails = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const bookIdNum = parseInt(bookId);
    const book = data.find(book => book.bookId === bookIdNum);
    const { bookName, author, image, tags, category, rating, review } = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id)
    }

    return (
        <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
            <img className="w-96 rounded-lg" src={image} alt="" />
            <div className="space-y-4 border rounded-lg p-5">
                <h1 className="text-5xl font-bold">{bookName}</h1>
                <p className="text-xl font-semibold">{author}</p>
                <div className="border-t-2"></div>
                <p className="text-lg font-semibold">{category}</p>
                <div className="border-t-2"></div>
                <p className="text-lg">{review}</p>
                <div>
                <div className="flex justify-start items-center gap-10">
                        {
                            tags.map((tag, idx) => <p key={idx} className="text-green-400">#{tag}</p>)
                        }
                    </div>
                </div>
                <div className="space-x-3">
                    <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline">Mark as Read</button>
                    <button className="btn btn-success">Wish as list</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;