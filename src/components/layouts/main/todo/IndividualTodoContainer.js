// libraries
import React, { useState, useContext, useEffect } from 'react';

// context
import ProjectContext from '../../../../context/ProjectContext';

const IndividualTodoContainer = ({ match }) => {
    const [ project, setProject ] = useContext(ProjectContext);

    const projectObj = project.find(o => o.id == match.params.projectId);
    const memberName = projectObj.members.find(o => o.id == match.params.memberId).name;

    return (
        <div className="insideMain">
            <div className="indTodoContainer">
                <div className="nodeContainer userNode">
                    <div><span>{memberName}</span></div>
                </div>
                <div className="taskContainer">
                    <div className="nodeContainer node_1">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>DMMS</span></div>
                    </div>
                    <div className="nodeContainer node_2">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>HMA/KMA deploy Warranty Integration System</span></div>
                    </div>
                    <div className="nodeContainer node_3">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Stage  Warranty Integration System Warranty Integration System Warranty Integration System</span></div>
                    </div>
                    <div className="nodeContainer node_3">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Production</span></div>
                    </div>
                </div>
                <div className="taskContainer">
                    <div className="nodeContainer node_1">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Fast</span></div>
                    </div>
                    <div className="nodeContainer node_2">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Refactor source code</span></div>
                    </div>
                    <div className="nodeContainer node_2">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Need Test</span></div>
                    </div>
                </div>
                <div className="taskContainer">
                    <div className="nodeContainer node_1">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>HAC PDI user 301(Regional employee) user manage</span></div>
                    </div>
                    <div className="nodeContainer node_2">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Hold until further notice</span></div>
                    </div>
                </div>
                <div className="taskContainer">
                    <div className="nodeContainer node_1">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>HMA PDI Phase 3</span></div>
                    </div>
                    <div className="nodeContainer node_2">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Warranty Integration System</span></div>
                    </div>
                    <div className="nodeContainer node_3">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Develop HMA/GMA</span></div>
                    </div>
                    <div className="nodeContainer node_3">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Request port open for STG/PRD - HEAE</span></div>
                    </div>
                </div>
                <div className="taskContainer">
                    <div className="nodeContainer node_1">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>HAC PDI user 301(Regional employee) user manage</span></div>
                    </div>
                    <div className="nodeContainer node_2">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Hold until further notice</span></div>
                    </div>
                </div>
                <div className="taskContainer">
                    <div className="nodeContainer node_1">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>HMA PDI Phase 3</span></div>
                    </div>
                    <div className="nodeContainer node_2">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Warranty Integration System</span></div>
                    </div>
                    <div className="nodeContainer node_3">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Develop HMA/GMA</span></div>
                    </div>
                    <div className="nodeContainer node_3">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Request port open for STG/PRD - HEAE</span></div>
                    </div>
                </div>
                <div className="taskContainer">
                    <div className="nodeContainer node_1">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>HAC PDI user 301(Regional employee) user manage</span></div>
                    </div>
                    <div className="nodeContainer node_2">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Hold until further notice</span></div>
                    </div>
                </div>
                <div className="taskContainer">
                    <div className="nodeContainer node_1">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>HMA PDI Phase 3</span></div>
                    </div>
                    <div className="nodeContainer node_2">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Warranty Integration System</span></div>
                    </div>
                    <div className="nodeContainer node_3">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Develop HMA/GMA</span></div>
                    </div>
                    <div className="nodeContainer node_3">
                        <div><span className="nodeBegin">-</span></div>
                        <div><span>Request port open for STG/PRD - HEAE</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default IndividualTodoContainer;