import Link from 'next/link';
import React from 'react';

const Doctorcard = ({doctor}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure className='h-48 w-full overflow-hidden'>
                    <img
                        className='h-full w-full object-cover'
                        src={doctor.imageUrl}
                        alt="doctor image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {doctor.name}
                        <div className="badge bg-green-500 text-white">{doctor?.rating}</div>
                    </h2>
                    <p className='line-clamp-3'>{doctor.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline text-[#2d8a6b]">{doctor.specialty}</div>
                        <Link href={`/AllAppointmen/${doctor._id}`}><div className="badge bg-[#2d8a6b] text-white">View Details</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctorcard;