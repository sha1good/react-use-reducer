import React from "react";
import { INITIAL_STATE, postReducer } from "./postReducer";
import { useReducer } from "react";
import { ACTION_TYPES } from "./postActionTypes";

const Post = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleClick = () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      });
  };

  return (
    <div>
      <button onClick={handleClick}>
        {state.laoding ? "Wait..." : "Fetch Data "}
      </button>
      <p>{state.post?.title}</p>
      <span>{state.error && "Something went wrong !"}</span>
    </div>
  );
};

export default Post;
