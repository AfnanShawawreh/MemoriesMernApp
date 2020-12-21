const express = require("express");
const router = express.Router();

const  postscontroller = require("../controllers/posts");

router.get("/", postscontroller.getPosts);
router.post("/", postscontroller.createPost);
router.patch("/:id", postscontroller.updatePost);
router.delete("/:id", postscontroller.deletePost);
router.patch("/:id/likePost", postscontroller.likePost);

module.exports = router;



  
