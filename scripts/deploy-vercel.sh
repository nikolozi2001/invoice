#!/bin/bash

# Vercel Deployment Script for Invoice SaaS
echo "🚀 Deploying Invoice SaaS to Vercel"
echo "=================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Login to Vercel (if not already logged in)
echo "🔐 Logging in to Vercel..."
vercel login

# Link project to Vercel
echo "🔗 Linking project to Vercel..."
vercel link

echo ""
echo "⚙️  Setting up environment variables..."
echo "Please set the following environment variables in Vercel:"
echo ""
echo "1. DATABASE_URL - Your PostgreSQL connection string"
echo "   Example: postgresql://username:password@host:port/database?schema=public"
echo ""
echo "2. NEXTAUTH_SECRET - Secret for JWT signing (min 32 chars)"
echo "   Example: $(openssl rand -base64 32)"
echo ""
echo "3. NEXTAUTH_URL - Your production domain"
echo "   Example: https://your-app.vercel.app"
echo ""

read -p "Have you set up all environment variables? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Please set up environment variables first"
    echo "   Run: vercel env add DATABASE_URL"
    echo "   Run: vercel env add NEXTAUTH_SECRET"
    echo "   Run: vercel env add NEXTAUTH_URL"
    exit 1
fi

echo ""
echo "🏗️  Building and deploying to production..."
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Set up your production database"
echo "2. Run database migrations on production"
echo "3. Test your application"
echo "4. Set up custom domain (optional)"
echo ""