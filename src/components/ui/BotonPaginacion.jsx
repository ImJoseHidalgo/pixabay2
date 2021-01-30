import React, { useEffect, useState } from 'react';

export const BotonPaginacion = ({ prev, next, page }) => {
  const keyword = localStorage.getItem('lastKeyword');
  const [totalImgs, setTotalImgs] = useState(0);

  const API_KEY = '19792472-060d63124e6749716f410447d';

  useEffect(() => {
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${keyword}&image_type=photo`
    fetch(API_URL)
      .then((response) => response.json())
      .then(({ total }) => setTotalImgs(total))
  }, [keyword]);

  return (
    <div className='botones-paginacion'>
      <h2>Resultados para: {decodeURI(keyword)}</h2>
      <div className='botones'>
        <button onClick={prev} >Anterior</button>
        <h2>{page}</h2>
        <button onClick={next} >Siguiente</button>
      </div>
      <h2>{totalImgs} imagenes encontradas</h2>
    </div>
  )
}