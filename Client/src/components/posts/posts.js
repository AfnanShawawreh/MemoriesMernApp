import React from "react";
import { useSelector } from "react-redux";
import Post from "./post/post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <>
      <h1>posts</h1>
      <Post />
      <Post />
      <Post />
    </>
  );
};
export default Posts;
