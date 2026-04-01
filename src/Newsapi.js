import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

console.log("api", API_KEY);

export default function NewsApi(category) {
  const [data, setData] = useState({
    newsdata: [],
    loading: true,
  });
  console.log("catagory", category);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&page=1&apikey=${API_KEY}`,
          //   `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&page=2&apikey=${API_KEY}`,
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
