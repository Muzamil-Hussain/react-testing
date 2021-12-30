import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

const Comment = ({ user, email, text }) => {
  return (
    <div data-test="comment" className="comment">
      <div data-test="comment__header" className="comment__header">
        <p data-test="comment__header--user" className="comment__header--user">
          {user}
        </p>
        <p
          data-test="comment__header--email"
          className="comment__header--email"
        >
          {email}
        </p>
      </div>
      <div data-test="comment__body" className="comment__body">
        <p data-test="comment__body--text" className="comment__body--text">
          {text}
        </p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  user: PropTypes.string,
  email: PropTypes.string,
  text: PropTypes.string,
};

export { Comment };
