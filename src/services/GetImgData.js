import { useEffect, useState } from "react";

const API_KEY = '19792472-060d63124e6749716f410447d';

const GetImgData = (id) => {
  const [img, setImg] = useState([]);

  useEffect(() => {
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&id=${id}`
    fetch(API_URL)
      .then((response) => response.json())
      .then(({hits}) => setImg(hits[0]))
  }, [id]);
  return img;
}

export default GetImgData;