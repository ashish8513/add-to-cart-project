import React from 'react'
import Home from './components/Home'
import './App.css';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <>
      <div className='bg-white'>

        <CartProvider>
          <Home />
          <Cart />
        </CartProvider>
      </div>
    </>
  )
}

export default App
