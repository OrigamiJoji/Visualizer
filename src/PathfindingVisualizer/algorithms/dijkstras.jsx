const grid = document.querySelector(".grid");
var unsolved = true;
var searchQueue = [];
var sequentialNodes = [];

function getNodes(grid) {
  var currentNode = searchQueue.shift();
  var { col, row } = currentNode;
  if (currentNode.row > 0) {
    discoverNode(grid[row - 1][col], currentNode);
  }
  if (currentNode.col < grid[0].length - 1) {
    discoverNode(grid[row][col + 1], currentNode);
  }
  if (currentNode.row < grid.length - 1) {
    discoverNode(grid[row + 1][col], currentNode);
  }
  if (currentNode.col > 0) {
    discoverNode(grid[row][col - 1], currentNode);
  }
}

function discoverNode(node, previousNode) {
  if (node.isWall || node.isDiscovered) {
    return;
  }
  node.distance = previousNode.distance + 1;
  node.isDiscovered = true;
  node.previousNode = previousNode;
  if (node.isEnd) {
    unsolved = false;
    return;
  }
  searchQueue.push(node);
  sequentialNodes.push(node);
}

export function solve(grid, start, end) {
  start.isDiscovered = true;
  start.distance = 0;
  searchQueue.push(start);
  while (unsolved) {
    getNodes(grid);
  }
  animateDiscoveries(sequentialNodes, end);
}

function animateDiscoveries(orderedNodes, end) {
  orderedNodes.forEach((e, i) => {
    setTimeout(() => {
      changeNodeDiscover(e);
      if (i == orderedNodes.length - 1) {
        animateSolution(end);
      }
    }, i * 2);
  });
}

function animateSolution(end) {
  backtrack(end).forEach((e, i) => {
    setTimeout(() => {
      changeNodeShortest(e);
    }, i * 10);
  });
}

function backtrack(end) {
  let tempStack = [];
  let solution = [];
  var currentNode = end.previousNode;
  for (var i = end.distance; i > 1; i--) {
    tempStack.push(currentNode);
    currentNode = currentNode.previousNode;
  }
  for(let i = tempStack.length; i > 0; i--) {
    solution.push(tempStack.pop());
  }
  return solution;
}

function changeNodeDiscover(node) {
  var physicalNodeRow = ".nodeRow:nth-of-type(" + (node.row + 1) + ")";
  var physicalNode = ".node:nth-of-type(" + (node.col + 1) + ")";
  document
    .querySelector(physicalNodeRow)
    .querySelector(physicalNode).style.backgroundColor =
    "rgb(" +
    node.distance * 3 +
    "," +
    (255 / node.distance) * 2 +
    "," +
    0 +
    ")";
  document.querySelector(physicalNodeRow).querySelector(physicalNode).id =
    "#searched";
}
function changeNodeShortest(node) {
  var physicalNodeRow = ".nodeRow:nth-of-type(" + (node.row + 1) + ")";
  var physicalNode = ".node:nth-of-type(" + (node.col + 1) + ")";
  document
    .querySelector(physicalNodeRow)
    .querySelector(physicalNode).style.backgroundColor = "yellow";
}
