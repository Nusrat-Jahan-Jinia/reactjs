import React, { Component } from "react";
import {BrowserRouter as Router, Switch,Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {ProjectConsumer} from '../Todo/ProjectContext';
import {ProjectEdit} from "./projectEdit";
import Route from "react-router-dom/Route";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


export class projectAdd extends Component {


    render() {
        return (
            <ProjectConsumer>
                {value=>{
                    return(

                    <Form onSubmit={value.onSubmitForm} className="add-project-form">
                        <Form.Group controlId="formBasicname">
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control type="text" placeholder="name"
                                     value={value.name} onChange={value.onChangeProjectName}
                            />
                        </Form.Group>
                        <Button onClick={value.hideModal} variant="primary" type="submit" id="add-project-button">
                            Add
                        </Button>
                        <Button onClick={value.hideModal} variant="primary" id="cancel-project-button">
                            Cancel
                        </Button>
                    </Form>
                    )
                }}

            </ProjectConsumer>

        );
    }
}

