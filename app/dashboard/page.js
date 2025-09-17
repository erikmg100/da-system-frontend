'use client';
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalCalls: 0,
    activeAgents: 0,
    monthlyMinutes: 0,
    successRate: 0
  });

  useEffect(() => {
    // Simulate fetching stats from your backend
    setStats({
      totalCalls: 147,
      activeAgents: 2,
      monthlyMinutes: 1832,
      successRate: 96.2
    });
  }, []);

  const StatCard = ({ title, value, icon }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's your voice AI overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Calls Today"
            value={stats.totalCalls}
            icon="📞"
          />
          <StatCard
            title="Active AI Agents"
            value={stats.activeAgents}
            icon="🤖"
          />
          <StatCard
            title="Monthly Minutes"
            value={`${stats.monthlyMinutes.toLocaleString()}`}
            icon="⏱️"
          />
          <StatCard
            title="Success Rate"
            value={`${stats.successRate}%`}
            icon="✅"
          />
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200 text-left">
              <div className="text-2xl mb-2">🎤</div>
              <h3 className="font-medium text-gray-900">Update Voice Prompt</h3>
              <p className="text-sm text-gray-600">Modify AI agent instructions</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200 text-left">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="font-medium text-gray-900">Manage Numbers</h3>
              <p className="text-sm text-gray-600">Configure Twilio phone numbers</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
