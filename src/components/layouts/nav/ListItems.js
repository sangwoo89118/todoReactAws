import React, { useState, useContext, useEffect } from 'react';

import SideNavBarContext from '../../../context/SideNavBarContext';
import RouterContext from '../../../context/RouterContext';
import CurrentTitleContext from '../../../context/CurrentTitleContext';

const ListItems = ({ project }) => {
    const currentList = localStorage.getItem(`currentList_${project.id}`);

    const [ toggle, setToggle ] = useState(currentList === "true" ? true : false);
    const [ sideNavBarStatus, setSideNavBarStatus ] = useContext(SideNavBarContext);
    const [ customHistory ] = useContext(RouterContext);
    const [ currentTitle, setCurrentTitle ] = useContext(CurrentTitleContext);

    const clickOnProjectName = () => {
        localStorage.setItem(`currentList_${project.id}`, !toggle);
        setToggle(!toggle);
    }

    const clickOnTeamTodo = () => {
        setSideNavBarStatus(false);
        setCurrentTitle(`${project.title} - Team Todo`);
        customHistory.push("/teamtodo/" + project.id);
    }

    const clickOnMember = ( member ) => {
        console.log(member)
        setSideNavBarStatus(false);
        setCurrentTitle(`${project.title} - ${member.name}`);
        customHistory.push("/todo/" + member.id);
    }   
    
    return(
        <>
            <div className="projectName" onClick={() => clickOnProjectName()}>
                <span className="navListNode">{project.title}</span>
            </div>
            <div style={{display: toggle ? 'block' : 'none'}}>
                <div className="teamTodo">
                    <div className="navListNode" onClick={() => clickOnTeamTodo()}>
                        - Team TODO
                    </div>
                </div>
                {project.members.map((member, i) => (
                    <div className="teamMemberTodo" key={i}>
                        <div className="navListNode" onClick={() => clickOnMember(member)}>
                            - {member.name}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ListItems;