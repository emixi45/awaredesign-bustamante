import './App.css';
import Navbar from './components/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter,Routes, Route, Navigate } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import Productos from './components/Productos/Productos';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainter from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:itemId/' element={<ItemDetailContainter/>}/>
          <Route path='/Productos' element={<Productos/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
        {/*footer */}
        </BrowserRouter>
        </div>
        

  );
}

export default App;
