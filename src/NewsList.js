import React from "react";
import Newsapi from "./Newsapi";
import NewsCard from "./NewsCard";
import "./NewsList.css";
import { useParams } from "react-router-dom";

export default function NewsList() {
  const { type } = useParams();

  const category = `${type ? type : "General"}`;

  console.log("category", category);

  const data = Newsapi(category);

  const { newsdata, loading } = data;
  console.log("data", newsdata);
  return (
    <div>
      <div className="heading">
        <h1>
          Top headlines for <span>{category}</span>
        </h1>
      </div>
      <div className="cards">
        {!loading ? (
          newsdata.map((element) => {
            return (
              <div className="items" key={element.url}>
                <NewsCard
                  title={element.title ? element.title.split("-", 1) : " "}
                  description={
                    element.description
                      ? element.description.split(" ").slice(0, 15).join(" ")
                      : " "
                  }
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                  datestring={element.publishedAt}
                  author={element.author}
                  source={element.source.name}
                />
              </div>
            );
          })
        ) : (
          <h1>loading</h1>
        )}
      </div>
    </div>
  );
}

// import React from "react";
// import useNewsApi from "./Newsapi";
// import NewsCard from "./NewsCard";
// import "./NewsList.css";
// import { useParams } from "react-router-dom";

// export default function NewsList() {
//   const { type } = useParams();
//   const category = type ? type : "general";

//   const { newsdata, loading } = useNewsApi(category);

//   return (
//     <div>
//       <div className="heading">
//         <h1>Top headlines for <span>{category}</span></h1>
//       </div>
//       <div className="cards">
//         {loading ? (
//           <h1>Loading...</h1>
//         ) : newsdata.length === 0 ? (
//           <h2>No articles found.</h2>
//         ) : (
//           newsdata.map((article) => (
//             <div className="items" key={article.url}>
//               <NewsCard
//                 title={article.title}
//                 description={article.description}
//                 imgurl={article.image}
//                 newsurl={article.url}
//                 datestring={article.publishedAt}
//                 author={article.source.name}
//                 source={article.source.name}
//               />
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
