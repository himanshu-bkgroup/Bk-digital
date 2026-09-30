# BK-DIGITAL

> **Digital Experiences. Intelligent Systems. Automated Growth.**

A modern digital technology and software development company specializing in high-end websites, custom web applications, business automation, AI-powered systems, dashboards, CRM systems, and custom software.

---

## 1. Overview & Architecture

BK-DIGITAL is built as a dark cinematic, high-performance web platform combining luxury aesthetic principles with full-stack capabilities:
- **Frontend Architecture**: React 19, TypeScript, Tailwind CSS v4, Motion, Lucide Icons.
- **Brand Identity**: Black / near-black palette (`#050608`) with metallic gold, silver, and crisp white typography.
- **3D Interactive Centerpiece**: Cursor-reactive 3D monogram with lighting depth.
- **Digital System Orbit**: 10-node interactive visualization (Website, CRM, AI, Automation, Leads, Analytics, WhatsApp, Database, Payments, Dashboard).
- **Automation Pipeline & Builder Demo**: Interactive workflow simulator and custom pipeline assembler.
- **Interactive Project Estimator**: Live multi-parameter indicative investment calculator.
- **Intelligent BK AI Assistant**: Grounded in approved company information via Google Gemini API with seamless local knowledge-base fallback.
- **Contextual WhatsApp Lead System**: Context-sensitive click-to-chat triggers with configurable business phone number.
- **Full-featured Admin Dashboard (`/admin`)**: Real-time interaction telemetry, Lead CRM with status pipeline, Project Manager, Service Manager, and Global Settings.

---

## 2. Installation & Quickstart

Clone the repository and install dependencies:

```bash
# Install npm dependencies
npm install

# Run the local development server (port 3000)
npm run dev

# Run TypeScript checks
npm run lint

# Compile for production build
npm run build
```

---

## 3. Environment Variables

Create a `.env` file in the root directory (based on `.env.example`):

```bash
# GEMINI_API_KEY: Used for BK AI grounded assistant
GEMINI_API_KEY="your-gemini-api-key"

# VITE_GEMINI_API_KEY: Optional client-side exposed key if running without backend proxy
VITE_GEMINI_API_KEY="your-gemini-api-key"

# APP_URL: Base URL of the deployment
APP_URL="https://bk-digital.com"

# SUPABASE (Optional - Local storage is pre-configured with instant persistence)
VITE_SUPABASE_URL="https://your-project.supabase.co"
VITE_SUPABASE_ANON_KEY="your-anon-key"
```

---

## 4. Supabase Database Schema

If you connect this application to a live Supabase PostgreSQL backend, execute the following SQL migration:

```sql
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Leads Table
create table if not exists public.leads (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  company text,
  email text not null,
  phone text not null,
  country text default 'India',
  business_type text,
  project_type text not null,
  budget_range text,
  timeline text,
  features text[],
  current_website text,
  reference_websites text,
  notes text,
  status text default 'new',
  source text default 'website'
);

-- 2. Projects Table
create table if not exists public.projects (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  slug text unique not null,
  name text not null,
  client text not null,
  industry text not null,
  type text not null,
  year text default '2025',
  summary text not null,
  challenge text,
  strategy text,
  solution text,
  features text[],
  technologies text[],
  results_note text,
  image text not null,
  featured boolean default true,
  display_order int default 1
);

-- 3. Row Level Security
alter table public.leads enable row level security;
alter table public.projects enable row level security;

-- Public can insert leads
create policy "Allow public lead submission" on public.leads
  for insert with check (true);

-- Public can read projects
create policy "Allow public project reads" on public.projects
  for select using (true);
```

---

## 5. Admin Dashboard Setup (`/admin`)

- Navigate to `/admin`.
- Default Security PIN: **`2026`**.
- The PIN code can be customized at any time inside **Admin → Site Settings → Admin Access PIN**.
- Inside the Admin Dashboard:
  - **Lead CRM**: View, filter, and change status of inbound requests (New, Contacted, In Review, Closed). Export to CSV with one click.
  - **Projects Manager**: Add new portfolio case studies with images, tech stacks, and challenge/solution summaries without code modifications.
  - **Site Settings**: Instantly update the WhatsApp number, company email, and studio locations.

---

## 6. Updating Contact Information & WhatsApp Number

To change the official WhatsApp number or company email across the entire website:
1. Log in to `/admin` and navigate to **Site Settings**.
2. Update **WhatsApp Number (API Format)** with country code (e.g. `919876543210` for India, `15551234567` for USA).
3. Update **WhatsApp Display Text** (e.g. `+91 98765 43210`).
4. Click **Save Global Configurations**.

---

## 7. Adding New Projects & Services

- **Projects**: Can be added directly via `/admin` → **Projects** → **Add New Project**. The changes persist immediately to localStorage/Supabase.
- **Initial Data**: Seed data can also be edited directly in `/src/data/initialData.ts`.

---

## 8. Deployment

To deploy to Netlify, Vercel, or Google Cloud Run:
```bash
npm run build
```
The output will be placed in the `/dist` directory, ready to serve as a high-speed single page application.
