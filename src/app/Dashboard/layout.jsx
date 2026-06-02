import Link from 'next/link';
import React from 'react';

const layoutpage = ({ children }) => {
    return (
        <div className='w-full mt-6 '>
            <div className='  pb-3'>
                <ul className="menu menu-horizontal px-1 flex justify-center w-full gap-6 ">
                    <li> <Link href={"/Dashboard/my-booking"}>My booking</Link></li>
                    <li><Link href={"/Dashboard/profile"}>Profile</Link></li>

                </ul>

            </div>
            <div className='max-w-4xl mx-auto'>
                {children}
            </div>
        </div>
    );
};

export default layoutpage;