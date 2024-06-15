import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/usePublic";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";


const ViewDetails = () => {
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
    const { image, universityName, scholarshipName, universityCountry, universityCity, worldRange, tuitionFee, applicationFee, serviceCharge, deadline, postDate, subjectCategory, degree, scholarshipCategory } = scholarship
    console.log(scholarship)
    return (
        <div>
            <section className="bg-base-200 dark:bg-gray-900 rounded-3xl">


                <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                                {scholarshipName}
                            </h1>

                            <div className="mt-8 space-y-5">
                                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span className="mx-2">university name : {universityName}</span>
                                </p>

                                <div className="flex justify-between md:mr-8">
                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                        <span className="mx-2"> country : {universityCountry} </span>
                                    </p>

                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                        <span className="mx-2"> city: {universityCity} </span>
                                    </p>
                                </div>


                                <div className="flex gap-5 md:gap-12">
                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                        <span className="mx-2">Subject: {subjectCategory} </span>
                                    </p>


                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                        <span className="mx-2">Scholarship : {scholarshipCategory} </span>
                                    </p>


                                </div>
                                <div className="flex justify-between md:mr-8">
                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="mx-2">post date: {postDate} </span>
                                    </p>
                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                        <span className="mx-2">Degree : {degree} </span>
                                    </p>

                                </div>
                                <div className=" border-dotted border-2 border-amber-300 w-full"></div>
                                <div className="flex justify-between md:mr-8">

                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="mx-2">Tuition Fee: ${tuitionFee} </span>
                                    </p>
                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="mx-2">deadline: {deadline} </span>
                                    </p>



                                </div>

                                <div className="flex gap-4">

                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="mx-2">Application Fee : ${applicationFee} </span>
                                    </p>

                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="mx-2">Service Charge: ${serviceCharge} </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">

                        </div>
                       <Link to='/payment'> <button className="btn w-2/3 mx-auto md:ml-16 bg-gradient-to-r from-cyan-500 to-blue-500">Apply Now</button></Link>
                    </div>

                    <div className="flex items-center justify-center w-full relative  h-96 lg:w-1/2">
                        <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src={image} alt="glasses photo" />
                        <div className="bg-white shadow-2xl text-center w-44 rounded-xl border-blue-500 m-2 mx-auto px-2 py-5 absolute  bottom-0">
                                <h2 className="">WorldRange: {scholarship.worldRange} </h2>
                                <h2>Rating: {scholarship?.rating} </h2>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViewDetails;