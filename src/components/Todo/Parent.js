import React, { Component } from "react";
import {ChildComponent} from './ChildComponent';

export class Parent extends Component {
    constructor(props) {
        super(props);
        this.state={
            message:'hello vdbdb'
        };
    }
    childCall(){
        alert("hello i am parent function")
    }
    render() {
        return(
            <ChildComponent children={this.state.childCall.bind()} />
        );
    }
}