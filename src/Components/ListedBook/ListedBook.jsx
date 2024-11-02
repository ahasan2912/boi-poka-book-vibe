import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from '../Book/Book';
import { getStoredReadList } from '../Utilities/markasead';
import { rankings } from 'match-sorter';
const ListedBook = () => {
    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData();
    const [sort, setSort] = useState('');
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);

    }, []);

    const handleSortType = (sortType) => {
        setSort(sortType);

        if(sortType === 'Ratings'){
            const readListSorted = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(readListSorted);
        }
        else{
            const readListSorted = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(readListSorted);
        }
        }

    return (
        <div className='px-5'>
            <h1 className='text-3xl my-8'>Listed Books</h1>
            <details className="dropdown">
                <summary className="btn m-1">
                    {
                        sort ? `Sort By: ${sort}` : `Sort By`
                    }
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=>handleSortType('Ratings')}><a>Ratings</a></li>
                    <li onClick={()=>handleSortType('Number of Pages')}><a>Number of Pages</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;