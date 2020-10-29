/* eslint-disable */
import React, { useState }from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { loginRequest } from '../actions'
import googleIcon from "../assets/static/icons8-google-plus-50.png";
import twitterIcon from "../assets/static/icons8-twitter-50.png";
import "../assets/styles/components/Login.scss";
const Login = (props) => {
	const [form, setValues] = useState({
		email: '',

	});
	const handleInput = () => {
		setValues({
			...form,
			[event.target.name]: event.target.value
		})
	}

	const handleSubmit = () => {
		event.preventDefault();
		props.loginRequest(form);
		props.history.push('/');
	}

  return (
    <section className="login">
      <section className="login__container">
        <h2>Iniciar Sesión</h2>
        <form className="login__container--form" action="" onSubmit={handleSubmit}>
					<input 
						name="email" 
						className="input" type="text" 
						placeholder="Correo" 
						onChange={handleInput} 
					/>
					<input 
						name="password" 
						className="input" 
						type="password"
						placeholder="Contraseña" 
						onChange={handleInput} 
					/>
          <button className="button" type="submit">Iniciar Sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" name="" id="cbox1" value="checkbox" />{" "}
              Recuerdame
            </label>
            <a href="/">Olvide mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} alt="Icono Google" />
            Iniciar Sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt="Icono Twitter" />
            Iniciar Sesión con Twitter
          </div>
        </section>
        <p className="login__container--register">
          No tienes ninguna cuenta <Link to="/sign-up">Registrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
	loginRequest,
}
export default connect(null, mapDispatchToProps)(Login);

