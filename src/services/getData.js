const API_KEY = '19792472-060d63124e6749716f410447d';

export const getData = async ({ keyword = 'auto' }) => {
  const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURI(keyword)}&image_type=photo`

  const resp = await fetch(API_URL);
  const {hits} = await resp.json();
  const data = hits.map(hit => {
    return {
      id: hit.id,
      likes: hit.likes,
      img: hit.previewURL
    }
  })
  return data;
}