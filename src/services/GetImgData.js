import { useEffect, useState } from "react";

const API_KEY = '19792472-060d63124e6749716f410447d';

const GetImgData = (id) => {
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&id=${id}`
    fetch(API_URL)
      .then((response) => response.json())
      .then(({hits}) => {
        setImg(hits[0]);
        setLoading(false);
      })
  }, [id]);
  
  return { loading, img };
}

export default GetImgData;