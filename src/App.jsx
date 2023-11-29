{/* arreglar el enrutamiento para que al hacer click en productos me abra el componente solo */}
{/* arreglar el ancho de la pagina porque hace scroll hacia la izquierda*/}
{/* agregar carrito de compras*/}
{/* */}
{/* */}

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import NavBar from './Componentes/NavBar';
import ImgFondo from './Componentes/ImgFondo';
import CardsContent1 from './Componentes/Cards/CardsContent1';
import CardsContent2 from './Componentes/Cards/CardsContent2';
import Conocenos from './Componentes/Conocenos';
import Footer from './Componentes/Footer';
import Productos from './Componentes/Productos'; // Asegúrate de colocar la ruta correcta

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Productos" element={<Productos />} />
          {/* ... (otras rutas) */}
        </Routes>
        <NavBar />
        <ImgFondo />
        <CardsContent1 />
        <CardsContent2 />
        <Conocenos />
        <Footer />
      </div>
    </Router>
  );
};

export default App;