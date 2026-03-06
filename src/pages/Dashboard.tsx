import React from 'react';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const data = {
    labels: ['Screening Time', 'Accuracy', 'Feedback Processed'],
    datasets: [
      {
        label: 'Performance Metrics',
        data: [45, 85, 60],
        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <Bar data={data} />
      </div>
    </div>
  );
};

export default Dashboard;