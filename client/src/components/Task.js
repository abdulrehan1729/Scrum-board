import React from "react";
import PropTypes from "prop-types";

const Tasks = ({ tasks }) => {
  console.log(tasks);
  return (
    <div style={taskStyle}>
      {tasks.map(task => (
        <div>
          <h1>{task.name}</h1>
          <h2>{task.title}</h2>
          <textarea>{task.content}</textarea>
        </div>
      ))}
    </div>
  );
};

Tasks.prototype = {
  tasks: PropTypes.array.isRequired
};

const taskStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};
export default Tasks;
