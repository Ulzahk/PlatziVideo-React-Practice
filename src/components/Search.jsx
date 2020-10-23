import React from 'react';
import '../assets/styles/components/Search.scss';

const mainTitleText = '¿Qué quieres ver hoy?';
const mainInputPlaceholderText = 'Buscar...';
const Search = () => (
  <section className='main'>
    <h2 className='main__title'>{mainTitleText}</h2>
    <input className='main__input' type='text' placeholder={mainInputPlaceholderText} />
  </section>
);

export default Search;
