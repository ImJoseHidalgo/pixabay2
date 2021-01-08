import React from 'react';
import DataGridItem from './DataGridItem';

export const DataGrid = ({ hits, keyword }) => {
  
  return (
    <div>
      {hits.map(({id, tags, likes, previewURL}) => <DataGridItem key={id} id={id} tag={tags} likes={likes} img={previewURL} />)}
    </div>
  )
}
