/* eslint-disable react/button-has-type */
import React from 'react';
import '../assets/styles/components/Signup.scss';

const Signup = () => (
  <section className='signup'>
    <section className='signup__container'>
      <h2>Registrate</h2>
      <form className='signup__container--form' action=''>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button'>Registrarme</button>
      </form>
      <p className='signup__container--register'>
        <a href='/login'>Iniciar Sesión</a>
      </p>
    </section>
  </section>
);

export default Signup;
