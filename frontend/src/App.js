import './App.css';
import{Routes,Route, BrowserRouter} from "react-router-dom";
import Home from "./moibleComponents/Home"
import Products from './moibleComponents/ProductList';
import View from "./moibleComponents/ViewProduct";
import Error from "./moibleComponents/Error";
import Header from "./moibleComponents/components/Navbar";
import ProductsCard from './moibleComponents/components/ProductsCard';

function App() {
  return (
    <div className='bg-[#526D82]'>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/products"  element={<Products/>}/>
      <Route path="/productsCard"  element={<ProductsCard/>}/>
      <Route path="/view/:id" element={<View/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    
  
  )
};

export default App;
