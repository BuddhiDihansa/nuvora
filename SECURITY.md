
# Security Policy

Security is a core requirement of Nuvora.

## Supported Versions

Nuvora is currently under active development.

Security fixes will be applied to the actively maintained development version.

## Reporting a Vulnerability

Please do not disclose sensitive vulnerability details in public GitHub Issues.

For private vulnerability reports, use GitHub's private vulnerability reporting feature if enabled for this repository.

When reporting a vulnerability, include:

- A description of the issue.
- Steps to reproduce it.
- Potential security impact.
- Relevant logs or evidence with secrets removed.

## Security Practices

Nuvora aims to implement:

- Least-privilege access control.
- Secure authentication and authorization.
- Private cloud object storage.
- Secure secrets management.
- Input and file validation.
- Dependency vulnerability scanning.
- Automated security testing.
- Audit logging.

## Secrets Management

Never commit:

- API keys.
- Passwords.
- OCI credentials.
- Private keys.
- Access tokens.
- Environment files containing secrets.

Report suspected exposed credentials immediately and rotate affected credentials.

## Responsible Disclosure

Please allow maintainers an opportunity to investigate and address reported vulnerabilities before public disclosure.
