// libraries
import React, { useState, useContext, useEffect } from 'react';
import { Route } from 'react-router';
import { Auth } from 'aws-amplify';

// contexts
import ProjectContext from '../../../context/ProjectContext';
import SideNavBarContext from '../../../context/SideNavBarContext';
import RouterContext from '../../../context/RouterContext';
import CurrentTitleContext from '../../../context/CurrentTitleContext';

// components
import ProjectContainer from './ProjectContainer';
import CreateCompanymodal from './CreateCompanyModal';
import TeamTodoContainer from './todo/TeamTodoContainer';
import IndividualTodoContainer from './todo/IndividualTodoContainer';
import MenuIcon from '@material-ui/icons/Menu';


const Main = () => {
    // context
    const [ project, setProject ] = useContext(ProjectContext);
    const [ sideNavBarStatus, setSideNavBarStatus ] = useContext(SideNavBarContext);
    const [ customHistory ] = useContext(RouterContext);
    const [ currentTitle, setCurrentTitle ] = useContext(CurrentTitleContext);

    // state
    const [ isModalShown, setIsModalShown ] = useState(false);
    const [ currentUser, setCurrentUser ] = useState("");
    const showModal = () => setIsModalShown(true);
    const hideModal = () => setIsModalShown(false);

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(user=>{
            setCurrentUser(user.username);
        })
    });

    const clickOnHome = () => {
        setCurrentTitle("");
        customHistory.push("/");
    }

    return (
        <>
            <div 
                className={`mainContainer ${isModalShown ? "mainContainerWithModal" : ""} ${sideNavBarStatus ? "mainContainerWithSideNavBarMobile" : ""}`}
                onClick={()=> isModalShown ? hideModal() : ""}
            >
                <div className="topNavBar">
                    <MenuIcon className="menuIcon" onClick={() => {setSideNavBarStatus(true)}}/>
                    <div className="currentTitle">{currentTitle ? currentTitle : "SW TODO"}</div>
                    {customHistory.location.pathname == "/" ? <div></div> : <div style={{paddingRight: "10px"}} onClick={()=> clickOnHome()}>Home</div>}
                </div>                
                <Route 
                    path="/" 
                    exact 
                    component={() => <ProjectContainer isModalShown={isModalShown} showModal={showModal} project={project}/>}
                />
                <Route 
                    path="/teamtodo/:id" 
                    component={({ match }) => <TeamTodoContainer match={match}/>}
                />
                <Route 
                    path="/todo/:projectId/:memberId"
                    component={({ match }) => <IndividualTodoContainer match={match}/>}
                />
            </div>
            
            {isModalShown ? <CreateCompanymodal hideModal={hideModal} /> : ""}
        </>
    )
}

export default Main;