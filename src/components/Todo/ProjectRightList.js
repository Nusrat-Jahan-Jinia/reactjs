import React, { Component } from "react";
import axios from 'axios';
import {ProjectNotFound} from "./ProjectNotFound";
import {BrowserRouter as Router, Switch} from 'react-router-dom';


export class ProjectRightList extends Component{
    constructor(props) {
        super(props);
        this.passingId = this.passingId.bind(this);
        this.state={
            projects: [],
            error:[],
            message:'hello parent'
        };
    }
    static getDerivedStateFromProps(props,start){
        return null;
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/project')
            .then(response=>{
                this.setState({projects:response.data});
                // console.log(this.state.projects);

            })
            .catch(error=> {
                this.setState({errorMsg:"No Project Found"})
            })
    }

    passingId=()=>{
        // const { id} = this.projects;
        console.log(this.state.projects);
        console.log('hell');
    };



    render() {
        const {projects} = this.state;
        console.log(projects);
        return (
                <div className="project-task-content">
                  {
                     projects.map(project => {
                        return (
                            <ProjectNotFound key={project.id} project={project} />
                            )
                    })
                    }
                </div>
        );
    }
}
