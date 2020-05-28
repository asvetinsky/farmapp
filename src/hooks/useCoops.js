import { useEffect, useState } from "react";
import axios from "axios";

const useCoops = () => {
  const [coopsData, setCoopsData] = useState({
    coops: [],
    isLoading: false,
    error: "",
  });

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setCoopsData({
          ...coopsData,
          isLoading: true,
        });
        const result = await axios.get(
          `https://guarded-inlet-61842.herokuapp.com/api/coops`
        );
        setCoopsData({
          ...coopsData,
          coops: result.data,
          isLoading: false,
        });
      } catch ({ message }) {
        setCoopsData({
          ...coopsData,
          isLoading: false,
          error: message,
        });
      }
    };
    fetchRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return coopsData;
};

export default useCoops;