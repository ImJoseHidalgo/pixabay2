import styled from 'styled-components'

export const DetailStyles = styled.section`
  max-width: 140rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 3rem;
  height: auto;
  padding: 0 3rem;
  margin: 3rem auto;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
    margin: 2rem 0;
    width: 100%;
  }
`
export const LeftStyles = styled.div`
  position: relative;
  max-width: 128rem;
  max-height: 72.5rem;
  text-align: center;
  overflow: hidden;

  img {
    border-radius: 4rem;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    img {
      border-radius: 2rem;
    }
  }
`

export const RightStyles = styled.div`
  width: 37rem;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

export const UserImgStyles = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    margin-right: 2rem;
  }
    h3 {
    font-weight: 400;
    margin-top: -1rem;
    text-align: start;
  }
    h2 {
    font-family: 'Abril Fatface', cursive;
    font-size: 2.4rem;
    font-weight: 400;
    text-align: start;
  }

  @media only screen and (max-width: 600px) {
    img {
      width: 7rem;
      height: 7rem;
    }
    h3 {
      margin-top: 0;
    }
    h2 {
      font-size: 2rem;
    }
  }
`

export const LicenseStyles = styled.div`
  background: #fff;
  border-radius: 2rem;
  padding: 2rem 3rem;
  margin: 2rem 0;

  h2 {
    text-align: start;
    font-size: 2rem;
    font-weight: 400;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 1.8rem;
    }
  }
`

export const BotonesStyles= styled.div`
  height: 10.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  a {
    background: #000;
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    padding: 1rem 0;
    width: 26rem;
    text-align: center;
    border-radius: 5rem;
  }

  a:hover {
    background: #444;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .3);
  }

  @media only screen and (max-width: 600px) {
    a {
      font-size: 1.8rem;
    }
  }
`

export const AddFavoriteStyles = styled.div`
  cursor: pointer;
  background: #fff;
  padding: 1rem 0;
  width: 26rem;
  border-radius: 5rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #F3F3F3;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
  }

  img {
    width: 2rem;
    margin-right: 1rem;
  }

  h2 {
    color: #000;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 400;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 1.8rem;
    }
  }
`

export const ImageDataStyles = styled.div`
  background: #fff;
  border-radius: 2rem;
  padding: 2rem 3rem;
  font-weight: 400;

  h2:first-child {
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 2rem;
    font-weight: 600;
  }
  h2 {
    text-align: start;
    position: relative;
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  h2 span {
    position: absolute;
    right: 0;
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  h2:nth-child(3) span {
    max-width: 20rem;
    max-height: 2.5rem;
    text-align: end;
    overflow: hidden;
  }
  h2 span a {
    font-size: 2rem;
    text-decoration: none;
    color: #000;
  }
  h2 span a:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 600px) {
    h2::first-child {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.8rem;
    }
  }
`