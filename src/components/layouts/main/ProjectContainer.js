import React from 'react';

const ProjectContainer = ({project}) => {
    return (
        <div className="projectContainer"
            onClick={()=>console.log(project.title)}
        >
            <span className="projectNameSpan">{project.title}</span>
        </div>
    )
}

export default ProjectContainer;