import { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (prompt: string) => void;
  loading: boolean;
}

const EXAMPLE_PROMPTS = [
  'Best wireless earbuds under ₹2000',
  'Top-rated running shoes for men',
  'Budget mechanical keyboard with fast delivery',
  'Premium cotton t-shirts under ₹500',
];

export default function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (value.trim() && !loading) {
      onSearch(value.trim());
    }
  };

  return (
    <div className="search-section">
      <div className="search-bar">
        <input
          id="search-input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Describe what you're looking for..."
          disabled={loading}
        />
        <button
          id="search-button"
          onClick={handleSubmit}
          disabled={loading || !value.trim()}
        >
          {loading ? (
            <span className="search-bar__spinner" />
          ) : (
            <span>Search</span>
          )}
        </button>
      </div>

      <div className="search-examples">
        <span className="search-examples__label">Try:</span>
        {EXAMPLE_PROMPTS.map((p, i) => (
          <button
            key={i}
            className="search-examples__chip"
            onClick={() => { setValue(p); onSearch(p); }}
            disabled={loading}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
