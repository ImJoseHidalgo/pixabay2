import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startFacebookLogin, startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';
import { useForm } from '../../../hooks/useForm';

import googleIcon from '../../../icons/google.svg';
import facebookIcon from '../../../icons/facebook.svg';
import logo from '../../../icons/logo-Pixabay.png';
import { Link } from 'react-router-dom';
import { LoginStyles, SocialsStyles } from './Login.styles';

const LoginScreen = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui)

  const [ formValues, handleInputChange ] = useForm({
    email: '',
    password: ''
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  const handleFacebookLogin = () => {
    dispatch(startFacebookLogin());
  }

  return (
    <LoginStyles>
      <form onSubmit={handleLogin}>
        <div className="title">
          <img src={logo} alt="pixabay-logo"/>
        </div>
        <SocialsStyles>
          <div className="auth__socials-google" onClick={handleGoogleLogin}>
            <div className="container">
              <img src={googleIcon} alt="google icon"/>
              <h2>Iniciar sesión con Google</h2>
            </div>
          </div>
          <div className="auth__socials-facebook" onClick={handleFacebookLogin}>
            <div className="container">
              <img src={facebookIcon} alt="facebook icon"/>
              <h2>Iniciar sesión con Facebook</h2>
            </div>
          </div>
        </SocialsStyles>
        <div className="text">
          <h2>también puedes iniciar<br/>sesión con tu correo</h2>
        </div>
        <input type="email" placeholder='Email' name='email' value={email} onChange={handleInputChange} />
        <input type="password" placeholder='Contraseña' name='password' value={password} onChange={handleInputChange} />
        <button type='submit' disabled={loading}>Iniciar Sesión</button>
        <Link to='/register'><p>Crear una cuenta nueva.</p></Link>
      </form>
    </LoginStyles>
  )
}

export default LoginScreen;