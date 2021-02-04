import styled from 'styled-components'

export const FavoritesFalseStyles = styled.div`
  min-height: calc(100vh - 9rem);
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    margin-top: -9rem;
  }
  `
export const FavoritesTrueStyles = styled.div`
  h5 {
    font-size: 3rem;
    margin: 2rem 0;
    font-weight: 500;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    h5 {
      font-size: 2rem;
      margin: 1rem 0
    }
  }
`

export const GridStyles = styled.section`
  max-width: 100%;
  min-height: 60vh;
  margin: 0 3rem 3rem;
  columns: 4;
  gap: 1.5rem;

  @media only screen and (max-width: 1280px) {
    columns: 3;
  }

  @media only screen and (max-width: 1024px) {
    columns: 2;
  }

  @media only screen and (max-width: 600px) {
    columns: 1;
    margin: 0 2rem 2rem;
  }
`

export const FavoritesLogin = styled.section`
  min-height: calc(100vh - 9rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-top: -9rem;
  }
  
  a {
    font-size: 3rem;
    color: #333;
    margin-top: 2rem;
    font-weight: 500;
  }

  @media only screen and (max-width: 600px) {
    padding: 0 2rem;
    h1 {
      font-size: 2rem;
      width: 90%;
      margin-top: -12rem;
    }
    a {
      font-size: 2rem;
    }
  }
`