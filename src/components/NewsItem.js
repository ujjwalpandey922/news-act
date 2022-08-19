import React from "react";

const NewsItem = (props) => {
  let { title, description, url, newsurl, author, date } = props;
  return (
    <div>
      <div className="card">
        <img src={url} className="card-img-top" alt={url} />
        <div className="card-body text-center">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a
            href={newsurl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-primary "
          >
            Read More....
          </a>
          <div className="card-footer text-muted my-1">
            By - {!author ? "unknown" : author} on{" "}
            {new Date(date).toGMTString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
