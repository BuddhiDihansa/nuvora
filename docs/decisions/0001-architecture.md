
# ADR-0001: Initial System Architecture

- Status: Accepted
- Date: 2026-11-16
- Decision Owners: Nuvora Project

## Context

Nuvora requires a maintainable, secure, cloud-native architecture for file storage and management.

The system should support independent frontend and backend development, secure file operations, and future scalability.

## Decision

Adopt a modular application architecture with the following technologies:

| Component | Technology |
|---|---|
| Frontend | Next.js + TypeScript |
| Backend | Python + FastAPI |
| Database | PostgreSQL |
| ORM | SQLAlchemy |
| Object Storage | OCI Object Storage |
| Infrastructure as Code | Terraform |
| CI/CD | GitHub Actions |

## Architecture Principles

- Separate frontend and backend responsibilities.
- Keep cloud credentials out of the browser.
- Enforce authorization on the backend.
- Store file metadata separately from file contents.
- Use Infrastructure as Code for cloud resources.
- Automate testing and quality checks.

## Consequences

### Positive

- Clear separation of responsibilities.
- Independent frontend and backend development.
- Strong Python ecosystem for API development.
- Infrastructure can be version-controlled.
- Supports future observability and security automation.

### Trade-offs

- Multiple technologies increase initial setup complexity.
- API contracts must be maintained carefully.
- Cloud infrastructure requires cost and security management.

## Future Review

Revisit this decision if performance, operational requirements, or architectural constraints change.
