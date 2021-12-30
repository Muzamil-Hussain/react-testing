import { types } from "./types";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
  try {
    let posts = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10"
    );
    dispatch({
      type: types.GET_POSTS,
      payload: posts,
    });
  } catch (err) {
    console.log(err);
  }
};

// export const fetchPostComments = (postId) => async (dispatch) => {
//   try {
//     let postComments = await axios.get.get(
//       `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
//     );

//     dispatch({
//       type: types.GET_COMMENTS,
//       payload: postComments,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const fetchPostDetails = (postId) => async (dispatch) => {
//   try {
//     let postDetail = await axios.get.get(
//       `https://jsonplaceholder.typicode.com/posts/${postId}`
//     );

//     dispatch({
//       type: types.GET_POST_DETAIL,
//       payload: postDetail,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
