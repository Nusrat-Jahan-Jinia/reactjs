import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom";
import {ProjectConsumer} from "./ProjectContext";
import { Icon } from 'antd';


export class TodoItem extends Component {

    render() {
        const { id, name } = this.props.project;
        return (
            <ProjectConsumer>
                {value=>{
                    return(

                        <li className="list-inline">
                            <span className="action-button"><NavLink to={`/project-task/`} activeStyle={{color: 'rgba(0,0,0,1)'}}>{id},{name}</NavLink></span>
                            {/*<span className="actions-button" onClick={value.showModal}><Link to={`/project/edit/`}><Icon type="edit"/></Link></span>*/}
                            {/*<span className="actions-button"><Icon onClick={value.deleteProject} type="delete" /></span>*/}
                        </li>
                    )
                }}

            </ProjectConsumer>
        )
    }
}

