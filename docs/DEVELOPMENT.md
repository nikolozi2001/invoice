# Development Quick Start

Welcome to Invoice + VAT + Cashflow SaaS development! 🇬🇪

## 🚀 One-Command Setup

```bash
git clone https://github.com/nikolozi2001/invoice.git
cd invoice
./scripts/setup-dev.sh
```

This will:
- Install dependencies
- Start PostgreSQL in Docker
- Run database migrations
- Seed sample data
- Start development server

## 🛠️ Manual Setup

### 1. Prerequisites
- Node.js 18+
- Docker & Docker Compose
- Git

### 2. Clone & Install
```bash
git clone https://github.com/nikolozi2001/invoice.git
cd invoice
npm install
```

### 3. Environment Setup
```bash
cp .env.example .env.local
# Edit .env.local if needed
```

### 4. Database Setup
```bash
# Start PostgreSQL
npm run docker:up

# Run migrations
npm run db:migrate

# Seed data (optional)
npm run db:seed
```

### 5. Start Development
```bash
npm run dev
```

Visit: http://localhost:3000

## 🗄️ Database Management

```bash
# View database in browser
npm run db:studio

# Reset database (⚠️  destroys data)
npm run db:reset

# Stop database
npm run docker:down
```

## 🧪 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run migrations
npm run db:seed      # Seed database
npm run db:studio    # Open Prisma Studio
npm run docker:up    # Start PostgreSQL
npm run docker:down  # Stop PostgreSQL
npm run setup        # Full automated setup
```

## 📁 Project Structure

```
invoice-saas/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── page.tsx           # Landing page
│   └── layout.tsx         # Root layout
├── components/            # React components
├── lib/                   # Utility functions
├── prisma/               # Database schema & migrations
├── docs/                 # Documentation
├── scripts/              # Development scripts
└── .github/              # GitHub templates & workflows
```

## 🐛 Troubleshooting

### Database Connection Issues
```bash
# Check if PostgreSQL is running
docker ps

# Restart database
npm run docker:down && npm run docker:up
```

### Port 3000 Already in Use
```bash
# Find process using port 3000
lsof -ti:3000

# Kill the process
kill -9 $(lsof -ti:3000)
```

### Prisma Issues
```bash
# Regenerate Prisma client
npm run db:generate

# Reset and migrate
npm run db:reset
```

## 📋 Development Checklist

- [ ] PostgreSQL running (check `docker ps`)
- [ ] Dependencies installed (`npm install`)
- [ ] Environment variables set (`.env.local`)
- [ ] Database migrated (`npm run db:migrate`)
- [ ] Development server running (`npm run dev`)
- [ ] Application accessible at http://localhost:3000

## 🔗 Helpful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Project Issues](https://github.com/nikolozi2001/invoice/issues)

Happy coding! 🎉