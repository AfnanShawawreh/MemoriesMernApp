const PostsMassage = require("../models/postMassage");

module.exports = {
  getPosts: async(req, res) => {
    try {
      const postMessages = await postMessage.find();
   
      res.status(200).json(postMessages)
    } catch (error) {
res.status(404).json({message:error.message})
    }
  },

  createPost: async(req, res) => {
const post =req.body
try{
await newPost.save()
res.status(201).json(newPost)
}catch(error){
    res.status(404).json({message:error.message})
}

  },
};
