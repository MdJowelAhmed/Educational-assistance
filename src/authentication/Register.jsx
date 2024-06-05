import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { imageUpload } from "../api/ImageApi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";


// const image_hosting_key = import.meta.env.IMAGE_SECRET_API;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Register = () => {
    const navigate = useNavigate()
    const { createUser, updateUserProfile, signInWithGoogle } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        // const formData = new FormData();
        // formData.append('image', data.image[0]);
       

        const image = data.image[0]
        console.log(image)

        try {
            const image_url = await imageUpload(image);
            console.log(image_url)
            const result = await createUser(data.email, data.password)
            console.log(result.user)

            await updateUserProfile(data.name, image_url)
            navigate('/')
        } catch (error) {
            console.error('Error:', error);
        }

    }

    // social register 
    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle()

            navigate('/')
            toast.success('Signup Successful')
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
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
                                <span className="label-text">Your Profile Image</span>
                            </label>
                            <input {...register("image", { required: true })} accept="image/*" type="file" name="image" placeholder="Your profile Image" className="input input-bordered" />
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
                            <input {...register("password", { required: true , minLength:6,
                                 pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/
                            })} type="password" name="password" placeholder="************" className="input input-bordered" />
                            {errors.password?.type==='required'&& <span className="text-red-600 font-lato">This field is required</span>}
                            {errors.password?.type==='minLength'&& <span className="text-red-600 font-lato">Password must be min 6 characters</span>}
                            {errors.password?.type==='pattern'&& <span className="text-red-600 font-lato">Password must have one Uppercase one lower case and one special character</span>}
                           
                        </div>

                        <input type="submit" value="Register" className="btn bg-gradient-to-r from-cyan-500 to-blue-500 w-full mt-10 text-white" />
                    </form>
                    <div className="text-center ">

                        <button onClick={() => handleGoogleSignIn(signInWithGoogle)} className="btn btn-outline text-center mb-6 font-poppins bg-white shadow-2xl"><span className="text-4xl"><FcGoogle /></span> Login with Google</button>
                    </div>
                    <div className="">
                        <p className="text-center mb-5">Already have a account? please <Link to='/login'> <span className="text-blue-600 font-bold" >Login</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;