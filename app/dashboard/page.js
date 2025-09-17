'use client';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalCalls: 147,
    activeAgents: 2,
    monthlyMinutes: 1832,
    successRate: 96.2
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      title: "GabbiEmotion+",
      subtitle: "Voice Technology",
      description: "Advanced emotional intelligence in every conversation",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Interactive Avatars", 
      subtitle: "Visual AI Presence",
      description: "Bring your AI to life with stunning visual representations",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "GabbiTranslator",
      subtitle: "Global Communication", 
      description: "Break language barriers with real-time translation",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div style={{ display: 'flex', backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'Poppins, sans-serif' }}>
      {/* Sidebar */}
      <div style={{
        backgroundColor: 'white',
        width: '280px',
        minHeight: '100vh',
        borderRight: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Logo */}
        <div style={{ 
          padding: '32px 24px', 
          borderBottom: '1px solid #f1f5f9',
          textAlign: 'center'
        }}>
          <img 
            src="https://storage.googleapis.com/msgsndr/Gyvgsd99IT2dSJS5bwiK/media/678997c9accdd1b8bf7ce48a.png" 
            alt="Meet Gabbi"
            style={{ height: '40px', width: 'auto' }}
          />
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: '24px 16px' }}>
          <div style={{ marginBottom: '4px' }}>
            <a href="/dashboard" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              backgroundColor: '#f1f5f9',
              color: '#1e293b',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '15px'
            }}>
              <span style={{ fontSize: '18px' }}>🏠</span>
              <span>Dashboard</span>
            </a>
          </div>
          
          <div style={{ marginBottom: '4px' }}>
            <a href="/dashboard/contacts" style={{
              display: 'flex',
              alignItems: 'center', 
              gap: '16px',
              padding: '16px 20px',
              color: '#64748b',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '15px'
            }}>
              <span style={{ fontSize: '18px' }}>👥</span>
              <span>Contacts</span>
            </a>
          </div>

          <div style={{ marginBottom: '4px' }}>
            <a href="/dashboard/chase-protocol" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px', 
              padding: '16px 20px',
              color: '#64748b',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '15px'
            }}>
              <span style={{ fontSize: '18px' }}>📊</span>
              <span>Chase Protocol</span>
            </a>
          </div>

          <div style={{ marginBottom: '4px' }}>
            <a href="/dashboard/appointments" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px', 
              color: '#64748b',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '15px'
            }}>
              <span style={{ fontSize: '18px' }}>📅</span>
              <span>Appointments</span>
            </a>
          </div>

          <div style={{ marginBottom: '4px' }}>
            <a href="/dashboard/reports" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              color: '#64748b', 
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '15px'
            }}>
              <span style={{ fontSize: '18px' }}>📋</span>
              <span>Reports</span>
            </a>
          </div>

          <div style={{ marginBottom: '4px' }}>
            <a href="/dashboard/scheduler" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              color: '#64748b',
              borderRadius: '8px', 
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '15px'
            }}>
              <span style={{ fontSize: '18px' }}>📅</span>
              <span>Scheduler</span>
            </a>
          </div>

          <div style={{ marginBottom: '4px' }}>
            <a href="/dashboard/integrations" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              color: '#64748b',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '15px'
            }}>
              <span style={{ fontSize: '18px' }}>⚙️</span>
              <span>Integrations</span>
            </a>
          </div>

          <div style={{ marginBottom: '4px' }}>
            <a href="/dashboard/phone-numbers" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              color: '#64748b',
              borderRadius: '8px',
              textDecoration: 'none', 
              fontWeight: '500',
              fontSize: '15px'
            }}>
              <span style={{ fontSize: '18px' }}>📞</span>
              <span>Phone Numbers</span>
            </a>
          </div>

          <div style={{ marginBottom: '4px' }}>
            <a href="/dashboard/voice-ai" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              color: '#64748b',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '15px'
            }}>
              <span style={{ fontSize: '18px' }}>🤖</span>
              <span>My Agents</span>
            </a>
          </div>

          <div style={{ marginBottom: '4px' }}>
            <a href="/dashboard/leaderboard" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              color: '#64748b',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '15px'
            }}>
              <span style={{ fontSize: '18px' }}>🏆</span>
              <span>Leaderboard</span>
            </a>
          </div>

          <div style={{ marginBottom: '4px' }}>
            <a href="/dashboard/recent-activity" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              color: '#64748b',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '15px'
            }}>
              <span style={{ fontSize: '18px' }}>⚡</span>
              <span>Recent Activity</span>
            </a>
          </div>

          <div style={{ marginBottom: '4px' }}>
            <a href="/dashboard/brain" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              color: '#64748b',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '15px'
            }}>
              <span style={{ fontSize: '18px' }}>🧠</span>
              <span>the brAIn</span>
            </a>
          </div>

          <div style={{ marginBottom: '4px' }}>
            <a href="/dashboard/templates" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              color: '#64748b',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '15px'
            }}>
              <span style={{ fontSize: '18px' }}>📄</span>
              <span>Templates</span>
            </a>
          </div>

          <div style={{ marginBottom: '4px' }}>
            <a href="/dashboard/organization" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              color: '#64748b',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '15px'
            }}>
              <span style={{ fontSize: '18px' }}>🏢</span>
              <span>Organization</span>
            </a>
          </div>
        </nav>

        {/* User Profile */}
        <div style={{ padding: '16px 24px', borderTop: '1px solid #f1f5f9' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px', 
              backgroundColor: '#06b6d4',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '600',
              fontSize: '14px'
            }}>
              EO
            </div>
            <div>
              <p style={{ color: '#1e293b', fontWeight: '500', margin: 0, fontSize: '14px' }}>Erik Ovesny</p>
            </div>
          </div>
          <button onClick={handleSignOut} style={{
            width: '100%',
            padding: '8px 12px',
            backgroundColor: 'transparent',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            color: '#64748b',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Sign Out
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <main style={{ flex: 1, padding: '32px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: '700', 
            color: '#1e293b', 
            margin: '0 0 8px 0'
          }}>
            Dashboard
          </h1>
          <p style={{ color: '#64748b', margin: 0, fontSize: '16px' }}>
            Welcome back, Erik Ovesny! Here's your voice AI overview.
          </p>
        </div>

        {/* Feature Slider */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          marginBottom: '32px',
          overflow: 'hidden',
          position: 'relative',
          height: '180px'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: feature.gradient,
                padding: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                opacity: index === currentSlide ? 1 : 0,
                transition: 'all 0.8s ease'
              }}
            >
              <div>
                <h3 style={{
                  color: 'white',
                  fontSize: '28px',
                  fontWeight: '700',
                  margin: '0 0 4px 0'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '14px',
                  fontWeight: '500',
                  margin: '0 0 8px 0'
                }}>
                  {feature.subtitle}
                </p>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '16px',
                  margin: 0
                }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '32px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            padding: '24px'
          }}>
            <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 8px 0' }}>
              Total Calls Today
            </p>
            <p style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
              {stats.totalCalls}
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            padding: '24px'
          }}>
            <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 8px 0' }}>
              Active AI Agents  
            </p>
            <p style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
              {stats.activeAgents}
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            padding: '24px'
          }}>
            <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 8px 0' }}>
              Monthly Minutes
            </p>
            <p style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
              {stats.monthlyMinutes.toLocaleString()}
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            padding: '24px'
          }}>
            <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 8px 0' }}>
              Success Rate
            </p>
            <p style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
              {stats.successRate}%
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
