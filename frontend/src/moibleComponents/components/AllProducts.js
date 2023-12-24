import React from 'react'
import ProductsCard from './ProductsCard'


const AllProducts = ({productsInfo}) => {
  return (
    <div>
        <div>
            <div className='grid-col-4 md:grid-col-2'>
                {
                    productsInfo.map((curVal,id)=>{
                        return<ProductsCard key={id} mobileData={curVal}/>;
                    })
                }

            </div>
        </div>
    </div>
  )
}

export default AllProducts