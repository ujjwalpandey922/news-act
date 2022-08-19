import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import newsImg from "./newsImg.jpg";

const NewsCompo = (props) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResult] = useState(0);
  document.title = `${props.category[0].toUpperCase()}${props.category.slice(
    1
  )}- NEWS ACT `;

  const fetchMoreData = async () => {
    console.log(page);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.countryName
    }&category=${props.category}&apiKey=e428204e2f1340e3ade5e7c139ab1259&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);

    let data = await fetch(url);
    let ParsedData = await data.json();

    setArticle(article.concat(ParsedData.articles));
    setTotalResult(ParsedData.totalResults);
    setLoading(true);
  };
  const fetchData = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.countryName}&category=${props.category}&apiKey=e428204e2f1340e3ade5e7c139ab1259&page=1&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    props.setProgress(40);

    let ParsedData = await data.json();
    props.setProgress(70);

    setArticle(ParsedData.articles);
    setTotalResult(ParsedData.totalResults);
    setLoading(true);
    props.setProgress(100);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    //this sec
    <>
      <h2 className="text-center" style={{ marginTop: "70px" }}>
        NEWS ACT : Top
        {` ${props.category[0].toUpperCase()}${props.category.slice(1)} `}
        Headlines
      </h2>
      {!loading && (
        <div className="text-center">
          <div className="spinner-border text-primary " role="status"></div>
        </div>
      )}
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length !== totalResults}
        loader={
          <div className="text-center">
            <div className="spinner-border text-primary " role="status"></div>
          </div>
        }
      >
        <div className="container">
          <div className="row">
            {article.map((elements, index) => {
              return (
                <div className="col-md-4 my-4" key={index}>
                  <NewsItem
                    title={elements.title ? elements.title.slice(0, 50) : ""}
                    description={
                      elements.description
                        ? elements.description.slice(0, 150)
                        : ""
                    }
                    url={
                      elements.urlToImage ? elements.urlToImage : { newsImg }
                      //not working
                    }
                    newsurl={elements.url}
                    author={elements.author}
                    date={elements.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

// static defaultProps = { For class based
NewsCompo.defaultProps = {
  countryName: "in",
  pageSize: 6,
  category: "general",
};
// static propTypes = {
NewsCompo.propTypes = {
  countryName: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default NewsCompo;
