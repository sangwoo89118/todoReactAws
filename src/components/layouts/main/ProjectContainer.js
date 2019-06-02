// libraries
import React from 'react';

// components
import ProjectTitleContainers from './ProjectTitleContainers';

const ProjectContianer = ({ isModalShown, showModal, project }) => (
    <div className={`insideMain ${isModalShown ? "disableClick" : ""}`}>
        <div className="insideInsideMain"> 
            <div className="projectContainer" onClick={showModal}>
            <span style={{fontSize: "50px", textAlign: "left", paddingLeft: "10px"}}>+</span>
                <span className="projectNameSpan addTeamSpan">Add Team</span>
            </div>
            {project.map((project, id) => (
                <ProjectTitleContainers project={project} key={id} />
            ))}                    
        </div>                
    </div>
)
export default ProjectContianer;