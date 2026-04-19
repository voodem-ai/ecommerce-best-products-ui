const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8001';

export interface ProductItem {
  name: string;
  price: number;
  rating: number;
  buyers: number;
  source: string;
  url: string;
  image_url?: string;
}

export interface RecommendResponse {
  recommendation: string;
  products: ProductItem[];
  cached: boolean;
}

export async function fetchRecommendation(
  prompt: string,
  signal?: AbortSignal
): Promise<RecommendResponse> {
  const response = await fetch(`${API_BASE_URL}/recommend`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
    signal,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
    throw new Error(error.detail || `HTTP ${response.status}`);
  }

  return response.json();
}
