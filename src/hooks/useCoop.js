import { useEffect, useState } from "react";
import axios from "axios";

const useCoops = (id) => {
  const [coopData, setCoopData] = useState({
    coop: {},
    isLoading: false,
    error: "",
  });

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setCoopData({
          ...coopData,
          isLoading: true,
        });
        const result = await axios.get(
          `https://guarded-inlet-61842.herokuapp.com/api/coop/${id}`
        );
        setCoopData({
          ...coopData,
          coop: result.data,
          isLoading: false,
        });
      } catch ({ message }) {
        setCoopData({
          ...coopData,
          isLoading: false,
          error: message,
        });
      }
    };
    fetchRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    id,
  ]);
  return coopData;
};

export default useCoops;