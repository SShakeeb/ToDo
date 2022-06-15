const express = require("express");

const PORT = process.env.PORT || 3001;
const FILEPATH = "./todo.json";

const readJson = require("./jsonReader");
const writeJson = require("./jsonWriter");

const app = express();
// To read todo JSON file
readJson(FILEPATH, (err, todo) => {
    if (err){
        console.log(err)
        return
    }
    console.log("readJson:", todo);
    // To write todo JSON file
    writeJson(FILEPATH,todo);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
