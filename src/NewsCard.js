import React from 'react';
import "./NewsCard.css"

export default function NewsCard(props) {
  let { title, description, author, datestring, imgurl, source, newsurl } = props

  
  return (
    <div>
      <div className="card" >
        <div className='image'>
          <img src={imgurl ? imgurl : "https://img.freepik.com/free-photo/3d-rendering-illustration-letter-blocks-forming-word-news-white-background_181624-60840.jpg"} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description ? description : ""}... </p>
          <h5 className="card-author">By {author}</h5>
          <p className="card-date"> on {new Date(datestring).toGMTString().slice(0,16)}</p>
          <h4 className='card-source'>{source}</h4>
          <a className='card-link' href={newsurl} target='_blank'>Read more...</a>
        </div>
      </div>
    </div>
  );
}
