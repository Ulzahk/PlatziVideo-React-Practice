/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playButton from '../assets/static/icons8-play-64.png';
import plusButton from '../assets/static/icons8-plus-64.png';


const CarouselItem = ({ poster_path, original_title, release_date, vote_average, vote_count }) => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src={'//image.tmdb.org/t/p/w220_and_h330_face' + poster_path}
      alt={original_title}
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
      <p className='carousel-item__details--title'>{original_title}</p>
      <p className='carousel-item__details--subtitle'>
        {`${release_date} | ${vote_average} | Votos: ${vote_count}`}
      </p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  poster_path: PropTypes.string,
  original_title: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
};

export default CarouselItem;
