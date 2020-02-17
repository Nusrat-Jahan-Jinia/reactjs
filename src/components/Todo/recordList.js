import React, { Component } from 'react';
import { Icon } from 'antd';
import axios from 'axios';
import {ProjectNotFound} from './ProjectNotFound';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';
import {ProjectConsumer} from "./ProjectContext";

export class RecordList extends Component {
    constructor(props) {
        super(props);
        this.deleteProject= this.deleteProject.bind(this);
        this.state={
            redirect: false
        }
    }

    deleteProject=()=>{

        const { id} = this.props.project;
        axios.delete('http://127.0.0.1:8000/project/delete/'+id);
        console.log(id)
    };



    render() {
        const { id, name} = this.props.project;
        // console.log(id);
        return(
                <ProjectConsumer>
                    {value=>{
                        return(
                            <li className="list-inline">
                                <span className="action-button"><NavLink to={`/project-task/${id}`} activeStyle={{color: 'rgba(0,0,0,1)'}}>{name}</NavLink></span>
                                <span className="actions-button" onClick={value.showModal}><Link to={`/project/edit/${id}`}><Icon type="edit"/></Link></span>
                                <span className="actions-button"><Icon onClick={this.deleteProject} type="delete" /></span>
                            </li>
                        )
                    }}
                   
                </ProjectConsumer>
        )
    }
}

