import React, {useState, useContext, useEffect} from 'react';
import SideNavBarContext from '../../../context/SideNavBarContext';

const ListItems = ({project}) => {
    const [toggle, setToggle] = useState(false);
    const [sideNavBarStatus, setSideNavBarStatus] = useContext(SideNavBarContext);

    const clickOnTeamTodo = (project) => {
        console.log(project);
        setSideNavBarStatus(false);
    }

    const clickOnMember = (member) => {
        console.log(member);
        setSideNavBarStatus(false);
    }

    return(
        <>
            <div className="projectName" 
                onClick={() => setToggle(!toggle)}
            >
                <span className="navListNode">{project.title}</span>
            </div>
            <div style={{display: toggle ? 'block' : 'none'}}>
                <div className="teamTodo">
                    <div 
                        className="navListNode"
                        onClick={()=> clickOnTeamTodo(project)}
                    >
                        - Team TODO
                    </div>
                </div>
                {project.members.map((member, i) =>(
                    <div className="teamMemberTodo" key={i}>
                        <div className="navListNode"
                            onClick={()=>clickOnMember(member)}
                        >
                            - {member.name}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ListItems;