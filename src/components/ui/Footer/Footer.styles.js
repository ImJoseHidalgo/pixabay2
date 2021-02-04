import styled from "styled-components";

export const FooterStyled = styled.footer`
  padding: 0 3rem;

  @media only screen and (max-width: 600px) {
    padding: 0 2rem;
  }
`

export const DescriptionStyled = styled.div`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
  font-weight: 400;
  font-size: 2rem;
  max-width: 120rem;
  color: #333;
  margin-bottom: 2rem;
  }

  h2:first-child {
    font-size: 4rem;
  }

  a {
    color: #444;
    font-size: 2rem;
  }

  a:hover {
    color: #000;
  }

  @media only screen and (max-width: 600px) {
    min-height: 30rem;

    h2:first-child {
      font-size: 2.4rem;
    }
    h2 {
      font-size: 1.6rem;
    }
    a {
      font-size: 1.6rem;
    }
  }
`

export const AuthorStyled = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    color: #222;
    font-size: 1.8rem;
  }
  a {
    color: #444;
    font-size: 1.8rem;
  }
  a:hover {
    color: #000;
  }
  @media only screen and (max-width: 600px) {
    height: 8rem;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-weight: 400;
      font-size: 1.6rem;
    }
    a {
      font-size: 1.6rem;
    }
  }
`