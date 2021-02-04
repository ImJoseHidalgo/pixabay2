import styled from "styled-components";

export const PaginacionStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  text-align: center;
  height: 6rem;
  padding: 0 3rem;

  h2 {
    text-align: start;
    font-size: 2rem;
    font-weight: 500;
    color: #444;
  }

  h2:last-child {
    text-align: end;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    height: 100%;
    padding: 0 2rem;

    h2 {
      display: none;
    }
  }
`

export const ButtonsStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    display: block;
    width: 3rem;
    text-align: center;
  }
  
  button {
    border: none;
    outline: none;
    background: #000;
    font-weight: 400;
    color: #fff;
    height: 4rem;
    width: 10rem;
    border-radius: 5rem;
  }

  @media only screen and (max-width: 600px) {
    margin: 1rem 0;
    h2 {
      width: 3rem;
    }
    button {
      font-size: 1.6rem;
      height: 3.3rem;
    }
  }
`