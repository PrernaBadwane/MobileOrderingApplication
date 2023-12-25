import React from 'react'

const ProductsCard = ({mobileData}) => {
    // console.log(mobileData);
    const { model, specifications, price,images  } = mobileData;
  // Use optional chaining to avoid errors if storage is undefined
  const {storage } = specifications;
  const {ram,rom}=storage;
  const{mid}=images;
    // console.log(model)
   
      return (
    <div className='shadow-md h-max w-max border-2 border-[#1F2833]  rounded-lg mx-2 shadow-2xlshadow-2xl my-3 bg-[#45A29E]'>
        <div className='border border-[#1F2833] rounded-lg bg-[#0B0C10] p-1 '>
            <div className='image h-28 w-40 bg-white flex justify-center '>
                <img className=""src={mid} />
            </div>
           
                <p className='text-[#FFFF00] flex  justify-center  '><h3 >{model}</h3><p className='uppercase'>{"("}{ram}{")"} </p></p>
            
            
            <p className='text-white text-xs text-bold flex  justify-center '><span>&#8377;</span>{price}{"/-"} </p>
            
            <div className='my-4 mx-6 flex justify-center '>
            <p className=' w-max text-xs  rounded text-bold text-white uppercase '>{rom}</p>
            </div>
            <div className='my-4 mx-6 flex justify-center '>
            <button className='border border-[#45A29E]  bg-[#FFFF00] w-max text-xs p-1 rounded-2xl font-medium hover:bg-[#45A29E] text-[#0B0C10] '>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default ProductsCard