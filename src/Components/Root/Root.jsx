import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Nabvar/Navbar";

const Root = () => {
    return (
        <div>
            <div><Navbar></Navbar></div>
            <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
            </div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default Root;