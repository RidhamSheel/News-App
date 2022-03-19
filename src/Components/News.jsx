import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { getCountryHeadlines, getPage } from "../API";
import "../Styles/NewsStyle.css";

export default function News(props) {
  const [newsArr, setnewsArr] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPage(1);
  }, [props.country]);

  useEffect(() => {
    setPage(1);
  }, [props.category]);

  useEffect(() => {
    const fetchCountryHeadlines = async (country, category) => {
      setLoading(true);
      let data = await getCountryHeadlines(country, category);
      setnewsArr(data.articles);
      setTotalResults(data.totalResults);
      setLoading(false);
    };

    fetchCountryHeadlines(props.country, props.category);
  }, [props.country, props.category]);

  const handleNextClick = async () => {
    if (!(page + 1 > Math.ceil(totalResults / 6))) {
      setLoading(true);
      let data = await getPage(props.country, page + 1, props.category);
      setPage(page + 1);
      setnewsArr(data.articles);

      if (page + 2 > Math.ceil(totalResults / 6)) {
        document.getElementById("next").disabled = true;
      }

      setLoading(false);
    }
  };

  const handlePrevClick = async () => {
    setLoading(true);
    let data = await getPage(props.country, page - 1, props.category);
    setPage(page - 1);
    setnewsArr(data.articles);
    document.getElementById("next").disabled = false;
    setLoading(false);
  };

  return (
    <div className="mt-3 container-fluid">
      <h1 className="mx-3" style={{ marginTop: "70px" }}>
        The Daily Bugle - Headlines
      </h1>
      {loading && <Spinner />}
      <div className="row">
        {newsArr.map((news) => {
          return (
            <div className="col-md-4" key={news.url}>
              <NewsItem
                url={news.url}
                title={news.title}
                desc={news.description}
                img={news.urlToImage}
              />
            </div>
          );
        })}
      </div>

      <div className="container d-flex justify-content-between my-3">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark m-1"
          onClick={handlePrevClick}
        >
          &larr; Prev
        </button>
        <div className="badge bg-dark m-2 p-2 text-light page-badge-size">
          {page}
        </div>
        <button
          id="next"
          type="button"
          className="btn btn-dark m-1"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
