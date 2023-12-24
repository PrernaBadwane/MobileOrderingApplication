import React from 'react'
import  { useState } from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(!toggle);}
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  return (
    <div>
       <nav className='bg-[#27374D] gap-[4vw] flex items-center justify-between  w-[100%]  pt-2 pb-1 px-10 '>
       
        <div>
        <h1 className='font-Sevillana  text-white'>Access</h1>
        </div>
        <div className=' md:static absolute bg-[#27374D] md:min-h-fit min-h-[100%] left-0 top-[-100%] w-full flex  items-top px-5  '>
            <ul className='flex md:flex-row flex-col item-:item-center md:gap-[4vw] gap-8 text-white'>
                <li className='hover:text-[#9DB2BF]'>Home</li>
                <li className='hover:text-[#9DB2BF]'>Products</li>
            </ul>
        </div>
      
        <div className='flex p-1 gap-[2vw]'>
            <form className='relative w-max mx-auto'>
            <input type="search" 
              className="peer cursor-pointer relative z-10 h-8 w-8 rounded-full border bg-transparent pl-12 outline-none focus:w-full 
              focus:cursor-text focus:border-[#9DB2BF]
               focus:pl-16 focus:pr-4 focus:text-white" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent 
        stroke-white px-3.5 peer-focus:border-[#9DB2BF] peer-focus:stroke-[#9DB2BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
        stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
            </form>
           
            <svg
          onClick={handleToggleClick}
          className="w-6 h-6 text-white dark:text-white pt-1 md:hidden"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 17 14"
        >
          <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
        </svg>
        {toggle && (
          <div className=' md:static absolute bg-[#27374D] md:min-h-fit min-h-[100%] left-0 top-[9%] w-full flex  items-top px-5  '>
          <ul className='flex md:flex-row flex-col item-:item-center md:gap-[4vw] gap-8 text-white'>
             <li className="hover:text-[#9DB2BF]">Home</li>
              <li className="hover:text-[#9DB2BF]">Products</li>
            </ul>
          </div>
        )}
        </div>
        


            
       </nav>
    </div>
  )
}

export default Navbar