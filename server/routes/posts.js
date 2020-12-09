const express = require("express");
const router = express.Router();
// const PostsRoutes = require("./routes/Posts.js");
// import { getPosts } from "../controllers/posts ";

var postscontroller = require("../controllers/posts");

router.get("/", postscontroller.getPosts);
router.post("/", postscontroller.createPost);

module.exports = router;
