
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Product from './pages/Product';
import ProtectedPages from './pages/ProtectedPages';
import Cart from './pages/Cart';
import NoPage from './pages/Nopage';
import Checkout from './pages/Checkout';

function App() {

  return (
    <div className="App">
      <Routes>
        {/*Rutas Publicas*/}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' />
        {/*Rutas Privadas*/}
        <Route element={<ProtectedPages />} >
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/cart/success' element={<Checkout />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  )
};

export default App;