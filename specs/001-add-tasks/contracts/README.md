# Contracts: Add Tasks

This feature does not expose a backend API or external service contract. The application is a frontend-only single-page app, so the relevant "contract" is the in-browser interaction contract between the user and the task list UI.

## UI Contract

- Input field accepts a text string representing a task description.
- Add button triggers a submission action when the trimmed text is non-empty.
- On valid submission, the task list updates immediately in the DOM.
- On invalid submission, no task is added and the validation state is preserved.

## Scope Notes

- There are no network requests, API endpoints, or database schema requirements.
- The app relies on browser memory for current-session task state.
