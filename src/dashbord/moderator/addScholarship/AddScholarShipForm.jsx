import { useForm } from "react-hook-form";


const AddScholarShipForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

    }
    return (
        <div>
            <div className="bg-base-100 rounded-3xl">
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

                        {/* image nad university country  */}
                        <div className="flex gap-4 md:gap-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">University Image</span>
                                </label>
                                <input {...register("UniversityImage", { required: true })} type="text" name="UniversityImage" placeholder="University Image" className="input input-bordered" />
                                {errors.UniversityImage && <span className="text-red-500 font-lato">Image is Required</span>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">University Country</span>
                                </label>
                                <input {...register("universityCountry", { required: true })} type="text" name="universityCountry" placeholder="University Country" className="input input-bordered" />
                                {errors.universityCountry && <span>Your email is must give this field</span>}
                            </div>
                        </div>

                        {/* university city and would range  */}
                        <div className="flex gap-4 md:gap-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">University City</span>
                                </label>
                                <input {...register("UniversityCity", { required: true })} type="text" name="UniversityCity" placeholder="University City" className="input input-bordered" />
                                {errors.UniversityCity && <span>Your email is must give this field</span>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">University World Range</span>
                                </label>
                                <input {...register("range", { required: true })} type="text" name="range" placeholder="University World Range" className="input input-bordered" />
                                {errors.range && <span>Your email is must give this field</span>}
                            </div>
                        </div>
                        {/* Category select types */}
                        <div className="flex gap-5 md:gap-10">
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Subject category</span>
                                </label>
                                <select defaultValue="default" {...register('SubjectCategory', { required: true })}
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
                                <select defaultValue="default" {...register('ScholarshipCategory', { required: true })}
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
                                <select defaultValue="default" {...register(' degree', { required: true })}
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
                                <input {...register("tuitionFee", { required: true })} type="text" name="tuitionFee" placeholder=" Tuition fees" className="input input-bordered" />
                                {errors.tuitionFee && <span>Your email is must give this field</span>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text"> Application fees</span>
                                </label>
                                <input {...register("applicationFee", { required: true })} type="text" name="applicationFee" placeholder=" Application fees" className="input input-bordered" />
                                {errors.applicationFee && <span>Your email is must give this field</span>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text"> Service charge</span>
                                </label>
                                <input {...register("serviceCharge", { required: true })} type="text" name="serviceCharge" placeholder=" Service charge" className="input input-bordered" />
                                {errors.serviceCharge && <span>Your email is must give this field</span>}
                            </div>
                        </div>


                        <div className="flex gap-4 md:gap-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="text" name="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span>Your email is must give this field</span>}
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="text" name="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span>Your email is must give this field</span>}
                            </div>
                        </div>


                        <div className="flex gap-4 md:gap-8">

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="text" name="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span>Your email is must give this field</span>}
                            </div>
                        </div>
                    </div>

                    <input type="submit" value="Login" className="btn text-white text-xl bg-gradient-to-r from-cyan-500 to-blue-500 w-full my-10" />
                </form>


            </div>
        </div>
    );
};

export default AddScholarShipForm;