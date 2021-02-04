import React from 'react';
import DataGridItem from '../../ui/DataGridItem/DataGridItem';
import useData from '../../../hooks/useData';
import HeaderHomeSearch from '../../ui/HomeSearch/HeaderHomeSearch';
import Landing from '../../ui/Landing/Landing';
import Loading from '../../ui/Loading/Loading';
import { GridStyles } from './HomeScreen.styles';

const HomeScreen = ({ history, props }) => {
  const {loading, imgs} = useData();

  const handleSearch = (keyword) => {
    localStorage.setItem('page', 1);
    history.push(`/search/${keyword}/1`);
  }
  
  return (<>
    <HeaderHomeSearch handleSearch={handleSearch} />
    <Landing />
    {loading 
      ? <Loading />
      : <GridStyles>
      {imgs.map(({id, tags, likes, webformatURL}) => <DataGridItem key={id} id={id} tag={tags} likes={likes} img={webformatURL} />)}
    </GridStyles>}
  </>)
}

export default HomeScreen;
