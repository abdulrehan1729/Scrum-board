import React from "react";
import TaskItems from "./TaskItems";
import PropTypes from "prop-types";

const Tasks = ({ tasks }) => {
  return (
    <div style={taskStyle}>
      {tasks.map(task => (
        <TaskItems key={task._id} task={task} />
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
