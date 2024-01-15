// pages/dashboard.tsx

import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       
        <div className="bg-white p-4 rounded-md shadow-md text-blue-700">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold">100</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md  text-blue-700">
          <h2 className="text-xl font-semibold mb-2">Revenue</h2>
          <p className="text-3xl font-bold">$10,000</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md  text-blue-700">
          <h2 className="text-xl font-semibold mb-2">Tasks</h2>
          <p className="text-3xl font-bold">25</p>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;

