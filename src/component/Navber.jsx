'use client'
import { authClient } from '@/lib/auth-client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navber = () => {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()

    const user = session?.user
    console.log(user)

    const handlelogout=async ()=>{
        await authClient.signOut();
    }


    return (
        <div>
            <div className="navbar max-w-7xl mx-auto bg-base-100 shadow-sm px-4 md:px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li> <Link href={"/"}>Home</Link></li>
                            <li><Link href={"/All Appointmen"}>All Appointmen</Link></li>
                            <li><Link href={"/Dashboard"}>Dashboard</Link></li>
                        </ul>
                    </div >
                    <div className='flex items-center gap-1'>
                        <Image
                            src='https://brandforma.com/wp-content/uploads/2024/03/medical-doctor-logo-for-sale.png'
                            alt="doctor logo"
                            width={60}
                            height={60}
                        />


                        <a className=" text-xl">DocAppoint</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <Link href={"/"}>Home</Link></li>
                        <li><Link href={"/AllAppointmen"}>All Appointmen</Link></li>
                        <li><Link href={"/Dashboard"}>Dashboard</Link></li>
                        <li><Link href={"/Addappoinment"}>Addappoinment</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        user ? 
                        <>
                            <li className='list-none'>
                                <img className='h-12 w-12 object-cover md:h-[50px] w-[50px] rounded-full object-cover' src={user?.image}/>
                            </li>
                            <li className='list-none hidden md:block'><p>{user?.name}</p></li>
                            <button onClick={handlelogout} className='btn btn-error btn-sm md:btn-md'>Logout</button>
                        </> :
                            <>
                                <Link href={'/login'}><button className="btn btn-soft btn-success btn-sm md:btn-md">login</button></Link>
                                <Link href={'/sing-up'}><button className="btn bg-[#2d8a6b] text-white btn-sm md:btn-md">Sing up</button></Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;