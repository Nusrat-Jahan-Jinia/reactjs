import React from 'react';
import {Header} from "./components/layout/Header";
import {ProjectProvider} from './components/Todo/ProjectContext';
import {Sidebar} from "./components/layout/Sidebar";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {ProjectDetails} from "./components/Todo/ProjectDetails";
import {ProjectNotFound} from "./components/Todo/ProjectNotFound";
import {AddTaskForm} from "./components/Todo/addTaskForm";


function App() {
  return (
      <Router>
          <ProjectProvider>
                <div className="App">
                  <Header/>
                    <section className="content" id="main-layout-content">
                        <Sidebar />
                        <div className="right-content">
                            <div className="pt-content">
                                <Switch>
                                    <Route exact path={"/project-task/:id"} component={ProjectDetails}/>
                                    <Route path={"/"} component={ProjectNotFound}/>
                                </Switch>
                                <AddTaskForm />
                            </div>
                        </div>
                    </section>
                </div>
           </ProjectProvider>
      </Router>
  );
}

export default App;


