// MissionPieChart.js
import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const MissionPieChart = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF6666'];

  // Filter successful missions
  const successfulMissions = data.filter((mission) => mission.successful);

  // Calculate the proportion of successful missions for each company
  const companySuccessData = successfulMissions.reduce((acc, mission) => {
    const { company } = mission;
    acc[company] = (acc[company] || 0) + 1;
    return acc;
  }, {});

  // Convert data to an array for Recharts
  const chartData = Object.keys(companySuccessData).map((company) => ({
    name: company,
    value: companySuccessData[company],
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={chartData}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default MissionPieChart;
