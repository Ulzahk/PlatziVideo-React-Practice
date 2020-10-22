import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const profile = 'Perfil';
const account = 'Cuenta';
const Signout = 'Cerrar Sesión';
const Header = () => (
  <header className='header'>
    <img
      className='header__img'
      src={logo}
      alt='Logo Platzi Video'
    />
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
          <a href='/'>{Signout}</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
