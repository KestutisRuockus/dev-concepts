# Dev Concepts

This project was built in response to feedback received after a job application. The feedback highlighted three specific gaps: accessibility best practices, routing without libraries, and component lifecycle management.

Rather than just reading about these topics, I built a React app to demonstrate them in practice.

## What's covered

**Custom Routing** — A fully custom client-side router built from scratch using the History API, with no external routing libraries. Includes `Router`, `Route`, `RouterContext`, and `useRouter` — all written by hand.

**Accessibility** — Semantic HTML, ARIA attributes, keyboard navigation, focus traps, modals, and live regions. Scores 100 on Lighthouse accessibility and best practices audits.

**Component Lifecycle** — Mount, update, unmount, cleanup patterns with `useEffect`, and optimization with `useMemo` and `useCallback`.

## Tech stack

React, CSS Modules, History API, Vite
