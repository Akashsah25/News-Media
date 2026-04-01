import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GNEWS_API_KEY;

const IS_LOCAL = window.location.hostname === "localhost";

export default function NewsApi(category) {
  const [data, setData] = useState({
    newsdata: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let articles = [];

        if (IS_LOCAL) {
          const res = await fetch(
            `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&apikey=${API_KEY}`,
          );
          const result = await res.json();
          articles = result.articles || [];
        } else {
          const res = await fetch(`/api/news?category=${category}`);
          const result = await res.json();
          articles = result.articles || [];
        }

        setData({ newsdata: articles, loading: false });
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setData({ newsdata: [], loading: false });
      }
    };

    fetchData();
  }, [category]);

  return data;
}
