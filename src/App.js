import './App.css';
import Navbar from './components/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter,Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Productos from './components/Productos/Productos';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainter from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './Context/CartContext';
import Checkout from './components/Checkout/Checkout';



function App() {
  return (
    <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/Item/:itemId/' element={<ItemDetailContainter />} />
            <Route path='/Productos' element={<Productos />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='*' element={<Navigate to='/Home' />} />
          </Routes>
          {/*footer */}
        </BrowserRouter>
    </CartProvider>
  );
}

export default App;
