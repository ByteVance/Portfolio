import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { FaPlus, FaShare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate(); 
  const data = [
    { name: "1", service: 200, sale: 400 },
    { name: "2", service: 300, sale: 500 },
    { name: "3", service: 250, sale: 450 },
    { name: "4", service: 280, sale: 480 },
    { name: "5", service: 220, sale: 420 },
    { name: "6", service: 260, sale: 460 },
  ];

  const pieData = [
    { name: "Segment A", value: 40 },
    { name: "Segment B", value: 30 },
    { name: "Segment C", value: 30 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-white shadow-lg p-6">
        <h1 className="text-xl font-bold mb-6">Project Name</h1>
        <ul className="space-y-4">
          <li className="text-indigo-600 font-semibold">Dashboard</li>
          <li>Projects</li>
          <li>Calendar</li>
          <li>Teams</li>
          <li>Analytics</li>
          <li>Messages</li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <div className="flex gap-4">
            <button className="bg-gray-200 px-4 py-2 rounded flex items-center gap-2">
              <FaPlus />
              onClick={() => navigate("/checklist")}
               Create new project
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center gap-2">
              <FaShare /> Share
            </button>
          </div>
        </div>

        {/* Data Cards */}
        <div className="grid grid-cols-3 gap-6 my-6">
          {["6,452", "42,502", "56,201"].map((num, idx) => (
            <div key={idx} className="p-6 bg-white shadow rounded-lg">
              <p className="text-gray-600">Data label</p>
              <h3 className="text-2xl font-bold">{num}</h3>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-bold mb-4">Statistics</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="service" fill="#0088FE" />
              <Bar dataKey="sale" fill="#FF6384" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Right Sidebar */}
      <div className="w-1/4 bg-white p-6 shadow-lg">
        <h3 className="text-xl font-bold">Activities</h3>
        <div className="mt-4 space-y-4">
          {["Kathryn Murphy", "James Harrid", "Elon Melon", "Mia Smith", "James Doe"].map((name, idx) => (
            <div key={idx} className="p-4 bg-gray-100 rounded-lg">
              <h4 className="font-semibold">{name}</h4>
              <p className="text-gray-500 text-sm">Some activity description...</p>
            </div>
          ))}
        </div>
        
        {/* Pie Chart */}
        <h3 className="text-xl font-bold mt-6">Statistics</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={60}>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
