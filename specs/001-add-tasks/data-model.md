# Data Model: Add Tasks

## Entity: Task

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| id | string | Unique task identifier | Must be present and unique within the current session |
| text | string | User-entered task description | Must not be empty after trimming whitespace |
| createdAt | string | Timestamp when task was added | ISO string or equivalent browser timestamp |

## Relationships

- A task list is an ordered collection of Task entries.
- Each new valid submission appends one task to the list.
- The list is rendered in the order tasks are added.

## Validation Rules

- Trim whitespace before checking task content.
- Reject empty or whitespace-only submissions.
- Preserve visible task text as entered after trimming leading and trailing spaces.
- Keep the data model simple: no backend schema, no database, no persistence requirement.

## State Transitions

1. Initial state: task list is empty.
2. User enters text and clicks Add.
3. If input is valid: a new Task is created and appended to the list.
4. If input is invalid: no Task is added and the list remains unchanged.
5. The visible UI reflects the new list state without a page refresh.
