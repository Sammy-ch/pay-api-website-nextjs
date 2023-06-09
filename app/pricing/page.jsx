import Navbar from '@/components/Navbar'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import icon_check from "public/assets/shared/desktop/icon-check.svg";
import { dm_serif } from '../font';
import CTA from '@/components/CTA';


const page = () => {
  return (
    <main className='Pricing_page'>
      <Navbar />
      <section className='px-[165px] xl:px-[40px] ml-[100px] xl:ml-0 xl:text-center'>
        <header>
          <h1 className={`${dm_serif.className}`}>Pricing</h1>
        </header>
        <section className='Pricing_plans pt-[40px] pb-[70px]'>
          <div>
            <h2 className={`${dm_serif.className}`}>Free Plan</h2>
            <p>Build and test using our core set of products with up to 100 API requests </p>
            <span className={`price ${dm_serif.className}`}>$0.00</span>
            <hr />
                 
                    <div className='flex gap-[24px] items-center'>
                        <span><Image src={icon_check} alt='icon_check' /></span>
                        <span>Transactions</span>
                      </div>
                      <div className='flex gap-[24px] items-center'>
                        <span><Image src={icon_check} alt='icon_check' /></span>
                        <span>Auth</span>
                      </div>
                      <div className='flex gap-[24px] items-center'>
                        <span><Image src={icon_check} alt='icon_check' /></span>
                        <span>Identity</span>
                      </div>
                

            <div className='unavailable xl:text-left'>
              <span>Investments</span>
              <span>Assets</span>
              <span>Liabilities</span>
              <span>Income</span>
            </div>
            <hr />
            <button type="button">Request Access</button>
          </div>
          <div>
            <h2 className={`${dm_serif.className}`}>Basic Plan</h2>
            <p>Launch your project with unlimited requests and no contractual minimums </p>
            <span className={`price ${dm_serif.className}`}>$249.00</span>
            <hr />
            <div className='flex gap-[24px] items-center'>
              <span><Image src={icon_check} alt='icon_check' /></span>
              <span>Transactions</span>
            </div>
            <div className='flex gap-[24px] items-center'>
              <span><Image src={icon_check} alt='icon_check' /></span>
              <span>Auth</span>
            </div>
            <div className='flex gap-[24px] items-center'>
              <span><Image src={icon_check} alt='icon_check' /></span>
              <span>Identity</span>
            </div>
            <div className='flex gap-[24px] items-center'>
              <span><Image src={icon_check} alt='icon_check' /></span>
              <span>Investments</span>
            </div>
            <div className='flex gap-[24px] items-center'>
              <span><Image src={icon_check} alt='icon_check' /></span>
              <span>Assets</span>
            </div>
            <div className='unavailable xl:text-left'>
              <span>Liabilities</span>
              <span>Income</span>
            </div>
            <hr />
            <button type="button">Request Access</button>
          </div>
          <div>
            <h2 className={`${dm_serif.className}`}>Premium Plan</h2>
            <p>Get tailored solutions, volume pricing, and dedicated support for your team </p>
            <span className={`price ${dm_serif.className}`}>$499.00</span>
            <hr />
            <div className='flex gap-[24px] items-center'>
              <span><Image src={icon_check} alt='icon_check' /></span>
              <span>Transactions</span>
            </div>
            <div className='flex gap-[24px] items-center'>
              <span><Image src={icon_check} alt='icon_check' /></span>
              <span>Auth</span>
            </div>
            <div className='flex gap-[24px] items-center'>
              <span><Image src={icon_check} alt='icon_check' /></span>
              <span>Identity</span>
            </div>
            <div className='flex gap-[24px] items-center'>
              <span><Image src={icon_check} alt='icon_check' /></span>
              <span>Investements</span>
            </div>
            <div className='flex gap-[24px] items-center'>
              <span><Image src={icon_check} alt='icon_check' /></span>
              <span>Assets</span>
            </div>
            <div className='flex gap-[24px] items-center'>
              <span><Image src={icon_check} alt='icon_check' /></span>
              <span>Liabilities</span>
            </div>
            <div className='flex gap-[24px] items-center'>
              <span><Image src={icon_check} alt='icon_check' /></span>
              <span>Income</span>
            </div>

            <hr />
            <button type="button">Request Access</button>
          </div>
        </section>
      </section>
      <CTA />
    </main>
  )
}

export default page