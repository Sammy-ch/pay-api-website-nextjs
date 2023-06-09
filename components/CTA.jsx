import React from 'react'
import { dm_serif } from '@/app/font'

const CTA = () => {
  return (
    <section className='CTA px-[165px] md:px-[25px] py-[96px] xs:text-center'>
        <header>
            <h2 className={`${dm_serif.className}`}>Ready to start ?</h2>
        </header>

            <div className='flex sm:justify-center sm:items-center sm:pb-[25px] sm:flex-col md:justify-center'>
              <input type="email" placeholder='Enter Email Address' className='input_mail pl-5 h-[48px] w-[375px] sm:w-full mt-10 mb-5' />
              <button type="button" className='schedule_btn relative h-[48px] w-[173px] sm:w-full left-[-60px] sm:left-0 sm:top-0 top-10'>Schedule a Demo</button>
            </div>
    </section>
  )
}

export default CTA