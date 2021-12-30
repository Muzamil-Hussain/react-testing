import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostCard = ({ title, body, id }) => {
  return (
    <div data-test="post" className="post">
      <Link data-test="post__link" className="post__link" to={`/posts/${id}`}>
        <h1 data-test="post__title" className="post__title">
          {title}
        </h1>
      </Link>

      <p data-test="post__body" className="post__body">
        {body}
      </p>
    </div>
  );
};

PostCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
};

export { PostCard };
