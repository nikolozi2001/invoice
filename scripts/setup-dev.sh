#!/bin/bash

# Development setup script for Invoice SaaS
echo "🧾 Invoice + VAT + Cashflow SaaS - Development Setup"
echo "=================================================="

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "📋 Creating .env.local from .env.example..."
    cp .env.example .env.local
    echo "✅ Please edit .env.local with your configuration"
else
    echo "✅ .env.local already exists"
fi

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker Desktop."
    exit 1
fi

echo "🐳 Starting PostgreSQL database..."
docker-compose up -d postgres

echo "⏳ Waiting for PostgreSQL to be ready..."
sleep 5

echo "📦 Installing dependencies..."
npm install

echo "🗄️  Running database migrations..."
npm run db:migrate

echo "🌱 Seeding database with sample data..."
npm run db:seed

echo ""
echo "✨ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Edit .env.local if needed"
echo "2. Run 'npm run dev' to start development server"
echo "3. Open http://localhost:3000 in your browser"
echo "4. Access Prisma Studio with 'npm run db:studio'"
echo "5. Access pgAdmin at http://localhost:5050 (admin@admin.com / admin)"
echo ""