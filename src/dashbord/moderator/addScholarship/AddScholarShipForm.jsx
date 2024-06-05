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
                        
                        {/* image nad versity country  */}
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