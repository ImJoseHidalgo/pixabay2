const API_KEY = '19792472-060d63124e6749716f410447d';
// const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURI(keyword)}&image_type=photo&per_page=15&page=${Number(page)}`;

const getData = ({page, keyword = 'polos'} = {}) => {
  const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${keyword}&image_type=photo&per_page=15&page=${page}`;
  return fetch(API_URL)
    .then((response) => response.json())
    .then(({hits}) => hits)
}

export default getData;