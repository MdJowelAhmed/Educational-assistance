import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/usePublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { imageUpload } from "../../api/ImageApi";


const ApplyPage = () => {
    const {user}=useAuth()
    const { id } = useParams()
    const axiosPublic = useAxiosPublic()

    const { data: scholarship = {}, isLoading,
        refetch, } = useQuery({
            queryKey: ['scholarship', id],
            queryFn: async () => {
                const { data } = await axiosPublic.get(`/detailsScholarship/${id}`)
                return data
            }
        })
console.log(scholarship)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        // console.log(data)
        const image = data.image[0]
        console.log(image)

        const applicantInfo = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        }
        console.log(applicantInfo)
        const image_url = await imageUpload(image)
        const applyData = {
            universityName: data.universityName,
            gender:data.gender,
            sscResult:data.sscResult,
            hscResult:data.hscResult,
            // universityCountry: data.universityCountry,
            subjectCategory: data.subjectCategory,
            // scholarshipCategory: data.scholarshipCategory,
            degree: data.degree,
            image: image_url,
            status:'pending',
            applicantInfo:applicantInfo
        }
        console.log(applyData)
        const applyRes=await axiosPublic.post('/apply',applyData)
        console.log(applyRes.data)
        if(applyRes.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: ` apply successfully`,
                showConfirmButton: false,
                timer: 1500
              });
             
        }
    }
    return (
        <div className="bg-base-200 p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-4 md:gap-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone number</span>
                        </label>
                        <input {...register("phone", { required: true })} type="text" name="phone" placeholder="Phone Number" className="input input-bordered" />
                        {errors.phone && <span className="text-red-600  font-lato"> Phone Number must be fill up</span>}
                    </div>
                    <div className="flex gap-4 md:gap-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Image</span>
                            </label>
                            <input {...register("image", { required: true })} type="file" name="image" placeholder="University Image" className="input input-bordered" />
                            {errors.image && <span className="text-red-500 font-lato">Image is Required</span>}
                        </div>
                    </div>
                </div>


                <div className="flex gap-4 md:gap-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input {...register("address", { required: true })} type="text" name="address" placeholder="Village,district,country" className="input input-bordered" />
                        {errors.address && <span className="text-red-600  font-lato"> Address must be fill up</span>}
                    </div>
                    {/* <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone number</span>
                        </label>
                        <input {...register("phone", { required: true })} type="text" name="phone" placeholder="Phone Number" className="input input-bordered" />
                        {errors.phone && <span className="text-red-600  font-lato"> Phone Number must be fill up</span>}
                    </div> */}
                </div>


                <div className="flex gap-4 md:gap-8">
                    <div className="flex gap-5 flex-1 md:gap-10">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select defaultValue="default" {...register('gender', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a Gender</option>
                                <option value="male">male</option>
                                <option value="female">Female</option>

                            </select>
                        </div>
                    </div>
                    <div className="form-control flex-1 w-full my-6">
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

                <div className="flex gap-4 md:gap-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">S.S.C result</span>
                        </label>
                        <input {...register("sscResult", { required: true })} type="text" name="sscResult" placeholder="S.S.C result" className="input input-bordered" />
                        {errors.sscResult && <span className="text-red-600  font-lato"> S.S.C result must be fill up</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">H.S.C result</span>
                        </label>
                        <input {...register("hscResult", { required: true })} type="text" name="hscResult" placeholder="H.S.C result" className="input input-bordered" />
                        {errors.hscResult && <span className="text-red-600 font-lato">H.S.C result must be fill up</span>}
                    </div>
                </div>
                <div className="flex gap-4 md:gap-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">University Name</span>
                        </label>
                        <input defaultValue={scholarship.universityName} {...register("universityName",  { required: true })} type="text" name="universityName" placeholder="University Name" className="input input-bordered" />
                        {errors.universityName && <span className="text-red-600 font-lato">University name must be fill up</span>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Subject category</span>
                        </label>
                        <select defaultValue={scholarship.subjectCategory} {...register('subjectCategory', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select a Subject</option>
                            <option value="agriculture">Agriculture</option>
                            <option value="engineering">Engineering</option>
                            <option value="doctor">Doctor</option>
                        </select>
                    </div>
                </div>

                <input type="submit" value="Apply" className="btn text-white text-xl bg-gradient-to-r from-cyan-500 to-blue-500 w-full my-10" />
            </form>
        </div>
    );
};

export default ApplyPage;