-- Initial migration
-- Add your schema here

-- Example: Users table extension
-- create table public.profiles (
--   id uuid references auth.users on delete cascade not null primary key,
--   email text,
--   created_at timestamp with time zone default timezone('utc'::text, now()) not null,
--   updated_at timestamp with time zone default timezone('utc'::text, now()) not null
-- );

-- Enable RLS
-- alter table public.profiles enable row level security;
