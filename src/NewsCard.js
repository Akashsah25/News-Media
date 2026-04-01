import React from "react";
import "./NewsCard.css";

const FALLBACK_IMG =
  "https://img.freepik.com/free-photo/3d-rendering-illustration-letter-blocks-forming-word-news-white-background_181624-60840.jpg";

export default function NewsCard({
  title,
  description,
  author,
  datestring,
  imgurl,
  source,
  newsurl,
}) {
  const formattedDate = datestring
    ? new Date(datestring).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "2-digit",
      })
    : "";

  return (
    <div className="card">
      <img
        src={imgurl || FALLBACK_IMG}
        alt={source}
        onError={(e) => {
          e.target.src = FALLBACK_IMG;
        }}
      />
      <div className="card-body">
        <div className="card-source">{source}</div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-meta">
          <span className="card-author">{author ? `By ${author}` : ""}</span>
          <span className="card-date">{formattedDate}</span>
        </div>
        <a
          className="card-link"
          href={newsurl}
          target="_blank"
          rel="noreferrer">
          Read more →
        </a>
      </div>
    </div>
  );
}
