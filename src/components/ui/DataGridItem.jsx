import React from 'react';
import { Link } from 'react-router-dom';

export const DataGridItem = ({ id, tag, img, path }) => {
  
  return (
    <Link to={id ? `/img/${id}` : path}>
      <div className='img-container animate__animated animate__fadeIn'>
        <img src={img} alt={tag} />
      </div>
    </Link>
  )
}
export default DataGridItem;


// ?attachment para descargar
// Visualizador de imagenes
// https://github.com/xiabingwu/react-viewerjs/blob/master/README-en.md