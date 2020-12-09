const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  title: String,
  massage: String,
  careator: String,
  tags: [String],
  selectedFile: String,
  LikeCount: {
    type: Number,
    default: 0,
  },
  cretedAt: {
    type: Date,
    default: new Date(),
  },
});
module.exports = mongoose.model("PostMessage", postSchema);

