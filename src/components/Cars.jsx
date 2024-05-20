import React from 'react'
import Card from './Card'
import Brands from './Brands'

function Cars() {
  return (<>
    <div className='flex flex-col items-center my-32 py-12 gap-8 w-full'>
      <h1 className='text-3xl font-semibold'>We Have Everything You Need</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 gap-y-20 gap-6">
      <Card title='Dodger Charger' image="/images/dodgeCharger.png" year="2016" fuel="auto" speedometer="15k" price="10.000" />
      <Card title='Audi RS7' image="/images/audi_rs7.png" year="2018" fuel="auto" speedometer="15k" price="60.000" />
      <Card title='Audi RS7 Base' image="/images/audi_rs7_base.png" year="2022" fuel="auto" speedometer="15k" price="15.000" />
      <Card title='Range Rover Velar' image="/images/range_rover.png" year="2020" fuel="auto" speedometer="15k" price="10.000" />
      </div>
    </div>
    <Brands />
    </>
  )
}

export default Cars
