import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BotonPaginacion } from '../../ui/BotonPaginacion';
import DataGridItem from '../../ui/DataGridItem';
import HeaderSearch from '../../ui/HeaderSearch';
import useData from '../../hooks/useData';
import Loading from '../../ui/Loading';

export const ResultsScreen = ({ history }) => {
  const {keyword, page} = useParams();

  const [inpKeyword, setInpKeyword] = useState('');
  
  const { loading, imgs } = useData({keyword, page});
  
  const handleSearch = (inpKeyword) => {
    setInpKeyword(inpKeyword);
    localStorage.setItem('page', 1);
    history.push(`/search/${inpKeyword}/1`);
  }
  
  const nextPage = () => {
    localStorage.setItem('page', Number(page)+1);
    history.push(`/search/${keyword}/${Number(page) + 1}`);
  }
  const prevPage = () => {
    if (Number(page) === 1)  return;
    localStorage.setItem('page', Number(page)-1);
    history.push(`/search/${keyword}/${Number(page) - 1}`);
  }

  return (<>
    <HeaderSearch handleSearch={handleSearch} />
    <BotonPaginacion prev={prevPage} next={nextPage} page={page} />
    {loading 
      ? <Loading />
      : <section className='imgs-container'>
      {imgs.map(({id, tags, likes, webformatURL}) => <DataGridItem key={id} id={id} tag={tags} likes={likes} img={webformatURL} />)}
    </section>}
    <BotonPaginacion prev={prevPage} next={nextPage} page={page} />
  </>)
}
