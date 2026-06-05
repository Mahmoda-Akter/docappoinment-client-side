'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

import React from 'react';
import { toast } from 'react-toastify';

const Updateprofile = () => {
    const route=useRouter()

    const updateprofile = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const url = e.target.url.value

        
        try {
            await authClient.updateUser({
                name,
                image: url
            })
            toast.success("profile update successfully")
            route.refresh()


        } catch (error) {
           toast.error("Something is wrong") 
        }
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn bg-green-800 text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Update profile</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={updateprofile}>
                        <fieldset className="fieldset rounded-box w-xs p-4 mx-auto">

                            <h1 className='font-xl text-green-700'>Update profile</h1>
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="enter name" />

                            <label className="label">Image url</label>
                            <input type="url" name='url' className="input" placeholder="Image url" />

                            <button type='submit' className="btn btn-outline btn-success mt-4">Update</button>
                        </fieldset>
                    </form>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Updateprofile;