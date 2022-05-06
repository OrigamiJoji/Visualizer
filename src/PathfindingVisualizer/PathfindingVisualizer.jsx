import React, { Component } from "react";
import Node from "./Node";
import "./PathfindingVisualizer.css";
import { solve } from "./algorithms/dijkstras.jsx";

// Size of grid
const MAX_ROW = 40;
const MAX_COL = 60;

// Positions of start and end nodes
const START_NODE_ROW = 1;
const START_NODE_COL = 1;
const END_NODE_ROW = 2;
const END_NODE_COL = 35;

// Component PathfindingVisualizer
export default class PathfindingVisualizer extends Component {
  // Set state grid to blank grid
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
    };
    // Create the grid with specified size.
    this.grid = createGrid(MAX_ROW, MAX_COL);
  }

  // When component renders, return a div for each row and x nodes contained within
  // Set the node's values to the predetermined grid values.
  render() {
    return (
      <>
        {this.grid.map((rowNode, rowIdx) => {
          return (
            <div key={rowIdx} className="nodeRow">
              {rowNode.map((node, colIdx) => {
                const { row, col, isStart, isEnd, isWall } = node;
                return (
                  <Node
                    key={colIdx}
                    row={row}
                    col={col}
                    isEnd={isEnd}
                    isStart={isStart}
                    isWall={isWall}
                  ></Node>
                );
              })}
            </div>
          );
        })}
        <div className="container">
          <button className="item" onClick={() => visualize(this.grid)}>
            Visualize
          </button>
        </div>
      </>
    );
  }
}

function visualize(grid) {
  solve(
    grid,
    grid[START_NODE_ROW][START_NODE_COL],
    grid[END_NODE_ROW][END_NODE_COL]
  );
}

const createGrid = (rowSize, colSize) => {
  const grid = [];
  for (let row = 0; row < rowSize; row++) {
    const currentRow = [];
    for (let col = 0; col < colSize; col++) {
      currentRow.push(createNode(row, col));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (row, col) => {
  return {
    row,
    col,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isEnd: row === END_NODE_ROW && col === END_NODE_COL,
    isWall: false,
    isDiscovered: false,
    distance: (Infinity),
    previousNode: null,
  };
};
