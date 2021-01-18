import { useEffect, useState } from "react";
import getData from "../../services/getData";

const useData = ({page, keyword } = { keyword: localStorage.getItem('lastKeyword') || 'moon' }) => {
  const [imgs, setImgs] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    const keywordToUse = keyword || localStorage.getItem('lastKeyword');
    getData({ keyword: keywordToUse, page })
      .then(data =>
        setImgs(data));
        setLoading(false);
        localStorage.setItem('lastKeyword', keyword);
      }, [keyword, page]);
  
  return {loading, imgs};
}
export default useData;