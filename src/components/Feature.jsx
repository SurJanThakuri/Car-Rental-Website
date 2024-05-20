import React from 'react'

function Feature(props) {
  return (
    <div className="flex flex-col items-center justify-center w-1/3">
        <div className="image relative w-[100px] h-[90px] ">
            <div className="absolute top-[28%] w-[62px] h-[58px] right-[12%]">
            <img src={props.icon} className='w-[45px] h-[39px]' alt="" />
            </div>
            <img src="/shapes/vector.png" alt="" />
        </div>
        <div className="title text-2xl font-semibold">{props.title}</div>
        <p className='text-center'>{props.desc}</p>
      </div>
  )
}

export default Feature
