const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const url =
  "mongodb+srv://anhminhbo:anhminh1234@minhcluster.jm6xt.mongodb.net/crazy?retryWrites=true&w=majority";
mongoose.connect(url);

//define a "table" structure
var TaskSchema = new mongoose.Schema({
  name: String,
  status: String,
});

//create a model Student ==> students (database collection)
//Teacher => teachers , Course => courses
var Task = mongoose.model("Khuong", TaskSchema);

app.get("/tasks", function (req, res) {
  Task.find({}, function (err, tasks) {
    res.send(tasks);
    console.log("test");
  });
});

app.post("/tasks", function (req, res) {
  Task.create(req.body, function (err, task) {
    res.send(task);
  });
});

app.delete("/tasks/:id", function (req, res) {
  Task.deleteOne({ _id: req.params.id }, function (err, result) {
    res.send(result);
  });
});

app.put("/tasks", function (req, res) {
  Task.findOneAndUpdate(
    { _id: req.body.id },
    { name: req.body.name, status: req.body.status },
    function (err, result) {
      res.send(result);
    }
  );
});

app.listen(9000, () => console.log("server listening"));
