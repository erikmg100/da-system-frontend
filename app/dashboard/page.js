'use client';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊', active: true },
    { name: 'Voice AI', href: '/dashboard/voice-ai', icon: '🎤', active: false },
    { name: 'Phone Numbers', href: '/dashboard/phone-numbers', icon: '📞', active: false }
  ];

  const handleSignOut = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div style={{
      backgroundColor: 'white',
      borderRight: '1px solid #e5e7eb',
      width: '256px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Poppins, sans-serif'
    }}>
      {/* Logo */}
      <div style={{
        padding: '24px',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>VA</span>
          </div>
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', margin: 0, fontFamily: 'Manrope, sans-serif' }}>Voice AI</h1>
            <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Manager</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '16px' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {menuItems.map((item) => (
            <li key={item.name}>
              
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  backgroundColor: item.active ? '#eff6ff' : 'transparent',
                  color: item.active ? '#2563eb' : '#6b7280',
                  borderRight: item.active ? '2px solid #2563eb' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!item.active) {
                    e.target.style.backgroundColor = '#f9fafb';
                    e.target.style.color = '#1f2937';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.active) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#6b7280';
                  }
                }}
              >
                <span style={{ fontSize: '20px' }}>{item.icon}</span>
                <span style={{ fontWeight: '500' }}>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sign Out */}
      <div style={{ padding: '16px', borderTop: '1px solid #e5e7eb' }}>
        <button
          onClick={handleSignOut}
          style={{
            width: '100%',
            textAlign: 'left',
            padding: '8px 16px',
            color: '#dc2626',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '8px',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'Poppins, sans-serif'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#fef2f2';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          <span>🚪</span>
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalCalls: 0,
    activeAgents: 0,
    monthlyMinutes: 0,
    successRate: 0
  });

  useEffect(() => {
    setStats({
      totalCalls: 147,
      activeAgents: 2,
      monthlyMinutes: 1832,
      successRate: 96.2
    });
  }, []);

  const StatCard = ({ title, value, icon }) => (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb',
      padding: '24px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280', margin: '0 0 8px 0' }}>{title}</p>
          <p style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>{value}</p>
        </div>
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#dbeafe',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ fontSize: '24px' }}>{icon}</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
        body { margin: 0; padding: 0; }
      `}</style>
      
      <div style={{ display: 'flex', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
        <Sidebar />
        
        <main style={{ flex: 1, padding: '32px' }}>
          {/* Header */}
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 8px 0', fontFamily: 'Manrope, sans-serif' }}>Dashboard</h1>
            <p style={{ color: '#6b7280', margin: 0, fontFamily: 'Poppins, sans-serif' }}>Welcome back! Here's your voice AI overview.</p>
          </div>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
          }}>
            <StatCard title="Total Calls Today" value={stats.totalCalls} icon="📞" />
            <StatCard title="Active AI Agents" value={stats.activeAgents} icon="🤖" />
            <StatCard title="Monthly Minutes" value={`${stats.monthlyMinutes.toLocaleString()}`} icon="⏱️" />
            <StatCard title="Success Rate" value={`${stats.successRate}%`} icon="✅" />
          </div>

          {/* Quick Actions */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            padding: '24px'
          }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 16px 0', fontFamily: 'Manrope, sans-serif' }}>Quick Actions</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px'
            }}>
              <button style={{
                padding: '16px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                backgroundColor: 'white',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                fontFamily: 'Poppins, sans-serif'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
              >
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎤</div>
                <h3 style={{ fontWeight: '500', color: '#1f2937', margin: '0 0 4px 0' }}>Update Voice Prompt</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Modify AI agent instructions</p>
              </button>
              <button style={{
                padding: '16px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                backgroundColor: 'white',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                fontFamily: 'Poppins, sans-serif'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
              >
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>📞</div>
                <h3 style={{ fontWeight: '500', color: '#1f2937', margin: '0 0 4px 0' }}>Manage Numbers</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Configure Twilio phone numbers</p>
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
