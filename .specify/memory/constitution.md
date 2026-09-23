<!--
Sync Impact Report
- Version change: 1.0.0 -> 1.1.0
- Modified principles: Specification Before Implementation (refined), Small, Reviewable Changes (expanded), Test-First and Evidence-Driven Validation (added project-specific testing expectations), Reproducible, Traceable Workflows (expanded), Documentation and Governance Integrity (expanded)
- Added sections: Additional Constraints, Development Workflow, Governance (project-specific content)
- Removed sections: none
- Follow-up TODOs: none
-->

# tpl-spec-kit Constitution

## Core Principles

### I. Specification Before Implementation
Every feature, page, interaction, or workflow change must begin from a clear specification of the target behavior, constraints, and acceptance criteria. The written specification is the source of truth for scope and intent; implementation must not start from vague assumptions or unrecorded improvisation. This keeps the project consistent with the Spec Kit process and reduces rework during review.

### II. Incremental Delivery With Clear Commit History
The project must be implemented in stages and committed with meaningful Git messages that explain what changed and why. Large tasks must be decomposed into small, reviewable steps so the project can be evaluated progressively and important decisions remain traceable in version history. This supports honest progress tracking and makes the final submission easier to audit.

### III. Readability, Maintainability, and Structured Code
All HTML, CSS, and JavaScript must be written for clear human understanding. Code should use meaningful names, consistent formatting, limited duplication, and logical organization so future revision is straightforward. This is especially important in a student project, where readable work demonstrates understanding and makes debugging easier.

### IV. Responsive Design, Accessibility, and User-Centered Experience
The application must be usable across common screen sizes and input methods, and it must follow basic accessibility practices such as semantic HTML, sufficient contrast, keyboard access, and clear labels. The interface should remain understandable and functional for a broad range of users. This ensures the product is not only visually complete but also practical and inclusive.

### V. Test-First, Validation, and Evidence-Based Completion
Core behaviors, UI logic, and user-visible interactions must be validated with basic automated checks or manual verification before completion is claimed. When feasible, failing checks or targeted tests should be created before the fix or implementation. This principle ensures that completion is based on evidence rather than assumption.

### VI. AI-Assisted Development With Student Ownership
Artificial intelligence tools may be used to improve understanding, generate draft ideas, or identify bugs, but the final submission must be created, reviewed, and responsibly owned by the student. Students must understand and be able to explain the final code and decisions. This preserves academic integrity while allowing modern development support tools.

## Additional Constraints
This project is a simple web application built with HTML, CSS, and JavaScript. It must follow a disciplined, specification-first workflow and remain suitable for a student assignment that demonstrates understanding of user-facing web development.

- Focus on clear, small, understandable features rather than unnecessary framework complexity.
- Record major project decisions in a way that allows future reviewers to understand the reasoning.
- Prefer accessible, responsive interface patterns over visual-only solutions that ignore usability.
- Include basic testing or validation for core behavior and avoid shipping unverified features.
- Keep the implementation directly attributable to the student author, even when AI assistance is used.

## Development Workflow
- Start from a requirement or specification, then define the expected behavior before writing the implementation.
- Break the work into manageable steps and implement features incrementally rather than in one large commit.
- Use clear Git commit messages that describe the purpose of each stage and major decision.
- Document important architectural or design decisions when they affect behavior, structure, or future maintenance.
- Validate each milestone using the smallest relevant check, browser test, or automation available.
- Review the final submission for readability, accessibility, responsiveness, and correctness before completion.

## Governance
This Constitution governs how the student project is planned, implemented, reviewed, and submitted. All significant decisions that affect product behavior, UI structure, or development process must be consistent with this document. Material departures from this Constitution require documented rationale and a clear explanation of the impact on the project.

Amendments require:
- a brief statement of the need for the change,
- a proposed version bump (major, minor, or patch),
- a summary of the affected workflow or project expectations,
- approval from the project reviewer or instructor before the change is considered final.

Versioning policy:
- MAJOR: backward incompatible governance or principle changes,
- MINOR: new principle or materially expanded guidance,
- PATCH: clarifications, wording, and non-semantic refinements.

Compliance review expectations:
- The student must verify that the implementation aligns with the principles above.
- Any exception to a principle must be explicit, justified, and approved rather than silently bypassed.
- The project must maintain a clear history of progress, decisions, and validation evidence.

**Version**: 1.1.0 | **Ratified**: 2026-09-23 | **Last Amended**: 2026-09-23
