#!/bin/bash

# GitHub Repository Initialization Script
echo "🧾 Invoice + VAT + Cashflow SaaS - GitHub Setup"
echo "=============================================="

# Check if we're already in a git repo
if [ -d ".git" ]; then
    echo "✅ Git repository already initialized"
else
    echo "📦 Initializing Git repository..."
    git init
fi

# Add all files
echo "📁 Adding files to Git..."
git add .

# Initial commit
echo "💾 Creating initial commit..."
git commit -m "feat: initial project setup with Next.js, PostgreSQL, and waitlist functionality

- Setup Next.js 16 with App Router and React 19
- Configure PostgreSQL database with Prisma ORM 
- Create landing page with Georgian language support
- Implement waitlist registration system
- Add Docker Compose for development environment
- Setup GitHub workflows and templates
- Add comprehensive documentation"

echo ""
echo "🚀 Next steps:"
echo "1. Create a repository on GitHub"
echo "2. Add remote origin:"
echo "   git remote add origin https://github.com/nikolozi2001/invoice.git"
echo "3. Push to GitHub:"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "📋 Don't forget to:"
echo "• Update repository URLs in package.json"
echo "• Update author information in package.json" 
echo "• Configure Vercel secrets for deployments"
echo "• Set up branch protection rules"
echo ""