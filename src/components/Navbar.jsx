function Navbar() {
  return (
    <nav className='flex w-full font-semibold text-lg h-[11.4vh] justify-between items-center'>
        <div className="flex items-center justify-center">
        <h1 className='h-[6.82vh] w-[146.1px] text-center' >LuxuryCars</h1>
        </div>
        <div className="flex w-[50%] h-[11.4vh] items-center justify-between">
        <div className='w-full  h-[62.44px] flex items-center justify-end md:justify-center gap-[25px] list-none'>
            <li className='hover:border-b-[#F1BC00] hidden md:block hover:border-2 hover:border-x-0 hover:border-t-0 transition-all duration-100 ease-in-out cursor-pointer'>Home</li>
            <li className='hover:border-b-[#F1BC00] hidden md:block hover:border-2 hover:border-x-0 hover:border-t-0 cursor-pointer transition-all duration-100 ease-in-out'>Services</li>
            <li className='hover:border-b-[#F1BC00] hidden md:block hover:border-2 hover:border-x-0 hover:border-t-0 cursor-pointer transition-all duration-100 ease-in-out'>Blog</li>
            <li className='hover:border-b-[#F1BC00] hidden md:block hover:border-2 hover:border-x-0 hover:border-t-0 cursor-pointer transition-all duration-100 ease-in-out'>Contact Us</li>
            <li>
            <div className="icon flex justify-center items-center ">
            <img src="/icons/user.png" className="w-[30px] h-[30px]" alt="user" />
           <button className='w-[89px] h-[31px] text-nowrap'>
            Sign In
        </button>
        </div>
            </li>
        </div>
        
        </div>
    </nav>
  )
}

export default Navbar