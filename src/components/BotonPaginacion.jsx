import React from 'react';

export const BotonPaginacion = ({ prev, next }) => {

  return (
    <div className='botones-paginacion'>
      <button onClick={prev} >Anterior</button>
      <button onClick={next} >Siguiente</button>
    </div>
  )
}
