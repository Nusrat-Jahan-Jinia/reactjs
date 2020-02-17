import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {ProjectConsumer} from '../Todo/ProjectContext';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export class ProjectEdit extends Component {

    render() {
        return (
            <ProjectConsumer>
                {value=>{
                    return(
                        <Form onSubmit={value.onUpdateForm} className="add-project-form">
                            <Form.Group controlId="formBasicname">
                                <Form.Label>Edit Project</Form.Label>
                                <Form.Control type="text" placeholder={value.name}
                                              value={value.name} onChange={value.onChangeProjectName}
                                />
                            </Form.Group>
                            <Button onClick={value.hideModal} variant="primary" type="submit" id="edit-project-button">
                                Update
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

