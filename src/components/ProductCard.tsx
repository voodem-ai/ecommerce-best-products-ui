import type { ProductItem } from '../services/api';
import './ProductCard.css';

interface ProductCardProps {
  product: ProductItem;
  index: number;
}

const SOURCE_COLORS: Record<string, string> = {
  'amazon.in': '#ff9900',
  'flipkart.com': '#2874f0',
  'myntra.com': '#ff3e6c',
};

function renderStars(rating: number): string {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const badgeColor = SOURCE_COLORS[product.source] || '#8b5cf6';

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="product-card"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="product-card__badge" style={{ background: badgeColor }}>
        {product.source}
      </div>

      {product.image_url && (
        <div className="product-card__image">
          <img src={product.image_url} alt={product.name} />
        </div>
      )}

      <h3 className="product-card__name">{product.name}</h3>

      <div className="product-card__meta">
        <span className="product-card__price">₹{product.price.toLocaleString('en-IN')}</span>
        <span className="product-card__rating" title={`${product.rating} / 5`}>
          {renderStars(product.rating)} {product.rating}
        </span>
      </div>

      <div className="product-card__buyers">
        {product.buyers.toLocaleString('en-IN')} buyers
      </div>
    </a>
  );
}
