import React, { useEffect, useState } from 'react';
import { Main } from './components/Main';
import { Header } from './components/Header';

export const App = () => {
  const [imgs, setImgs] = useState([]);
  const [keyword, setKeyword] = useState('nevado');
  const [page, setPage] = useState(1)

  const API_KEY = '19792472-060d63124e6749716f410447d';
  useEffect(() => {
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURI(keyword)}&image_type=photo&per_page=10&page=${page}`
    fetch(API_URL)
      .then((response) => {
        return response.json()
      })
      .then(({hits}) => {
        setImgs(hits);
      })
  }, [keyword, page]);
  
  const handleSearch = (keyword) => {
    setKeyword(keyword);
  }

  const nextPage = () => {
    setPage(page + 1);
  }
  const prevPage = () => {
    if (page === 1)  return;
    setPage(page - 1);
  }

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Main keyword={keyword} hits={imgs} prev={prevPage} next={nextPage} />
    </>
  )
}

export default App;