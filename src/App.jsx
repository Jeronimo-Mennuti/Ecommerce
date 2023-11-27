import React from 'react';
import Header from './Componentes/Header';
import NavBar from './Componentes/NavBar';
import ImgFondo from './Componentes/ImgFondo';
import CarritoCompras from './Componentes/CarritoCompras';
import CardsContent1 from './Componentes/Cards/CardsContent1';
import CardsContent2 from './Componentes/Cards/CardsContent2';







const App = () => {
  
return (
    <div>
      <Header />
      <NavBar />
      <CarritoCompras />
      <ImgFondo />
      <CardsContent1 />
      <CardsContent2 />
    </div>
  );
};

export default App;