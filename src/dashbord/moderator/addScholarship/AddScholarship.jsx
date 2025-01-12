// import AddScholarShipForm from "./AddScholarShipForm";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";
import { imageUpload } from "../../../api/ImageApi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosPublic from "../../../Hooks/usePublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddScholarship = () => {
    const { user } = useAuth()
    const navigate=useNavigate()
    const axiosSecure=useAxiosSecure()
    const axiosPublic=useAxiosPublic()
    // const [startDate, setStartDate] = useState(new Date());

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        // console.log(data)
        const image = data.image[0]
        console.log(image)
       
        const postedInfo = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        }
        const image_url = await imageUpload(image)
            const addScholarshipData = {
                scholarshipName: data.scholarshipName,
                universityName: data.universityName,
                universityCountry: data.universityCountry,
                universityCity: data.universityCity,
                worldRange: data.worldRange,
                subjectCategory: data.subjectCategory,
                scholarshipCategory: data.scholarshipCategory,
                degree: data.degree,
                tuitionFee: data.tuitionFee,
                applicationFee: data.applicationFee,
                serviceCharge: data.serviceCharge,
                postDate: data.postDate,
                deadline: data.deadline,
                rating:data.rating,
                postedInfo,
                image: image_url
        }
        const scholarshipRes=await axiosPublic.post('/scholarship',addScholarshipData)
        console.log(scholarshipRes.data)
        if(scholarshipRes.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.scholarshipName} added database successfully`,
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/allScholarship')
        }
       
    }
    return (
        <div className="bg-base-200 pt-12 rounded-2xl">
            <h2 className=" text-5xl font-lato px-16 text-center mb-2">Create a new scholarship</h2>
            <p className="px-16 text-center font-lato">The Global Visionary Leaders Scholarship supports exceptional students in <br /> Agriculture, Engineering, and Medicine. Awarded for academic excellence <br /> and leadership, it provides financial aid</p>
            {/* <AddScholarShipForm></AddScholarShipForm> */}
            <div className="bg-base-200 rounded-2xl">
                <div>
                    <div className="bg-base-200 rounded-3xl">

                        <form onSubmit={handleSubmit(onSubmit)} className=" m-2 mx-auto lg:p-12">
                            {/* scholarship and university name  */}
                            <div>
                                <div className="flex gap-4 md:gap-8">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Scholarship Name</span>
                                        </label>
                                        <input {...register("scholarshipName", { required: true })} type="text" name="scholarshipName" placeholder="Scholarship Name" className="input input-bordered" />
                                        {errors.scholarshipName && <span className="text-red-600  font-lato"> Scholarship name must be fill up</span>}
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">University Name</span>
                                        </label>
                                        <input {...register("universityName", { required: true })} type="text" name="universityName" placeholder="University Name" className="input input-bordered" />
                                        {errors.universityName && <span className="text-red-600 font-lato">University name must be fill up</span>}
                                    </div>
                                </div>

                                {/* image and university country  */}
                                <div className="flex gap-4 md:gap-8">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">University Image</span>
                                        </label>
                                        <input {...register("image", { required: true })} type="file" name="image" placeholder="University Image" className="input input-bordered" />
                                        {errors.image && <span className="text-red-500 font-lato">Image is Required</span>}
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">University Country</span>
                                        </label>
                                        <input {...register("universityCountry", { required: true })} type="text" name="universityCountry" placeholder="University Country" className="input input-bordered" />
                                        {errors.universityCountry && <span className="text-red-600 font-lato">Fill up the University country</span>}
                                    </div>
                                </div>

                                {/* university city and would range  */}
                                <div className="flex gap-4 md:gap-8">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">University City</span>
                                        </label>
                                        <input {...register("universityCity", { required: true })} type="text" name="universityCity" placeholder="University City" className="input input-bordered" />
                                        {errors.universityCity && <span className="text-red-600 font-lato">Fill up the University City </span>}
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">University World Range</span>
                                        </label>
                                        <input {...register("worldRange", { required: true })} type="text" name="worldRange" placeholder="University World Range" className="input input-bordered" />
                                        {errors.range && <span className="text-red-600 font-lato">Write this world range</span>}
                                    </div>
                                </div>
                                {/* Category select types */}
                                <div className="flex gap-5 md:gap-10">
                                    <div className="form-control w-full my-6">
                                        <label className="label">
                                            <span className="label-text">Subject category</span>
                                        </label>
                                        <select defaultValue="default" {...register('subjectCategory', { required: true })}
                                            className="select select-bordered w-full">
                                            <option disabled value="default">Select a Subject</option>
                                            <option value="agriculture">Agriculture</option>
                                            <option value="engineering">Engineering</option>
                                            <option value="doctor">Doctor</option>
                                        </select>
                                    </div>

                                    <div className="form-control w-full my-6">
                                        <label className="label">
                                            <span className="label-text">Scholarship category</span>
                                        </label>
                                        <select defaultValue="default" {...register('scholarshipCategory', { required: true })}
                                            className="select select-bordered w-full">
                                            <option disabled value="default">Select a  Category</option>
                                            <option value="fullFund">Full Fund</option>
                                            <option value="partial">Partial</option>
                                            <option value="selfFund">Self-fund</option>
                                        </select>
                                    </div>

                                    <div className="form-control w-full my-6">
                                        <label className="label">
                                            <span className="label-text"> Degree category</span>
                                        </label>
                                        <select defaultValue="default" {...register('degree', { required: true })}
                                            className="select select-bordered w-full">
                                            <option disabled value="default">Select a Degree</option>
                                            <option value="diploma">Diploma</option>
                                            <option value="bachelor">Bachelor</option>
                                            <option value="masters">Masters</option>
                                        </select>
                                    </div>

                                </div>

                                {/*etc charge/fees  */}
                                <div className="flex gap-4 md:gap-10">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text"> Tuition fees</span>
                                        </label>
                                        <input {...register("tuitionFee", { required: true })} type="number" name="tuitionFee" placeholder=" Tuition fees" className="input input-bordered" />
                                        {errors.tuitionFee && <span className="text-red-600 font-lato">please mention tuition fee</span>}
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text"> Application fees</span>
                                        </label>
                                        <input {...register("applicationFee", { required: true })} type="number" name="applicationFee" placeholder=" Application fees" className="input input-bordered" />
                                        {errors.applicationFee && <span className="text-red-600 font-lato">please mention application fee </span>}
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text"> Service charge</span>
                                        </label>
                                        <input {...register("serviceCharge", { required: true })} type="number" name="serviceCharge" placeholder=" Service charge" className="input input-bordered" />
                                        {errors.serviceCharge && <span className="text-red-600 font-lato">please mention service charge</span>}
                                    </div>
                                </div>


                                <div className="flex gap-4 md:gap-8">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Scholarship post date</span>
                                        </label>
                                        <input {...register("postDate", { required: true })} type="text" name="postDate" defaultValue={new Date().toLocaleString()} placeholder="Scholarship post date" className="input input-bordered" />
                                        {errors.postDate && <span className="text-red-600 font-lato">please inter this post date</span>}
                                    </div>

                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Deadline</span>
                                        </label>
                                        <input {...register("deadline", { required: true })} type="date" name="deadline" placeholder="Deadline" className="input input-bordered" />
                                        {errors.deadline && <span className="text-red-600 font-lato"> Deadline is must give this field</span>}
                                    </div>
                                </div>


                                <div className="flex gap-4 md:gap-8">

                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input {...register("rating", )} type="text" name="rating"  placeholder="Rating" className="input input-bordered"  required/>
                                        </div>
                                        {errors.rating && <span className="text-red-600 font-lato">Rating must be 3-5 </span>}

                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input {...register("email", )} type="text" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" disabled />
                                        
                                    </div>
                                </div>
                            </div>

                            <input type="submit" value="Add Scholarship" className="btn text-white text-xl bg-gradient-to-r from-cyan-500 to-blue-500 w-full my-10" />
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddScholarship;