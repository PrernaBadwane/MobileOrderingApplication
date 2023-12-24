import './App.css';
import{Routes,Route, BrowserRouter} from "react-router-dom";
import Home from "./moibleComponents/Home"
import Products from './moibleComponents/ProductList';


import Header from "./moibleComponents/components/Navbar";
import ProductsCard from './moibleComponents/components/ProductsCard';

function App() {
  return (
    <div className='bg-[#1F2833]'>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/products"  element={<Products/>}/>
      <Route path="/productsCard"  element={<ProductsCard/>}/>
      
     
    </Routes>
    </BrowserRouter>
    </div>
    
  
  )
};

export default App;
