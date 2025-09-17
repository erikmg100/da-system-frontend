'use client';
import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';

export default function VoiceAI() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Load current prompt (this will connect to your backend later)
    setPrompt(`You are a helpful AI assistant for a dental practice. Be friendly, professional, and helpful when scheduling appointments or answering questions about services.

Key guidelines:
- Always be polite and professional
- Help schedule appointments
- Answer questions about dental services
- If you don't know something, offer to transfer to a human
- Keep responses concise and clear`);
  }, []);

  const handleSave = async () => {
    setLoading(true);
    
    // Simulate saving to backend
    setTimeout(() => {
      setLoading(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 1000);
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Voice AI Management</h1>
          <p className="text-gray-600 mt-2">Update your AI agent's system instructions and behavior.</p>
        </div>

        {/* Current Status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">AI Agent Status</h2>
              <p className="text-gray-600 mt-1">Your voice AI is currently active and handling calls</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-700 font-medium">Active</span>
            </div>
          </div>
        </div>

        {/* System Prompt Editor */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">System Instructions</h2>
              <p className="text-gray-600 mt-1">These instructions control how your AI agent behaves during calls</p>
            </div>
            {saved && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg">
                ✅ Saved successfully!
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AI System Prompt
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={12}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter your AI agent's system instructions..."
              />
              <p className="text-sm text-gray-500 mt-2">
                Be specific about how you want the AI to behave, what tone to use, and what actions it should take.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={handleSave}
                disabled={loading}
                className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
              
              <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition duration-200">
                Test AI Response
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
