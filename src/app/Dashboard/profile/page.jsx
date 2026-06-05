
import Updateprofile from '@/component/Updateprofile';
import { auth } from '@/lib/auth';
import { Card } from '@heroui/react';
import { headers } from 'next/headers';

import React from 'react';

export const metadata = {
    title: "My profile"
}


const profilepage = async () => {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user
    console.log(user)
    // console.log(session)
    return (
        <div className='flex justify-center items-center'>
            <Card className='text-center'>
                <div className='flex justify-center'>
                    <img src={user?.image} className='h-[50px] w-[50px] rounded-full object-cover' />
                </div>
                <h1>{user?.name}</h1>
                <h1>{user?.email}</h1>
                <Updateprofile></Updateprofile>

            </Card>
        </div>
    );
};

export default profilepage;