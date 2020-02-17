import React, {Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import { Icon } from 'antd';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Projects} from "../NewTodo/projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link, Switch} from "react-router-dom";
import {AddProject} from "../Todo/addproject";
import {ProjectConsumer} from "../Todo/ProjectContext";
import Route from "react-router-dom/Route";
import {projectAdd} from "./projectAdd";
import {ProjectEdit} from "./projectEdit";



export class LeftBar extends Component{

    render() {
        return (
            <ProjectConsumer>
                {value =>{
                    return(
            <div className="sidebar" data-testid="sidebar">
                <div className="single-list-project-section">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" classname="black-button">
                                    Projects
                                </Accordion.Toggle>
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
                    )
                }}
            </ProjectConsumer>
        );
    }
}