import React from 'react'
import Button from './Button'

function Subscription() {
  return (
    <div className='flex w-full justify-center items-center my-4 p-8'>
      <div className='bg-[url("/images/driver.png")] bg-cover w-full min-h-[40vh] bg-no-repeat'>
      {/* <img src="/images/driver.png" className='w-full h-[60vh] bg-cover' alt="" /> */}
      <div className="">
        <div className='text-4xl text-white w-[90%] font-bold p-6'>
        <h1>Become A Driver</h1>
        <h1>Your Time. Your Goals. You're The Boss.</h1>
        </div>

        <div className="px-6 py-2">
            <p className='text-white text-xl mb-2'>Subscribe And Join Us</p>
            <div className="bg-white w-[60%] p-1 font-semibold rounded-xl flex items-center justify-between">
                <input type="text" placeholder='EMAIL' className='pl-4' />
                <Button children='Next' className='py-3 px-8 rounded-full' />
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Subscription
