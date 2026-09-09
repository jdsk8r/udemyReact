# React Expense Tracker

A small React app for tracking expenses, built while following the Udemy "React - The Complete Guide" course. Add expenses, filter them by year, and view a simple bar chart of monthly spending.

Live site: [https://expenses-react.sanchezrolfsen.no/](https://expenses-react.sanchezrolfsen.no/)

## Tech Stack

- React 19
- Create React App (`react-scripts`)
- Cypress for end-to-end tests

## Getting Started

```bash
npm install
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command                | Description                       |
|------------------------|-----------------------------------|
| `npm start`            | Run the app in development mode   |
| `npm run build`        | Create a production build         |
| `npm test`             | Run unit tests                    |
| `npm run cypress:open` | Open the Cypress test runner (UI) |
| `npm run cypress:run`  | Run Cypress e2e tests headlessly  |

## CI

GitHub Actions runs unit tests, a production build, and Cypress e2e tests on every push/PR to `master` (see `.github/workflows/ci.yml`). Dependency updates are managed via Renovate (`renovate.json`).
