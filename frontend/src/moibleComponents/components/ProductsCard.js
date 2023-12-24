import React from 'react'

const ProductsCard = ({mobileData}) => {
    // const{model,ram,rom,price,mid}=mobileData;
  return (
    <div className='shadow-md h-max w-max border-2 border-[#1F2833]  rounded-2 mx-2  my-3 bg-[#45A29E]'>
        <div className='border border-[#1F2833] rounded bg-[#0B0C10] p-1 '>
            <div className='image h-28 w-40'>
                <img />
            </div>
           
                <h3 className='text-[#66FCF1] flex  justify-center '>kn jkvc k </h3>
            
            
            <p className='text-[#C5C6C7] text-xs flex  justify-center '>n jk </p>
            
            <div className='my-4 mx-6 flex justify-center '>
            <p className='border border-[#45A29E] w-max text-xs  rounded  text-[#C5C6C7]  '>nm </p>
            </div>
            <div className='my-4 mx-6 flex justify-center '>
            <button className='border border-[#45A29E]  bg-[#66FCF1] w-max text-xs p-1 rounded-2xl font-medium  text-[#0B0C10] '>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default ProductsCard