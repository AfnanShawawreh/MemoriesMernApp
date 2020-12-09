const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PostsRoutes = require("./routes/Posts.js");
const app = express();
app.use('/posts',PostsRoutes)
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
const CONNECTION_URL =
'mongodb+srv://Afnan:Afnan1234@mem.erxgs.mongodb.net/<dbname>?retryWrites=true&w=majority'
  
const PORT = process.env.port || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port:${PORT}`))
  )
  .catch((error) => console.log(error.message));

  mongoose.set('useFindAndModify',false)