import React from 'react';
import { VictoryChart, VictoryStack, VictoryBar, VictoryAxis } from 'victory';

const victoryBar = () => {
    const dataset = [
        [
            { x: "Spices", y: 1 },
            { x: "Chocolate", y: 5 },
            { x: "Cereal", y: 3 },
            { x: "Soda", y: 2 }
        ],
        [
            { x: "Spices", y: 3 },
            { x: "Chocolate", y: 2 },
            { x: "Cereal", y: 5 },
            { x: "Soda", y: 4  }
        ]
      ];

    return (
        <div>
        <VictoryChart height={400} width={400}
          domainPadding={{ x: 30, y: 20 }}
        >
            <VictoryStack
              colorScale={["black", "blue", "tomato"]}
            >
              {dataset.map((data, i) => {
                return <VictoryBar data={data} key={i}/>;
              })}
            </VictoryStack>
            <VictoryAxis dependentAxis
              tickFormat={(tick) => `${tick}%`}
            />
            <VictoryAxis
              tickFormat={["Spiceds", "Chocolate", "Cereal", "Soda"]}
            />
        </VictoryChart>
      </div>
    )
}
 
export default victoryBar;