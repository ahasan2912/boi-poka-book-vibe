import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=> {
        fetch('booksData.json')
        .then(res => res.json())
        .then(data=> setBooks(data));
    }, []);

    return (
        <div>
            <h1 className="text-5xl text-center font-bold my-10">Books</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center px-5">
                {
                    books.map((book, idx) => <Book key={idx} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;