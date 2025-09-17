import './globals.css'

export const metadata = {
  title: 'Speech Assistant - Real-time AI',
  description: 'AI-powered speech assistant with OpenAI real-time API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
