const Task = require("../models/scrum.model.js");

// Create and Save a new Task
exports.create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "task content can not be empty"
    });
  }

  // Create a task
  const task = new Task({
    name: req.body.name,
    title: req.body.title || "Untitled task",
    content: req.body.content
  });

  // Save task in the database
  task
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the task."
      });
    });
};

// Retrieve and return all tasks from the database.
exports.findAll = (req, res) => {
  Task.find()
    .then(tasks => {
      res.send(tasks);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tasks."
      });
    });
};

// Update a task identified by the taskId in the request
exports.update = (req, res) => {
  //validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Task content can not be empty"
    });
  }

  // Find task and update it with the request body
  Task.findByIdAndUpdate(
    req.params.taskId,
    {
      name: req.body.name,
      title: req.body.title || "Untitled Task",
      content: req.body.content
    },
    { new: true }
  )
    .then(task => {
      if (!task) {
        return res.status(404).send({
          message: "Task not found with id " + req.params.taskId
        });
      }
      res.send(task);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Task not found with id " + req.params.taskId
        });
      }
      return res.status(500).send({
        message: "Error updating task with id " + req.params.taskId
      });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  Note.findByIdAndRemove(req.params.taskId)
    .then(task => {
      if (!task) {
        return res.status(404).send({
          message: "Task not found with id " + req.params.taskId
        });
      }
      res.send({ message: "Task deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Task not found with id " + req.params.taskId
        });
      }
      return res.status(500).send({
        message: "Could not delete task with id " + req.params.taskId
      });
    });
};
