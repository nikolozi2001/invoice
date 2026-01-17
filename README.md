# 🧾 Invoice + VAT + Cashflow SaaS (Georgia-first)

[![CI/CD](https://github.com/nikolozi2001/invoice/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/nikolozi2001/invoice/actions/workflows/ci-cd.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/github/package-json/v/nikolozi2001/invoice)](https://github.com/nikolozi2001/invoice)

**Invoice + VAT + Cashflow SaaS** არის იდეალური **სოლო / Fullstack / B2B** პროექტი თბილისში.

## 🚀 Features

- **📄 ინვოისების მართვა** - შექმენი, გაგზავნე და მართე ინვოისები
- **🧮 ღ.დ.ღ. გაანგარიშება** - ავტომატური ღ.დ.ღ.-ს გაანგარიშება
- **📈 Cash Flow ანალიზი** - რეალურ დროში ფინანსური ანალიზი
- **📊 რეპორტები** - დეტალური ფინანსური რეპორტები
- **🔔 ნოტიფიკაციები** - SMS & Email შეხსენებები
- **📱 მობილურ აპი** - iOS & Android მხარდაჭერა

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL + Prisma ORM
- **Backend**: Next.js API Routes
- **UI Icons**: Lucide React
- **Development**: Docker Compose, tsx
- **Deployment**: Vercel Ready

## 🔧 Setup & Installation

### Prerequisites
- Node.js 18+ 
- Docker & Docker Compose (for PostgreSQL)
- Git

### Quick Start

1. **Clone Repository**
   ```bash
   git clone <your-repo-url>
   cd invoice
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start Database (PostgreSQL)**
   ```bash
   npm run docker:up
   ```

5. **Database Migration**
   ```bash
   npm run db:migrate
   ```

6. **Seed Database (Optional)**
   ```bash
   npm run db:seed
   ```

7. **Start Development Server**
   ```bash
   npm run dev
   ```

8. **Open Application**
   ```
   http://localhost:3000
   ```

### Database Management

```bash
# Start PostgreSQL with Docker
npm run docker:up

# Stop PostgreSQL
npm run docker:down

# View database in Prisma Studio
npm run db:studio

# Reset database (⚠️  Deletes all data)
npm run db:reset

# Generate Prisma client after schema changes
npm run db:generate
```

## 📁 Project Structure

```
/app
  /page.tsx          → Landing Page
  /layout.tsx        → Root Layout
  /api
    /waitlist        → Waitlist API
/components
  /Hero.tsx          → Hero Section
  /Features.tsx      → Features Section
  /WaitlistForm.tsx  → Waitlist Form
/prisma
  /schema.prisma     → Database Schema
/lib
  /prisma.ts         → Prisma Client
```

## 📧 Waitlist API

### POST /api/waitlist
Add user to waitlist:
```json
{
  "email": "user@example.com",
  "businessName": "My Business",
  "businessType": "freelancer"
}
```

### GET /api/waitlist
Get waitlist statistics (development only)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
```

### Environment Variables
```env
DATABASE_URL="file:./prod.db"
NODE_ENV="production"
```

## 📊 Database Schema

```prisma
model WaitlistEntry {
  id           String   @id @default(cuid())
  email        String   @unique
  businessName String?
  businessType String?
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}
```

## 🎨 Design System

- **Primary Color**: Blue (#2563EB)
- **Success Color**: Green (#10B981)
- **Typography**: Tailwind Default Stack
- **Icons**: Lucide React
- **Language**: Georgian (ქართული) + English

## 🔮 Roadmap

### Phase 1: Landing & Waitlist ✅
- [x] Hero Section
- [x] Features Overview
- [x] Waitlist Form
- [x] Database Setup

### Phase 2: Authentication
- [ ] User Registration
- [ ] Login System
- [ ] Email Verification

### Phase 3: Core Features
- [ ] Invoice Creation
- [ ] VAT Calculation
- [ ] Payment Tracking
- [ ] Basic Reports

### Phase 4: Advanced Features
- [ ] Cash Flow Analysis
- [ ] Mobile App
- [ ] API Integration
- [ ] Multi-tenant Support

## 🇬🇪 Georgian Market Focus

- ღ.დ.ღ. გაანგარიშება (18% VAT)
- ქართული ლარი (GEL) მხარდაჭერა
- საქართველოს საგადასახადო კანონმდებლობა
- ქართული ენის სრული მხარდაჭერა
- ადგილობრივი ბიზნეს მოთხოვნები

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Quick Contribution Steps
1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Development Setup
```bash & Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/nikolozi2001/invoice/issues)
- **Email**: contact@yourcompany.ge
- **Website**: https://yourcompany.ge
- **Address**: Tbilisi, Georgia

## 📋 Project Status

- ✅ **Day 1 Complete**: Project Setup, Database, Landing Page, Waitlist
- 🚧 **Day 2-7**: Coming soon...

See our [Project Roadmap](https://github.com/nikolozi2001/invoice/projects) for detailed progress.

---

Made with ❤️ in 🇬🇪 Georgia | [License](LICENSE) | [Contributing](CONTRIBUTING.md) | [Security](SECURITY.md)
```

## 📋 GitHub Repository Setup

This repository includes:
- **GitHub Actions** for CI/CD
- **Issue templates** for bugs and features
- **Pull request template**
- **Security policy** and vulnerability reporting
- **Contributing guidelines**
- **MIT License**

## 🛡️ Security

Found a security vulnerability? Please read our [Security Policy](SECURITY.md) for reporting guidelines.

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: contact@yourcompany.ge
- **Website**: https://yourcompany.ge
- **Address**: Tbilisi, Georgia

---

Made with ❤️ in 🇬🇪 Georgia
