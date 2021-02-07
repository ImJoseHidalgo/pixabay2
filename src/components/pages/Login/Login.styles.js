import styled from 'styled-components'

export const LoginStyles = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  margin: 0 auto;
  background-color: #fff;

  .title img {
    width: 20rem;
    height: 12rem;
    object-fit: cover;
  }

  form {
    width: 40rem;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  /* .input-box {
    position: relative;
    background: red;
    width: 40rem;
    height: 5rem;
    padding: 2rem;
  }
  .input-box input {
    position: absolute;
    top: 0;
    width: 100%;
  }
  .input-box span {
    position: absolute;
    padding-left: 2rem;
    font-size: 1.6rem;
    transition: .2s;
    color: #666;
  }
  .input-box input:valid ~ span,
  .input-box input:focus ~ span {
    font-size: 1.4rem;
    color: #000;
    transform: translateX(-10px) translateY(-32px);
  } */
  form input {
    border: none;
    outline: none;
    width: 100%;
    height: 5rem;
    border-radius: 3rem;
    margin: .5rem 0;
    text-align: start;
    padding-left: 2.5rem;
    background: #F3F3F3;
    color: #888;
  }
  form button {
    cursor: pointer;
    width: 100%;
    height: 5rem;
    border-radius: 3rem;
    margin: 2rem 0 .5rem;
    background: #2C3042;
    color: #fff;
    border: none;
    outline: none;
  }
  form button:hover {
    background: #4E5C74;
  }

  .text {
    width: 100%;
    padding: 0 1rem;
    text-align: center
  }

  .text.register h2 {
    margin: 0rem 0 3rem;
  }

  .text h2 {
    position: relative;
    margin: 2rem 0 3rem;
    color: #333;
    font-weight: 500;
  }

  .text h2::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    background: #4E5C74;
    width: 22%;
    height: .2rem;
    border-radius: 5rem;
  }

  .text h2::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    background: #4E5C74;
    width: 22%;
    height: .2rem;
    border-radius: 5rem;
  }

  .text h2 span {
    font-size: 2rem;
  }

  p {
    font-weight: 500;
    color: #666;
    margin: 3rem 0;
    text-align: center;
  }
  
  /* p:hover {
    color: #000;
    text-decoration: underline;
  } */
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 0 2rem;

    .text h2 {
      font-size: 1.6rem;
    }
    .text h2::before {
      width: 15%;
    }
    .text h2::after {
      width: 15%;
    }

    form input {
      height: 4.5rem;
      font-size: 1.5rem;
    }
    form button {
      height: 4.5rem;
    }
  }
`

export const SocialsStyles = styled.div`
  width: 100%;

  .auth__socials-facebook,
  .auth__socials-google {
    height: 5rem;
    margin: 1rem 0;

  }

  .auth__socials-facebook .container,
  .auth__socials-google .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-bottom: 1px solid rgba(0,0,0,0.4);
    color: #333;
    font-weight: 400;
    border-radius: 3rem;
    cursor: pointer;
  }

  .auth__socials-facebook .container:hover,
  .auth__socials-google .container:hover {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .3);
    border-bottom: 1px solid rgba(0,0,0,0);
  }

  .auth__socials-facebook .container img,
  .auth__socials-google .container img {
    width: 2rem;
    margin-right: 1rem;
  }

  @media only screen and (max-width: 600px) {
    .auth__socials-facebook,
    .auth__socials-google {
      height: 4.5rem;
    }
  }
`