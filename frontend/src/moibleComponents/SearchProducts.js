import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductsCard from './components/ProductsCard';

const SearchProducts = () => {
  // Use the useLocation hook to access the data passed via navigate
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <div>
      
      <div className='h-dvh mx-4/5 flex justify-center my-5'>
      <div className='grid lg:grid-cols-4 grid-cols-2'>
        {searchResults.map((curVal, id) => {
          // console.log(productsInfo[1])
          return(<ProductsCard key={id} mobileData={curVal} />)
        }
          
        
        )}
      </div>
    </div>
    </div>
  );
};

export default SearchProducts;