import { Outlet } from "react-router-dom";
import Navbar from "../../components/shareComponents/Navbar";
import Footer from "../../components/shareComponents/Footer";


const Root = () => {
    return (
        <div>
            <div className="mx-16 mt-10">
                <Navbar></Navbar>
            </div>
            <div className="mx-16 my-16 min-h-80">
                <Outlet></Outlet>
            </div>
            <div className="mx-16 mb-16">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;