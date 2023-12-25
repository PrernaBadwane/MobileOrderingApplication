import './App.css';
import{Routes,Route, BrowserRouter, Navigate} from "react-router-dom";
import SearchProducts from './moibleComponents/SearchProducts';
import Products from './moibleComponents/ProductsList';
import Header from "./moibleComponents/components/Navbar";
import ProductsCard from './moibleComponents/components/ProductsCard';
import Footer from './moibleComponents/components/Footer';

function App() {
  return (
    <div className='bg-[#1F2833]'>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productsCard" element={<ProductsCard />} />
          <Route path="/productsSearch" element={<SearchProducts />} />
        
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
    
  
  )
};

export default App;
