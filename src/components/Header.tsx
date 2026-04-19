import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__icon">🛒</span>
        <h1 className="header__title">BestFind AI</h1>
      </div>
      <p className="header__subtitle">
        Discover top-rated, lowest-priced products across Amazon, Flipkart &amp; Myntra — powered by Gemini
      </p>
    </header>
  );
}
