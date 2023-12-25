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
    <div className='shadow-md h-max w-max border-2 border-[#1F2833]  rounded-2 mx-2  my-3 bg-[#45A29E]'>
        <div className='border border-[#1F2833] rounded bg-[#0B0C10] p-1 '>
            <div className='image h-28 w-40'>
                <img src={mid} />
            </div>
           
                <p className='text-[#66FCF1] flex  justify-center  '><h3 >{model}</h3><p className='uppercase'>{"("}{ram}{")"} </p></p>
            
            
            <p className='text-[#C5C6C7] text-xs flex  justify-center '><span>&#8377;</span>{price}{"/-"} </p>
            
            <div className='my-4 mx-6 flex justify-center '>
            <p className='border border-[#45A29E] w-max text-xs  rounded  text-[#C5C6C7] uppercase '>{rom}</p>
            </div>
            <div className='my-4 mx-6 flex justify-center '>
            <button className='border border-[#45A29E]  bg-[#66FCF1] w-max text-xs p-1 rounded-2xl font-medium hover:bg-[#45A29E] text-[#0B0C10] '>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default ProductsCard