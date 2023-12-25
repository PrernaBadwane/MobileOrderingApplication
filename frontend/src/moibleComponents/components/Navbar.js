import React from 'react'
import  { useState,useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import axios from 'axios';


const Navbar = () => {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [searchInput, setSearchInput] = useState(' ');
    const [searchCriteria, setSearchCriteria] = useState('Search by'); // Default search criteria
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate(); 

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchData();
      
    }
  };
  // if(searchInput){
  //   navigate('/productsSearch', { state: {searchResults } });
  // }

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/products?${searchCriteria.trim()}=${searchInput.trim()}`);
      const data = response.data.productData;
      if (!Array.isArray(data)) {
        throw new Error('Invalid response format. Expected an array.');
      }

      setSearchResults(data);
      navigate('/productsSearch', { state: { searchResults: data }});

      // Navigate to the ProductsList page and pass the search results
      

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchInput, searchCriteria]);

  const handleToggleClick = () => {
    setToggle1(!toggle1);}
    const handleToggleClickpage = () => {
      setToggle2(!toggle2);}
   
    const handleSearchInputChange = (e) => {
      setSearchInput(e.target.value);
      // console.log(e.target.value);
    };
    const handleSearchCriteriaChange = (criteria) => {
      setSearchCriteria(criteria);
      setToggle1(false);
    };

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  return (

    



    // nav bar front end
    <div>
       <nav className='bg-[#0B0C10] gap-[4vw] flex items-center justify-between  w-[100%] py-1  px-10 '>
       
        <div>
            <NavLink to={"/"}> 

        <h1 className='font-Sevillan text-base  text-[#FFA500]'>M-Pick</h1>
        </NavLink>
        </div>
        <div className=' md:static absolute bg-[#0B0C10] md:min-h-fit min-h-[100%] left-0 top-[-100%] w-full flex  items-top px-5  '>
            <ul className='flex md:flex-row flex-col item-:item-center md:gap-[2vw] gap-8 text-white'>
            {/* <NavLink to={"/"}>   <li className='hover:text-[#C5C6C7]  text-xs'>Home</li></NavLink> */}
            <NavLink to={"/"}>  <li className='hover:text-[#C5C6C7] text-xs'>Products</li></NavLink>
            </ul>
        </div>
      
        <div className='flex p-1 gap-[2vw]'>
        
          
        <form className='relative w-max mb-1'>
          <input
            type="search"
            value={searchInput}
            onChange={handleSearchInputChange}
            onKeyPress={handleEnterKeyPress}
            className="peer cursor-pointer relative z-10 h-7 w-8 rounded-full border border-[#FFA500] bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:cursor-h-6 focus:border-[#FFA500] focus:pl-16 focus:pr-4 focus:text-white"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-[#FFA500] px-3.5 peer-focus:border-[#FFA500] peer-focus:h-5 peer-focus:stroke-[#FFA500]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </form>



        {/* Search criteria dropdown */}
        <div className="relative inline-block text-left">
          <div>
            <button
              onClick={handleToggleClick}
              type="button"
              className="inline-flex w-32 justify-center w-full rounded-md text-xs border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >{searchCriteria}
               <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
            </button>
          </div>

          {/* Dropdown content */}
          {toggle1 && (
            <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button
                  onClick={() => handleSearchCriteriaChange('model')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Name
                </button>
                <button
                  onClick={() => handleSearchCriteriaChange('price')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Price
                </button>
                <button
                  onClick={() => handleSearchCriteriaChange('operatingSystem')}
                  
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                 Operating System
                </button>
                <button
                  onClick={() => handleSearchCriteriaChange('processor')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Processer
                </button>
              </div>
            </div>
          )}
        </div>




         
            <div className='flex gap-[2vw] mt-1 '>
            <svg className="w-5 h-5 text-[#FFA500] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
    <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
  </svg>
          
            <svg
          onClick={handleToggleClickpage}
          className="w-5 h-5 text-[#FFA500] dark:text-white pt-1 md:hidden"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 17 14"
        >
          <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
        </svg>
        {toggle2 && (
          <div className=' md:hidden md:static absolute bg-[#0B0C10] md:min-h-fit min-h-[100%] left-0 top-[9%] w-full flex  items-top px-10 pt-5 '>
          <ul className='flex md:flex-row flex-col item-:item-center md:gap-[4vw] gap-8 text-[#C5C6C7]'>
          {/* <NavLink  onClick={handleToggleClick} to={"/"}>   <li className='hover:text-[#FFA500]'>Home</li></NavLink> */}
            <NavLink onClick={handleToggleClickpage}  to={"/"}>  <li className='hover:text-[#FFA500]'>Products</li></NavLink>
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