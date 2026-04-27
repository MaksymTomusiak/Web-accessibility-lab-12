# NovaStack - Web Accessibility Lab 12

A premium React Single Page Application (SPA) built with a focus on modern aesthetics and strict Web Accessibility (A11y) standards.

## 🚀 Accessibility Features

### 1. Accessible Routing
- **Title Management**: The `document.title` is updated automatically on every route change to provide context to screen reader users.
- **Focus Management**: Upon navigation, focus is automatically shifted to the main `<h1>` heading of the new page. This ensures that screen readers begin reading from the top of the new content.

### 2. Dynamic Notifications (Aria-Live)
- **Toast System**: A global notification system using `aria-live="polite"`. This allows real-time updates (like "Product added to cart") to be announced without interrupting the user's current task.
- **Accessible Loaders**: Loading states use `role="status"` and `aria-live="polite"` to inform users when content is being fetched.

### 3. Accessible Components
- **Semantic HTML**: Proper use of `<nav>`, `<main>`, `<footer>`, and heading hierarchy (`<h1>`).
- **Form Accessibility**: Full WCAG compliance for forms, including properly associated labels, `aria-required`, and `autocomplete` attributes.
- **Keyboard Navigation**: High-visibility focus rings (`:focus-visible`) for all interactive elements.

## 🛠 CI/CD Accessibility Auditing
- **Pa11y CI**: Automated accessibility testing is configured via `.pa11yci`.
- **GitHub Actions**: A workflow is set up to run accessibility audits on every Pull Request to ensure no regressions are introduced.

## 💻 Tech Stack
- **React 19**
- **TypeScript**
- **Vite**
- **React Router 7**
- **Framer Motion** (Animations)
- **Lucide React** (Icons)

---
*Created for Web Accessibility Lab 12.*
