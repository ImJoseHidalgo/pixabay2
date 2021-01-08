import React, { useEffect, useState } from 'react';
import { Main } from './components/Main';
import { Header } from './components/Header';

export const App = () => {
  const [imgs, setImgs] = useState([]);
  const [keyword, setKeyword] = useState('mar azul');

  const API_KEY = '19792472-060d63124e6749716f410447d';
  useEffect(() => {
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURI(keyword)}&image_type=photo`
    fetch(API_URL)
      .then((response) => {
        return response.json()
      })
      .then(({hits}) => {
        setImgs(hits);
      })
  }, [keyword]);
  
  const handleSearch = (keyword) => {
    setKeyword(keyword);
  }

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Main keyword={keyword} hits={imgs} />
    </>
  )
}

export default App;