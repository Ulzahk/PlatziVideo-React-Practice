/* eslint-disable */

import React from 'react';
import googleIcon from '../assets/static/icons8-google-plus-50.png'
import twitterIcon from '../assets/static/icons8-twitter-50.png'
import '../assets/styles/components/Login.scss'
const Login = () => (
  <section className="login">
        <section className="login__container">
            <h2>Iniciar Sesión</h2>
            <form className="login__container--form" action="">
                <input className="input" type="text" placeholder="Correo" />
                <input className="input" type="password" placeholder="Contraseña" />
                <button className="button">Iniciar Sesión</button>
                <div className="login__container--remember-me">
                    <label>
                        <input type="checkbox" name="" id="cbox1" value="checkbox" /> Recuerdame
                    </label>
                    <a href="/">Olvide mi contraseña</a>
                </div>
            </form>
            <section className="login__container--social-media">
                <div><img src={googleIcon} alt="Icono Google" />Iniciar Sesión con Google</div>
                <div><img src={twitterIcon} alt="Icono Twitter"/>Iniciar Sesión con Twitter</div>
            </section>
            <p className="login__container--register">No tienes ninguna cuenta <a href="/sign-up">Registrate</a></p>
        </section>
    </section>
);

export default Login;