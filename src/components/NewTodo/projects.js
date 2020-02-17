import React, {Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import {RecordList} from '../NewTodo/recordList';
import {ProjectConsumer} from "../NewTodo/ProjectContext";
import {Link, Switch} from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {projectAdd} from "./projectAdd";
import {ProjectEdit} from "./projectEdit";
import Modal from 'react-bootstrap/Modal'
import { Icon } from 'antd';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class Projects extends Component{
    constructor(props) {
        super(props);
        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.state={
            projects: [],
            error:[]
        };
    }


    componentDidMount() {
        axios.get('http://127.0.0.1:8000/project')
            .then(response=>this.setState({projects:response.data}))
    }

    // Delete Project
    delTodo = id => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
            this.setState({
                todos: [...this.state.todos.filter(todo => todo.id !== id)]
            })
        );
    };

    onChangeProjectName= event=>{
        this.setState({name: event.target.value});
    };

    // Add Project
    onSubmitForm = name => {
        axios
            .post('http://localhost:8000/project/store', {
                name
            })
            .then(res => {
                console.log(res.data);
                // this.setState({ projects: [...this.state.projects, res.data] });
            });
    };

    render() {
        return (
            <ProjectConsumer>
                {value =>{
                    return(

            <div>
                <div className="project-hidden">
                    <ul className="list-inline">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={props => (
                                    <React.Fragment>
                                        <RecordList projects={this.state.projects}/>
                                    </React.Fragment>
                                )}
                            />

                        </Switch>
                    </ul>
                </div>

                <Form onSubmit={this.onSubmitForm} className="add-project-form">
                    <Form.Group controlId="formBasicname">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" placeholder="name"
                                      value={this.name} onChange={this.onChangeProjectName}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" id="add-project-button">
                        Add
                    </Button>
                </Form>
            </div>
                    )
                }}
            </ProjectConsumer>
        );

    }
}
