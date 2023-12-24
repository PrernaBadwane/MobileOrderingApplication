import React from 'react'
import  { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(!toggle);}
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  return (
    <div>
       <nav className='bg-[#27374D] gap-[4vw] flex items-center justify-between  w-[100%]  px-10 '>
       
        <div>
            <NavLink to={"/"}> 

        <h1 className='font-Sevillana  text-white'>Access</h1>
        </NavLink>
        </div>
        <div className=' md:static absolute bg-[#27374D] md:min-h-fit min-h-[100%] left-0 top-[-100%] w-full flex  items-top px-5  '>
            <ul className='flex md:flex-row flex-col item-:item-center md:gap-[2vw] gap-8 text-white'>
            <NavLink to={"/"}>   <li className='hover:text-[#9DB2BF] text-xs'>Home</li></NavLink>
            <NavLink to={"/view"}>  <li className='hover:text-[#9DB2BF] text-xs'>Products</li></NavLink>
            </ul>
        </div>
      
        <div className='flex p-1 gap-[2vw]'>
          
            <form className='relative w-max mb-1'>
            <input type="search" 
              className="peer cursor-pointer relative z-10 h-9 w-8 rounded-full border bg-transparent pl-12 outline-none focus:w-full 
              focus:cursor-text focus:border-[#9DB2BF]
               focus:pl-16 focus:pr-4 focus:text-white" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent 
        stroke-white px-3.5 peer-focus:border-[#9DB2BF] peer-focus:stroke-[#9DB2BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
        stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
            </form>
         
            <div className='flex gap-[2vw] mt-1 '>
            <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
    <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
  </svg>
          
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
          <div className=' md:hidden md:static absolute bg-[#27374D] md:min-h-fit min-h-[100%] left-0 top-[9%] w-full flex  items-top px-10 pt-5 '>
          <ul className='flex md:flex-row flex-col item-:item-center md:gap-[4vw] gap-8 text-white'>
          <NavLink  onClick={handleToggleClick} to={"/"}>   <li className='hover:text-[#9DB2BF]'>Home</li></NavLink>
            <NavLink onClick={handleToggleClick}  to={"/view"}>  <li className='hover:text-[#9DB2BF]'>Products</li></NavLink>
            </ul>
          </div>
        )}
        </div>
        </div>
        


            
       </nav>
    </div>
  )
}

export default Navbar