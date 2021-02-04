import styled from 'styled-components'

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