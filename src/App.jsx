
{/* arreglar el ancho de la pagina porque hace scroll hacia la izquierda*/}
{/* agregar carrito de compras*/}
{/* arreglar cards de ofertas*/}
{/* */}

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import NavBar from './Componentes/NavBar';
import ImgFondo from './Componentes/ImgFondo';
import Conocenos from './Componentes/Conocenos';
import Footer from './Componentes/Footer';
import Productos from './Componentes/Productos';
import ProductosDestacados from './Componentes/Cards/ProductosDestacados';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/Productos" element={<Productos />} />
        
      </Routes>
    </Router>
  );
};

const HomeContent = () => (
  <>
  <Header/>
    <NavBar />
    <ImgFondo />
    <Conocenos />
    <ProductosDestacados />
    <Footer />
  </>
);



export default App;