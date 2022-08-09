const express = require("express");
const app = express();
const { db } = require("./helpers/connect")

const port = process.env.PORT || 3000;

db.connect((err) => {
  if (err) {
    console.error(`Error: ${err.stack}`);
    return;
  }
  console.log(`Running on thread : ${db.threadId}`);
})

app.use("/", (req, res) => {
  res.send("Hello world")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
