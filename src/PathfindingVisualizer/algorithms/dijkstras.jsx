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

export function solve(grid, node) {
  console.log(getNearbyNodes(grid, node));
}
