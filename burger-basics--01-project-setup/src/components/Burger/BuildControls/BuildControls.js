import React from 'react';
import classes from './BuildControls.css';

const buildControls = (props) => (
    <div className={classes.buildControls}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);
 
export default buildControls;