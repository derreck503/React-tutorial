import React from 'react';
import C3Bar from 'react-c3js';
import 'c3/c3.css';

const c3Line = () => {
    const data = {
        columns: [
          ['Chocolate', 30, 200, 100, 400, 150, 250],
          ['Spices', 50, 20, 10, 40, 15, 25],
          ['Soda', 30, 10, 50, 60, 35, 45]
        ]
    }
    

    return (
        <C3Bar data={data} />
    )
}
 
export default c3Line;