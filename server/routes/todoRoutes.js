const express = require("express"); // require express framework
const router = express.Router();
const FILEPATH = "./models/todo.json";
const readJson = require("../domains/jsonReader");
//const writeJson = require("../domains/jsonWriter");

// An endpoint to get all list of todo
router.get('/', function(req, res){
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
module.exports = router;