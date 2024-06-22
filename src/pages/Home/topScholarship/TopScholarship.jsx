import { Link } from "react-router-dom";
import useScholarship from "../../../Hooks/useScholarship";
import useAxiosPublic from "../../../Hooks/usePublic";
import { useQuery } from "@tanstack/react-query";


const TopScholarship = () => {
    // const [scholarship]=useScholarship()
    const axiosPublic = useAxiosPublic()
    const { data: scholarship = [], isPending: loading, refetch } = useQuery({
        queryKey: ['scholarship'],
        queryFn: async () => {
            const res = await axiosPublic.get(`scholarshipLimit`);
            return res.data;
           
        }
        
    })
    return (
        <div className=" my-16">
            <h2 className="text-5xl text-center mb-12">Top Scholarship</h2>
        <div className="grid grid-cols-1 md:gap-8 md:grid-cols-3 lg::grid-cols-3">
            {
                scholarship.map(scholarship => <div key={scholarship._id}>

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
                                    <p>Subject: {scholarship.subjectCategory} </p>
                                    <p>Category : {scholarship.scholarshipCategory} </p>
                                </div>

                                <div className="flex justify-between">
                                    <p>Country: {scholarship.universityCountry} </p>
                                    <p>City: {scholarship.universityCity} </p>
                                </div>
                                <div className=" border-dotted border-2 border-amber-300 w-full"></div>
                                <div className="flex justify-between">
                                    <p>Application Fee: {scholarship.applicationFee} </p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/viewDetails/${scholarship._id}`}><button className="btn  bg-gradient-to-r from-cyan-500 to-blue-500">Details</button></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>)
            }
        </div>
        {/* <div className="flex my-12 gap-4 lg:mx-20">
            <button className="btn"> Previous</button>
            <div>
                {
                    pages.map(btnNum => (<button onClick={() => handlePaginationButton(btnNum)} className={`${currentPage === btnNum ? 'btn mx-1 bg-gradient-to-r from-cyan-500 to-blue-500 px-7 text-2xl text-white' : 'btn px-7  mx-1'}`} key={btnNum}> {btnNum}</button>))
                }
            </div>
            <button className="btn"> Next</button>

        </div> */}
    </div>
    );
};

export default TopScholarship;