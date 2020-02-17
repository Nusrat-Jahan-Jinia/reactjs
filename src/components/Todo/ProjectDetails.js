import React, { Component } from "react";
import {ProjectConsumer} from './ProjectContext';
import axios from 'axios';

export class ProjectDetails extends Component{
    constructor(props) {
        super(props);
        this.state={
            projectDetails:[]
        }
    }

    callAPI() {
        axios.get(`http://localhost:8000/project/${this.props.match.params.id}`)
            .then((response) => {
                this.setState({
                    projectDetails: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    componentDidMount() {
        this.callAPI();
    }

    render() {
        this.callAPI();
        return (
                <div className="project-name">
                    <p>{this.state.projectDetails.name}</p>
                </div>

        );
    }
}