import { useEffect, useState } from "react";

const api_KEY = "99132a112de1478eb8001e0f25c3b68a";

export default function useNewsApi(category) {
  const [data, setData] = useState({
    newsdata: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api_KEY}`,
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

const API_KEY = "pub_67c93bb8c5e543e891a1f9a9ae1eed72";
