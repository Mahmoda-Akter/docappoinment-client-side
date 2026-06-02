'use client'
import React from 'react';
import { CiEdit } from "react-icons/ci";

import { Modal, Surface } from "@heroui/react";
import {
    TextField,
    Label,
    Input,
    FieldError,
    Select,
    ListBox,
    Button,
    TextArea

} from "@heroui/react"
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const Editeuser = ({ useritem }) => {

    const router = useRouter()



    const OnSubmitt = async (e) => {
        e.preventDefault()
        const formdata = new FormData(e.currentTarget)
        const fromvalue = Object.fromEntries(formdata.entries())

        const from = e.target
        const updateuser = {
            doctorsname: useritem.doctorsname,
            patientname: from.patientname.value || useritem?.patientname,
            appointmentdate: from.appointmentdate.value || useritem?.appointmentdate,
            appointmenttime: from.appointmenttime.value || useritem?.appointmenttime
        }

        console.log(updateuser, "from updatefunction")
       const {data:token}=await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${useritem._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization:`Bearer ${token.token}`
            },
            body: JSON.stringify(updateuser)
        })
        const data = await res.json()
        // console.log(data)
        if (res.ok) {
            toast.success("Update data successfully")
            router.refresh()
        }
        else {
            toast.error("Something went wrong")
        }
    }
    return (
        <div>
            <Modal>
                <Button variant="secondary" className={"bg-green-800 text-white"}> <CiEdit /> Update</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-xl">
                            <Modal.CloseTrigger />
                            <Modal.Header>

                                <Modal.Heading>Update dettils</Modal.Heading>

                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form

                                        onSubmit={OnSubmitt}
                                        className="p-10 space-y-8 w-full bg-slate-100"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* Destination Name */}
                                            <div className="md:col-span-2">
                                                <TextField  >
                                                    <Label>Dr Name</Label>
                                                    <Input defaultValue={useritem?.doctorsname} name="doctorsname" readOnly placeholder="aysha rahman" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Country */}
                                            <TextField   >
                                                <Label>PasientName</Label>
                                                <Input defaultValue={useritem.patientname} name="patientname" placeholder="laiba khan" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>




                                            {/* Departure Date */}
                                            <div className="md:col-span-2">
                                                <TextField type="date" >
                                                    <Label>Departure Date</Label>
                                                    <Input defaultValue={useritem.appointmentdate} name="appointmentdate" type="date" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            <div className="md:col-span-2">
                                                <TextField type="time" >
                                                    <Label>appointment Time</Label>
                                                    <Input defaultValue={useritem.appointmenttime} name="appointmenttime" type="time" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>




                                        </div>

                                        {/* Buttons */}

                                        <Button
                                            type="submit"
                                            variant="outline"

                                            className=" rounded-none w-full bg-cyan-500 text-white"
                                        >
                                            save
                                        </Button>
                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default Editeuser;