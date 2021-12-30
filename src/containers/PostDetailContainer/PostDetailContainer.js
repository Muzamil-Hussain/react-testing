import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Comment } from "../../components";
import "./styles.scss";

export const PostDetailContainer = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const { postId } = useParams();

  const fetchPostComments = async (postId) => {
    let postComments = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    setComments(postComments.data);
  };

  const fetchPost = async (postId) => {
    let postDetail = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    setPost(postDetail.data);
  };

  useEffect(() => {
    fetchPost(postId);
    fetchPostComments(postId);
  }, [postId]);
  return post.title ? (
    <div className="postDetailContainer">
      <div className="postDetailContainer__post">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      <div className="postDetailContainer__comments">
        <h2>Comments</h2>
        {comments.length ? (
          comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                user={comment.name}
                email={comment.email}
                text={comment.body}
              />
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  ) : (
    <div>Loading Post...</div>
  );
};
