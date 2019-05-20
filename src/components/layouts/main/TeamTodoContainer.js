import React from 'react';

const TeamTodoContainer = ({match})=> {
    console.log("MATCH: ", match.params.id);
    return (
        <div>
            <h1>Hello World ID: {match.params.id}</h1>
        </div>
    )
}

export default TeamTodoContainer;