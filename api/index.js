const express = require("express");
const app = express();
const route = require('./routes/routes')
route(app);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
