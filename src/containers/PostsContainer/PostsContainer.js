import React, { useEffect } from "react";
import { PostCard } from "../../components";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/actions/index";

export const PostsContainer = () => {
  const posts = useSelector((state) => state.posts.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div data-test="postsContainer" className="postsContainer">
      <h1 className="postsContainer__heading">Posts</h1>
      <div className="postsContainer__posts">
        {posts ? (
          posts.map((post) => {
            return (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
