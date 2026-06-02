'use client'
import Doctorcard from '@/component/Doctorcard';
import { authClient } from '@/lib/auth-client';
import React, { useEffect, useState } from 'react';

const Allappoinmentpage = () => {
    const [search, setsearch] = useState("")
    const [alldoctors, setalldoctors] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const {token}=await authClient.token()
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appoinment`,{
                headers:{
                    authorization:`Bearer ${token}`
                }
            })
            const alldoctor = await res.json()
            setalldoctors(alldoctor)
        }
        fetchdata()
    }, [])





    const filterdoctor = alldoctors.filter(filterdoctor => filterdoctor.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className='w-full max-w-5xl mx-auto px-4 mt-10'>
            <input
                className='input input-bordered w-full max-w-sm mb-6'
                type='text'
                placeholder='Search here......'
                value={search}
                onChange={e => setsearch(e.target.value)}
            />
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    filterdoctor.map(doctor => <Doctorcard key={doctor.name} doctor={doctor}></Doctorcard>)
                }
            </div>
        </div>
    );
};

export default Allappoinmentpage;