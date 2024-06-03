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
                        <img className='h-[500px] w-full object-cover rounded-2xl' src="https://img.freepik.com/premium-photo/happy-cute-brunette-caucasian-grad-girl-is-smiling-blurred-class-mates-are_115086-776.jpg?w=826" />
                    </div>
                    <div className='absolute top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full  rounded-2xl'>
                        <h2 className='text-4xl font-semibold font-poppins max-w-md pt-20 lg:pl-20 pb-3 text-amber-200'>Get ScholarShip With Us.</h2>

                        <p className='text-sm font-poppins max-w-lg pl-20'>Get your scholarship various country and various families.Download our application from and be pari advancing education of your favourite country</p>

                        <div className='flex justify-center pt-10'>
                            <button className='btn text-center btn-secondary'>Explore more</button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 2 */}
                <SwiperSlide>
                    <div className='relative'>
                        <img className='h-[500px] w-full object-cover rounded-2xl' src="https://img.freepik.com/premium-photo/young-students-celebrating-their-graduation_23-2148201829.jpg?w=826" />
                    </div>
                    <div className='absolute top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full  rounded-2xl'>
                        <h2 className='text-4xl font-semibold font-poppins max-w-md pt-20 lg:pl-20 pb-3 text-amber-200'>React: JavaScript library for building user interfaces.</h2>

                        <p className='text-sm font-poppins max-w-lg pl-20'>Popular JavaScript library for building dynamic user interfaces, providing a declarative and component-based approach, facilitating efficient rendering and seamless data flow, widely used in modern web development.</p>

                        <div className='flex justify-center pt-10'>
                            <button className='btn text-center btn-secondary'>Explore more</button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 3 */}
                <SwiperSlide>
                    <div className='relative'>
                        <img className='h-[500px] w-full object-cover rounded-2xl' src="https://img.freepik.com/free-photo/trans-person-working-office-with-colleagues_23-2149286975.jpg?t=st=1715280001~exp=1715283601~hmac=f7ae577b0506659ea4ae9070d53abba0cdca96ff33d697371772e91678bebd0b&w=826" />
                    </div>
                    <div className='absolute top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full  rounded-2xl'>
                        <h2 className='text-4xl font-semibold font-poppins max-w-lg pt-20 lg:pl-20 pb-3 text-amber-200'>Node.js: JavaScript runtime environment for server-side applications.</h2>

                        <p className='text-sm font-poppins max-w-lg pl-20'>Open-source JavaScript runtime environment allowing server-side execution of JavaScript code, facilitating scalable and efficient network applications, ideal for building web servers, APIs, and real-time applications.</p>

                        <div className='flex justify-center pt-10'>
                            <button className='btn text-center btn-secondary'>Explore more</button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 4 */}
                <SwiperSlide>
                    <div className='relative'>
                        {/* <img className='h-[500px] w-full  rounded-2xl' src="https://img.freepik.com/premium-photo/coding-programming-site-application-laptop_272306-139.jpg?w=996" /> */}
                        <img className='h-[500px] w-full object-cover rounded-2xl' src="https://img.freepik.com/premium-photo/student-studying-hd-8k-wallpaper-stock-photographic-image_1066384-1382.jpg?w=996" />
                    </div>
                    <div className='absolute top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full  rounded-2xl'>
                        <div >
                            <h2 className='text-4xl font-semibold font-poppins max-w-md pt-20 lg:pl-20 pb-3 text-amber-200 '>JavaScript: Web's dynamic language for interactive user experiences.</h2>

                            <p className='text-sm font-poppins max-w-lg pl-20'>Widely used client-side scripting language for web development, enabling interactive and dynamic content creation, from simple animations to complex web applications and interactive user interfaces.</p>
                        </div>

                        <div className='flex justify-center pt-10'>
                            <button className='btn text-center btn-secondary'>Explore more</button>
                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Banner;