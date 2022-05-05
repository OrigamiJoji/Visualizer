import React, { Component } from "react";
import "./Node.css";

export default class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateProps(props) {
    this.state = props;
  }
  render() {
    const { col, row, isStart, isEnd, isWall } = this.props;
    var nodeType;
    if (isStart) {
      nodeType = "start";
    }
    if (isEnd) {
      nodeType = "end";
    }
    if (isWall) {
      nodeType = "wall";
    }

    return (
      <>
        <div className="node" id={nodeType}></div>
      </>
    );
  }
}
