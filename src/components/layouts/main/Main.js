import React, {useState, useContext, useEffect} from 'react';
import {Auth} from 'aws-amplify';
import ProjectContext from '../../../context/ProjectContext';
import SideNavBarContext from '../../../context/SideNavBarContext';
import ProjectContainer from './ProjectContainer';
import CreateCompanymodal from './CreateCompanyModal';
import MenuIcon from '@material-ui/icons/Menu';


const Main = (props) => {
    const [project, setProject] = useContext(ProjectContext);
    const [sideNavBarStatus, setSideNavBarStatus] = useContext(SideNavBarContext);

    const [isModalShown, setIsModalShown] = useState(false);
    const [currentUser, setCurrentUser] = useState("");
    const showModal = () => setIsModalShown(true);
    const hideModal = () => setIsModalShown(false);

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(user=>{
            console.log(user.username);
            setCurrentUser(user.username);
        })
    })

    return (
        <>
            <div 
                className={`mainContainer ${isModalShown ? "mainContainerWithModal" : ""} ${sideNavBarStatus ? "mainContainerWithSideNavBarMobile" : ""}`}
                onClick={()=> isModalShown ? hideModal() : ""}
            >
                <div className="topNavBar">
                    <MenuIcon 
                        className="menuIcon"
                        onClick={() => {
                            console.log('menu icon clicked');
                            setSideNavBarStatus(true);
                        }}
                    />
                    <div className="currentTitle">{currentUser}</div>
                </div>
                <div className={`insideMain ${isModalShown ? "disableClick" : ""}`}>
                    <div className="insideInsideMain"> 
                        <div className="projectContainer" onClick={showModal}>
                        <span style={{fontSize: "50px", textAlign: "left", paddingLeft: "10px"}}>+</span>
                            <span className="projectNameSpan addTeamSpan">Add Team</span>
                        </div>
                        {project.map((project, id) => (
                            <ProjectContainer project={project} key={id} />
                        ))}                    
                    </div>                
                </div>
            </div>
            
            {isModalShown ? <CreateCompanymodal hideModal={hideModal} /> : ""}
        </>
    )
}

export default Main;