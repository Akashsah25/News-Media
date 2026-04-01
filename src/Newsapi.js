import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

console.log("api", API_KEY);

export default function useNewsApi(category) {
  const [data, setData] = useState({
    newsdata: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`,
        );

        const result = await response.json();

        setData({
          newsdata: result.articles || [],
          loading: false,
        });
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [category]);

  return data;
}
