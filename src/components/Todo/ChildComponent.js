import React, { Component } from "react";

export class ChildComponent extends Component {
    render() {
        return(
            <div>
                <button type="submit" onClick={()=>this.props.childCall()}>click</button>
            </div>
        );
    }
}
