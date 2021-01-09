import React from 'react';

export const DataGridItem = ({ tag, likes, img }) => {
  return (
    <div className='img-container'>
      {/* <h1>Tags: {tag}</h1>
      <h3>Likes: {likes}</h3> */}
      <img src={img} alt={tag} />
    </div>
  )
}
export default DataGridItem;