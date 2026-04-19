# E-Commerce Best Products – UI

A premium React frontend for searching and discovering the best-rated, most affordable products across Amazon, Flipkart, and Myntra.

## Architecture

```
User → React UI (this) → MCP Client API → Gemini + MCP Server → Product Data
```

## Quick Start

### Prerequisites
- Node.js 20+

### Install & Run
```bash
npm install
npm run dev
```

### Docker
```bash
docker build -t ecommerce-ui .
docker run -p 3000:80 ecommerce-ui
```

### Environment
The UI connects to the MCP Client at `http://localhost:8001/recommend`. To change this, update the fetch URL in `src/App.tsx`.

## License
MIT
