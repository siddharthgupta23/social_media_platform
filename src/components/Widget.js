import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import ProgressBar from './ProgressBar';

const Widget = ({ widget, onRemove }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const pieData = [
    { name: 'Connected', value: 6 },
    { name: 'Not Connected', value: 7 }
  ];

  const barData = [
    { name: 'Critical', value: 400 },
    { name: 'High', value: 300 },
    { name: 'Medium', value: 300 },
    { name: 'Low', value: 200 }
  ];

  

  return (
    <div className="widget">
      <h3>{widget.text}</h3>
      {widget.type === 'pieChart' && (
        <PieChart width={200} height={200}>
          <Pie
            data={pieData}
            cx="70%"
            cy="30%"
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      )}
      {widget.type === 'barChart' && (
        <BarChart width={300} height={200} data={barData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      )}
      {widget.type === 'progressBar' && (
        <ProgressBar levels={[
          { label: 'Low', percentage: 25 },
          { label: 'Medium', percentage: 50 },
          { label: 'High', percentage: 25 },
        ]} />
      )}
      <button onClick={onRemove}>✖</button>
    </div>
  );
};

export default Widget;
