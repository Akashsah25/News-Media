const https = require("https");

module.exports = function handler(req, res) {
  const { category = "General" } = req.query;
  const API_KEY = process.env.REACT_APP_API_KEY;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&apikey=${API_KEY}`;

  https
    .get(url, (apiRes) => {
      let raw = "";

      apiRes.on("data", (chunk) => {
        raw += chunk;
      });

      apiRes.on("end", () => {
        try {
          const parsed = JSON.parse(raw);
          res.status(200).json({ articles: parsed.articles || [] });
        } catch (e) {
          res.status(500).json({ error: "Failed to parse response", raw });
        }
      });
    })
    .on("error", (err) => {
      res.status(500).json({ error: err.message });
    });
};
