import React from 'react'

function Services() {
    return (
        <div className='flex gap-48 w-full h-[60vh] my-20'>
            <div className="relative justify-self-start">
                <img src="/shapes/rectangle1.png" className='h-96 z-0' alt="" />
                <img src="/shapes/rectangle2.png" className='absolute h-80 top-14 left-28 z-10' alt="" />
                <img src="/images/mercedes.png" className='absolute top-16 left-36 z-20' alt="" />
            </div>

            <div className="services flex flex-col gap-4 justify-center items-center w-[40%]">
                <h1 className='text-[#21408E] text-3xl font-semibold'>Our Services</h1>
                <div className='flex gap-6'>
                    <div className="w-[100.1px] h-[12.68vh] rounded-tl-[110%] rounded-tr-[70%] rounded-bl-[60%] rounded-br-[120%] bg-[#F1BC00] "></div>
                    <div>
                        <h2 className='font-semibold text-lg'>Car Hire</h2>
                        <p>We pride ourselves in always going the extra mile for our customers.</p>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className="w-[100.1px] h-[12.68vh] rounded-tl-[110%] rounded-tr-[70%] rounded-bl-[60%] rounded-br-[120%] bg-[#F1BC00] "></div>
                    <div>
                        <h2 className='font-semibold text-lg'>Car Sales</h2>
                        <p>we sale the best luxury cars across the
                            world at a competitive price. </p>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className="w-[100.1px] h-[12.68vh] rounded-tl-[110%] rounded-tr-[70%] rounded-bl-[60%] rounded-br-[120%] bg-[#F1BC00] "></div>
                    <div>
                        <h2 className='font-semibold text-lg'>Hire a driver</h2>
                        <p>you want to travel and fell confortable , our drivers are available. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
