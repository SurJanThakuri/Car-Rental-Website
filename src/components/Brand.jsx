import React from 'react'

function Brand(props) {
  return (
    <div className='flex w-[181px] h-[55px] py-2 px-4 items-center gap-2 justify-center bg-[#C4C4C4] rounded-2xl'>
      <img src={props.logo} alt="" />
      <p>{props.brand}</p>
    </div>
  )
}

export default Brand
