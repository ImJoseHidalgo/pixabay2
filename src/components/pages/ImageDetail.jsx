import React, { useState } from 'react';
import { useLocation } from 'wouter';
import GetImgData from '../../services/GetImgData';
import HeaderSearch from '../HeaderSearch';
import iconUser from '../../icons/icon-user.png';
import likeIcon from '../../icons/corazon.svg';

const ImageDetail = ({ params }) => {
  const {id} = params;
  const { tags, webformatURL: shortImg, largeImageURL: largeImg, views, downloads, favorites, user, userImageURL: userImg } = GetImgData(id);

  const [inpKeyword, setInpKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  const handleSearch = (inpKeyword) => {
    setInpKeyword(inpKeyword);
    localStorage.setItem('page', 1);
    pushLocation(`/search/${inpKeyword}/1`);
  }
  window.scrollTo(0,0);
  
  return (
    <>
      <HeaderSearch handleSearch={handleSearch} />
      <div className="image-detail">
        <div className="left">
          {/* <img src={shortImg} alt={tags} /> */}
          <img src={largeImg} alt={tags} />
            <div className="add-favorite">
              <h2>Añadir a favoritos</h2>
              <img src={likeIcon} alt='like icon' />
            </div>
        </div>
        <div className="right">
          <div className="image-user">
            <img src={userImg || iconUser} alt={user} />
            <div className="image-user-name">
              <h3>Autor:</h3>
              <h2>{user}</h2>
            </div>
          </div>
          <div className="licence">
            <h2>Licencia por Pixabay</h2>
            <h2>Libre para uso comercial</h2>
          </div>
          <div className="botones-descarga">
            <a href={shortImg+'?attachment'} >Descargar Mediano</a>
            <a href={largeImg+'?attachment'} >Descargar Grande</a>
          </div>
          <div className="image-data">
            <h2>Detalles de la imagen</h2>
            <h2>Vistas: <span>{views}</span></h2>
            <h2>Categorias: <span>{tags}</span></h2>
            <h2>favoritos: <span>{favorites}</span></h2>
            <h2>Descargas: <span>{downloads}</span></h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageDetail;
