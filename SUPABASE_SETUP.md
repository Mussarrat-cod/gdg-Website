# Supabase Setup Guide

This guide will help you set up Supabase for your project.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in your project details:
   - **Name**: Your project name
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the closest region
5. Click "Create new project"

## Step 2: Get Your Connection Details

Once your project is created:

1. Go to **Settings** → **API**
2. Copy the following:
   - **Project URL** (this is your `NEXT_PUBLIC_SUPABASE_URL`)
   - **anon/public key** (this is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

3. Go to **Settings** → **Database**
4. Under **Connection string**, select **URI**
5. Copy the connection string (this is your `DATABASE_URL`)
   - It will look like: `postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres`
   - Replace `[YOUR-PASSWORD]` with your database password

## Step 3: Update Your .env File

Add the following to your `.env` file:

```env
# Supabase Database Connection
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres?pgbouncer=true&connection_limit=1"

# Supabase API Keys
NEXT_PUBLIC_SUPABASE_URL="https://[PROJECT-REF].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key-here"

# API Key for middleware (keep your existing one or generate a new one)
NEXT_PUBLIC_APIKEY="your-api-key-here"
```

**Important Notes:**
- Replace `[YOUR-PASSWORD]` with your actual database password
- Replace `[PROJECT-REF]` with your actual project reference
- For connection pooling (recommended for serverless), add `?pgbouncer=true&connection_limit=1` to the DATABASE_URL
- For direct connections (local development), you can use the connection string without `pgbouncer=true`

## Step 4: Generate Prisma Client

After updating your `.env` file, run:

```bash
npx prisma generate
```

## Step 5: Push Your Schema to Supabase

Push your Prisma schema to create the database tables:

```bash
npx prisma db push
```

Or if you prefer migrations:

```bash
npx prisma migrate dev --name init
```

## Step 6: (Optional) Seed Your Database

If you have seed data:

```bash
npm run seed
```

## Step 7: Set Up Storage Buckets (Optional)

If you want to use Supabase Storage for images:

1. Go to **Storage** in your Supabase dashboard
2. Create buckets for:
   - `blog-images` (for blog thumbnails and banners)
   - `event-images` (for event cover photos)
   - `gallery` (for gallery images)
   - `profile-images` (for profile pictures)
3. Set bucket policies (public or private based on your needs)

## Troubleshooting

### Connection Issues
- Make sure your database password is correct
- Check that your IP is allowed (Supabase allows all IPs by default on free tier)
- Try using the direct connection string (without `pgbouncer=true`) for local development

### Prisma Issues
- Make sure `DATABASE_URL` is set correctly
- Run `npx prisma generate` after schema changes
- Check that your schema uses `provider = "postgresql"`

### API Key Issues
- Make sure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set
- The anon key is safe to expose in client-side code (it's protected by Row Level Security)

## Next Steps

- Your Prisma setup is now configured for Supabase PostgreSQL
- You can use `@/lib/supabase` to access Supabase Storage and other features
- Your existing Prisma queries will work with Supabase PostgreSQL


