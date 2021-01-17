import React from 'react';
import { BotonPaginacion } from './BotonPaginacion';
import { DataGrid } from './DataGrid';

export const Main = ({ keyword, hits, prev, next }) => {
  return (
    <main>
      <h1>Ultima Busqueda: {keyword}</h1>
      <BotonPaginacion prev={prev} next={next} />
      <DataGrid keyword={keyword} hits={hits} />
        {/* {state.map(tipe => <DataGrid key={tipe} tipe={tipe} />)} */}
        {/* <DataGrid tipe={tipe} /> */}
      <BotonPaginacion prev={prev} next={next} />
    </main>
  )
}
export default Main;