import React from 'react';

const TeamTodoContainer = ({ match })=> {
    return (
        <div>
            <h1>Team Todo ID: {match.params.id}</h1>
        </div>
    )
}

export default TeamTodoContainer;