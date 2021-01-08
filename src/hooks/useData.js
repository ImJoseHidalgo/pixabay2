import { useEffect, useState } from "react";
import { getData } from "../services/getData";

export const useData = (tipe) => {
  const [state, setState] = useState({
    data: [],
    // loading: true
  });

  useEffect(() => {
    getData(tipe)
      .then(el => {
        setState({
          data: el,
          // loading: false
        })
      })
  }, [tipe]);
  return state;
}