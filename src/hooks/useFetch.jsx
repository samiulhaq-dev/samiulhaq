import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchApi = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const resJson = await res.json();
      setData(resJson);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;