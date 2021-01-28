import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../../actions/auth';
import { useForm } from '../../../hooks/useForm';

const LoginScreen = () => {

  const dispatch = useDispatch();

  const [ formValues, handleInputChange ] = useForm({
    email: 'ergun@gmail.com',
    password: '123456'
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(12345, 'joselo'));
  }

  return (
    <div className='auth__loginScreen'>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder='Email' name='email' value={email} onChange={handleInputChange} />
        <input type="password" placeholder='Contraseña' name='password' value={password} onChange={handleInputChange} />
        <button type='submit' >Login</button>
        <div className="auth__socials">
          <div className="auth__socials-google">
            <h2>Login con Google</h2>
          </div>
        </div>
        <p>Crear una cuenta nueva.</p>
      </form>
    </div>
  )
}

export default LoginScreen;