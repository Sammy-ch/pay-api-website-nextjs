import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Logo from "public/assets/shared/desktop/logo_light.svg"
import fb from "public/assets/shared/desktop/facebook.svg"
import tw from "public/assets/shared/desktop/twitter.svg"
import linked from "public/assets/shared/desktop/linkedin.svg"

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='flex fsm:flex-col fsm:pb-[40px] justify-between'>
            <div className='flex fsm:flex-col justify-center items-center gap-[64px]'>
              <Link href={"/"}>
                <Image src={Logo}/>
              </Link>
              <nav className='flex gap-[40px] fsm:flex-col fsm:text-center text-gray-500 text-[15px] font-bold'>
                    <Link className='hover:text-[#ffff]' href={"/pricing"}>Pricing</Link>
                    <Link className='hover:text-[#ffff]' href={"/about"}>About</Link>
                    <Link className='hover:text-[#ffff]' href={"/contact"}>Contact</Link>
              </nav>
            </div>

            
        </div>
        <nav className='flex gap-[24px] h-full '>
                  <Link href={"/"} >
                    <Image src={fb} alt='facebookLogo'/>
                  </Link>
                  <Link href={"/"}>
                    <Image src={tw} alt='twitterLogo'/>
                  </Link>
                  <Link href={"/"}>
                    <Image src={linked} alt='linkedinLogo'/>
                  </Link>
        </nav>
    </div>
  )
}

export default Footer