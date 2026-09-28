# Quickstart: Add Tasks Validation

## Prerequisites

- A modern browser
- The application files are available locally or served from a static web server

## Run the app

1. Open the application in a browser by opening `index.html` directly, or
2. Start a local static server from the project root (for example: `python -m http.server`), then open the served page.

## Validation Scenarios

### Scenario 1: Add a valid task

1. Enter `Buy groceries` in the task input field.
2. Click the Add button.
3. Confirm the new task appears in the task list immediately.
4. Confirm the page does not reload.

### Scenario 2: Reject empty input

1. Leave the input blank or enter only spaces.
2. Click the Add button.
3. Confirm no task is created and the list remains unchanged.

### Scenario 3: Add multiple tasks sequentially

1. Add one valid task.
2. Add a second valid task.
3. Confirm both tasks appear in the list in the expected order.

## Expected Outcome

The app should behave as a simple, responsive to-do entry flow with immediate UI updates and strict validation against blank task values.
