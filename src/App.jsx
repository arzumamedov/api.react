import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './products';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products/>} ></Route> 
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App