import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Spinner from "../../../pages/Spinner/Spinner";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";


const AllAppliedScholarship = () => {
    const axiosSecure=useAxiosSecure()
    const { data: application = [], isLoading, refetch } = useQuery({
        queryKey: ['application'],
        queryFn: async () => {
            const res = await axiosSecure.get(`apply`);
            return res.data;
           
        }
    })
    const handleDeleteScholarship = p => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/apply/${p._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    if (isLoading) return <Spinner />
    return (
        <div>
        <div className="flex justify-evenly my-4">
            <h2 className="text-3xl">All Scholarship</h2>
            <h2 className="text-3xl">Total Scholarship: {application.length}</h2>
        </div>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>S.Name</th>
                        <th>U.City</th>
                        <th>Subjects</th>
                        <th>Degree</th>
                        <th>Application fee</th>
                        <th>Details</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        application.map((p, index) => <tr key={p._id}>
                            <th>{index + 1}</th>
                            <td>{p.scholarshipName}</td>
                            <td>{p.universityName}</td>
                            <td>{p.subjectCategory}</td>
                            <td>{p.degree}</td>
                            <td>{p.applicationFee}</td>
                           <Link to={`/viewDetails/${p._id}`}> <td><TbListDetails className="text-3xl"/></td></Link>
                            <td><button className="btn" onClick={()=>handleDeleteScholarship(p)}><RiDeleteBin6Line className="text-3xl"/></button></td>
                            <td><CiEdit className="text-3xl"/></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllAppliedScholarship;