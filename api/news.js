// api/news.js   ← Yeh file project root mein honi chahiye (src ke bahar)

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const category = req.query.category || "general";

  const API_KEY = process.env.REACT_APP_GNEWS_API_KEY;

  if (!API_KEY) {
    return res
      .status(500)
      .json({ error: "API_KEY is missing in Vercel Environment Variables" });
  }

  const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&page=1&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Proxy Error:", error);
    return res.status(500).json({ error: "Failed to fetch news" });
  }
}
