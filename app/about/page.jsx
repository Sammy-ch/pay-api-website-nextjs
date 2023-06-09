import React from 'react'
import Navbar from '@/components/Navbar'
import { dm_serif } from '../font'
import fullBleed_img from "public/assets/about/desktop/image-team-members.jpg";
import Image from 'next/image';
import CTA from '@/components/CTA';
const page = () => {
  return (
    <main className='About_page'>
        <Navbar/>
        <section className='px-[260px] xl:px-[40px] py-[100px]'>
            <header className='lg:text-center pb-[50px] ml-[15rem] xl:ml-0 w-[650px] fsm:w-full'>
                <h1 className={`${dm_serif.className}`}>We empower innovators
                by delivering access to the financial system</h1>
            </header>
            <div className='flex flex-col gap-[56px]'>
                <article>
                    <h3 className={`${dm_serif.className} mr-[30px] `}>Our Vision</h3>
                    <p className='w-[635px] fsm:w-full'>Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. </p>
                </article>
                <article>
                    <h3 className={`${dm_serif.className}`}>Our Business</h3>
                    <p className='w-[635px] fsm:w-full'>At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. </p>
                </article>
            </div>
        </section>

        <Image src={fullBleed_img} alt={"fullBleed_img"} className='w-full '/>

        <section className='crunch_numbers py-[75px] px-[165px] 2xl:px-[40px]'>
            <div>
            <span className='w-[350px] border-[1px]'></span>
                <text>Team Members</text>
                <span className={`${dm_serif.className}`}>300+</span>
            <span className='w-[350px] sm:hidden border-[1px]'></span>
            </div>

            <div>
            <span className='w-[350px] sm:hidden border-[1px]'></span>
                <text>Office in the US</text>
                <span className={`${dm_serif.className}`}>3</span>
            <span className='w-full sm:hidden border-[1px]'></span>
            </div>

            <div>
            <span className='w-[350px] sm:hidden border-[1px]'></span>
                <text>Transactions analyzed</text>
                <span className={`${dm_serif.className}`}>10M+</span>
            <span className='w-[350px] border-[1px]'></span>
            </div>
        </section>

        <section className='flex flex-col gap-[56px] xl:px-[40px]'>
                <article>
                    <h3 className={`${dm_serif.className} mr-[30px]`}>The Culture</h3>
                    <p className='w-[635px] fsm:w-full'>We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title. </p>
                </article>
                <article>
                    <h3 className={`${dm_serif.className} mr-[2.5rem]`}>The People</h3>
                    <p className='w-[635px] fsm:w-full'>We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.</p>
                </article>
        </section>

        <CTA/>
    </main>
  )
}

export default page