import React from 'react';
import {Header} from "./components/layout/Header";
import {ProjectProvider} from './components/Todo/ProjectContext';
import {Sidebar} from "./components/layout/Sidebar";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import { Icon } from 'antd';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function App() {
  return (
      <Router>
          <ProjectProvider>
                <div className="App">
                  <Header/>
                  <div className="left-side">
                      <div className="title-icon">
                          <h5>Project</h5>
                          <button type="button">
                              <Link to={`/project/add`}><Icon type="plus" /></Link>
                          </button>
                      </div>
                      <div className="project-add">
                          <Modal>
                              <div className="modal-contents">
                            <span className="modal-header">
                                <h3>Add Project</h3>
                                  <button type="button" className="cross-modal">
                                <Icon type="close" />
                            </button>
                            </span>
                                  <div className="add-form">
                                      <Form className="add-project-form">
                                          <Form.Group controlId="formBasicname">
                                              <Form.Label>Project Name</Form.Label>
                                              <Form.Control type="text" placeholder="name"
                                                            value="" onChange=""
                                              />
                                          </Form.Group>
                                          <Button variant="primary" type="submit" id="add-project-button">
                                              Add
                                          </Button>
                                          <Button variant="primary" id="cancel-project-button">
                                              Cancel
                                          </Button>
                                      </Form>
                                  </div>
                              </div>
                          </Modal>
                      </div>
                      <div className="project-list">
                          <ul className="list-inline">
                              <li>bfbb</li>
                              <li>vdfbd</li>
                              <li>vdfb</li>
                              <li>kuk</li>
                          </ul>

                      </div>
                  </div>
                    <div className="right-side">
                        <ul className="list-inline">
                            <li>bfbb</li>
                            <li>vdfbd</li>
                            <li>vdfb</li>
                            <li>kuk</li>
                        </ul>
                    </div>
                </div>
           </ProjectProvider>
      </Router>
  );
}

export default App;


