import Bookdoctor from '@/component/Bookdoctor';
import Deletedoctor from '@/component/Deletedoctor';
import Doctorcard from '@/component/Doctorcard';
import Editedoctor from '@/component/Editedoctor';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

export const metadata={
    title:"Doctor details"
}

const detailspage = async ({ params }) => {
    const { id } = await params
    const {token}=await auth.api.getToken({
        headers:await headers()
    })
    // console.log(token)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appoinment/${id}`,{
        headers: {
            authorization:`Bearer ${token}`
        }
    })
    const doctor = await res.json()
    // console.log(doctor)

    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <div className="card bg-base-100 w-full md:[w-60%] lg:w-[40%] xl:w-[40%]  mx-auto shadow-sm">
                <figure>
                    <img
                        className='h-76 md:h-72 w-full object-cover'
                        src={doctor.imageUrl}
                        alt="doctor image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{doctor.name}</h2>
                    <p className='font-bold'>{doctor.specialty}</p>
                    <p>{doctor.description}</p>
                    <div className="card-actions justify-end">
                        {/* <Editedoctor doctor={doctor}></Editedoctor> 
                        <Deletedoctor doctor={doctor}></Deletedoctor> */}

                        <Bookdoctor doctor={doctor}></Bookdoctor>
                        {/* <Link href={'/Addappoinment'}><button className="btn btn-outline btn-accent"> book</button></Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default detailspage;