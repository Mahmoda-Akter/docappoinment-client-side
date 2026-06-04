'use client'
import { Card } from '@heroui/react';
import React from 'react';
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import { IoLogoGoogle } from "react-icons/io";
import Link from 'next/link';
import { toast } from 'react-toastify';





const Singuppage = () => {

    const OnSubmitt = async (e) => {
        e.preventDefault()
        const formdata = new FormData(e.currentTarget)
        const user = Object.fromEntries(formdata.entries())
        // console.log(user)

        const { data, error } = await authClient.signUp.email({
            email: user.email, // user email address
            password: user.password, // user password -> min 8 characters by default
            name: user.name, // user display name
            image: user.image, // User image URL (optional)
            callbackURL: "/" // A URL to redirect to after the user verifies their email (optional)
        }
        );
        if (data) {
            toast.success('Sin-up successfully')
            redirect('/')
        }
        if (error) {
            toast.error("somting went wrong")
        }
        console.log(data)
    }
    const handelgooglebtn = async() => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <h1 className='text-2xl text-center mb-2'>Sign up Account</h1>
            <Card className='border-1 border-gray-400'>
                <Form onSubmit={OnSubmitt} className="flex w-96 flex-col gap-4" >
                    <TextField
                        isRequired
                        name="name"
                        type="text"

                    >
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="image"
                        type="url"

                    >
                        <Label>Image url</Label>
                        <Input placeholder="Enter your image url" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={6}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 6 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[a-z]/.test(value)) {
                                return "Password must contain at least one lowercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 6 characters with 1 uppercase , 1 lowercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex justify-center gap-2">
                        <Button className={'bg-[#2d8a6b] text-white w-full rounded-none'} type="submit">

                            Sing up
                        </Button>
                        

                    </div>
                    <Link href={'/login'} className='text-center'>Already have an account?<span className='text-blue-700'>Login</span></Link>
                </Form>
                <Button onClick={handelgooglebtn} variant='outline' className={'  w-full rounded-none'}>

                   <IoLogoGoogle /> Sing up with google
                </Button>
            </Card>
        </div>
    );
};

export default Singuppage;