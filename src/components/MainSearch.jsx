import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useLocation } from 'wouter';
import HeaderSearch from './HeaderSearch';
import Main from './Main';

const MainSearch = () => {
  const [imgs, setImgs] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(Number(localStorage.getItem('page')) || 1);
  const [path, pushLocation] = useLocation();

  const {keyword: keywordParam, page: pageParam} = useParams();
  
  const nextPage = () => {
    setPage(page + 1);
    localStorage.setItem('page', Number(page)+1);
    pushLocation(`/search/${keyword || keywordParam}/${page + 1}`);
  }
  const prevPage = () => {
    if (page === 1)  return;
    setPage(page - 1);
    localStorage.setItem('page', Number(page)-1);
    pushLocation(`/search/${keyword || keywordParam}/${page - 1}`);
  }
  
  const handleSearch = (keyword) => {
    setKeyword(keyword);
    setPage(1);
    localStorage.setItem('page', 1)
    pushLocation(`/search/${keyword}/${Number(localStorage.getItem('page'))}`);
  }
  useParams().page = page;

  const API_KEY = '19792472-060d63124e6749716f410447d';
  useEffect(() => {
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURI(keyword || keywordParam)}&image_type=photo&per_page=15&page=${Number(page || pageParam)}`
    fetch(API_URL)
      .then((response) => {
        return response.json()
      })
      .then(({hits}) => {
        setImgs(hits);
      })
    }, [keyword, page]);
  return (
    <div>
      <HeaderSearch handleSearch={handleSearch} />
      <Main keyword={keyword} hits={imgs} prev={prevPage} next={nextPage} />
    </div>
  )
}

export default MainSearch
