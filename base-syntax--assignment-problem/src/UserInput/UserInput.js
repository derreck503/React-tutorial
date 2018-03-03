import React from 'react';
import './UserInput.css';
const userInput = (props) => {
    return (
        <div className="UserInput">
            <h1>Type in username: </h1>
            <input type='text' onChange={props.change} value={props.value}/>
        </div>
    )
};

export default userInput;