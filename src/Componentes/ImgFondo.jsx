import React from 'react';

const ImgFondo = () => {
  return (
    <div style={imageContainerStyle}>
      <img
        src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg" // Reemplaza esto con la URL real de tu imagen
        alt="Imagen de ejemplo"
        style={imageStyle}
      />
    </div>
  );
};

const imageContainerStyle = {
  width: '100%',
  overflow: 'hidden', // Asegura que la imagen no se desborde del contenedor
  marginTop: '50px', // Ajusta el valor según la cantidad de margen superior que desees
};

const imageStyle = {
  width: '100%',
  height: 'auto', // Hace que la altura sea proporcional a la anchura
  animation: 'fadeIn 1s ease-in-out', // Agrega una animación fadeIn de 1 segundo
  borderRadius: '40px'
};

export default ImgFondo;