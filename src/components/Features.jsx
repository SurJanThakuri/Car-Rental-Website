import React from 'react'
import Feature from './Feature'

function Features() {
  return (
    <div className='flex flex-col items-center justify-center my-8 py-10 px-28'>
      <h1 className='text-3xl font-semibold'>Feel the best experience with our luxury car</h1>
      <div className="flex justify-center items-center gap-10 p-16">
      <Feature icon="/icons/book.png" title="Book with flexibility" desc="Easily find car and book with - no hidden charges or fees..." />
      <Feature icon="/icons/settings.png" title="Trust and free" desc="We’re completely free to use – no hidden charges or fees.." />
      <Feature icon="/icons/user2.png" title="We know travel" desc="With 10 years of experience, we're ready to help find your perfect car" />
      </div>
    </div>
  )
}

export default Features
