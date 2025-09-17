'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (credentials.email === 'admin@example.com' && credentials.password === 'password123') {
        localStorage.setItem('token', 'demo-token');
        router.push('/dashboard');
      } else {
        setError('Invalid credentials. Try admin@example.com / password123');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
        body { margin: 0; padding: 0; }
      `}</style>
      
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0fdfa 0%, #e6fffa 25%, #ccfbf1 50%, #99f6e4 75%, #5eead4 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decorations */}
        <div style={{ position: 'absolute', top: '-160px', right: '-160px', width: '320px', height: '320px', background: 'radial-gradient(circle, rgba(34,211,238,0.2) 0%, rgba(59,130,246,0.3) 100%)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-160px', left: '-160px', width: '320px', height: '320px', background: 'radial-gradient(circle, rgba(20,184,166,0.2) 0%, rgba(34,211,238,0.3) 100%)', borderRadius: '50%', filter: 'blur(60px)' }}></div>

        <div style={{ maxWidth: '400px', width: '100%', position: 'relative', zIndex: 10 }}>
          {/* Logo and Brand */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ marginBottom: '24px' }}>
              <img 
                src="https://meetgabbi.com/wp-content/uploads/2024/11/new-logoooAsset-1.png" 
                alt="Meet Gabbi"
                style={{ height: '64px', margin: '0 auto', display: 'block' }}
              />
            </div>
            <p style={{ color: '#4b5563', fontSize: '18px', fontFamily: 'Poppins, sans-serif', margin: 0 }}>
              AI Voice Management Platform
            </p>
          </div>

          {/* Login Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '32px',
            position: 'relative'
          }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <h2 style={{ 
                fontSize: '24px', 
                fontWeight: '600', 
                color: '#1f2937', 
                marginBottom: '32px', 
                textAlign: 'center',
                fontFamily: 'Poppins, sans-serif',
                margin: '0 0 32px 0'
              }}>
                Welcome Back
              </h2>
              
              {error && (
                <div style={{
                  background: 'rgba(254, 242, 242, 0.8)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid #fca5a5',
                  color: '#dc2626',
                  padding: '16px',
                  borderRadius: '12px',
                  marginBottom: '24px',
                  fontSize: '14px'
                }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <label style={{ 
                    display: 'block', 
                    fontSize: '14px', 
                    fontWeight: '500', 
                    color: '#374151', 
                    marginBottom: '12px',
                    fontFamily: 'Manrope, sans-serif'
                  }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={credentials.email}
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: 'rgba(255, 255, 255, 0.5)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(209, 213, 219, 0.5)',
                      borderRadius: '12px',
                      fontSize: '16px',
                      color: '#1f2937',
                      fontFamily: 'Poppins, sans-serif',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box'
                    }}
                    placeholder="Enter your email"
                    onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(209, 213, 219, 0.5)'}
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    fontSize: '14px', 
                    fontWeight: '500', 
                    color: '#374151', 
                    marginBottom: '12px',
                    fontFamily: 'Manrope, sans-serif'
                  }}>
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: 'rgba(255, 255, 255, 0.5)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(209, 213, 219, 0.5)',
                      borderRadius: '12px',
                      fontSize: '16px',
                      color: '#1f2937',
                      fontFamily: 'Poppins, sans-serif',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box'
                    }}
                    placeholder="Enter your password"
                    onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(209, 213, 219, 0.5)'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '12px',
                    fontWeight: '500',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    transform: loading ? 'none' : 'scale(1)',
                    background: loading ? '#9ca3af' : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    color: 'white',
                    border: 'none',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontFamily: 'Poppins, sans-serif',
                    boxShadow: loading ? 'none' : '0 10px 25px rgba(59, 130, 246, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.target.style.transform = 'scale(1.02)';
                      e.target.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
                    }
                  }}
                >
                  {loading ? (
                    <>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderTop: '2px solid white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite',
                        marginRight: '8px'
                      }}></div>
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>

              <div style={{ marginTop: '32px', textAlign: 'center' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdfa 100%)',
                  borderRadius: '12px',
                  padding: '16px',
                  border: '1px solid rgba(34, 211, 238, 0.3)'
                }}>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#4b5563', 
                    fontWeight: '500', 
                    marginBottom: '4px',
                    fontFamily: 'Manrope, sans-serif',
                    margin: '0 0 4px 0'
                  }}>
                    Demo Credentials
                  </p>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#2563eb',
                    fontFamily: 'Poppins, sans-serif',
                    margin: 0
                  }}>
                    admin@example.com • password123
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <p style={{ 
              color: '#6b7280', 
              fontSize: '14px',
              fontFamily: 'Manrope, sans-serif',
              margin: 0
            }}>
              Powered by Meet Gabbi AI Technology
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
