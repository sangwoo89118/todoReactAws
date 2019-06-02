// libraries
import React from 'react';

const ProjectTitleContainers = ({ project }) => {
    return (
        <div className="projectContainer"
            onClick={() => console.log(project.title)}
        >
            <span className="projectNameSpan">{project.title}</span>
        </div>
    )
}

export default ProjectTitleContainers;