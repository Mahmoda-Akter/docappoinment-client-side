'use client'
import { Card } from '@heroui/react';
import React from 'react';

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
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

const Bookdoctor = ({ doctor }) => {

    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()

    const user = session?.user
    console.log(user)
    const handlebooking = async(e) => {
        e.preventDefault()
        const from = e.target;

        const bookingdata = {
            username: user?.name,
            useremail: user?.email,
            userimage: user?.image,
            userid: user?.id,
            doctorsname: doctor.name,
            doctorid: doctor._id,

            patientname: from.patientname.value,
            // doctorname: from.doctorname.value,
            phone: from.phone.value,
            gender: from.gender.value,
            appointmentdate: from.appointmentDate.value,
            appointmenttime: from.appointmenttime.value,

        }
        const {data:token}=await authClient.token()
        console.log(token)
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization:`Bearer ${token.token}`
            },
            body: JSON.stringify(bookingdata)
        })
        const data = await res.json()
        //  console.log(data)
        if(res.ok){
            toast.success("Booking successfully")
        }
        else{
            toast.error("something went wrong")
        }
    }

    return (
        <div>

            <Modal>
                <Button variant="outline" className={"rounded-none text-[#2d8a6b]"}>Book Appoinment</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-xl">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                {/* <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">

                                    </Modal.Icon> */}
                                <Modal.Heading>Fill up deteils</Modal.Heading>

                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form

                                        onSubmit={handlebooking}
                                        className="p-10 space-y-8 w-full "
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            
                                            <div className="md:col-span-2">
                                                <TextField  isRequired>
                                                    <Label>Dr. Name</Label>
                                                    <Input placeholder="aysha rahman" name="doctorname" value={doctor?.name} className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            
                                            <TextField  isRequired>
                                                <Label>Patient Name</Label>
                                                <Input placeholder="Happy akther" name="patientname" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>

                                            


                                            
                                            <TextField  type="tel" isRequired>
                                                <Label>phone</Label>
                                                <Input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="1299"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>

                                            
                                            <TextField  isRequired>
                                                <Label>gender</Label>
                                                <Input
                                                    placeholder="Female"
                                                    name="gender"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>


                                            
                                            <div className="md:col-span-2">
                                                <TextField  type="date" isRequired>
                                                    <Label>appointment Date</Label>
                                                    <Input type="date" name="appointmentDate" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            
                                            <div className="md:col-span-2">
                                                <TextField  type="time" isRequired>
                                                    <Label>appointment Time</Label>
                                                    <Input type="time" name="appointmenttime" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            
                                            <div className="md:col-span-2">

                                            </div>
                                        </div>

                                        {/* Buttons */}

                                        <Button

                                            type="submit"
                                            variant="outline"

                                            className=" rounded-none w-full bg-cyan-500 text-white"
                                        >
                                            Booking
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

export default Bookdoctor;