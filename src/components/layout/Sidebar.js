import React, {Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AddProject} from "../Todo/addproject";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Projects} from "../Todo/projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";



export class Sidebar extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="sidebar" data-testid="sidebar">
                    <div className="single-list-project-section">
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" classname="black-button">
                                        Projects
                                    </Accordion.Toggle>
                                    <AddProject/>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Projects/>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                </div>
        );
    }
}