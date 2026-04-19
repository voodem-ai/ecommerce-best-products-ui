import './LoadingSpinner.css';

export default function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="loading-dots">
        <span /><span /><span />
      </div>
      <p className="loading-text">
        Searching across Amazon, Flipkart &amp; Myntra via Gemini MCP…
      </p>
    </div>
  );
}
