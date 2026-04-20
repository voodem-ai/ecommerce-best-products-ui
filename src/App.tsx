import { useState, useRef } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';
import ResultSection from './components/ResultSection';
import ErrorMessage from './components/ErrorMessage';
import AdBanner from './components/AdBanner';
import { fetchRecommendation, type RecommendResponse } from './services/api';

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RecommendResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastPrompt, setLastPrompt] = useState('');
  const abortRef = useRef<AbortController | null>(null);

  const handleSearch = async (prompt: string) => {
    // Cancel any in-flight request
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setResult(null);
    setError(null);
    setLastPrompt(prompt);

    try {
      const data = await fetchRecommendation(prompt, controller.signal);
      setResult(data);
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === 'AbortError') return;
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    if (lastPrompt) handleSearch(lastPrompt);
  };

  return (
    <>
      <div className="container">
        <Header />
        <SearchBar onSearch={handleSearch} loading={loading} />

        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} onRetry={handleRetry} />}
        {result && <ResultSection recommendation={result.recommendation} />}

        {result?.cached && (
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '1rem' }}>
            ⚡ Served from cache
          </p>
        )}
      </div>

      {/* Fixed bottom-right ad banner – always visible */}
      <AdBanner />
    </>
  );
}

export default App;
