import React, { Component } from "react";
import "./Node.css";
import PV from "./PathfindingVisualizer";

export default class Node extends Component {

  setWall() {
    const {row, col} = this.props;
    var physicalNodeRow = ".nodeRow:nth-of-type(" + (row + 1) + ")";
  var physicalNode = ".node:nth-of-type(" + (col + 1) + ")";
  document
    .querySelector(physicalNodeRow)
    .querySelector(physicalNode).style.backgroundColor = "yellow";
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
        <div className="node" id={nodeType} onClick={() => {makeWall(row, col)}}></div>
      </>
    );

  }

}
