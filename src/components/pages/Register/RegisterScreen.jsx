import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRegisterWithEmailPassword } from '../../../actions/auth';
import { useForm } from '../../../hooks/useForm';
import logo from '../../../icons/logo-Pixabay.png';
import { LoginStyles } from '../Login/Login.styles';

const RegisterScreen = () => {

  const dispatch = useDispatch();

  const [ formValues, handleInputChange ] = useForm({
    userName: '',
    email: '',
    password: '',
    password2: ''
  });

  const { userName, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    // dispatch(startLoginEmailPassword(email, password));
    if(isFormValid) {
      dispatch(startRegisterWithEmailPassword(email, password, userName));
    }
  }

  const isFormValid = () => {
    return true;
  }

  return (
    <LoginStyles>
      <form onSubmit={handleRegister}>
        <div className="title">
          <Link to='/'><img src={logo} alt="pixabay-logo"/></Link>
        </div>
        <div className="text register">
          <h2>Regístrate para guardar<br/>tus fotos favoritas</h2>
        </div>
        <input type="text" placeholder='Nombre' name='userName' value={userName} onChange={handleInputChange} />
        <input type="email" placeholder='Email' name='email' value={email} onChange={handleInputChange} />
        <input type="password" placeholder='Contraseña' name='password' value={password} onChange={handleInputChange} />
        <input type="password" placeholder='Repita su contraseña' name='password2' value={password2} onChange={handleInputChange} />
        <button type='submit' >Registrarse</button>
        <Link to='/login'><p>Ya tienes una cuenta?</p></Link>
        <p>Al registrarte, aceptas nuestras Condiciones, la Política de datos y la Política de cookies.</p>
      </form>
    </LoginStyles>
  )
}

export default RegisterScreen
