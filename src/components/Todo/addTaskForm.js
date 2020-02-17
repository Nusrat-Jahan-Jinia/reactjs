import React, {Component} from 'react';
import ToggleBox from "./ToggleBox";
import TaskForm from "./TaskForm";

export class AddTaskForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            showTaskAdd : false
        }
    }

    render() {
        return (
            <ToggleBox title="task-content">
                <TaskForm />
            </ToggleBox>
        );
    }
}