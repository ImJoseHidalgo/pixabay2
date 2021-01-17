import React from 'react';
import DataGridItem from './DataGridItem';

export const DataGrid = ({ hits, keyword }) => {
  
  return (
    <section className='imgs-container'>
      {hits.map(({id, tags, likes, webformatURL}) => <DataGridItem key={id} id={id} tag={tags} likes={likes} img={webformatURL} />)}
    </section>
  )
}
