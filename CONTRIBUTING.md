
# Contributing to Nuvora

Thank you for your interest in contributing to Nuvora.

This document defines the engineering practices and contribution workflow used in this project.

## Development Principles

- Write clean, readable, maintainable code.
- Follow established language and framework conventions.
- Prefer small, focused changes.
- Include tests for new functionality.
- Document significant architectural decisions.
- Never commit secrets or credentials.

## Git Workflow

- `main` is the stable integration branch.
- Create feature branches for new work.
- Use descriptive branch names.

Examples:

- `feat/user-authentication`
- `feat/file-upload`
- `fix/file-validation`
- `docs/update-architecture`
- `test/file-service`

## Commit Convention

Use Conventional Commits.

Examples:

- `feat: add file upload endpoint`
- `fix: validate file size`
- `docs: update architecture documentation`
- `test: add authentication tests`
- `refactor: simplify storage service`
- `chore: configure development tooling`

## Pull Request Guidelines

Every pull request should:

1. Have a clear description.
2. Explain the reason for the change.
3. Include relevant tests.
4. Pass automated CI checks.
5. Avoid unrelated changes.
6. Never contain credentials or secrets.

## Code Quality

- Keep functions focused and understandable.
- Validate untrusted input.
- Handle errors explicitly.
- Apply least-privilege security principles.
- Avoid unnecessary dependencies.

## Questions and Improvements

Open a GitHub Issue to discuss bugs, improvements, or proposed features.
