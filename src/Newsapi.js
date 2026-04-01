import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GNEWS_API_KEY;

export default function NewsApi(category = "general") {
  const [data, setData] = useState({
    newsdata: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url;

        // Local mein direct call, Vercel pe proxy call
        if (
          window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1"
        ) {
          url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&page=1&apikey=${API_KEY}`;
        } else {
          url = `/api/news?category=${category}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        setData({
          newsdata: result.articles || [],
          loading: false,
        });
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setData({
          newsdata: [],
          loading: false,
        });
      }
    };

    fetchData();
  }, [category]);

  return data;
}
