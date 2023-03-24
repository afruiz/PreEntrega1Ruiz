import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import CartWidget from './components/CartWidget/CartWidget'
import CartOff from './components/CartOff/CartOff'
import ItemList from './components/ItemList/ItemList'


function App() {

  return (
    <div className="App">
      <Navbar />
      <ItemList />
      <CartWidget />
      <CartOff />
    </div>
  )
}

export default App
