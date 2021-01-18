import React from 'react';
import GetImgData from '../../services/GetImgData';

const ImageDetail = ({ params }) => {
  const {id} = params;

  const { 
    tags,
    // webformatURL: shortImg,
    largeImageURL: largeImg,
    // views,
    // downloads,
    // favorites,
    // likes,
    // comments,
    // user_id: userId,
    // user,
    // userImageURL: userImg
   } = GetImgData(id);

  return (
    <div>
      <h1>Esta Es La Imagen: {tags}</h1>
      <img src={largeImg} alt={tags} />
    </div>
  )
}

export default ImageDetail;
