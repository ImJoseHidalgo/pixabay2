import React, { useState } from 'react';
import DataGridItem from '../../ui/DataGridItem';
import useData from '../../hooks/useData';
import HeaderHomeSearch from '../../ui/HeaderHomeSearch';
import Landing from '../../ui/Landing';
import Loading from '../../ui/Loading';

const HomeScreen = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const {loading, imgs} = useData();

  const handleSearch = (keyword) => {
    setKeyword(keyword);
    localStorage.setItem('page', 1);
    history.push(`/search/${keyword}/1`);
  }
  
  console.log(loading);
  return (<>
    <HeaderHomeSearch handleSearch={handleSearch} />
    <Landing />
    {loading 
      ? <Loading />
      : <section className='imgs-container'>
      {imgs.map(({id, tags, likes, webformatURL}) => <DataGridItem key={id} id={id} tag={tags} likes={likes} img={webformatURL} />)}
    </section>}
  </>)
}

export default HomeScreen;
