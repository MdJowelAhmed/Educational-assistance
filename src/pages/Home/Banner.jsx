import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


const Banner = () => {

    return (
        <div>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                cubeEffect={{
                    shadow: true,

                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img className='h-[600px] w-full object-cover rounded-2xl' src="https://img.freepik.com/premium-photo/happy-cute-brunette-caucasian-grad-girl-is-smiling-blurred-class-mates-are_115086-776.jpg?w=826" />
                    </div>
                    <div className='absolute top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full  rounded-2xl'>
                        <div className=''>
                            <h2 className='text-5xl font-semibold font-poppins max-w-md pt-20 lg:pl-20 font-lato pb-3 text-amber-200'>Get ScholarShip With Us and Secure.</h2>

                            <p className='text-sm font-poppins max-w-lg pl-20 font-lato'>Get your scholarship various country and various families.Download our application from and be pari advancing education of your favourite country</p>

                            <div className='flex lg:gap-20 lg:ml-20'>
                                <div className='flex justify-center pt-10'>
                                    <button className='btn text-center btn-outline border-b-4 border-amber-200 bg-gradient-to-r from-cyan-500 to-blue-500'>Learn more</button>
                                </div>

                                <div className='flex justify-center pt-10'>
                                    <button className='btn btn-outline border-b-4 border-amber-200 text-center bg-gradient-to-r from-cyan-500 to-blue-500'>Apply Today</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 2 */}
                <SwiperSlide>
                    <div className='relative'>
                        <img className='h-[600px] w-full object-cover rounded-2xl' src="https://img.freepik.com/premium-photo/young-students-celebrating-their-graduation_23-2148201829.jpg?w=826" />
                    </div>
                    <div className='absolute top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full  rounded-2xl'>
                        <h2 className='text-5xl font-semibold font-poppins max-w-md pt-20 lg:pl-20 pb-3 text-amber-200'>Scholarships to Nurture Your Educational Dreams</h2>

                        <p className='text-sm font-poppins max-w-lg pl-20 font-lato'>Support your academic journey with our nurturing scholarship programs. Personalized aid to help you grow and succeed in your studies.</p>

                        <div className='flex lg:gap-20 lg:ml-20'>
                            <div className='flex justify-center pt-10'>
                                <button className='btn text-center btn-outline border-b-4 border-amber-200 bg-gradient-to-r from-cyan-500 to-blue-500'>Learn more</button>
                            </div>

                            <div className='flex justify-center pt-10'>
                                <button className='btn btn-outline border-b-4 border-amber-200 text-center bg-gradient-to-r from-cyan-500 to-blue-500'>Apply Today</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 3 */}
                <SwiperSlide>
                    <div className='relative'>
                        <img className='h-[600px] w-full object-cover rounded-2xl' src="https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg?t=st=1717378641~exp=1717382241~hmac=5140071cf6ffb64f32cd80e85ff345e2d648a7bca1a38bda50967ac560f045ce&w=900" />
                    </div>
                    <div className='absolute top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full  rounded-2xl'>
                        <h2 className='text-5xl font-semibold font-poppins max-w-lg pt-20 lg:pl-20 pb-3 text-amber-200'>Accelerate Your Education with Top Scholarships!</h2>

                        <p className='text-sm font-poppins max-w-lg pl-20'>Fast-track your academic career with exclusive scholarship opportunities. Apply today to achieve your dreams faster and without financial burden.</p>

                        <div className='flex lg:gap-20 lg:ml-20'>
                            <div className='flex justify-center pt-10'>
                                <button className='btn text-center btn-outline border-b-4 border-amber-200 bg-gradient-to-r from-cyan-500 to-blue-500'>Learn more</button>
                            </div>

                            <div className='flex justify-center pt-10'>
                                <button className='btn btn-outline border-b-4 border-amber-200 text-center bg-gradient-to-r from-cyan-500 to-blue-500'>Apply Today</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 4 */}
                <SwiperSlide>
                    <div className='relative'>
                        {/* <img className='h-[500px] w-full  rounded-2xl' src="https://img.freepik.com/premium-photo/coding-programming-site-application-laptop_272306-139.jpg?w=996" /> */}
                        <img className='h-[600px] w-full object-cover rounded-2xl' src="https://img.freepik.com/premium-photo/students-university-people-wearing-mantles-group-students_115086-788.jpg?w=900" />
                    </div>
                    <div className='absolute top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full  rounded-2xl'>
                        <div >
                            <h2 className='text-5xl font-semibold font-poppins max-w-md pt-20 lg:pl-20 pb-3 text-amber-200 '> Premier Scholarships for Top Students</h2>

                            <p className='text-sm font-poppins max-w-lg pl-20'>Explore prestigious scholarships designed for academic excellence. Start your application today and reach your educational goals with financial support.</p>
                        </div>

                        <div className='flex lg:gap-20 lg:ml-20'>
                            <div className='flex justify-center pt-10'>
                                <button className='btn text-center btn-outline border-b-4 border-amber-200 bg-gradient-to-r from-cyan-500 to-blue-500'>Learn more</button>
                            </div>

                            <div className='flex justify-center pt-10'>
                                <button className='btn btn-outline border-b-4 border-amber-200 text-center bg-gradient-to-r from-cyan-500 to-blue-500'>Apply Today</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Banner;