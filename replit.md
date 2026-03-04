# EEZVisa - Visit Visa Application Services

## Overview
EEZVisa (eezvisa.com) is a professional visit visa application service website targeting foreign students and residents abroad. The site offers visa consultation booking via Calendly integration with reimbursable consultation fees.

## Architecture
- **Frontend**: React + TypeScript with Vite, TailwindCSS, shadcn/ui components
- **Backend**: Express.js API server
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Routing**: wouter for client-side routing
- **Styling**: Plus Jakarta Sans font, blue color scheme (HSL 215), professional/trustworthy design

## Pages
- `/` - Landing page with hero, services, process steps, testimonials, FAQ, CTA
- `/services` - Detailed visa services page with all service types and 28 covered countries
- `/about` - Company story, mission/vision/values, impact stats
- `/book-consultation` - Calendly embed for consultation booking
- `/contact` - Inquiry form with full validation (saves to database)
- `/terms-of-service` - Terms of Service page with SEO optimization
- `/privacy-policy` - Privacy Policy page with SEO optimization

## Key Features
- SEO optimized with per-page meta tags, Open Graph, structured data (JSON-LD)
- Consultation booking via Calendly (reimbursed when client continues with application)
- Contact/inquiry form with database persistence
- Responsive design with mobile navigation
- Smooth animations with framer-motion
- Floating WhatsApp button (links to +44 7456 583652)
- "Powered by Rank It Globally" credit in footer
- SVG favicon matching the plane logo

## Data Model
- `inquiries` table: fullName, email, phone, nationality, destinationCountry, visaType, message, status, createdAt
- `users` table: id, username, password (for future admin use)

## API Endpoints
- `POST /api/inquiries` - Submit a new inquiry
- `GET /api/inquiries` - List all inquiries

## GitHub Sync
- **Repository**: https://github.com/hafizabubakargill/eezvisa
- **Sync script**: `npx tsx scripts/sync-to-github.ts "commit message"` — pushes all tracked files to GitHub
- Uses Replit's GitHub integration (OAuth connector) for authentication

## Environment
- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Session secret key
