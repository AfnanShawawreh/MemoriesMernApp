const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: null,
  },
  cretedAt: {
    type: Date,
    default: new Date(),
  },
});
module.exports = mongoose.model("PostMessage", postSchema);
