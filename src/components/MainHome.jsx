import React, { useEffect, useState } from 'react'
import { useLocation } from "wouter";
import Main from './Main';
import Header from './Header';

const MainHome = () => {
  const [imgs, setImgs] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [path, pushLocation] = useLocation();

  const API_KEY = '19792472-060d63124e6749716f410447d';
  useEffect(() => {
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURI(keyword)}&image_type=photo&per_page=15&page=${page}`
    fetch(API_URL)
      .then((response) => {
        return response.json()
      })
      .then(({hits}) => {
        setImgs(hits);
      })
  }, [keyword, page, path]);
  
  const handleSearch = (keyword) => {
    setKeyword(keyword);
    setPage(1);
    localStorage.setItem('page', 1)
    pushLocation(`/search/${keyword}/${Number(localStorage.getItem('page'))}`);
  }

  const nextPage = () => {
    setPage(page + 1);
  }
  const prevPage = () => {
    if (page === 1)  return;
    setPage(page - 1);
  }
  // console.log(path);
  return (
    <div>
      <Header handleSearch={handleSearch} />
      <Main keyword={keyword} hits={imgs} prev={prevPage} next={nextPage} />
    </div>
  )
}

export default MainHome
