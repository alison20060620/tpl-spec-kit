# Tasks: Add Tasks

**Input**: Design documents from `/specs/001-add-tasks/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Included because testing is explicitly required for this feature.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the static app skeleton and testing baseline.

- [ ] T001 Create the initial frontend structure for the app in index.html, styles.css, and script.js
- [ ] T002 [P] Configure the browser-based validation workflow and test files in tests/smoke.test.js
- [ ] T003 [P] Add the initial semantic HTML structure and accessible labels in index.html

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Put in place the shared task state and validation logic required before story work begins.

- [ ] T004 Define the in-memory task data model and app state in script.js
- [ ] T005 Implement the render helper that updates the task list in the DOM in script.js
- [ ] T006 Add client-side validation for empty and whitespace-only task entries in script.js
- [ ] T007 Document the app assumptions and validation steps in quickstart.md

**Checkpoint**: The task state, validation, and rendering foundation is ready before user story implementation starts.

---

## Phase 3: User Story 1 - Add a task from the input field (Priority: P1) 🎯 MVP

**Goal**: Allow a user to enter a task and add it to the visible list without a page refresh.

**Independent Test**: A user can enter a valid task, click Add, and immediately see the task appear in the list.

### Tests for User Story 1

- [ ] T008 [P] [US1] Add failing smoke test for successful task creation in tests/smoke.test.js
- [ ] T009 [P] [US1] Add validation test for empty input rejection in tests/smoke.test.js

### Implementation for User Story 1

- [ ] T010 [P] [US1] Build the task input field and Add button in index.html
- [ ] T011 [P] [US1] Style the input form and list layout in styles.css
- [ ] T012 [US1] Implement the add-task click handler and task creation logic in script.js
- [ ] T013 [US1] Ensure the task is inserted into the rendered list immediately without page reload in script.js
- [ ] T014 [US1] Add focused, keyboard-friendly interaction states for the input and button in index.html and styles.css

**Checkpoint**: User Story 1 is fully functional and testable on its own.

---

## Phase 4: User Story 2 - Prevent invalid task submission (Priority: P2)

**Goal**: Block empty, blank, or whitespace-only task entries so the list remains clean and valid.

**Independent Test**: A user cannot add a blank task even if the form is submitted with empty or whitespace-only input.

### Tests for User Story 2

- [ ] T015 [P] [US2] Add regression test covering whitespace-only input handling in tests/smoke.test.js
- [ ] T016 [P] [US2] Add negative test for rejected empty submissions in tests/smoke.test.js

### Implementation for User Story 2

- [ ] T017 [US2] Ensure trimming occurs before validation in script.js
- [ ] T018 [US2] Keep the task list unchanged when validation fails in script.js
- [ ] T019 [US2] Add a clear validation message or inline feedback pattern in index.html and styles.css

**Checkpoint**: User Story 2 is independently validated and does not create invalid items.

---

## Phase 5: User Story 3 - Keep the task list updated in real time (Priority: P2)

**Goal**: Ensure the UI remains responsive and current as tasks are added in sequence.

**Independent Test**: Multiple valid task submissions appear in order without requiring a browser refresh.

### Tests for User Story 3

- [ ] T020 [P] [US3] Add a smoke test covering rapid sequential additions in tests/smoke.test.js
- [ ] T021 [P] [US3] Validate the list order and immediate render behavior in tests/smoke.test.js

### Implementation for User Story 3

- [ ] T022 [US3] Confirm new tasks append in insertion order in script.js
- [ ] T023 [US3] Verify the DOM list updates immediately after each successful add in script.js
- [ ] T024 [US3] Review focus and accessibility states after task insertion in index.html and styles.css

**Checkpoint**: The task list behaves correctly over repeated user interactions.

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Review, validate, and document the final feature quality.

- [ ] T025 [P] Review code readability and structure across index.html, styles.css, and script.js
- [ ] T026 [P] Run the smoke validation suite for all user stories in tests/smoke.test.js
- [ ] T027 [P] Update project documentation and completion notes in README.md or quickstart.md
- [ ] T028 Final accessibility and responsive pass for the form and task list UI

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; can begin immediately.
- **Foundational (Phase 2)**: Depends on Setup completion and blocks all user stories.
- **User Stories (Phase 3+)**: All depend on Foundational completion.
- **Polish (Final Phase)**: Depends on all user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Phase 2; no dependency on other stories.
- **User Story 2 (P2)**: Can start after Phase 2; independent validation path.
- **User Story 3 (P2)**: Can start after Phase 2; independent validation path.

### Parallel Opportunities

- Setup tasks T002 and T003 can run in parallel.
- Foundational tasks T004, T005, T006, and T007 can be implemented in parallel if staff capacity allows.
- Tests for each user story can be written in parallel before implementation.
- UI structure and styling tasks for the same story can proceed independently once the behavior contract is defined.

---

## Parallel Example: User Story 1

```bash
# Run tests for User Story 1 together
Task: "Add failing smoke test for successful task creation"
Task: "Add validation test for empty input rejection"

# Build the story UI in parallel
Task: "Create input field and Add button in index.html"
Task: "Style the form and list layout in styles.css"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Stop and validate the MVP independently
5. Extend with validation and real-time updates in the next iterations

### Incremental Delivery

1. Setup + Foundational foundation
2. User Story 1 adds the core flow
3. User Story 2 blocks invalid submissions
4. User Story 3 ensures immediate in-page updates
5. Polish pass finalizes accessibility, documentation, and validation

### Notes

- [P] tasks are different files or independent work streams with no blocked dependencies.
- [USx] labels map each task to the relevant user story for traceability.
- Each story should remain independently testable.
- Commit after each logical milestone or task group.
- The final result should remain a simple, readable frontend application with no backend or database.
