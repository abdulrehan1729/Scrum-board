import React, { Component } from "react";

class CreateTask extends Component {
  state = {
    name: "",
    title: "",
    content: ""
  };
  render() {
    return (
      <div className="form-group">
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title..."
            className="form-control"
          />
          <textarea
            type="text"
            name="content"
            placeholder="Type your content here.."
            className="form-control"
          ></textarea>
          <input type="submit" className="btn btn-dark" />
        </form>
      </div>
    );
  }
}

export default CreateTask;
