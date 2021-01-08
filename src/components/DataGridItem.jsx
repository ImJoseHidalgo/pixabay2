import React from 'react';

export const DataGridItem = ({ tag, likes, img }) => {
  return (
    <div>
      <h1>Tags: {tag}</h1>
      <h3>Likes: {likes}</h3>
      <img src={img} alt={img} />
    </div>
  )
}
export default DataGridItem;