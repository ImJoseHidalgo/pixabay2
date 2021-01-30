import React from 'react';
import { Link } from 'react-router-dom';

export const DataGridItem = ({ id, tag, likes, img }) => {
  return (
    <Link to={`/img/${id}`}>
      <div className='img-container'>
        <img src={img} alt={tag} />
      </div>
    </Link>
  )
}
export default DataGridItem;


// ?attachment para descargar
// Visualizador de imagenes
// https://github.com/xiabingwu/react-viewerjs/blob/master/README-en.md