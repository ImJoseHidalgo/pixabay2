import React from 'react';
import { Link } from 'react-router-dom';

export const DataGridItem = ({ id, tag, likes, img }) => {
  return (
    <Link to={`/img/${id}`}>
      <div className='img-container'>
        {/* <h1>Tags: {tag}</h1>
        <h3>Likes: {likes}</h3> */}
        <img src={img} alt={tag} />
      </div>
    </Link>
  )
}
export default DataGridItem;


// ?attachment para descargar
// Visualizador de imagenes
// https://github.com/xiabingwu/react-viewerjs/blob/master/README-en.md