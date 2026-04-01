export default async function handler(req, res) {
  const { category } = req.query;
  const API_KEY = process.env.REACT_APP_GNEWS_API_KEY;

  try {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&apikey=${API_KEY}`,
    );

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ articles: data.articles || [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
