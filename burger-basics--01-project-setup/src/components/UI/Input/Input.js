import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input classsName={classes.InputElement} {...props.elementConfig} value={porps.value} />;
            break;
        case ('textarea'):
            inputElement = <textarea classsName={classes.InputElement} {...props.elementConfig} value={porps.value} />;
            break;
        default:
            inputElement = <input classsName={classes.InputElement} {...props.elementConfig} value={porps.value} />;
    }
    
    return (
    <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
    </div>
    )
}
 
export default input;