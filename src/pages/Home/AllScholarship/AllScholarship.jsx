import { Link } from "react-router-dom";
import useScholarship from "../../../Hooks/useScholarship";


const AllScholarship = () => {
    const [scholarships] = useScholarship()
    console.log(scholarships)
    return (
        <div>
            <div className="grid grid-cols-1 md:gap-8 md:grid-cols-3 lg::grid-cols-3">
                {
                    scholarships.map(scholarship => <div key={scholarship._id}>

                        <div className="card bg-base-100 shadow-xl">
                            <figure><img className="relative w-full h-80" src={scholarship.image} alt="image" /></figure>
                            <div className="bg-white shadow-2xl text-center w-44 rounded-xl border-blue-500 m-2 mx-auto px-2 py-5 absolute top-52 right-24">
                                <h2 className="">WorldRange: {scholarship.worldRange} </h2>
                                <h2>Rating: {scholarship?.rating} </h2>
                            </div>
                            <div className=" p-5 space-y-3">
                                <h2 className="card-title">{scholarship.scholarshipName}</h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <p>{scholarship.subjectCategory} </p>
                                        <p>{scholarship.scholarshipCategory} </p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>{scholarship.universityCountry} </p>
                                        <p>{scholarship.UniversityCity} </p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>{scholarship.applicationFee} </p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/viewDetails/${scholarship._id}`}><button className="btn btn-primary">Details</button></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllScholarship;