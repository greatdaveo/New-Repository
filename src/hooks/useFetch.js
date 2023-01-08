import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useFetch(url) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setLoading(false);
        setData(json);
      } catch (err) {
        setLoading(false);
        setError("Could not fetch data");
        //redirect to error page
        navigate("/error");
      }
    };

    fetchdata();
  }, [url, navigate]);
  return { data, error, loading };
}
