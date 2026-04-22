# E-Commerce Best Products – UI

A premium React frontend for discovering top-rated, lowest-priced products across Amazon, Flipkart, and Myntra — powered by Gemini AI via MCP.

## Architecture

```
User → React UI (this repo) → MCP Client API → Gemini + MCP Server → Product Data
```

## Tech Stack

| Layer | Technology |
|---|---|
| Language | TypeScript + React 18 |
| Build Tool | Vite |
| Styling | Vanilla CSS (glassmorphism, animations, gradients) |
| Typography | Google Fonts (Outfit) |
| State | React Hooks |
| Container | Docker (Vite build → Nginx alpine) + Nginx reverse proxy for internal K8s routing |
| Deployment | Helm chart with NodePort Service and GCE Ingress |
| Config | `.env` with `VITE_` prefixed variables |

## Quick Start

### 1. Clone & Configure
```bash
git clone https://github.com/voodem-ai/ecommerce-best-products-ui.git
cd ecommerce-best-products-ui
cp .env.example .env
# Edit .env — set VITE_API_URL if the client is not on localhost:8001
```

### 2. Install & Run
```bash
npm install
npm run dev
```

### 3. Docker
```bash
docker build -t ecommerce-ui .
docker run -p 3000:80 ecommerce-ui
```

## Environment Variables (`.env`)

| Variable | Default | Description |
|---|---|---|
| `VITE_API_URL` | `http://localhost:8001` | MCP Client backend URL |

> **Note:** Vite only exposes variables prefixed with `VITE_` to the browser. These are baked into the JS bundle at build time.

## Components

| Component | Description |
|---|---|
| `Header` | Animated gradient title + tagline |
| `SearchBar` | Chat-like input with example prompt chips |
| `ProductCard` | Product card with store badge, star ratings, price, buyers |
| `ResultSection` | Renders Gemini's markdown recommendation |
| `LoadingSpinner` | Three-dot pulse animation |
| `ErrorMessage` | Error display with retry button |

## Project Structure

```
src/
├── main.tsx
├── App.tsx
├── index.css
├── vite-env.d.ts
├── components/
│   ├── Header.tsx / Header.css
│   ├── SearchBar.tsx / SearchBar.css
│   ├── ProductCard.tsx / ProductCard.css
│   ├── ResultSection.tsx / ResultSection.css
│   ├── LoadingSpinner.tsx / LoadingSpinner.css
│   └── ErrorMessage.tsx / ErrorMessage.css
├── services/
│   └── api.ts
├── helm/
│   └── ecommerce-ui/          # Helm chart deployment files
└── nginx.conf                 # Reverse proxy configuration for internal /api/ calls
```

## License
MIT
