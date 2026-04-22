# Skills – UI Application

Technical skills and competencies required to develop, maintain, and extend this project.

---

## Core Skills

### Frontend Development
- **React 18+** – Functional components, hooks (`useState`, `useRef`), component composition
- **TypeScript** – Static typing, interfaces, generics, strict mode
- **Vite** – Fast dev server, HMR, production builds, environment variables (`import.meta.env`)

### Styling & Design
- **Vanilla CSS** – Custom properties (CSS variables), animations, transitions
- **Glassmorphism** – `backdrop-filter: blur()`, semi-transparent surfaces
- **Responsive Design** – Flexbox, CSS Grid, media queries
- **Micro-animations** – `@keyframes`, `animation-delay`, entrance effects
- **Google Fonts** – External font loading (Outfit)
- **Premium UI Patterns** – Card hover effects, gradient text, pulsing loaders

### Component Architecture
- **Atomic Design** – Small, focused, reusable components
- **CSS Modules / CSS-per-component** – Encapsulated styles per component
- **Props & Event Handling** – Typed interfaces, callback props

### API Integration
- **Fetch API** – POST requests, JSON parsing, error handling
- **AbortController** – Cancelling in-flight requests on new searches
- **Environment-based Config** – `VITE_API_URL` for configurable backend URL
- **Error Boundaries** – Graceful error display with retry

---

## DevOps & Infrastructure

### Docker
- **Multi-stage builds** – Vite build → Nginx alpine for static serving
- **Nginx Reverse Proxy** – Custom `nginx.conf` to serve static files and proxy `/api/` calls to the internal cluster network.

### Kubernetes & Deployment
- **Helm** – Managing deployments using a centralized Helm chart (`helm/ecommerce-ui/`)
- **Ingress Configuration** – Using `NodePort` and GCE `Ingress` pointing to a global static IP.

### Environment Management
- **`.env` files** – Vite `VITE_` prefixed variables for browser-safe config
- **Build-time injection** – Env vars baked into the JS bundle at build

### Version Control
- **Git & GitHub** – Organization repositories

---

## Key Components

| Component | Responsibility |
|---|---|
| `Header` | Branding, animated gradient title, tagline |
| `SearchBar` | User input, example prompt chips, submit handling |
| `ProductCard` | Product display with store badge, star ratings, price, buyers |
| `ResultSection` | Renders Gemini's markdown recommendation as formatted HTML |
| `LoadingSpinner` | Three-dot pulse animation with status text |
| `ErrorMessage` | Error display with optional retry button |

## Architecture Patterns

| Pattern | Usage |
|---|---|
| **Presentational Components** | All components are stateless UI renderers |
| **Container Component** | `App.tsx` manages all state and API calls |
| **Service Layer** | `services/api.ts` encapsulates backend communication |
| **Abort Pattern** | `AbortController` prevents stale responses |
