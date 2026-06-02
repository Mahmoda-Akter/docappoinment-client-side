
import React from 'react';



const Services = () => {
    return (
        <div className='max-w-6xl mx-auto px-4 md:px-6 lg:px-8'>
            <h1 className='font-bold text-3xl text-center text-[#2d8a6b] nt-10'>Our Services</h1>


            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='card bg-base-100 shadow-sm border border-gray-200 mt-5'>
                    <figure className='w-full h-48 overflow-hidden'>
                        <img className='h-full w-full object-center' src='https://img.magnific.com/free-vector/doctor-taking-blood-sample-old-patient-hospital-man-doing-checkup-examination-clinic-senior-sitting-chair_575670-1318.jpg?semt=ais_hybrid&w=740&q=80' />
                    </figure>
                    <div className='card-body w-full p-5 text-left'>
                        <h2 className='font-bold text-xl'>Holter Heart Test & Surgery</h2>
                        <p>Expert heart care services with experienced specialists and modern
                            equipment.</p>
                    </div>
                </div>


                <div className='card bg-base-100 shadow-sm border border-gray-200 mt-5'>
                    <figure className='w-full h-48 overflow-hidden'>
                        <img className='h-full w-full object-center' src='https://www.shutterstock.com/image-vector/patient-doctor-talking-office-health-600nw-2340415645.jpg' />
                    </figure>
                    <div className='card-body w-full p-5 text-left'>
                        <h2 className='font-bold text-xl'>Online Monitoring</h2>
                        <p>Expert heart care services with experienced specialists and modern
                            equipment.</p>
                    </div>
                </div>


                <div className='card bg-base-100 shadow-sm border border-gray-200 mt-5'>
                    <figure className='w-full h-48 overflow-hidden'>
                        <img className='h-full w-full object-center' src='https://www.shutterstock.com/image-vector/prostate-cancer-awareness-month-doctor-260nw-2665046161.jpg' />
                    </figure>
                    <div className='card-body w-full p-5 text-left'>
                        <h2 className='font-bold text-xl'>Instant Checkup</h2>
                        <p>Expert heart care services with experienced specialists and modern
                            equipment.</p>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Services;