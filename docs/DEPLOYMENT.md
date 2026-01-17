# Deployment Guide

## Vercel Deployment (Recommended)

### Prerequisites
1. Vercel account
2. PostgreSQL database (Neon, Supabase, Railway, etc.)

### Environment Variables
Set these environment variables in Vercel:

```env
# Database
DATABASE_URL="postgresql://username:password@host:5432/database_name?schema=public"

# Next.js
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-production-secret"

# App Configuration
NODE_ENV="production"
```

### Deploy Steps

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel login
   vercel link
   ```

2. **Set Environment Variables**
   ```bash
   vercel env add DATABASE_URL
   vercel env add NEXTAUTH_SECRET
   # Add other env vars as needed
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Database Setup
Run migrations on your production database:
```bash
npx prisma migrate deploy
```

## Manual Deployment

### Prerequisites
- Node.js 18+
- PostgreSQL database
- PM2 (for process management)

### Steps
1. Clone repository on server
2. Install dependencies: `npm ci`
3. Set environment variables
4. Run migrations: `npm run db:migrate:prod`
5. Build application: `npm run build`
6. Start with PM2: `pm2 start ecosystem.config.js`

## Environment Variables Guide

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ |
| `NEXTAUTH_URL` | Your domain URL | ✅ |
| `NEXTAUTH_SECRET` | Secret for JWT signing | ✅ |
| `NODE_ENV` | Environment (production) | ✅ |
| `SMTP_HOST` | Email server host | ❌ |
| `SMTP_USER` | Email username | ❌ |
| `SMTP_PASS` | Email password | ❌ |

## Domain Setup

1. Configure your domain in Vercel
2. Update `NEXTAUTH_URL` environment variable
3. Set up SSL certificates (automatic with Vercel)

## Monitoring & Logs

- Use Vercel Analytics for performance monitoring
- Check logs with `vercel logs`
- Set up error tracking (Sentry recommended)

## Backup Strategy

1. **Database Backups**: Set up automated PostgreSQL backups
2. **Code Backups**: GitHub repository serves as backup
3. **Environment Variables**: Store securely in password manager