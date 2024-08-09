const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const imageRoute = require("./routes/getImage.route.js");
dotenv.config();

const PORT = process.env.PORT || 4000;
app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/api/v1", imageRoute);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App is listening on Port: ${PORT}`);
});
