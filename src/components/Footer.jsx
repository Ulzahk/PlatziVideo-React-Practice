import React from 'react';
import '../assets/styles/components/Footer.scss';

const footerOption1Text = 'Términos de uso';
const footerOption2Text = 'Declaración de privacidad';
const footerOption3Text = 'Centro de ayuda';

const Footer = () => (
  <footer className='footer'>
    <a href='/'>{footerOption1Text}</a>
    <a href='/'>{footerOption2Text}</a>
    <a href='/'>{footerOption3Text}</a>
  </footer>
);

export default Footer;
