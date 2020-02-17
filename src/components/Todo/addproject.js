import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import { Icon } from 'antd';
import {ProjectForm} from "./projectform";
import {ProjectConsumer} from '../Todo/ProjectContext';
import {Link, Switch} from "react-router-dom";
import Route from "react-router-dom/Route";
import {projectAdd} from "./projectAdd";
import {ProjectEdit} from "./projectEdit";
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


export class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

    render() {
        return (
            <ProjectConsumer>
                {value =>{
                   return(
                       <main id="modal-open">
                        <span className="plus-icon">
                            <button type="button" onClick={value.showModal}>
                                <Link to={`/project/add`}><Icon type="plus" /></Link>
                            </button>
                        </span>

                       <Modal show={value.contextModalShow} handleClose={value.hideModal}>
                           <div className="modal-contents">
                            <span className="modal-header">
                                <h3>Add Project</h3>
                                  <button type="button" className="cross-modal" onClick={value.hideModal}>
                                <Icon type="close" />
                            </button>
                            </span>

                               <div className="add-form">
                                   <Switch>
                                       <Route path={"/project/add"} component={projectAdd}/>
                                       <Route path={"/project/edit/:id"} component={ProjectEdit}/>
                                   </Switch>
                               </div>

                               {/*<ProjectForm modal={value.showModal.bind(this)}/>*/}
                           </div>
                       </Modal>
                       </main>
                   )
                }}
            </ProjectConsumer>
        );
    }
}
