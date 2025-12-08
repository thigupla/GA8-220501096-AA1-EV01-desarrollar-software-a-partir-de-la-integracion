# AutoFix Pro - GitHub Copilot Instructions

## Project Overview
AutoFix Pro is a Progressive Web App (PWA) designed to optimize workflow management in automotive repair shops. The application manages service orders and empowers mechanics with an AI-powered Diagnostic Assistant using Google's Gemini API.

## Technology Stack
- **Frontend Framework:** React 18
- **Language:** TypeScript (strict mode enabled)
- **Styling:** Tailwind CSS (utility-first approach)
- **Build Tool:** Vite
- **AI Integration:** Google GenAI SDK (Gemini 2.5 Flash)
- **Icons:** Lucide React
- **Additional Libraries:** react-markdown for rendering AI responses

## Architecture & Design Patterns

### Project Structure
```
src/
├── components/      # Reusable UI components (Presentational)
├── contexts/        # Global state management (Auth, Theme)
├── layouts/         # Page layout structures (Header, Nav)
├── modules/         # Business logic modules (Orders, Clients)
├── services/        # External API communication (Gemini)
├── types.ts         # Type definitions (Domain Layer)
└── constants.ts     # Mock data and constants
```

### Applied Design Patterns
1. **Container/Presenter Pattern:** Separate logic (e.g., `OrderListModule`) from presentation (e.g., `ServiceOrderCard`)
2. **Provider Pattern:** Use Context API for dependency injection (e.g., `AuthContext`)
3. **Adapter/Service Pattern:** Encapsulate API calls in service modules (e.g., `geminiService.ts`)

## Coding Conventions

### TypeScript
- Use **strict mode** enabled in tsconfig.json
- Define explicit types for all props, state, and function parameters
- Use enums for fixed sets of values (e.g., `OrderStatus`)
- Prefer interfaces for object shapes

### React Components
- Use functional components with TypeScript (`React.FC`)
- Use descriptive prop interface names (e.g., `ServiceOrderCardProps`)
- Keep components focused on a single responsibility
- Prefer composition over inheritance

### Naming Conventions
- **Components:** PascalCase (e.g., `ServiceOrderCard.tsx`)
- **Files:** Use descriptive names matching the exported component/module
- **Variables:** camelCase for variables and functions
- **Constants:** UPPER_SNAKE_CASE for constants (e.g., `MOCK_ORDERS`)
- **Types/Interfaces:** PascalCase (e.g., `ServiceOrder`, `NavState`)

### Styling
- Use Tailwind CSS utility classes directly in JSX
- Follow mobile-first responsive design approach
- Use semantic color coding (e.g., status indicators)
- Maintain consistent spacing using Tailwind's spacing scale

### AI Integration
- The Gemini API is accessed through `services/geminiService.ts`
- API key is configured via environment variable `GEMINI_API_KEY` (mapped to `process.env.API_KEY` in vite.config.ts)
- AI responses are rendered using react-markdown
- Error handling should provide user-friendly fallback messages

## Development Commands

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Runs the app at http://localhost:3000 (or next available port)

### Build
```bash
npm run build
```
Creates optimized production build in `dist/` directory

### Preview Production Build
```bash
npm run preview
```

## Environment Variables
Create a `.env` file in the root directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Note: The Vite configuration (vite.config.ts) maps this to `process.env.API_KEY` for use in the application.

## State Management
- Use React Context API for global state (authentication, theme)
- Local component state with `useState` for UI interactions
- No external state management libraries (Redux, MobX) are currently used

## Code Quality Guidelines
- Write self-documenting code with clear variable and function names
- Add comments only when necessary to explain complex logic
- Keep functions small and focused on a single task
- Follow the existing code style and patterns in the repository

## Language & Localization
- The application is in **Spanish** (es-MX)
- UI labels, error messages, and AI prompts use Spanish
- Keep consistency in terminology across the application

## Common Tasks

### Adding a New Component
1. Create file in `components/` directory with PascalCase name
2. Define props interface if needed
3. Use TypeScript for type safety
4. Apply Tailwind CSS for styling
5. Export as default or named export

### Adding a New Service Order Status
1. Update `OrderStatus` enum in `types.ts`
2. Update status rendering logic in components
3. Ensure color coding is applied consistently

### Modifying AI Prompts
1. Locate `geminiService.ts` in the `services/` directory
2. Update the prompt string while maintaining Spanish language
3. Test with various order descriptions
4. Ensure error handling remains robust

## Important Notes
- This is a prototype/functional demo (not production-ready)
- Mock data is used (defined in `constants.ts`)
- No backend/database integration yet
- Focus on maintainability and code clarity for future scalability
