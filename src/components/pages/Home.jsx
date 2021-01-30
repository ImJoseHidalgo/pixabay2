import React, { useState } from 'react';
// import { useLocation } from 'wouter';
import DataGridItem from '../DataGridItem';
import useData from '../hooks/useData';
import HeaderHomeSearch from '../HeaderHomeSearch';
import Landing from '../Landing';

const Home = () => {
  const [keyword, setKeyword] = useState('');
  // const [path, pushLocation] = useLocation();

  const {loading, imgs} = useData();

  const handleSearch = (keyword) => {
    setKeyword(keyword);
    localStorage.setItem('page', 1)
    // pushLocation(`/search/${keyword}/1`);
  }
  
  return (<>
    <HeaderHomeSearch handleSearch={handleSearch} />
    <Landing />
    {loading 
      ? <h1>Cargando...</h1>
      : <section className='imgs-container'>
      {imgs.map(({id, tags, likes, webformatURL}) => <DataGridItem key={id} id={id} tag={tags} likes={likes} img={webformatURL} />)}
    </section>}
  </>)
}

export default Home;
