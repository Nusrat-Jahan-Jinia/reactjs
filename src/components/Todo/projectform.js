import React, { Component } from "react";
import {BrowserRouter as Router, Switch,Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {ProjectConsumer} from '../Todo/ProjectContext';
import {ProjectEdit} from "./projectEdit";
import {projectAdd} from './projectAdd';
import Route from "react-router-dom/Route";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


export class ProjectForm extends Component {
    constructor(props) {
        super(props);
        this.onChangeProjectName=this.onChangeProjectName.bind(this);
        this.onSubmitForm=this.onSubmitForm.bind(this);
        // this.getProjectDetails=this.getProjectDetails.bind(this);
        this.state={
            name:'',
            showing:false,
            projects:[],
            projectDetails:[]
        }
    }
    onChangeProjectName= event=>{
        this.setState({name: event.target.value});
    };

    onEditFormOpen=event=> {
        this.setState({ showing: true });
    }


    onSubmitForm=event=>{
        event.preventDefault();
        axios.post('http://localhost:8000/project/store',this.state)
            .then(response=>{
                // this.props.history.push('/');

                // this.setState({projects:response.data},()=>
                // console.log(this.state))
            })
            // this.hideModal();
    };

    render() {
        const { showing } = this.state;
        const { match, location, history } = this.props
        return (
            <ProjectConsumer>
                {value=>{
                    return(
                        <div className="add-form">
                            <Switch>
                                <Route path={"/project/add"} component={projectAdd}/>
                                <Route path={"/project/update/:id"} component={ProjectEdit}/>
                            </Switch>

                        </div>
                    )
                }}

            </ProjectConsumer>
        );
    }
}

