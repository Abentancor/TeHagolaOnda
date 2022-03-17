import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Inicio from './Routes/Inicio';
import Pedidos from './Routes/Pedidos';
import Products from './Routes/Products';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Inicio/>}/>
        <Route path='/Acercadenosotros'element={<About/>}></Route>
        <Route path='/Contacto'element={<Contact/>}></Route>
        <Route path='/Productos'element={<Products/>}></Route>
        <Route path='/Pedidos'element={<Pedidos/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
