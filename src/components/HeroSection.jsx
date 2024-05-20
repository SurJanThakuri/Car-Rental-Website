import React from 'react'
import Button from './Button'

function HeroSection() {
  return (
    <div className='w-[100%] h-auto my-4 relative'>
      <img src="/images/bannerLambo1.png" className='w-full h-auto mx-auto' alt="" />
      <div className='absolute flex flex-col gap-3 bottom-32 right-10 md:right-20 lg:right-32 xl:right-40'>
        <div>
          <h1 className='text-2xl font-bold'>Safer, Faster and</h1>
          <h1 className='text-2xl font-bold'>Comfortable</h1>
        </div>
        <div>
          <p className=''>Get in touch with our</p>
          <p className=''>luxury cars</p>
        </div>
        <div>
          <Button children="Rent Now" className='py-2 px-4 rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection