const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const app = express();

require("dotenv").config()

const PostsRoutes = require("./routes/Posts");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use("/posts", PostsRoutes);
app.get('/', (req ,res)=>{
  res.send('Hello fnh ')
})

const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server running on port`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
