'use client';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalCalls: 147,
    activeAgents: 2,
    monthlyMinutes: 1832,
    successRate: 96.2
  });

  const handleSignOut = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div style={{ display: 'flex', backgroundColor: '#f9fafb', minHeight: '100vh', fontFamily: 'Poppins, sans-serif' }}>
      {/* Sidebar */}
      <div style={{
        backgroundColor: 'white',
        borderRight: '1px solid #e5e7eb',
        width: '256px',
        minHeight: '100vh',
        padding: '24px'
      }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 4px 0' }}>Voice AI</h1>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Manager</p>
        </div>

        <nav style={{ marginBottom: '32px' }}>
          <div style={{ marginBottom: '8px' }}>
            <a href="/dashboard" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              backgroundColor: '#eff6ff',
              color: '#2563eb',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              <span>📊</span>
              <span>Dashboard</span>
            </a>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <a href="/dashboard/voice-ai" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              color: '#6b7280',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              <span>🎤</span>
              <span>Voice AI</span>
            </a>
          </div>
          <div>
            <a href="/dashboard/phone-numbers" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              color: '#6b7280',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              <span>📞</span>
              <span>Phone Numbers</span>
            </a>
          </div>
        </nav>

        <button onClick={handleSignOut} style={{
          width: '100%',
          padding: '12px 16px',
          backgroundColor: 'transparent',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          color: '#dc2626',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span>🚪</span>
          <span>Sign Out</span>
        </button>
      </div>
      
      {/* Main Content */}
      <main style={{ flex: 1, padding: '32px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 8px 0' }}>Dashboard</h1>
          <p style={{ color: '#6b7280', margin: 0 }}>Welcome back! Here's your voice AI overview.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '32px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            padding: '24px'
          }}>
            <p style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280', margin: '0 0 8px 0' }}>Total Calls Today</p>
            <p style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>{stats.totalCalls}</p>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            padding: '24px'
          }}>
            <p style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280', margin: '0 0 8px 0' }}>Active AI Agents</p>
            <p style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>{stats.activeAgents}</p>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            padding: '24px'
          }}>
            <p style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280', margin: '0 0 8px 0' }}>Monthly Minutes</p>
            <p style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>{stats.monthlyMinutes.toLocaleString()}</p>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            padding: '24px'
          }}>
            <p style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280', margin: '0 0 8px 0' }}>Success Rate</p>
            <p style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>{stats.successRate}%</p>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
          padding: '24px'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 16px 0' }}>Quick Actions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            <div style={{
              padding: '16px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              backgroundColor: 'white'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎤</div>
              <h3 style={{ fontWeight: '500', color: '#1f2937', margin: '0 0 4px 0' }}>Update Voice Prompt</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Modify AI agent instructions</p>
            </div>
            <div style={{
              padding: '16px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              backgroundColor: 'white'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>📞</div>
              <h3 style={{ fontWeight: '500', color: '#1f2937', margin: '0 0 4px 0' }}>Manage Numbers</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Configure Twilio phone numbers</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
