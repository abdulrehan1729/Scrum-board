import React, { Component } from "react";
import "./App.css";
import Task from "./components/Task";
import CreateTask from "./components/CreateTask";
import axios from "axios";

class App extends Component {
  state = {
    tasks: [],
    isVisible: false
  };
  async componentDidMount() {
    const res = await axios.get(`http://localhost:4000/tasks`);
    this.setState({ tasks: res.data });
  }

  handleClick = () => {
    if (!this.state.isVisible) {
      this.setState({ isVisible: true });
    } else this.setState({ isVisible: false });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <button className="btn btn-success" onClick={this.handleClick}>
              + New
            </button>
            {this.state.isVisible ? <CreateTask /> : null}
          </div>
          <div className="col-sm-8">
            <Task tasks={this.state.tasks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
