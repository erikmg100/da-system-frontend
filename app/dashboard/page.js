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
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "🧠"
    },
    {
      title: "Interactive Avatars",
      subtitle: "Visual AI Presence",
      description: "Bring your AI to life with stunning visual representations",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "👤"
    },
    {
      title: "GabbiTranslator",
      subtitle: "Global Communication",
      description: "Break language barriers with real-time translation",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "🌍"
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
        borderRight: '1px solid #e2e8f0',
        width: '280px',
        minHeight: '100vh',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Logo Section */}
        <div style={{ 
          padding: '32px 24px 24px 24px', 
          borderBottom: '1px solid #e2e8f0',
          textAlign: 'center'
        }}>
          <img 
            src="https://storage.googleapis.com/msgsndr/Gyvgsd99IT2dSJS5bwiK/media/678997c9accdd1b8bf7ce48a.png" 
            alt="Meet Gabbi"
            style={{ 
              height: '48px', 
              width: 'auto',
              marginBottom: '12px'
            }}
          />
          <p style={{ 
            fontSize: '14px', 
            color: '#64748b', 
            margin: 0,
            fontWeight: '500'
          }}>
            AI Voice Management
          </p>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: '24px 16px' }}>
          <div style={{ marginBottom: '8px' }}>
            <a href="/dashboard" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              backgroundColor: '#eff6ff',
              color: '#2563eb',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              border: '2px solid #bfdbfe'
            }}>
              <div style={{ width: '20px', height: '20px' }}>■</div>
              <span>Dashboard</span>
            </a>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <a href="/dashboard/voice-ai" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              color: '#64748b',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              <div style={{ width: '20px', height: '20px' }}>♦</div>
              <span>Voice AI</span>
            </a>
          </div>
          <div>
            <a href="/dashboard/phone-numbers" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              color: '#64748b',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              <div style={{ width: '20px', height: '20px' }}>●</div>
              <span>Phone Numbers</span>
            </a>
          </div>
        </nav>

        {/* User Profile & Sign Out */}
        <div style={{ padding: '16px 24px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#06b6d4',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '600',
              fontSize: '16px'
            }}>
              EO
            </div>
            <div>
              <p style={{ color: '#1e293b', fontWeight: '600', margin: 0, fontSize: '14px' }}>Erik Ovesny</p>
              <p style={{ color: '#64748b', margin: 0, fontSize: '12px' }}>Admin</p>
            </div>
          </div>
          <button onClick={handleSignOut} style={{
            width: '100%',
            padding: '12px 16px',
            backgroundColor: 'transparent',
            border: '1px solid #fee2e2',
            borderRadius: '8px',
            color: '#dc2626',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <span>→</span>
            <span>Sign Out</span>
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <main style={{ flex: 1, padding: '32px', overflow: 'hidden' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ 
            fontSize: '36px', 
            fontWeight: '800', 
            color: '#1e293b', 
            margin: '0 0 8px 0'
          }}>
            Dashboard
          </h1>
          <p style={{ color: '#64748b', margin: 0, fontSize: '18px' }}>
            Welcome back! Here's your voice AI overview.
          </p>
        </div>

        {/* Feature Slider */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          marginBottom: '32px',
          overflow: 'hidden',
          position: 'relative',
          height: '200px'
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
                transform: index === currentSlide ? 'translateX(0)' : 'translateX(100%)',
                transition: 'all 0.8s ease'
              }}
            >
              <div style={{
                fontSize: '48px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                padding: '20px'
              }}>
                {feature.icon}
              </div>
              <div>
                <h3 style={{
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: '800',
                  margin: '0 0 4px 0'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '16px',
                  fontWeight: '600',
                  margin: '0 0 8px 0'
                }}>
                  {feature.subtitle}
                </p>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '18px',
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '32px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #f1f5f9',
            padding: '28px'
          }}>
            <p style={{ fontSize: '14px', fontWeight: '600', color: '#64748b', margin: '0 0 16px 0' }}>
              Total Calls Today
            </p>
            <p style={{ fontSize: '36px', fontWeight: '800', color: '#1e293b', margin: 0 }}>
              {stats.totalCalls}
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #f1f5f9',
            padding: '28px'
          }}>
            <p style={{ fontSize: '14px', fontWeight: '600', color: '#64748b', margin: '0 0 16px 0' }}>
              Active AI Agents
            </p>
            <p style={{ fontSize: '36px', fontWeight: '800', color: '#1e293b', margin: 0 }}>
              {stats.activeAgents}
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #f1f5f9',
            padding: '28px'
          }}>
            <p style={{ fontSize: '14px', fontWeight: '600', color: '#64748b', margin: '0 0 16px 0' }}>
              Monthly Minutes
            </p>
            <p style={{ fontSize: '36px', fontWeight: '800', color: '#1e293b', margin: 0 }}>
              {stats.monthlyMinutes.toLocaleString()}
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #f1f5f9',
            padding: '28px'
          }}>
            <p style={{ fontSize: '14px', fontWeight: '600', color: '#64748b', margin: '0 0 16px 0' }}>
              Success Rate
            </p>
            <p style={{ fontSize: '36px', fontWeight: '800', color: '#1e293b', margin: 0 }}>
              {stats.successRate}%
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #f1f5f9',
          padding: '28px'
        }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '700', 
            color: '#1e293b', 
            margin: '0 0 20px 0'
          }}>
            Quick Actions
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <a href="/dashboard/voice-ai" style={{
              padding: '24px',
              border: '2px solid #f1f5f9',
              borderRadius: '12px',
              backgroundColor: 'white',
              textDecoration: 'none',
              color: 'inherit',
              display: 'block'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎤</div>
              <h3 style={{ fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' }}>
                Update Voice Prompt
              </h3>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
                Modify AI agent instructions and behavior
              </p>
            </a>
            <a href="/dashboard/phone-numbers" style={{
              padding: '24px',
              border: '2px solid #f1f5f9',
              borderRadius: '12px',
              backgroundColor: 'white',
              textDecoration: 'none',
              color: 'inherit',
              display: 'block'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>📞</div>
              <h3 style={{ fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' }}>
                Manage Numbers
              </h3>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
                Configure Twilio phone numbers and settings
              </p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
