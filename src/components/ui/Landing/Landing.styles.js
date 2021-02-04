import styled from 'styled-components';

export const Main = styled.main`
  padding: 0 3rem;
  h2 {
    margin: 3rem 0 1rem;
    font-size: 2rem;
    font-weight: 400;
  }
  span {
    margin: 1rem 0;
    font-size: 2rem;
    cursor: pointer;
    font-weight: 200;
    text-decoration: underline;
    color: #000;
  }
  span:hover {
    font-size: 1.9rem;
    font-weight: 600;
  }

  @media only screen and (max-width: 600px) {
    padding: 0 2rem;
    h2 {
      margin: 0 0 1rem;
    }
    h2, span, span:hover {
      font-size: 1.6rem;
    }
  }
`
export const Title = styled.div`
  height: 21rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Abril Fatface', cursive;
    font-size: 5rem;
    font-weight: 400;
  }
  h2 {
    margin: 1rem 0;
    font-size: 2.2rem;
    font-weight: 400;
  }

  @media only screen and (max-width: 600px) {
    height: 18rem;

    h1 {
      font-size: 2.6rem;
    }
    h2 {
      font-size: 1.6rem;
    }
  }
`