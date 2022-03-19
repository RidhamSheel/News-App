import React from "react";
import "../Styles/NewsItemStyle.css";

export default function NewsItem(props) {
  return (
    <div className="mt-3 mx-3">
      <div className="card">
        <img className="card-img" src={props.img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <a href={props.url} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
