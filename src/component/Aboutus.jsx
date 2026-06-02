import React from 'react';

const Aboutus = () => {
    return (
        <div className='max-w-6xl mx-auto px-1 md:px-6 lg:px-8'>
            <h1 className='font-bold text-3xl text-center mt-10 text-[#2d8a6b]'>About Us</h1>
            <div className="hero  py-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://media.istockphoto.com/id/2208547132/photo/smiling-pediatrician-examining-a-cheerful-young-girl-during-a-checkup.jpg?s=612x612&w=0&k=20&c=f5a4_Ets52OmDSFg6JHrmDeayOeqIWZ_0ZRgNJcauUw="
                    />
                    <div>
                        <h1 className="text-4xl font-bold ">The Great Place of Medical Hospital Center.</h1>
                        <p className="py-6">
                            We are dedicated to simplifying healthcare access by
                            connecting patients with experienced doctors and
                            providing an easy appointment booking experience.
                        </p>
                        <button className="btn bg-[#2d8a6b] text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;