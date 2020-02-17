import React, {Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import {RecordList} from './recordList';
import {ProjectConsumer} from "./ProjectContext";

export class Projects extends Component{
    constructor(props) {
        super(props);
        this.state={
            projects: [],
            error:[]
        };
    }
    static getDerivedStateFromProps(props,start){
        return null;
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/project')
            .then(response=>{
                this.setState({projects:response.data});
            })
            .catch(error=> {
                this.setState({errorMsg:"No Project Found"})
            })
    }

    render() {
        // const {projects} = this.state;
        return (
            <ProjectConsumer>
                {value=>{
                    const {projects} = value;
                    console.log(projects);
                    return(
            <div className="project-hidden">
                <ul className="list-inline">

                    {
                        projects.map(project => {

                            return <RecordList key={project.id} project={project} />;
                        })
                    }
                </ul>
            </div>
                    )
                }}

            </ProjectConsumer>
        );

    }
}
