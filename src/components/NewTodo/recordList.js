import React, { Component } from 'react';
import { Icon } from 'antd';
import axios from 'axios';
import {ProjectNotFound} from './ProjectNotFound';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';
import {ProjectConsumer} from "./ProjectContext";
import {TodoItem} from './TodoItem';


export class RecordList extends Component {

    render() {
        return this.props.projects.map((project) => (
            <TodoItem key={project.id} project={project} />
        ));
    }

}

