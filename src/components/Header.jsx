import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const profile = 'Perfil';
const account = 'Cuenta';
const Login = 'Iniciar Sesión';
const Header = () => (
  <header className='header'>
    <Link to='/' rel='canonical'>
      <img
        className='header__img'
        src={logo}
        alt='Logo Platzi Video'
      />
    </Link>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='User' />
        <p>{profile}</p>
      </div>
      <ul>
        <li>
          <a href='/'>{account}</a>
        </li>
        <li>
          <Link to='/login'>{Login}</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
