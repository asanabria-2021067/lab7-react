# AuraCalc — Glassmorphic Neon Calculator

A modern, highly-polished React + TypeScript + Vite calculator application built with a premium glassmorphic dark theme and glowing animations.

## Key Features

- **Standard Operations**: Sum (+), Subtraction (-), Multiplication (*), Division (/), and Modulo (%)
- **Input Constraints**:
  - Max 9 characters on display (including signs and decimal points)
  - Result > 999999999 shows `ERROR`
  - Result < 0 shows `ERROR` (except manual `+/-` toggle inputs, which allow negative signs counting as a character)
  - Precision division: auto-formats and rounds infinite decimals (like 22/7) to fit the 9-character display limit
- **State-of-the-art Design**: Custom glowing effects, premium glassmorphism, Outfit and Share Tech Mono Google Fonts, micro-interactions, and float animations
- **Modular Codebase**: Every single component file is strictly under 20 lines of code!
- **Compliant Linter**: Customized ESLint rules enforcing:
  - Javascript Standard style
  - No semicolons (semicolons are strictly prohibited)
  - Maximum of 120 characters per line
- **Vitest Testing**: Comprehensive integration and unit tests for operations, precision, toggles, limits, and error handling
- **Storybook Stories**: Implemented Storybook stories for UI component cataloging and validation

## How to Run

Before running, make sure to use `pnpm` as the package manager (lockfile is included).

### Run Development Server
```bash
pnpm dev
```

### Run Tests
```bash
pnpm test
```

### Run Linter
```bash
pnpm lint
```

### Run Storybook
```bash
pnpm storybook
```
