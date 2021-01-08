import React from 'react';
import { DataGrid } from './DataGrid';

export const Main = ( {keyword, hits} ) => {
  return (
    <div>
      <h1>Ultima Busqueda: {keyword}</h1>
      <DataGrid keyword={keyword} hits={hits} />
        {/* {state.map(tipe => <DataGrid key={tipe} tipe={tipe} />)} */}
        {/* <DataGrid tipe={tipe} /> */}
    </div>
  )
}
