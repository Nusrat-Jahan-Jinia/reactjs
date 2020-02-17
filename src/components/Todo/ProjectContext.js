import React, {Component} from "react";
import axios from 'axios';

const ProjectContext = React.createContext();

const ProjectConsumer =ProjectContext.Consumer;


 class ProjectProvider extends Component{
    constructor(props){
        super(props);
        this.state={
            show:false,
            projects: [],
            message:'',
            showing: false,
            name:'',
        };
    }
    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };


     onEditFormOpen = () => {
         this.setState({ showing: true });
     };

     projectDetailOpen = () => {
         // this.setState({ showing: true });
         alert('projectDetailOpen')
     };

     projectsFetch=()=>{
         axios.get('http://127.0.0.1:8000/project')
             .then(response=>{
                 console.log('fetch');
                 this.setState({projects:response.data});
             })
             .catch(error=> {
                 this.setState({errorMsg:"No Project Found"})
             })
     };


     onChangeProjectName= event=>{
         this.setState({name: event.target.value});
     };

     onSubmitForm=event=>{
         event.preventDefault();
         axios.post('http://localhost:8000/project/store', {
             name: this.state.name

         })
             .then(function (response) {
                 console.log(response);
             })
             .catch(function (error) {
                 console.log(error);
             });
     };



     onUpdateForm=event=>{
         const {id} = this.props.projects;
         event.preventDefault();
         axios.put(`http://localhost:8000/project/update/`,this.match.params.id)
             .then(this.setState({projects:this.state}))
     };


     render() {
       return(
           <ProjectContext.Provider
               value={{
                   contextModalShow:this.state.show,
                   showModal: this.showModal,
                   hideModal: this.hideModal,

                   display:this.state.showing,
                   onEditFormOpen:this.onEditFormOpen,
                   projectDetailOpen:this.projectDetailOpen,
                   hide:this.state.show,
                   deleteProject:this.deleteProject,
                   projectsFetch:this.projectsFetch,
                   onSubmitForm:this.onSubmitForm,
                   onChangeProjectName:this.onChangeProjectName,
                   name:this.state.name,
                   onUpdateForm:this.onUpdateForm,
                   projectValue:this.state.projects
               }}>
               {this.props.children}
           </ProjectContext.Provider>

       );
   }
}

export {ProjectProvider,ProjectConsumer}