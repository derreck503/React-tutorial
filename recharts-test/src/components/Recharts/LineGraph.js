import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const LineGraph = () => {
    const inputData = [
        { value: 5, name: 'Cereal'},
        { value: 6, name: 'Spices'},
        { value: 9, name: 'Soda' },
        { value: 12, name: 'Chocolates' }
    ];

    return (
        <div>
            <h1>Line Graph</h1>
            <LineChart width={400} height={400} data={inputData}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis datakey="value" />
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default LineGraph;