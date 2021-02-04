import styled from "styled-components";

export const ContainerStyles = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: .4rem;
    margin-top: 1.5rem;
    object-fit: cover;
  }

  @media only screen and (max-width: 600px) {
    img {
      margin-top: .8rem;
    }
  }
`