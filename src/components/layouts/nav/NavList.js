// libraries
import React, { useState, useContext } from 'react';

// contexts
import ProjectContext from '../../../context/ProjectContext';

// components
import ListItems from './ListItems';

const NavList = () => {
    const [project, setProject] = useContext(ProjectContext);
    
    return (
        <>
            {project.map((project, id) => (
                <ListItems project={project} key={id}/>
            ))}            
        </>
    )
}

export default NavList;