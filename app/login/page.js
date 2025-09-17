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
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-200 to-cyan-300 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-md w-full relative z-10">
          {/* Logo and Brand */}
          <div className="text-center mb-12">
            {/* Meet Gabbi Logo */}
            <div className="mx-auto mb-6">
              <img 
                src="https://meetgabbi.com/wp-content/uploads/2024/11/new-logoooAsset-1.png" 
                alt="Meet Gabbi"
                className="h-16 mx-auto"
              />
            </div>
            
            <p className="text-gray-600 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
              AI Voice Management Platform
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 relative">
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Welcome Back
              </h2>
              
              {error && (
                <div className="bg-red-50/80 backdrop-blur-sm border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={credentials.email}
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                    className="w-full px-4 py-4 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition duration-300 text-gray-800 placeholder-gray-500"
                    placeholder="Enter your email"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="w-full px-4 py-4 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition duration-300 text-gray-800 placeholder-gray-500"
                    placeholder="Enter your password"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 px-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                    loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
                  } text-white`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Signing in...
                    </span>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>

              <div className="mt-8 text-center">
                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl p-4 border border-cyan-200/30">
                  <p className="text-sm text-gray-600 font-medium mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Demo Credentials
                  </p>
                  <p className="text-sm text-blue-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    admin@example.com • password123
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Powered by Meet Gabbi AI Technology
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
