import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPages from './Components/ErrorPages/ErrorPages';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import BookDetails from './Components/BookDetails/BookDetails';
import ListedBook from './Components/ListedBook/ListedBook';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json'),
      },
      {
        path: 'listedBooks',
        element: <ListedBook></ListedBook>,
        loader: () => fetch('/booksData.json')
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer/>
  </StrictMode>,
)
