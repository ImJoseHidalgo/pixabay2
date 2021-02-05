import React from 'react';
import { Link } from 'react-router-dom';
import GetImgData from '../../../services/GetImgData';
import { ContainerStyles } from './DataGridItem.styles';

export const DataGridItem = ({ id, tag, img, imgF, path }) => {

  
  if(!id) {
    const { img: imgFa }= GetImgData(imgF);
    const { webformatURL: shortImg, tags: tagF } = imgFa;
    
    return (
      <Link to={path}>
        <ContainerStyles className='animate__animated animate__fadeIn'>
          <img loading="lazy" src={shortImg} alt={tagF} />
        </ContainerStyles>
      </Link>
    )
  }
  
  return (
    <Link to={`/img/${id}`}>
      <ContainerStyles className='animate__animated animate__fadeIn'>
        <img loading="lazy" src={img} alt={tag} />
      </ContainerStyles>
    </Link>
  )
}
//   return (
//     <Link to={id ? `/img/${id}` : path}>
//       <ContainerStyles className='animate__animated animate__fadeIn'>
//         {id
//           ? <img loading="lazy" src={img} alt={tag} />
//           : <img loading="lazy" src={shortImg} alt={tagF} />
//         }
//       </ContainerStyles>
//     </Link>
//   )
// }
export default DataGridItem;