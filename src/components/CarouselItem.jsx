import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div className="carousel-item">
    <img
      className="carousel-item__img"
      src="https://images.pexels.com/photos/2477357/pexels-photo-2477357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Banda de musica"
    />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details--img"
          src="./images/icons8-play-64.png"
          alt="Botón de Play"
        />
        <img
          className="carousel-item__details--img"
          src="./images/icons8-plus-64.png"
          alt="Botón de Agregar"
        />
      </div>
      <p className="carousel-item__details--title">Título descriptivo</p>
      <p className="carousel-item__details--subtitle">2020 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
