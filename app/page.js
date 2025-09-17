'use client'

import { useState, useRef } from 'react'

export default function Home() {
  const [isConnected, setIsConnected] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [messages, setMessages] = useState([])
  const [status, setStatus] = useState('Ready to connect')
  const wsRef = useRef(null)

  const connectToAssistant = () => {
    try {
      // This will connect to your backend when it's deployed
      const wsUrl = 'wss://your-backend-url.com' // You'll update this later
      
      setStatus('Connecting...')
      wsRef.current = new WebSocket(wsUrl)
      
      wsRef.current.onopen = () => {
        setIsConnected(true)
        setStatus('🟢 Connected to AI Assistant')
      }
      
      wsRef.current.onmessage = (event) => {
        const data = JSON.parse(event.data)
        setMessages(prev => [...prev, { 
          type: 'assistant', 
          content: data.message || 'Response received',
          timestamp: new Date().toLocaleTimeString()
        }])
      }
      
      wsRef.current.onclose = () => {
        setIsConnected(false)
        setStatus('❌ Disconnected')
      }
      
      wsRef.current.onerror = (error) => {
        console.error('WebSocket error:', error)
        setStatus('⚠️ Connection Error')
      }
    } catch (error) {
      console.error('Failed to connect:', error)
      setStatus('❌ Failed to connect')
    }
  }

  const startRecording = () => {
    if (isConnected && wsRef.current) {
      setIsRecording(true)
      setStatus('🎤 Listening...')
      setMessages(prev => [...prev, { 
        type: 'user', 
        content: 'Started recording...', 
        timestamp: new Date().toLocaleTimeString()
      }])
      wsRef.current.send(JSON.stringify({ type: 'start_recording' }))
    }
  }

  const stopRecording = () => {
    if (isConnected && wsRef.current) {
      setIsRecording(false)
      setStatus('🔄 Processing...')
      wsRef.current.send(JSON.stringify({ type: 'stop_recording' }))
    }
  }

  const disconnect = () => {
    if (wsRef.current) {
      wsRef.current.close()
    }
    setIsConnected(false)
    setIsRecording(false)
    setStatus('Ready to connect')
    setMessages([])
  }

  return (
    <main className="container">
      <div className="header">
        <h1>🎤 AI Speech Assistant</h1>
        <p>Real-time conversation with OpenAI</p>
        <div className={`status ${isConnected ? 'connected' : 'disconnected'}`}>
          {status}
        </div>
      </div>

      <div className="controls">
        {!isConnected ? (
          <button onClick={connectToAssistant} className="connect-btn">
            🚀 Connect to Assistant
          </button>
        ) : (
          <div className="recording-controls">
            <button 
              onClick={isRecording ? stopRecording : startRecording}
              className={`record-btn ${isRecording ? 'recording' : ''}`}
              disabled={!isConnected}
            >
              {isRecording ? '🛑 Stop Recording' : '🎤 Start Recording'}
            </button>
            <button onClick={disconnect} className="disconnect-btn">
              ❌ Disconnect
            </button>
          </div>
        )}
      </div>

      <div className="messages">
        {messages.length === 0 ? (
          <div className="empty-state">
            <p>💡 Connect and start talking to begin your conversation!</p>
          </div>
        ) : (
          <div className="message-list">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <div className="message-header">
                  <strong>{message.type === 'user' ? '👤 You' : '🤖 AI Assistant'}</strong>
                  <span className="timestamp">{message.timestamp}</span>
                </div>
                <p>{message.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
