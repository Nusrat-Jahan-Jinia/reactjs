import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Task extends Component {
    render() {
        return (
            <div id="results" className="search-results hidden-form">
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Control type="email" placeholder="Add Task" />
                    </Form.Group>
                    <Button variant="primary" type="submit" id="add-task-button">
                        Add Task
                    </Button>
                    <Button variant="primary" type="submit" id="task-hide-button">
                        Cancel
                    </Button>
                </Form>
            </div>
        );
    }
}


