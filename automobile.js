import React from "react";
import ReactDOM from "react-dom";

class Car extends React.Component {
  render() {
    return <h2>I'm a driver</h2>;
  }
}

class Motorway extends React.Component {
  render() {
    return (
      <div>
        <h2> Who drowes on Motorway?</h2>;
        <Car />
      </div>
    );
  }
}

ReactDOM.render(<Motorway />, document.getElementById("root"));
