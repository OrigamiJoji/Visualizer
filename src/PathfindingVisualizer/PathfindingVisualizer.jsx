import React, { Component } from "react";
import Node from "./Node";

export default class PathfindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
        };
    }

    componentDidMount() {
        // When the component mounts
        const nodes = [];
        // Declare const array nodes
        // const array's elements cannot be reindexed once initialized
        for (let row = 0; row < 15; row++) {
            // for each row
            const currentRow = [];
            // Declare const array currentRow
            for (let col = 0; col < 50; col++) {
                // For each column
                currentRow.push([]);
                // Push array to currentRow
            }
            nodes.push(row);
            // Push entire row to nodes array
        }
        this.setState({ nodes })
        // Set state to {nodes}
    }

    render() {
        const { nodes } = this.state;
        // const destructor get this.states nodes array.
        return (
            <div>hello</div>
        );
    }
}
/*

            <div>
                {nodes.map((row, rowIdx) => {
                    // 
                    return <div> {
                        // return a div that contains the outcome of
                        row.map((node, nodeIdx) => <Node></Node>)
                        // row.map
                    }
                    </div>
                })}
            </div>

*/