import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ImageView = () => {
  const {id} = useParams();
  const [img, setImg] = useState([]);

  const API_KEY = '19792472-060d63124e6749716f410447d';
  useEffect(() => {
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&id=${id}`
    fetch(API_URL)
      .then((response) => response.json())
      .then(({hits}) => setImg(hits[0]))
  }, [id]);

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
  } = img;

  return (
    <div>
      <h1>Esta Es La Imagen: {tags}</h1>
      <img src={largeImg} alt={tags} />
    </div>
  )
}

export default ImageView
