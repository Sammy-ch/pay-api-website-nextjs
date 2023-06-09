import React from 'react'
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import phoneMockup from "public/assets/home/desktop/illustration-phone-mockup.svg";
import tesla from "public/assets/shared/desktop/tesla.svg";
import oracle from "public/assets/shared/desktop/oracle.svg"
import microsoft from "public/assets/shared/desktop/microsoft.svg";
import hewlett from "public/assets/shared/desktop/hewlett-packard.svg";
import google from "public/assets/shared/desktop/google.svg";
import nvidia from "public/assets/shared/desktop/nvidia.svg";
import implement_img from "public/assets/home/desktop/illustration-easy-to-implement.svg";
import feature_2 from "public/assets/home/desktop/illustration-simple-ui.svg";
import { dm_serif } from './font';
import finance_icon from 'public/assets/home/desktop/icon-personal-finances.svg';
import banking_icon from 'public/assets/home/desktop/icon-banking-and-coverage.svg';
import consumer_icon from 'public/assets/home/desktop/icon-consumer-payments.svg';

import CTA from '@/components/CTA';

const Home = () => {
  return (
    <main>
      <div className='hero_section md:pb-[100px]'>
        <Navbar />
        <section className='flex md:flex-col-reverse justify-between items-center px-[165px] sm:px-[25px]'>
          <section>
            <header>
              <h1 className={`hero_header ${dm_serif.className} sm:text-[3rem]`}>Start building with our APIs for absolutely free.</h1>
            </header>
            <div className='flex sm:justify-center sm:items-center sm:pb-[25px] sm:flex-col md:justify-center'>
              <input type="email" placeholder='Enter Email Address' className='input_mail pl-5 h-[48px] w-[375px] sm:w-full mt-10 mb-5' />
              <button type="button" className='schedule_btn relative h-[48px] w-[173px] sm:w-full left-[-60px] sm:left-0 sm:top-0 top-10'>Schedule a Demo</button>
            </div>
            <div className='contact_tag ml-[27px] md:flex md:justify-center'>Have any questions? <Link href={"/"} className='contact_link'> Contact Us</Link></div>
          </section>

          <Image src={phoneMockup} alt='phone_mockup' width={1} height={1} className='w-[300px]' />

        </section>
      </div>


      <section className='partners_section py-[100px] md: px-[165px]  xl:px-[35px]'>
        <section className='flex flex-col gap-[24px] md:items-center sm:text-center'>
          <header className={`partners_header ${dm_serif.className}`}>Who we work with</header>
          <p className='xl:min-w-full md:text-center'>
            Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.
          </p>
          <button type="button" className='submit_btn'>About Us</button>
        </section>

        <section className='partners_logo md:py-10 '>
          <Image src={tesla} alt='partners_logo' />
          <Image src={microsoft} alt='partners_logo' />
          <Image src={hewlett} alt='partners_logo' />
          <Image src={oracle} alt='partners_logo' />
          <Image src={google} alt='partners_logo' />
          <Image src={nvidia} alt='partners_logo' />

        </section>
      </section>

      <section className='px-[265px] sm:px-[25px] pt-[150px] feature_showcase'>
        <section className='features pb-[150px]'>
          <Image src={implement_img} alt='impl_logo' />
          <div className='xl:text-center'>
            <h2 className={`${dm_serif.className}`}>Easy to implement</h2>
            <p>Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to handle payments functionality with ease.</p>
          </div>
        </section>

        <section className='features flex flex-row justify-between pb-[100px]'>
          <div className='xl:text-center'>
            <h2 className={`${dm_serif.className}`}>Simple UI & UX</h2>
            <p>Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. </p>
          </div>
          <Image src={feature_2} />

        </section>
      </section>

      <section className='feature_details px-[165px] xl:px-[40px]'>
        <div>
          <Image src={finance_icon} alt='feature_logo' />
          <h3>Personal Finances</h3>
          <p> Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
        </div>
        <div>
          <Image src={banking_icon} alt='feature_logo' />
          <h3>Banking & Coverage</h3>
          <p>With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.</p>
        </div>
        <div>
          <Image src={consumer_icon} alt='feature_logo' />
          <h3>Consumer Payments</h3>
          <p>It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.</p>
        </div>
      </section>
      <CTA />

    </main>
  )
}

export default Home;