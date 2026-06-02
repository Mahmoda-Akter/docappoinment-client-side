import Deletebooking from '@/component/Deletebooking';
import Editedoctor from '@/component/Editedoctor';
import Editeuser from '@/component/Editeuser';
import { auth } from '@/lib/auth';
import { Card } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';
import { CiUser } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";


export const metadata={
    title:"My Booking"
}

const Mybookingpage = async () => {

    const {token}=await auth.api.getToken({
            headers:await headers()
        })

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.

    })
    const user = session?.user

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    const userinfo = await res.json()
    console.log(userinfo)
    return (
        <div className='w-full mx-auto mt-10 space-y-3 px-4'>
            {
                userinfo.length === 0 ? (
                    <div className='text-center py-20'>
                        <h1>No Booking availavle</h1>
                    </div>
                ) : userinfo.map(useritem => (
                    <div key={useritem?._id}>

                        <Card className='w-full mt-10 p-6 space-y-4'>
                            <h1 className='text-[#306D29] text-2xl'>{useritem?.doctorsname}</h1>
                            <div className='flex justify-start items-center gap-1'>
                                <CiUser className='text-xl' />
                                <h1> pasient: {useritem?.patientname}</h1>
                            </div>
                            <div className='flex justify-start items-center gap-1'>
                                <CiCalendarDate className='text-xl' />
                                <h1> Date: {useritem?.appointmentdate}</h1>
                            </div>
                            <div className='flex justify-start items-center gap-1'>
                                <CiTimer className='text-xl' />
                                <h1> Time: {useritem?.appointmenttime}</h1>
                            </div>
                            <div className='flex gap-4'>
                                <Editeuser useritem={useritem}></Editeuser>
                                <Deletebooking bookingid={useritem?._id}></Deletebooking>
                            </div>
                        </Card>

                    </div>
                ))
            }
        </div>
    );
};

export default Mybookingpage;