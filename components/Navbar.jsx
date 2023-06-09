"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Logo from "public/assets/shared/desktop/logo.svg"
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';
import { Drawer,createStyles,rem } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  body: {
    backgroundColor:  "#1B262F",
  },
  header: {
    backgroundColor: "#1B262F",
  }
}));


const Navbar = () => {
  const {classes} = useStyles();

  const [opened ,{toggle,close}] = useDisclosure(false);

  const label = opened ? "Close navigation" : "Open navigation";

  return (
    <div className='Navbar'>
        <div className='flex justify-center items-center gap-[64px]'>
            <Link href={"/"}>
              <Image src={Logo}/>
            </Link>

            <nav className='flex flex-row gap-[40px] text-[#36536B]  text-[15px] font-bold fsm:hidden'>
                  <Link  className='hover:text-[#132736]' href={"/pricing"}>Pricing</Link>
                  <Link className='hover:text-[#132736]' href={"/about"}>About</Link>
                  <Link  className='hover:text-[#132736]'href={"/contact"}>Contact</Link>
            </nav>
        </div>


        <button type="button" className='schedule_btn relative h-[48px] w-[173px] sm:w-full fsm:hidden'>Schedule a Demo</button>

        <Burger opened={opened} onClick={toggle} aria-label={label} className='hidden fsm:block'/>

        <Drawer opened={opened} onClose={close} position='right' size={"81%"} classNames={{
          content: classes.body,
          header: classes.header ,
        }}>
            <nav className='flex text-center flex-col gap-[32px] items-center text-[#FBFCFE] text-[20px] font-bold pb-[32px] '>
            <span className='w-full border-[#36536B] border-[1px] mb-[43px]'></span>
                  <Link href={"/pricing"}>Pricing</Link>
                  <Link href={"/about"}>About</Link>
                  <Link href={"/contact"}>Contact</Link>
                  <Link href={"/contact"}><button type="button" className='schedule_btn relative h-[48px] w-[173px] sm:w-[252px] xs:w-full'>Schedule a Demo</button></Link>
            </nav>
        
        </Drawer>
    </div>
  )
}

export default Navbar