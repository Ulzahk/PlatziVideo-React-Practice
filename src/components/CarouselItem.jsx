import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playButton from '../assets/static/icons8-play-64.png';
import plusButton from '../assets/static/icons8-plus-64.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src={cover}
      alt={title}
    />
    <div className='carousel-item__details'>
      <div>
        <img
          className='carousel-item__details--img'
          src={playButton}
          alt='Botón de Play'
        />
        <img
          className='carousel-item__details--img'
          src={plusButton}
          alt='Botón de Agregar'
        />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>
        {`${year}, ${contentRating} ${duration}`}
      </p>
    </div>
  </div>
);

export default CarouselItem;
