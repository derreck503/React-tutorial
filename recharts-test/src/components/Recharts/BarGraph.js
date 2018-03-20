import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarGraph = () => {
    const inputData = [
        { pv: 5, uv: 7, name: 'Cereal' },
        { pv: 10, uv: 6,  name: 'Spices' },
        { pv: 5, uv: 10,  name: 'Soda' },
        { pv: 7, uv: 4,  name: 'Chocolates' }
    ];

    return (
        <div>
            <BarChart width={600} height={300} data={inputData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" name ="Previous Value" stackId="a" fill="#8884d8" />
                <Bar dataKey="uv" name ="Current Value"  stackId="a" fill="#82ca9d" />
            </BarChart>
        </div>
    )
}

export default BarGraph;