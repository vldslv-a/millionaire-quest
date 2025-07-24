# 🎮 Millionaire Quest

A "Who Wants to Be a Millionaire" game built with Next.js, TypeScript, and modern development practices.

## 📝 Project Description

This project is an implementation of the classic "Who Wants to Be a Millionaire" game with the following features:

- Players answer 12 questions in sequence
- Each question has at least 4 possible answers with at least one correct answer
- Correct answers advance players to the next question
- Incorrect answers take players to the final results screen
- Responsive design that works from iPhone 8 to 4K displays
- Component-based architecture with comprehensive testing
- Modern SCSS styling with BEM methodology

## 🚀 Live Demo

The project is published and accessible at [https://millionaire-quest-nine.vercel.app/](https://millionaire-quest-nine.vercel.app/)

## 🛠️ Technologies Used

- [Next.js 15](https://nextjs.org) - React framework with App Router
- TypeScript - Type safety and better development experience
- SCSS - Enhanced CSS with variables, nesting, and mixins
- Jest + Testing Library - Comprehensive unit testing
- ESLint + Prettier - Code quality and formatting
- Husky - Git hooks for quality assurance
- Vercel - Deployment platform

## 🔧 Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vldslv-a/millionaire-quest.git
   cd millionaire-quest
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🧪 Testing & Quality

### Available Scripts

- `npm test` - Run all tests
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Check code quality
- `npm run lint:fix` - Fix linting issues
- `npm run check-types` - TypeScript type checking

### Code Quality

- **100% TypeScript** - Fully typed codebase
- **Comprehensive testing** - Unit tests for all components
- **ESLint configuration** - Strict linting rules including React best practices
- **BEM methodology** - CSS class naming convention
- **Git hooks** - Automated quality checks

## 🏗️ Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── config/
│   │   ├── styles/              # Modular SCSS files
│   │   │   ├── _variables.scss  # CSS custom properties
│   │   │   ├── _base.scss       # Base styles and resets
│   │   │   ├── _typography.scss # Text styling with BEM
│   │   │   ├── _buttons.scss    # Button components
│   │   │   └── _links.scss      # Link styling
│   │   └── globals.scss         # Main stylesheet
│   ├── ui/
│   │   └── RootLayout/          # App layout component
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── error.tsx                # Error boundary
│   └── not-found.tsx            # 404 page
├── data/
│   └── questions.json           # Game configuration
├── pages/                       # Page components
│   ├── ErrorPage/
│   ├── GameStartPage/
│   └── NotFoundPage/
└── shared/
    └── utils/                   # Utility functions
        ├── styles/
        │   └── cx.ts            # CSS class utility
        └── object/
            └── entries/         # Object utilities
```

### Architecture Principles

- **Feature Sliced Design** - Organized by features and layers
- **Component Isolation** - Each component has its own folder with tests and styles
- **Utility First** - Reusable utilities for common operations
- **Type Safety** - Comprehensive TypeScript coverage
- **Testing Strategy** - Unit tests for all components and utilities

## 🎨 Styling Architecture

### BEM Methodology
The project uses BEM (Block Element Modifier) naming convention:

```scss
// Block
.button { }

// Element
.button__text { }

// Modifier
.button--primary { }
.button--disabled { }
```

### SCSS Structure
- **Variables** - CSS custom properties for theming
- **Base** - Reset and base styles
- **Components** - Modular component styles
- **Utilities** - Helper classes following BEM

## � Testing Coverage

The project maintains high test coverage across all components:

- **Component Tests** - Every page component has comprehensive unit tests
- **Utility Tests** - Helper functions are thoroughly tested
- **Integration Tests** - User interactions and navigation flows
- **Type Safety** - Full TypeScript coverage prevents runtime errors

### Test Examples

```bash
# Run specific test suites
npm test -- src/pages/ErrorPage
npm test -- src/app/ui/RootLayout
npm test -- src/shared/utils

# Generate coverage report
npm run test:coverage
```

## 🔧 Development Workflow

### Git Hooks (Husky)

The project includes automated quality checks:

- **Pre-commit**: ESLint check on staged files
- **Pre-push**: Full test suite execution
- **Staging validation**: Ensures code quality before commits

### Code Standards

- **ESLint** - Airbnb configuration with React best practices
- **Prettier** - Consistent code formatting
- **TypeScript** - Strict type checking
- **Import sorting** - Organized imports with eslint-plugin-perfectionist

## 🚀 Deployment

The project is automatically deployed on Vercel:

- **Production**: [https://millionaire-quest-nine.vercel.app/](https://millionaire-quest-nine.vercel.app/)
- **Preview deployments** for all pull requests
- **Automatic builds** on main branch updates

## 👨‍💻 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes following the established patterns
4. Ensure tests pass: `npm test`
5. Commit your changes (triggers pre-commit hooks)
6. Push to your branch (triggers pre-push hooks)
7. Submit a pull request

### Development Tips

- Follow the existing folder structure
- Write tests for new components
- Use BEM naming for CSS classes
- Ensure TypeScript strict mode compliance
- Update documentation when needed

## 🎯 Future Enhancements

Potential areas for improvement:

- **Game Logic**: Implement the actual game mechanics
- **Animations**: Add smooth transitions and micro-interactions
- **Accessibility**: Enhanced keyboard navigation and screen reader support
- **Internationalization**: Multi-language support
- **Sound Effects**: Audio feedback for interactions
- **Leaderboard**: Score tracking and competitive features
