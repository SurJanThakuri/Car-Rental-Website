import React from 'react'
import Button from './Button'

function Footer() {
    return (
        <>
            <div className="newsletters bg-[#F1BC00] w-[full] h-[25vh] flex flex-col items-center justify-center gap-5 p-4 mt-28">
                <h1 className='text-2xl font-semibold mt-6'>Subscribe To Our Newsletters</h1>
                <div className="bg-white w-[40%] p-1 font-semibold rounded-xl flex items-center justify-between mb-4">
                    <input type="text" placeholder='EMAIL' className='pl-4' />
                    <Button children='Next' className='py-3 px-8 rounded-full' />
                </div>
            </div>
            <div className='menu bg-[#081630] w-full h-[50vh] text-white  px-10 py-8 pt-24 flex justify-center items-center'>
                <div className='w-[100%]'>
                <div className='flex justify-around'>
                <div className="reservation">
                    <h1 className='text-lg font-semibold my-2 cursor-pointer'>Reservation</h1>
                    <ul className='flex flex-col gap-2 cursor-pointer'>
                        <li>Care Hire</li>
                        <li>Modify Or Cancel</li>
                        <li>Get A Receipt</li>
                    </ul>
                </div>
                <div className="services">
                    <h1 className='text-lg font-semibold my-2 cursor-pointer'>Customer Services</h1>
                    <ul className='flex flex-col gap-2 cursor-pointer'>
                        <li>Help / FAQS</li>
                        <li>Press</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-semibold my-2 cursor-pointer'>Company</h1>
                    <ul className='flex flex-col gap-2 cursor-pointer'>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Report & Governance</li>
                    </ul>
                </div>
                </div>
            <div className='bg-white w-[82%] h-0.5 my-4 cursor-pointer ml-28'></div>
                <div className="flex px-28 justify-between items-center">
                    <h1 className='cursor-pointer'>LUXURYCARS</h1>
                    <div className='social flex items-center justify-center gap-8'>
                        <img src="/logo/facebook.png" className='h-[30px] w-[30px]' alt="" />
                        <img src="/logo/twitter.png" className='h-[30px] w-[30px]' alt="" />
                        <img src="/logo/insta.png" className='h-[30px] w-[30px]' alt="" />
                    </div>
                </div>
                </div>

            </div>
        </>
    )
}

export default Footer
