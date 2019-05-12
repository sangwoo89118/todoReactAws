import React, {useState, useContext} from 'react';
import ProjectContext from '../../../context/ProjectContext';
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