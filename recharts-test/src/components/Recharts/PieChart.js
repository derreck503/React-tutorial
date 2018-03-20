import React from 'react';
import { PieChart, Tooltip, Pie } from 'recharts';

const PieCharts = () => {
    const inputData = [
        { value: 5, name: 'Cereal'},
        { value: 6, name: 'Spices'},
        { value: 9, name: 'Soda' },
        { value: 12, name: 'Chocolates' }
    ]

    return (
        <div>
            <h1>PieChart</h1>
            <PieChart width={800} height={400}>
                <Pie isAnimationActive={false} data={inputData} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default PieCharts;
