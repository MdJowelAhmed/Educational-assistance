import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { imageUpload } from "../api/ImageApi";
import { Link } from "react-router-dom";


const Register = () => {
    const { createUser, updateUserProfile } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)


        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

            })
    }

    return (
        <div className="bg-slate-200 p-12 rounded-3xl">
            <div className="w-[500px] m-2 mx-auto">
                <h2 className="text-center text-2xl font-semibold rounded-3xl py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-amber-100 mb-12">
                    CREATE A NEW ACCOUNT
                </h2>
            </div>
            <div className="flex lg:gap-7">
                <div>
                    <img className="rounded-b-full rounded-tl-full lg:mt-20" src="https://img.freepik.com/free-photo/3d-render-checklist-clipboard-hand-pencil_107791-15683.jpg?t=st=1717418503~exp=1717422103~hmac=5fbf9be0afe4c87cd6db1506a728b18f9d34c5b984a1e3b6026e5e04d156c795&w=826" alt="" />
                </div>
                <div className="bg-base-100 rounded-3xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] m-2 mx-auto lg:p-12">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" name="name" placeholder="Name" className="input input-bordered" />
                            {errors.name && <span>Please this field give your Name </span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input {...register("photo", { required: true })} type="file" name="photo" placeholder="Photo" className="input input-bordered" />
                            {errors.photo && <span>Your Photo is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="text" name="email" placeholder="Email" className="input input-bordered" />
                            {errors.email && <span>Your email is must give this field</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password" name="password" placeholder="*****" className="input input-bordered" />
                            {errors.password && <span>This field is required</span>}
                        </div>



                        <input type="submit" value="Register" className="btn bg-gradient-to-r from-cyan-500 to-blue-500 w-full" />
                    </form>
                    <div className="">
                        <p className="text-center mb-5">Already have a account? please <Link to='/login'> <span className="text-blue-600 font-bold" >Login</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;