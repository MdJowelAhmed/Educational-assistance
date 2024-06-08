import useScholarship from "../../../Hooks/useScholarship";


const AllScholarship = () => {
    const [scholarships] = useScholarship()
    console.log(scholarships)
    return (
        <div>
            <div>
                {
                    scholarships.map(scholarship => <div key={scholarship._id}>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={scholarship.image} alt="image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{scholarship.scholarshipName}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
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