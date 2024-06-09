import useScholarship from "../../../Hooks/useScholarship";


const AllScholarship = () => {
    const [scholarships] = useScholarship()
    console.log(scholarships)
    return (
        <div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg::grid-cols-3">
                {
                    scholarships.map(scholarship => <div key={scholarship._id}>

                        <div className="card bg-base-100 shadow-xl">
                            <figure><img className="relative" src={scholarship.image} alt="image" /></figure>
                            <div className="bg-white shadow-2xl text-center w-44 rounded-xl border-blue-500 m-2 mx-auto px-2 py-5 absolute">
                                <h2 className="">WorldRange: {scholarship.worldRange} </h2>
                                <h2>Rating: {scholarship?.rating} </h2>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">{scholarship.scholarshipName}</h2>
                                <p>{scholarship.scholarshipCategory} </p>
                                <p>{scholarship.subjectCategory} </p>
                                <p>{scholarship.applicationFee} </p>
                                <p>{scholarship.universityCountry} </p>
                                <p>{scholarship.UniversityCity} </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
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