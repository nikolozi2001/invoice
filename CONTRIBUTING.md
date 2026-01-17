# Contributing to Invoice + VAT + Cashflow SaaS

First off, thanks for taking the time to contribute! 🎉

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible using our bug report template.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include as many details as possible using our feature request template.

### Pull Requests

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Add tests for your changes (if applicable)
5. Ensure the test suite passes (`npm test`)
6. Make sure your code lints (`npm run lint`)
7. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
8. Push to the branch (`git push origin feature/AmazingFeature`)
9. Open a Pull Request

## Development Process

### Setup Development Environment

1. **Clone the repository**
   ```bash
   git clone https://github.com/nikolozi2001/invoice.git
   cd invoice
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start PostgreSQL database**
   ```bash
   npm run docker:up
   ```

5. **Run database migrations**
   ```bash
   npm run db:migrate
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

### Code Style

- We use ESLint and Prettier for code formatting
- Run `npm run lint` to check for linting errors
- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comments for complex logic

### Commit Messages

We follow the [Conventional Commits](https://conventionalcommits.org/) specification:

- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only changes
- `style:` Changes that do not affect the meaning of the code
- `refactor:` A code change that neither fixes a bug nor adds a feature
- `perf:` A code change that improves performance
- `test:` Adding missing tests or correcting existing tests
- `chore:` Changes to the build process or auxiliary tools

Example:
```
feat: add invoice PDF generation
fix: resolve VAT calculation error for Georgian tax rates
docs: update API documentation
```

### Testing

- Write tests for new features and bug fixes
- Ensure all tests pass before submitting a PR
- Aim for good test coverage, especially for business logic

### Database Changes

- Always create migrations for database schema changes
- Test migrations on sample data
- Include rollback instructions for breaking changes
- Update seed data if necessary

## Georgian Language Guidelines

Since this is a Georgia-focused application:

- Use Georgian (ქართული) for user-facing text
- Provide English translations in comments for developers
- Follow Georgian business conventions
- Ensure VAT calculations comply with Georgian tax laws (18% VAT)

## Questions?

Don't hesitate to ask questions by:
- Opening an issue
- Starting a discussion
- Reaching out to maintainers

Thank you for contributing! 🇬🇪