import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import {Routes,Route} from "react-router-dom"
import ProductDetails from './Components/Product-Details';
import About from './Components/About';
import Contact from './Components/Contact';
// import Category from './Components/Category';
import Productcard from './Components/Product-id';
import MyProduct from './Components/Materials';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MyProduct/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='/product' element={<Productcard/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
