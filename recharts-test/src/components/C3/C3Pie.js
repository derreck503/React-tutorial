import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

const c3Pie = () => {
    const data = {
        columns: [
            ['Chocolate', 30],
            ['Spices', 90],
            ['Soda', 30]
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    };

    return (
        <C3Chart data={data} />
    )
}
 
export default c3Pie;