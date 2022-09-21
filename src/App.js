import React, { Component } from "react";

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
    this.demo = this.demo.bind(this);
  }

  sayHello() {
    alert("Hello!");
  }
  demo() {
    console.log("ravi");
    alert("ravi");
  }

  render() {
    return (
      <div>
        {" "}
        <button onClick={this.sayHello}>Click me!</button>
        <button onMouseOver={this.demo}>Click 2</button>
      </div>
    );
  }
}

export default MyApp;
