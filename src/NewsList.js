import React from "react";
import Newsapi from "./Newsapi";
import NewsCard from "./NewsCard";
import "./NewsList.css";
import { useParams } from "react-router-dom";

export default function NewsList() {
  const { type } = useParams();
  const category = type ? type : "General";

  const { newsdata, loading } = Newsapi(category);
  console.log("data with category", newsdata);
  return (
    <div className="page">
      <div className="heading">
        <h1>
          Top headlines — <span>{category}</span>
        </h1>
        <div className="heading-line" />
      </div>

      <div className="cards">
        {loading ? (
          <div className="loading-wrap">
            <div className="spinner" />
            <div className="loading-text">FETCHING LIVE DATA</div>
          </div>
        ) : (
          newsdata.map((element) => (
            <div className="items" key={element.url}>
              <NewsCard
                title={
                  element.title ? element.title.split(" - ")[0] : "Untitled"
                }
                description={
                  element.description
                    ? element.description.split(" ").slice(0, 18).join(" ") +
                      "..."
                    : ""
                }
                imgurl={element.image}
                newsurl={element.url}
                datestring={element.publishedAt}
                author={element.source?.name || element.author}
                source={element.source?.name || ""}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
