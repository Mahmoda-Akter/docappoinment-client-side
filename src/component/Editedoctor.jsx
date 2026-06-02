'use client'
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

const Editedoctor = ({ doctor }) => {

    const OnSubmitt = async (e) => {
        e.preventDefault()
        const formdata = new FormData(e.currentTarget)
        const appoinment = Object.fromEntries(formdata.entries())

        // console.log(appoinment)
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appoinment/${doctor._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinment)
        })
        const data = await res.json()
        console.log(data)
    }
    return (
        <div>
            <Modal>
                <Button variant="secondary">edite</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-xl">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">

                                </Modal.Icon>
                                <Modal.Heading>Contact Us</Modal.Heading>

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
                                                <TextField defaultValue={doctor.name} name="name" isRequired>
                                                    <Label>Name</Label>
                                                    <Input placeholder="aysha rahman" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Country */}
                                            <TextField defaultValue={doctor.hospital} name="hospital" isRequired>
                                                <Label>hospital</Label>
                                                <Input placeholder="Labaid Cardiac Hospital" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>

                                            {/* Category - Updated Select Component */}
                                            <div>
                                                <Select

                                                    name="specialty"
                                                    isRequired
                                                    className="w-full"
                                                    placeholder="Select specialty"
                                                >
                                                    <Label>specialty</Label>
                                                    <Select.Trigger defaultOpen={doctor.specialty} className="rounded-2xl">
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Cardiologist" textValue="Cardiologist">
                                                                Cardiologist
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Neurologist" textValue="Neurologist">
                                                                Neurologist
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Dermatologist" textValue="Dermatologist">
                                                                Dermatologist
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Dentist" textValue="Dentist">
                                                                Dentist
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Surgeon" textValue="Surgeon">
                                                                Surgeon
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Gynecologist" textValue="Gynecologist">
                                                                Gynecologist
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Price */}
                                            <TextField defaultValue={doctor.fee} name="fee" type="number" isRequired>
                                                <Label>fee</Label>
                                                <Input
                                                    type="number"
                                                    placeholder="1299"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>

                                            {/* Duration */}
                                            <TextField defaultValue={doctor.location} name="location" isRequired>
                                                <Label>location</Label>
                                                <Input
                                                    placeholder="Dhanmondi, Dhaka"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                            <TextField defaultValue={doctor.rating} name="rating" isRequired>
                                                <Label>Rating</Label>
                                                <Input
                                                    placeholder="4.8"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                            <TextField defaultValue={doctor.experience} name="experience" isRequired>
                                                <Label>experience</Label>
                                                <Input
                                                    placeholder="10 years"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>

                                            {/* Departure Date */}
                                            <div className="md:col-span-2">
                                                <TextField name="departureDate" type="date" isRequired>
                                                    <Label>Departure Date</Label>
                                                    <Input type="date" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Image URL - Removed preview */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={doctor.imageUrl} name="imageUrl" isRequired>
                                                    <Label>Iimage</Label>
                                                    <Input
                                                        type="url"
                                                        placeholder="https://example.com/bali-paradise.jpg"
                                                        className="rounded-2xl"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Description */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={doctor.description} name="description" isRequired>
                                                    <Label>Description</Label>
                                                    <TextArea
                                                        placeholder="Describe the travel experience..."
                                                        className="rounded-3xl"
                                                    />
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
                            <Modal.Footer>
                                <Button slot="close" variant="secondary">
                                    Cancel
                                </Button>
                                <Button slot="close">save</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default Editedoctor;