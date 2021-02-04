import styled from "styled-components";

export const HeaderHSearch = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9rem;
  text-align: center;
  padding: 0 3rem;
  form img {
    height: 1.6rem;
    width: 1.6rem;
    margin-bottom: -.2rem;
    object-fit: cover;
  }
  form {
    width: 70rem;
    position: relative;
  }
  form input {
    position: relative;
    border: none;
    outline: none;
    background: #e8e8e8;
    height: 5rem;
    width: 100%;
    border-radius: 0 5rem 5rem 0;
    margin-left: 5rem;
    text-align: start;
  }
  form button {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    background: #e8e8e8;
    border: none;
    outline: none;
    height: 5rem;
    width: 5rem;
    margin-bottom: -.2rem;
    border-radius: 5rem 0 0 5rem;
  }

  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "logo login"
      "form form";
    padding: 0 2rem;
    height: 12rem;

    form {
      grid-area: form;
      width: 28rem;
      margin-left: 0rem
    }
    form input {
      margin-left: 5rem;
      height: 4rem;
    }
    form button {
      height: 4rem;
      margin-right: 5rem;
    }
  }
`

export const LogoImg = styled.img`
  width: 16rem;
  height: 5rem;
  object-fit: cover;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    grid-area: logo;
    width: 10rem;
    margin-left: -6.5rem;
  }
`
export const HeaderLogin = styled.div`
  grid-area: login;
  display: flex;
  align-items: center;
  position: relative;

  .favorites {
    font-weight: 500;
    font-size: 2rem;
    margin-right: 2rem;
    cursor: pointer;
  }
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  .logout__button,
  .logout__button {
    cursor: pointer;
    position: absolute;
    height: 6rem;
    width: 20rem;
    right: 0;
    top: 120%;
    border-radius: 1rem;
    box-shadow: 1px 1px 12px rgba(0, 0, 0, .1);
    border-top: 0;
    /* background: #E8E8E8; */
    background: #F3F3F3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logout__button:hover,
  .logout__button:hover {
    box-shadow: 1px 1px 12px rgba(0, 0, 0, .2);
    text-decoration: underline;
  }
  .logout__button,
  .logout__button h2 {
    font-weight: 400;
  }
  .user {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .user img:first-child {
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 1rem;
  }

  @media only screen and (max-width: 600px) {
    margin-left: .5rem;

    a,
    .favorites {
      margin-bottom: .3rem;
      margin-right: 1rem;
      text-decoration: none;
      font-weight: 500;
      color: #000;
      font-size: 1.8rem;
    }
    img {
      width: 3.5rem;
      height: 3.5rem;
    }
    .logout__button {
      height: 5rem;
      width: 16rem;
    }
  }
`