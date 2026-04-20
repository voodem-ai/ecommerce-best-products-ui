import './ResultSection.css';

interface ResultSectionProps {
  recommendation: string;
}

export default function ResultSection({ recommendation }: ResultSectionProps) {
  // Convert markdown-like text to basic HTML
  const formatted = recommendation
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    .replace(/\n/g, '<br/>')
    // Make ALL links open in a new tab safely
    .replace(/<a\s+href=/gi, '<a target="_blank" rel="noopener noreferrer" href=');

  return (
    <div className="result-section">
      <h2 className="result-section__title">
        <span className="result-section__icon">✨</span>
        AI Recommendation
      </h2>
      <div
        className="result-section__content"
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    </div>
  );
}
