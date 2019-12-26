import React from "react";

const TaskItems = ({ task: { name, title, content } }) => {
  return (
    <div>
      <h5>
        <strong>{name}</strong>
      </h5>
      <h6>{title}</h6>
      <p>
        <em>{content}</em>
      </p>
    </div>
  );
};

export default TaskItems;
