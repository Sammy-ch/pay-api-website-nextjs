"use client";


import Navbar from '@/components/Navbar'
import { useForm } from 'react-hook-form';
import React from 'react'
import { dm_serif } from '../font'
import tesla from "public/assets/shared/desktop/tesla.svg";
import oracle from "public/assets/shared/desktop/oracle.svg"
import microsoft from "public/assets/shared/desktop/microsoft.svg";
import hewlett from "public/assets/shared/desktop/hewlett-packard.svg";
import google from "public/assets/shared/desktop/google.svg";
import nvidia from "public/assets/shared/desktop/nvidia.svg";
import Image from 'next/image';
import CTA from '@/components/CTA';

const page = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    

    return (
        <main className='Contact_page'>
            <Navbar />
            <section className='Contact_section pb-[100px]'>
                <div>
                    <header>
                        <h1 className={`${dm_serif.className} px-[165px] sm:px-[30px] pt-[82px] pb-[48px] `}>Submit a help request and
                            we’ll get in touch shortly.</h1>
                    </header>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col 1xl:items-center gap-2 pl-[165px] 1xl:px-[25px]'>
                            <input type="text" placeholder="Name" {...register("Name", {required: true, max: 20, min: 2, maxLength: 80})} className={`w-[555px] bg-transparent border-b-[1px] ${errors.Email ? 'border-[#FF0000] placeholder-[#FF0000]' : 'border-[#36536B]'}`}/>
                            {errors.Email && <span className='text-[#FF0000]'>{"This field can't be empty"}</span>}

                            <input type="email" placeholder="Email Address" {...register("Email", {required: true, pattern:{
                                value:/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                                message: 'Please use a valid email address',
                            }})} className={`w-[555px] bg-transparent border-b-[1px] ${errors.Email ? 'border-[#FF0000] placeholder-[#FF0000]' : 'border-[#36536B]'} `} />
                            {errors.Email && <span className='text-[#FF0000]'>{"This field can't be empty"}</span>}

                            <input type="text" placeholder="Company Title" {...register("Company Title", {required: false, max: 12, maxLength: 12})} className={`w-[555px] bg-transparent border-b-[1px] border-[#36536B]`} />

                            <input type="text" placeholder="Title" {...register("Title", {required: true})} className={`w-[555px] bg-transparent border-b-[1px] border-[#36536B]`} />

                            <textarea placeholder='Message' {...register("Message", { max: 150})} className={`w-[555px] bg-transparent border-b-[1px] ${errors.Email ? 'border-[#FF0000] placeholder-[#FF0000]' : 'border-[#36536B]'}`} />
                            {errors.Email && <span className='text-[#FF0000]'>{"This field can't be empty"}</span>}

                            <div className='flex items-center gap-[25px] py-[20px]'>
                                    <input type="checkbox" name="" id="" className='checkbox' />
                                    <span className='w-[350px] sm:w-full'>Stay up-to-date with company announcements and updates to our API</span>
                            </div>

                                <button type="submit" className='hover:bg-[#36536B] hover:text-[#ffff]'>Submit</button>
                    </form>
             

                </div>

                <div className='flex flex-col justify-center mt-[10rem] mr-[15rem] 1xl:mr-[0rem]'>
                    <h3 className={`${dm_serif.className} w-[650px] fsm:w-full mb-[40px]`}>
                        Join the thousands of innovators already building with us
                    </h3>
                    <section className='partners_logo'>
                        <Image src={tesla} alt='partners_logo' />
                        <Image src={microsoft} alt='partners_logo' />
                        <Image src={hewlett} alt='partners_logo' />
                        <Image src={oracle} alt='partners_logo' />
                        <Image src={google} alt='partners_logo' />
                        <Image src={nvidia} alt='partners_logo' />

                    </section>
                </div>

            </section>
            <CTA/>
        </main>
    )
}

export default page