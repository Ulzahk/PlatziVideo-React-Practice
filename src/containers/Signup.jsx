/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupRequest } from '../actions';
import '../assets/styles/components/Signup.scss';

const Signup = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = () => {
    event.preventDefault();
    props.signupRequest(form);
    props.history.push('/');
  };
  return (
    <section className='signup'>
      <section className='signup__container'>
        <h2>Registrate</h2>
        <form className='signup__container--form' action='' onSubmit={handleSubmit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Nombre'
            onChange={handleInput}
          />
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button' type='submit'>Registrarme</button>
        </form>
        <p className='signup__container--register'>
          <Link to='/login'>Iniciar Sesión</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  signupRequest,
}
export default connect(null, mapDispatchToProps)(Signup);