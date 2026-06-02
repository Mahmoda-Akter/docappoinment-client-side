"use client"
import React from 'react';

import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} autoplay={{delay:3000, disableOnInteraction:false,}} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img
                        src='https://media.istockphoto.com/id/184312691/photo/doctor-and-senior-patient-talking-in-hospital-room.jpg?s=1024x1024&w=is&k=20&c=HqB_4ba6ZF3LE6EEw0PbBC8MSF2cuBVwK6nnkRDYvnI='
                        
                        alt='slider1'
                        className='w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover'
                    />
                    {/* <div className='absolute inset-0 bg-green-100/20 backdrop-blur-[2px]'>
                    </div> */}
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://img.freepik.com/free-vector/medicines-infographics-template_23-2148675377.jpg?semt=ais_hybrid&w=740&q=80'
                        alt='slider1'
                        className='w-full  h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://www.yashodahealthcare.com/blogs/wp-content/uploads/2022/02/child-hospital.jpg'
                        alt='slider1'
                        className='w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://www.avera.org/app/files/public/723bdcab-bb0c-4da7-894c-f4d0f2633db3/home-page-happy-healthcare-workers-1920x640.jpg'
                        alt='slider1'
                        className='w-full  h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover'
                    />
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Banner;