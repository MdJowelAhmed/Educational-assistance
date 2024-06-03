import { useForm } from "react-hook-form";


const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] m-2 mx-auto">
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", { required: true })} type="text" name="name" placeholder="Name" className="input input-bordered" />
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input {...register("photo", { required: true })} type="file" name="photo" placeholder="Photo" className="input input-bordered" />
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: true })} type="text" name="email" placeholder="Email" className="input input-bordered" />
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", { required: true })} type="text" name="password" placeholder="Password" className="input input-bordered" />
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                
               

                <input type="submit" value="Register" className="btn bg-gradient-to-r from-cyan-500 to-blue-500 w-full"/>
            </form>
        </div>
    );
};

export default Register;