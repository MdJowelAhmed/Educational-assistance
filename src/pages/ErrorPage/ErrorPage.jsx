import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <img  className="m-4 mx-auto mt-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRbF2c1k9SnwBoDcwhVREGcK9xWuSUCamRQ&s" alt="" />
            <h2 className="text-5xl font-semibold">Not Found This Page</h2>
            <h3 className="mt-5">Go to <Link to='/' className="text-blue-500 mt-5 text-2xl">Home</Link></h3>
        </div>
    );
};

export default ErrorPage;