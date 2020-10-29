import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Footer.scss';

const footerOption1Text = 'Términos de uso';
const footerOption2Text = 'Declaración de privacidad';
const footerOption3Text = 'Centro de ayuda';

const Footer = () => (
  <footer className='footer'>
    <a href='/'>{footerOption1Text}</a>
    <a href='/'>{footerOption2Text}</a>
    <Link to='/'>{footerOption3Text}</Link>
  </footer>
);

export default Footer;
