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
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .slide-transition {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .feature-card {
          transform: translateX(0);
          opacity: 1;
        }
        
        .feature-card.entering {
          transform: translateX(100%);
          opacity: 0;
        }
        
        .feature-card.exiting {
          transform: translateX(-100%);
          opacity: 0;
        }
        
        .nav-icon {
          transition: all 0.2s ease;
        }
        
        .nav-item:hover .nav-icon {
          transform: scale(1.1);
        }
      `}</style>

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
              fontFamily: 'Manrope, sans-serif',
              fontWeight: '500'
            }}>
              AI Voice Management
            </p>
          </div>

          {/* Navigation */}
          <nav style={{ flex: 1, padding: '24px 16px' }}>
            <div className="nav-item" style={{ marginBottom: '8px' }}>
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
                fontFamily: 'Manrope, sans-serif',
                border: '2px solid #bfdbfe',
                transition: 'all 0.2s ease'
              }}>
                <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
                <span>Dashboard</span>
              </a>
            </div>
            <div className="nav-item" style={{ marginBottom: '8px' }}>
              <a href="/dashboard/voice-ai" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 20px',
                color: '#64748b',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '500',
                fontFamily: 'Manrope, sans-serif',
                transition: 'all 0.2s ease'
              }}>
                <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Voice AI</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="/dashboard/phone-numbers" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 20px',
                color: '#64748b',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '500',
                fontFamily: 'Manrope, sans-serif',
                transition: 'all 0.2s ease'
              }}>
                <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
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
                fontSize: '16px',
                fontFamily: 'Manrope, sans-serif'
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
              fontFamily: 'Manrope, sans-serif',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#fef2f2';
              e.target.style.borderColor = '#fca5a5';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.borderColor = '#fee2e2';
            }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
              </svg>
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
              margin: '0 0 8px 0', 
              fontFamily: 'Manrope, sans-serif' 
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
                className={`feature-card slide-transition ${index === currentSlide ? '' : index < currentSlide ? 'exiting' : 'entering'}`}
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
                  transform: index === currentSlide ? 'translateX(0)' : 
                           index < currentSlide ? 'translateX(-100%)' : 'translateX(100%)'
                }}
              >
                <div style={{
                  fontSize: '48px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                  padding: '20px',
                  backdropFilter: 'blur(10px)'
                }}>
                  {feature.icon}
                </div>
                <div>
                  <h3 style={{
                    color: 'white',
                    fontSize: '32px',
                    fontWeight: '800',
                    margin: '0 0 4px 0',
                    fontFamily: 'Manrope, sans-serif'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '16px',
                    fontWeight: '600',
                    margin: '0 0 8px 0',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {feature.subtitle}
                  </p>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '18px',
                    margin: 0,
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Slider Dots */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              right: '24px',
              display: 'flex',
              gap: '8px'
            }}>
              {features.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
          }}>
            {[
              { title: 'Total Calls Today', value: stats.totalCalls, icon: '📞', color: '#06b6d4' },
              { title: 'Active AI Agents', value: stats.activeAgents, icon: '🤖', color: '#8b5cf6' },
              { title: 'Monthly Minutes', value: stats.monthlyMinutes.toLocaleString(), icon: '⏱️', color: '#10b981' },
              { title: 'Success Rate', value: `${stats.successRate}%`, icon: '✅', color: '#f59e0b' }
            ].map((stat, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                border: '1px solid #f1f5f9',
                padding: '28px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <p style={{ 
                    fontSize: '14px', 
                    fontWeight: '600', 
                    color: '#64748b', 
                    margin: 0,
                    fontFamily: 'Manrope, sans-serif'
                  }}>
                    {stat.title}
                  </p>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: `${stat.color}15`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px'
                  }}>
                    {stat.icon}
                  </div>
                </div>
                <p style={{ 
                  fontSize: '36px', 
                  fontWeight: '800', 
                  color: '#1e293b', 
                  margin: 0,
                  fontFamily: 'Manrope, sans-serif'
                }}>
                  {stat.value}
                </p>
              </div>
            ))}
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
              margin: '0 0 20px 0',
              fontFamily: 'Manrope, sans-serif'
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
                transition: 'all 0.2s ease',
                display: 'block'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#06b6d4';
                e.target.style.backgroundColor = '#f0fdfa';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = '#f1f5f9';
                e.target.style.backgroundColor = 'white';
                e.target.style.transform = 'translateY(0)';
              }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎤</div>
                <h3 style={{ fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0', fontFamily: 'Manrope, sans-serif' }}>
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
                transition: 'all 0.2s ease',
                display: 'block'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#8b5cf6';
                e.target.style.backgroundColor = '#faf5ff';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = '#f1f5f9';
                e.target.style.backgroundColor = 'white';
                e.target.style.transform = 'translateY(0)';
              }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>📞</div>
                <h3 style={{ fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0', fontFamily: 'Manrope, sans-serif' }}>
                  Manage Numbers
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
                  Configure Twilio phone numbers and settings
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
