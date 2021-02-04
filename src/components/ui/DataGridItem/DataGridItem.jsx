import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerStyles } from './DataGridItem.styles';

export const DataGridItem = ({ id, tag, img, path }) => {
  
  return (
    <Link to={id ? `/img/${id}` : path}>
      <ContainerStyles className='animate__animated animate__fadeIn'>
        <img src={img} alt={tag} />
      </ContainerStyles>
    </Link>
  )
}
export default DataGridItem;


// ?attachment para descargar
// Visualizador de imagenes
// https://github.com/xiabingwu/react-viewerjs/blob/master/README-en.md