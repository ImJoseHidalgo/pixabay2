import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { BotonPaginacion } from '../BotonPaginacion';
import DataGridItem from '../DataGridItem';
import HeaderSearch from '../HeaderSearch';
import useData from '../hooks/useData';

export const DataGrid = ({params}) => {
  const {keyword, page} = params

  const [inpKeyword, setInpKeyword] = useState('');
  const [path, pushLocation] = useLocation();
  
  const { loading, imgs } = useData({keyword, page});
  
  const handleSearch = (inpKeyword) => {
    setInpKeyword(inpKeyword);
    localStorage.setItem('page', 1);
    pushLocation(`/search/${inpKeyword}/1`);
  }
  
  const nextPage = () => {
    localStorage.setItem('page', Number(page)+1);
    pushLocation(`/search/${keyword}/${Number(page) + 1}`);
  }
  const prevPage = () => {
    if (Number(page) === 1)  return;
    localStorage.setItem('page', Number(page)-1);
    pushLocation(`/search/${keyword}/${Number(page) - 1}`);
  }

  return (<>
    <HeaderSearch handleSearch={handleSearch} />
    <BotonPaginacion prev={prevPage} next={nextPage} />
    {loading 
      ? <h1>Cargando...</h1>
      : <section className='imgs-container'>
      {imgs.map(({id, tags, likes, webformatURL}) => <DataGridItem key={id} id={id} tag={tags} likes={likes} img={webformatURL} />)}
    </section>}
  </>)
}
