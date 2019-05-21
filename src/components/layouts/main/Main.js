import React, { useState, useContext, useEffect } from 'react';
import { Route } from 'react-router';
import { Auth } from 'aws-amplify';

import ProjectContext from '../../../context/ProjectContext';
import SideNavBarContext from '../../../context/SideNavBarContext';
import RouterContext from '../../../context/RouterContext';
import CurrentTitleContext from '../../../context/CurrentTitleContext';

import ProjectContainer from './ProjectContainer';
import TeamTodoContainer from './TeamTodoContainer';
import CreateCompanymodal from './CreateCompanyModal';
import MenuIcon from '@material-ui/icons/Menu';


const Main = () => {
    const [ project, setProject ] = useContext(ProjectContext);
    const [ sideNavBarStatus, setSideNavBarStatus ] = useContext(SideNavBarContext);
    const [ customHistory ] = useContext(RouterContext);
    const [ currentTitle, setCurrentTitle ] = useContext(CurrentTitleContext);

    const [ isModalShown, setIsModalShown ] = useState(false);
    const [ currentUser, setCurrentUser ] = useState("");
    const showModal = () => setIsModalShown(true);
    const hideModal = () => setIsModalShown(false);

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(user=>{
            setCurrentUser(user.username);
        })
    });

    return (
        <>
            <div 
                className={`mainContainer ${isModalShown ? "mainContainerWithModal" : ""} ${sideNavBarStatus ? "mainContainerWithSideNavBarMobile" : ""}`}
                onClick={()=> isModalShown ? hideModal() : ""}
            >
                <div className="topNavBar">
                    <MenuIcon className="menuIcon" onClick={() => {setSideNavBarStatus(true)}}/>
                    <div className="currentTitle">SW TODO {currentTitle}</div>
                    <div style={{paddingRight: "10px"}} onClick={()=> {customHistory.push("/")}}>Home</div>
                </div>                
                <Route 
                    path="/" 
                    exact 
                    component={()=> <ProjectContainer isModalShown={isModalShown} showModal={showModal} project={project}/>}
                />
                <Route 
                    path="/teamtodo/:id" 
                    component={({match})=> <TeamTodoContainer match={match}/>}
                />
            </div>
            
            {isModalShown ? <CreateCompanymodal hideModal={hideModal} /> : ""}
        </>
    )
}

export default Main;