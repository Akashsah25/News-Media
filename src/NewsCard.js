// import React from "react";
// import "./NewsCard.css";

// export default function NewsCard(props) {
//   let { title, description, author, datestring, imgurl, source, newsurl } =
//     props;

//   return (
//     <div>
//       <div className="card">
//         <div className="image">
//           <img
//             src={
//               imgurl
//                 ? imgurl
//                 : "https://img.freepik.com/free-photo/3d-rendering-illustration-letter-blocks-forming-word-news-white-background_181624-60840.jpg"
//             }
//             className="card-img-top"
//             alt="..."
//           />
//         </div>
//         <div className="card-body">
//           <h3 className="card-title">{title}</h3>
//           <p className="card-description">
//             {description ? description : ""}...{" "}
//           </p>
//           <h5 className="card-author">By {author}</h5>
//           <p className="card-date">
//             {" "}
//             on {new Date(datestring).toGMTString().slice(0, 16)}
//           </p>
//           <h4 className="card-source">{source}</h4>
//           <a className="card-link" href={newsurl} target="blank">
//             Read more...
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

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
