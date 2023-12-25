import React, { useEffect, useState} from 'react';
import axios from 'axios';
import ProductsCard from './components/ProductsCard';
import { useNavigate } from 'react-router-dom';


const ProductsList = () => {
  const [productsInfo, setProductsInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('http://localhost:5000/api/products?pages=1&limit=12');
        const data = response.data;

        if (!data || !data.productData || !Array.isArray(data.productData)) {
          throw new Error('Invalid response format. Expected an array.');
        }

        
        setProductsInfo((prev)=>[...prev ,...data.productData]);
        navigate('/products');
        // console.log(data.productData); // Check the structure of the data

      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, navigate]);
  const handleInfiniteScroll=async()=>{
    console.log("scrollHeight"+ document.documentElement.scrollHeight);
    console.log("scrolltop"+ document.documentElement.scrollTop);
    console.log("InnerHeight"+ window.innerHeight);

    try {
      if(window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight){
        setPage((prev)=>prev+1);
      }
      
    } catch (error) {
      console.log(error);
    }
  }


useEffect(()=>{
  window.addEventListener("scroll",handleInfiniteScroll);
  console.log("scrolled")
},[]);

  return (
    <div className='h-auto mx-4/5 flex justify-center my-5'>
      <div className='grid lg:grid-cols-4 grid-cols-2'>
        {productsInfo.map((curVal, id) => {
          // console.log(productsInfo[1])
          return(<ProductsCard key={id} mobileData={curVal} />)
        }
          
        
        )}
      </div>
    </div>
  );
};

export default ProductsList;
