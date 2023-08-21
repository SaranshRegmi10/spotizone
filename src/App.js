import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import {Routes,Route} from "react-router-dom"
import ProductDetails from './Components/Product-Details';
import About from './Components/About';
import Contact from './Components/Contact';
// import Category from './Components/Category';
// import Productcard from './Components/Product-id';
import MyProduct from './Components/Materials';
import CategoryProducts from './Components/CategoryProduct';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='/products' element={<MyProduct/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/categories/:name' element={<CategoryProducts/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<div><h1>404 ERROR</h1></div>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
