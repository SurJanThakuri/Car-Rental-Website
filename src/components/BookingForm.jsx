import React from 'react'
import Button from './Button'

function BookingForm() {
  return (
    <div className='w-full flex items-center justify-center my-4'>
    <div className='bg-[#C4C4C4] w-[95%] p-6'>
      <h1 className='text-3xl font-semibold'>Book Your Dream Car Now!</h1>
      <p className='w-full lg:w-[755.2px] h-[13.31vh] text-lg my-2'>Rent a car online now from one of our worldwide locations. With over 20 years’ experience in luxury car and customer services, all we need is your ID and you can book any car.</p>
      <form action="" className='flex justify-center items-center gap-4 flex-wrap'>
        <div className="relative">
        <input type="text" className='rounded-2xl px-10 w-[240px] lg:w-[260px] xl:w-[300px] 2xl:w-[340px] md:w-[320px] h-[40px]'  placeholder='Id' />
        <div className="absolute left-2 bottom-2
                    flex items-center
                    pointer-events-none">
                        <img className='h-6 w-6' src="/icons/face-id.png" alt="" />
                    </div>
        </div>
        <div className="relative">
        <input type="text" className='rounded-2xl px-10 w-[240px] lg:w-[260px] xl:w-[300px] 2xl:w-[340px] md:w-[320px] h-[40px]' placeholder='Location' />
        <div className="absolute left-2 bottom-2
                    flex items-center  
                    pointer-events-none">
                        <img className='h-6 w-6' src="/icons/pin.png" alt="" />
                    </div>
        </div>
        <input type="date" className='rounded-2xl px-4 w-[240px] md:w-[200px] lg:w-[260px] xl:w-[300px] 2xl:w-[340px] h-[40px]' placeholder='Date' />
        <Button children='Book' className='rounded-2xl px-8 py-2 w-[150px]' />
      </form>
    </div>
    </div>
  )
}

export default BookingForm
