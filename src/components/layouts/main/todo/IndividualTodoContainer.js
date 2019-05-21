import React from 'react';

const IndividualTodoContainer = ({ match }) => {
    return (
        <div>
            <h1>Individual Todo ID: {match.params.id}</h1>
        </div>
    )
};

export default IndividualTodoContainer;