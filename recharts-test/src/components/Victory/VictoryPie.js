import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

const victoryPie = () => {
    return (
        <svg viewBox="0 0 400 400">
            <VictoryPie
                standalone={false}
                width={400} height={400}
                data={[
                    { x: 1, y: 120, label: 'Spices' }, { x: 2, y: 150, label: 'Cereal'}, { x: 3, y: 75, label: 'Soda' }
                ]}
                innerRadius={68} labelRadius={100}
                style={{ labels: { fontSize: 20, fill: "white" } }}
            />
            <VictoryLabel
                textAnchor="middle"
                style={{ fontSize: 20 }}
                x={200} y={200}
                text="SYSCO"
            />
        </svg>
    )
}

export default victoryPie;