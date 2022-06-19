const express = require("express"); // require express framework
const bodyParser = require('body-parser'); // body parser for patch req
const PORT = process.env.PORT || 3001;
const todoRoutes = require("./routes/todoRoutes");
const app = express();

app.use(bodyParser.json())

app.use("/api/todoRoutes", todoRoutes)

app.get("/", (req, res) => {
    res.send("Welcome to the todo API");
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
