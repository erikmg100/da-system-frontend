'use client';
import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';

export default function PhoneNumbers() {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading phone numbers from Twilio
    setTimeout(() => {
      setPhoneNumbers([
        {
          id: '1',
          number: '+1 (555) 123-4567',
          friendlyName: 'Main Business Line',
          status: 'active',
          callsToday: 23,
          lastCall: '2 hours ago'
        },
        {
          id: '2', 
          number: '+1 (555) 987-6543',
          friendlyName: 'Customer Support',
          status: 'active',
          callsToday: 15,
          lastCall: '45 minutes ago'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const PhoneNumberCard = ({ phoneNumber }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{phoneNumber.friendlyName}</h3>
          <p className="text-xl font-mono text-blue-600">{phoneNumber.number}</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${
            phoneNumber.status === 'active' ? 'bg-green-500' : 'bg-red-500'
          }`}></div>
          <span className={`font-medium ${
            phoneNumber.status === 'active' ? 'text-green-700' : 'text-red-700'
          }`}>
            {phoneNumber.status === 'active' ? 'Active' : 'Inactive'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">Calls Today</p>
          <p className="text-2xl font-bold text-gray-900">{phoneNumber.callsToday}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Last Call</p>
          <p className="text-sm text-gray-900">{phoneNumber.lastCall}</p>
        </div>
      </div>

      <div className="flex space-x-2">
        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
          Configure
        </button>
        <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200">
          View Logs
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Phone Numbers</h1>
              <p className="text-gray-600 mt-2">Manage your Twilio phone numbers and AI voice agents.</p>
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
              + Add Number
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Numbers</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{phoneNumbers.length}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Calls Today</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {phoneNumbers.reduce((sum, phone) => sum + phone.callsToday, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Response</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">1.2s</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Phone Numbers List */}
        <div className="space-y-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="text-gray-600">Loading phone numbers...</div>
            </div>
          ) : (
            phoneNumbers.map((phoneNumber) => (
              <PhoneNumberCard key={phoneNumber.id} phoneNumber={phoneNumber} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
