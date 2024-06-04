import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) =>{

    }
    return (
        <div className="bg-slate-200 p-12 rounded-3xl">
            <div className="w-[500px] m-2 mx-auto">
                <h2 className="text-center text-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-amber-100 py-4 rounded-3xl mb-12">
                   Please Login Now
                </h2>
            </div>
            <div className="flex lg:gap-7">
                <div>
                    <img  className="rounded-bl-full rounded-tr-full lg:mt-16" src="https://img.freepik.com/free-photo/3d-render-checklist-clipboard-hand-pencil_107791-15683.jpg?t=st=1717418503~exp=1717422103~hmac=5fbf9be0afe4c87cd6db1506a728b18f9d34c5b984a1e3b6026e5e04d156c795&w=826" alt="" />
                </div>
                <div className="bg-base-100 rounded-3xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] m-2 mx-auto lg:p-12">

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
                            <input {...register("password", { required: true })} type="password" name="password" placeholder="*********" className="input input-bordered" />
                            {errors.password && <span>This field is required</span>}
                        </div>

                        <input type="submit" value="Login" className="btn text-white text-xl bg-gradient-to-r from-cyan-500 to-blue-500 w-full my-10" />
                    </form>

                    <div className="">
                        <p className="text-center mb-5">Are you new here? please <Link to='/register'> <span className="text-blue-600 font-bold" >Register</span></Link> first</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;