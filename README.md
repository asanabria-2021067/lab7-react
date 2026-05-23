# AuraCalc - Casio-Inspired Calculator

A React + TypeScript + Vite calculator app with a custom UI inspired by a real Casio calculator (fx-570LA X), based on my own physical calculator reference.

**Hosted URL:** [https://lab7-react-nine.vercel.app/](https://lab7-react-nine.vercel.app/)

## Key Features

- **Standard Operations**: Sum (+), Subtraction (-), Multiplication (*), Division (/), and Modulo (%)
- **Input Constraints**:
  - Max 9 characters on display (including signs and decimal points)
  - Result > 999999999 shows `ERROR`
  - Positive subtraction that produces a negative result shows `ERROR`
  - Signed input with `+/-` can produce negative results up to 9 displayed characters
  - Precision division: auto-formats and rounds infinite decimals (like 22/7) to fit the 9-character display limit
- **Design Inspiration**: Styled to resemble a Casio scientific calculator body, display, and key feel
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
