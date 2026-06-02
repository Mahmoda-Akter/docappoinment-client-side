import React from 'react';
import Doctorcard from './Doctorcard';

const Feauterd = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/feauterd`)
    const data = await res.json()
    console.log(data)

    // const ratinddoctor=data.sort((a,b)=> b.rating - a.rating)
    return (
        <div className='max-w-6xl mx-auto mt-10 px-4 md:px-6 lg:px-8'>
            <h1 className='text-center text-2xl'>Feautured Section</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                {
                    data.map(doctor => <Doctorcard key={doctor._id} doctor={doctor}></Doctorcard>)
                }
            </div>
        </div>
    );
};

export default Feauterd;