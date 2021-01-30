import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../../actions/auth';
import { useForm } from '../../../hooks/useForm';

import googleIcon from '../../../icons/google.svg';
import facebookIcon from '../../../icons/facebook.svg';
import logo from '../../../icons/logo-Pixabay.png';
import { Link } from 'react-router-dom';

const LoginScreen = () => {

  const dispatch = useDispatch();

  const [ formValues, handleInputChange ] = useForm({
    email: '',
    password: ''
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(12345, 'joselo'));
  }

  return (
    <div className='auth__loginScreen'>
      <form onSubmit={handleLogin}>
        <div className="title">
          <img src={logo} alt="pixabay-logo"/>
        </div>
        <div className="auth__socials">
          <div className="auth__socials-google">
            <div className="container">
              <img src={googleIcon} alt="google icon"/>
              <h2>Iniciar sesión con Google</h2>
            </div>
          </div>
          <div className="auth__socials-facebook">
            <div className="container">
              <img src={facebookIcon} alt="facebook icon"/>
              <h2>Iniciar sesión con Facebook</h2>
            </div>
          </div>
        </div>
        <div className="text">
          <h2>también puedes iniciar<br/>sesión con tu correo</h2>
        </div>
        <input type="email" placeholder='Email' name='email' value={email} onChange={handleInputChange} />
        <input type="password" placeholder='Contraseña' name='password' value={password} onChange={handleInputChange} />
        <button type='submit' >Iniciar Sesión</button>
        <Link to='/'><p>Crear una cuenta nueva.</p></Link>
      </form>
    </div>
  )
}

export default LoginScreen;