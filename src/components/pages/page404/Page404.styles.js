import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 9rem);
  margin-top: -9rem;

  h1 {
    font-size: 8rem;
  }
  p {
    margin-top: 2rem;
    font-size: 3rem;
  }
  a {
    font-size: 3rem;
    margin-top: 2rem;
    text-decoration: underline;
    padding: 1.4rem 3rem 1.5rem;
    border-radius: 5rem;
    color: #000;
    font-weight: 400;
  }
  a:hover {
    text-decoration: none;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .1);
  }

  @media only screen and (max-width: 600px) {
    margin-top: -12rem;
    padding: 0 2rem;
    h1 {
    font-size: 5rem;
    }
    p {
      margin-top: 2rem;
      font-size: 2rem;
      text-align: center;
    }
    a {
      font-size: 2rem;
      margin-top: 0rem;
    }
  }
`