import React, { Component, Fragment } from "react";
import "./App.css";
import Task from "./components/Task";
import axios from "axios";

class App extends Component {
  state = {
    tasks: []
  };
  async componentDidMount() {
    const res = await axios.get(`http://localhost:4000/tasks`);
    this.setState({ tasks: res.data });
    console.log(this.state.tasks);
  }

  render() {
    return (
      <Fragment>
        <Task tasks={this.state.tasks} />
      </Fragment>
    );
  }
}

export default App;
