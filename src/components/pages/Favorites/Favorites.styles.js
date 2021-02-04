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
`

export const GridStyles = styled.section`
  max-width: 100%;
  min-height: 60vh;
  margin: 0 3rem 3rem;
  columns: 4;
  gap: 1.5rem;
`

export const FavoritesLogin = styled.section`
  min-height: calc(100vh - 9rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
`