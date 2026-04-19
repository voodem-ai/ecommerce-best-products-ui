import { useState } from 'react'

function App() {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleSearch = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true)
    setResult(null)
    
    try {
      const response = await fetch('http://localhost:8001/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      })
      
      const data = await response.json()
      setResult(data.recommendation)
    } catch (error) {
      console.error(error)
      setResult("Error communicating with MCP Client.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>AI E-Commerce Finder</h1>
      <p className="subtitle">Discover the highest-rated, lowest-priced items from multiple stores instantly.</p>
      
      <div className="search-box">
        <input 
          type="text" 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., I need a cheap but top-rated mechanical keyboard..."
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch} disabled={loading || !prompt.trim()}>
          {loading ? 'Searching...' : 'Find Best'}
        </button>
      </div>

      {loading && (
        <div className="loading">
          Analyzing millions of products via Gemini MCP...
        </div>
      )}

      {result && (
        <div className="result">
          {/* Simple formatting render since it's raw text/markdown from Gemini */}
          <div dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>') }} />
        </div>
      )}
    </div>
  )
}

export default App
