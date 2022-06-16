const express = require("express"); // require express framework

const PORT = process.env.PORT || 3001;
const FILEPATH = "./todo.json";

const readJson = require("./jsonReader");
const writeJson = require("./jsonWriter");

const app = express();

// An endpoint to get all list of todo
app.get('/getTodoList', function(req, res){
    // To read todo JSON file
    readJson(FILEPATH, (err, todo) => {
        if (err){
            console.log(err)
            return
        }
        try {
            res.status(200).send(todo);
        }
        catch (err) {
            return res.status(401).send(err); 
        }
        
        // To write todo JSON file
        // writeJson(FILEPATH,todo);
    });
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
