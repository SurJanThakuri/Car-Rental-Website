import React from 'react'
import Brand from './Brand'

function Brands() {
  return (
    <div className='flex flex-col items-center gap-8 my-4'>
      <h1 className='text-3xl font-semibold'>Our Luxury Brand</h1>
      <div className="flex items-center justify-center gap-6">
        <Brand logo="/logo/audi.png" brand="Audi" />
        <Brand logo="/logo/mercedez.png" brand="Mercedez" />
        <Brand logo="/logo/landRover.png" brand="Land Rover" />
        <Brand logo="/logo/ferrari.png" brand="Ferrari" />
        <Brand logo="/logo/tesla.png" brand="Tesla" />
      </div>
      <div>
        <p className='text-xl border-b-[#F1BC00] border-4 border-x-0 border-t-0 cursor-pointer'>See The Store</p>
      </div>
    </div>
  )
}

export default Brands
