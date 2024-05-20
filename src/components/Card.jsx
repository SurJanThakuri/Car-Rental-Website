import React from 'react'
import Button from './Button'

function Card(props) {
  return (
    <div className='bg-[#CBC9C2] shadow-md shadow-gray-700 h-[66vh] rounded-t-2xl'>
      <div className="title w-full text-center text-xl font-semibold pt-6 h-[30%] bg-[#FAF5F8] text-[#21408E] rounded-t-2xl">
        {props.title}
      </div>
      <div className="img h-[38%] flex justify-center items-center">
        <img src={props.image} className='h-[170px]'  alt="" />
      </div>
      <div className="desc w-full h-[32%] bg-[#FFFFFF] py-2 px-4 rounded-t-2xl">
        <p>{props.year}</p>
        <div className="flex gap-6">
        <div className='flex gap-2'>
            <img src="/icons/speedometer.png" alt="" />
            <p>{props.speedometer}</p>
        </div>
        <div className='flex gap-2'>
            <img src="/icons/pause.png" alt="" />
            <p>Auto</p>
        </div>
        <div className='flex gap-2'>
            <img src="/icons/fuel.png" alt="" />
            <p>{props.fuel}</p>
        </div>
        </div>
        <h1 className='text-center text-[#21408E] font-semibold bg-white my-3'>{props.price}$</h1>
      <div className="flex items-center justify-center">
        <Button children="Rent" className='py-2 px-8 rounded-full' />
      </div>
      </div>
    </div>
  )
}

export default Card
