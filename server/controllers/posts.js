const PostsMassage = require("../models/postMassage");

module.exports = {
  getPosts: async (req, res) => {
    try {
      const postMessages = await PostsMassage.find();

      res.status(200).json(postMessages);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  createPost: async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;
    const newPostMessage = new PostsMassage({
      title,
      message,
      selectedFile,
      creator,
      tags,
    });
    try {
      await newPostMessage.save();
      res.status(201).json(newPostMessage);
      // console.log(newPostMessage)
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};
