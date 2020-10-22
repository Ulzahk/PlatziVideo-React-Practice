import React from 'react'
import '../assets/styles/components/Header.scss'
const profile = 'Perfil';
const account = 'Cuenta';
const Signout = 'Cerrar Sesión';
const Header = () => (
  <header className="header">
  <img className="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Logo Platzi Video" />
  <div className="header__menu">
    <div className="header__menu--profile">
      <img src="../assets/user-icon.png" alt="User Image" />
      <p>{profile}</p>
    </div>
    <ul>
      <li><a href="/">{account}</a></li>
      <li><a href="/">{Signout}</a></li>
    </ul>
  </div>
</header>
)

export default Header