import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";

function App() {
  return (
    <>
      <div className="container">
        <div className="item">
          <h1>Pathfinding Visualizer</h1>
        </div>
      </div>
      <div className="container">
        <div className="item">
          Green: Start | Red: End | White: Open | Black: Wall
        </div>
      </div>
      <div className="container">
        <PathfindingVisualizer></PathfindingVisualizer>
      </div>
      <div className="container">
        <div className="item">
          <button>Visualize</button>
        </div>
      </div>
    </>
  );
}

export default App;
