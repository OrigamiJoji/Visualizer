const grid = document.querySelector(".grid");

function getNearbyNodes(grid, node) {
  var { col, row } = node;
  var nearbyNodes = [];

  if (node.row > 0) {
    nearbyNodes.push(grid[row + 1][col]);
  }
  if (node.row < grid.length - 1) {
    nearbyNodes.push(grid[row - 1][col]);
  }
  if (node.col > 0) {
    nearbyNodes.push(grid[row][col + 1]);
  }
  if (node.col < grid[0].length - 1) {
    nearbyNodes.push(grid[row][col - 1]);
  }
  return nearbyNodes;
}

export function solve(grid, start, end) {
  console.log(getNearbyNodes(grid, start));
  let arr = getNearbyNodes(grid, start);
  arr.forEach((e) => {
    renderNodeInProgress(e);
    e.isDiscovered = true;
    e.distance = start.distance + 1;
    e.previousNode = start;
  });
}

function renderNodeInProgress(node) {
  var physicalNodeRow = ".nodeRow:nth-of-type(" + (node.row+1) + ")";
  var physicalNode = ".node:nth-of-type(" + (node.col+1) + ")";
  document.querySelector(physicalNodeRow).querySelector(physicalNode).id = "searched";
}
