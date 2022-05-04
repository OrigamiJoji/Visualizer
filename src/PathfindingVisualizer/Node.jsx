import React, {Component} from "react";
import "./Node.css"

export default class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            col,
            row,
            isStart,
            isEnd,
            isWall,
        } = this.props;
        return (
            <>
                    <div className="node"></div>
                    <div className="node"></div>
                    <div className="node"></div>
                    <div className="node"></div>
                    <div className="node"></div>
                    <div className="node"></div>
                    <div className="node"></div>
                    <div className="node"></div>
            
            </>
        )

    }
}