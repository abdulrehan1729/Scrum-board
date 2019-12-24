module.exports = app => {
  const tasks = require("../controllers/scrum.controller.js");

  // Create a new task
  app.post("/tasks", tasks.create);

  // Retrieve all tasks
  app.get("/tasks", tasks.findAll);

  // Update a task with taskId
  app.put("/tasks/:taskId", tasks.update);

  // Delete a task with taskId
  app.delete("/tasks/:taskId", tasks.delete);
};
