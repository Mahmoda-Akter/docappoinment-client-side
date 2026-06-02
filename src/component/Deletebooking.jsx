'use client'
import React from 'react';
import {AlertDialog, Button} from "@heroui/react";
import { MdOutlineDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Deletebooking = ({bookingid}) => {
    const router=useRouter()

    const handeldeletebooking=async()=>{
        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingid}`,{
            method:'DELETE',
            headers:{
                'content-type':'application/json'
            },
            
        })
        const data=await res.json()
        toast.success('You delete it successfully')
        router.refresh()
        // console.log(data)
        
        
    }
    return (
        <div>
            <AlertDialog>
                <Button variant="danger"><MdOutlineDelete /> Delete</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete appointment premanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>this booking card</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handeldeletebooking} slot="close" variant="danger">
                                   <MdOutlineDelete /> Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default Deletebooking;