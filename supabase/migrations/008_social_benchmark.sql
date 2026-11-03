-- =============================================================================
-- 008 Social Media Benchmark
--
-- Tracks Hamlet hotels and competitor Instagram presence across hotel towns.
-- =============================================================================

create table public.social_accounts (
  id uuid primary key default gen_random_uuid(),
  hotel_id uuid references public.hotels(id) on delete set null,
  name text not null,
  town text not null,
  platform text not null default 'instagram',
  handle text not null,
  url text not null,
  kind text not null check (kind in ('hamlet_hotel', 'hamlet_group', 'competitor')),
  is_duplicate boolean not null default false,
  notes text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.social_snapshots (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references public.social_accounts(id) on delete cascade,
  checked_on date not null default current_date,
  followers int not null default 0,
  posts int not null default 0,
  recent_likes text,
  avg_recent_likes numeric,
  notes text,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

-- Indices
create index idx_social_accounts_town on public.social_accounts(town);
create index idx_social_accounts_kind on public.social_accounts(kind);
create index idx_social_snapshots_account on public.social_snapshots(account_id);
create index idx_social_snapshots_checked_on on public.social_snapshots(checked_on);

-- Row Level Security: Deny direct browser access, all access handled via server
alter table public.social_accounts enable row level security;
alter table public.social_snapshots enable row level security;
revoke all on table public.social_accounts from anon, authenticated;
revoke all on table public.social_snapshots from anon, authenticated;

-- Seed Data (Checked on 2026-11-03)
insert into public.social_accounts (id, name, town, platform, handle, url, kind, is_duplicate, notes, is_active) values
  ('a1000000-0000-0000-0000-000000000001', 'The Carmichael', 'Hull', 'instagram', 'carmichaelhotel', 'https://www.instagram.com/carmichaelhotel/', 'hamlet_hotel', true, 'Older account', true),
  ('a1000000-0000-0000-0000-000000000002', 'The Carmichael', 'Hull', 'instagram', 'carmichael_hotel', 'https://www.instagram.com/carmichael_hotel/', 'hamlet_hotel', false, 'Mostly designed graphics', true),
  ('a1000000-0000-0000-0000-000000000003', 'Hideout Hotel', 'Hull', 'instagram', 'hideout_hotel', 'https://www.instagram.com/hideout_hotel/', 'competitor', false, 'Verified, 15 apartments, works with local creators, story highlights', true),
  ('a1000000-0000-0000-0000-000000000004', 'Kingston Theatre Hotel', 'Hull', 'instagram', 'kingstontheatrehotel', 'https://www.instagram.com/kingstontheatrehotel/', 'competitor', false, 'Family-run boutique, food and events', true),
  ('a1000000-0000-0000-0000-000000000005', 'Hotel 1843', 'Reading', 'instagram', '1843reading', 'https://www.instagram.com/1843reading/', 'hamlet_hotel', true, 'Older account, 3 posts', true),
  ('a1000000-0000-0000-0000-000000000006', 'Hotel 1843', 'Reading', 'instagram', '1843.reading', 'https://www.instagram.com/1843.reading/', 'hamlet_hotel', false, null, true),
  ('a1000000-0000-0000-0000-000000000007', 'The Roseate Reading', 'Reading', 'instagram', 'roseatereading', 'https://www.instagram.com/roseatereading/', 'competitor', false, 'Real photos of rooms, food, weddings', true),
  ('a1000000-0000-0000-0000-000000000008', 'The Market House', 'Reading', 'instagram', 'themarkethousereading', 'https://www.instagram.com/themarkethousereading/', 'competitor', false, '23 rooms plus bar, crowds and events, highlights', true),
  ('a1000000-0000-0000-0000-000000000009', 'Hamlet Hotels Maidstone', 'Maidstone', 'instagram', 'hamlet_hotels_maidstone', 'https://www.instagram.com/hamlet_hotels_maidstone/', 'hamlet_hotel', false, 'Mostly designed graphics', true),
  ('a1000000-0000-0000-0000-000000000010', 'Who''d A Thought It', 'Maidstone', 'instagram', 'whodathoughtit', 'https://www.instagram.com/whodathoughtit/', 'competitor', false, '4 to 9 comments per post, room reels', true),
  ('a1000000-0000-0000-0000-000000000011', 'Stone Court House', 'Maidstone', 'instagram', 'stonecourthouse', 'https://www.instagram.com/stonecourthouse/', 'competitor', false, 'Owners on camera, Channel 4 Four in a Bed', true),
  ('a1000000-0000-0000-0000-000000000012', 'Hamlet Hotels (group)', 'Group', 'instagram', 'hamlet_hotels', 'https://www.instagram.com/hamlet_hotels/', 'hamlet_group', false, 'Mixes Maidstone and 1843 content', true);

insert into public.social_snapshots (account_id, checked_on, followers, posts, recent_likes, avg_recent_likes, notes) values
  ('a1000000-0000-0000-0000-000000000001', '2026-11-03', 10, 12, null, null, 'Older account'),
  ('a1000000-0000-0000-0000-000000000002', '2026-11-03', 6, 7, '0 to 3', 1.5, 'Mostly designed graphics'),
  ('a1000000-0000-0000-0000-000000000003', '2026-11-03', 2831, 821, '2, 4, 16', 7.3, 'Verified, 15 apartments, works with local creators, story highlights'),
  ('a1000000-0000-0000-0000-000000000004', '2026-11-03', 1115, 455, '9, 14, 6', 9.7, 'Family-run boutique, food and events'),
  ('a1000000-0000-0000-0000-000000000005', '2026-11-03', 292, 3, null, null, 'Older account, 3 posts'),
  ('a1000000-0000-0000-0000-000000000006', '2026-11-03', 61, 30, '1 to 10 (from search results)', null, null),
  ('a1000000-0000-0000-0000-000000000007', '2026-11-03', 5067, 1739, '12, 29, 8', 16.3, 'Real photos of rooms, food, weddings'),
  ('a1000000-0000-0000-0000-000000000008', '2026-11-03', 4210, 859, 'about 5 to 10', null, '23 rooms plus bar, crowds and events, highlights'),
  ('a1000000-0000-0000-0000-000000000009', '2026-11-03', 220, 124, '0 to 1', 0.5, 'Mostly designed graphics'),
  ('a1000000-0000-0000-0000-000000000010', '2026-11-03', 10900, 796, '22, 48, 21', 30.3, '4 to 9 comments per post, room reels'),
  ('a1000000-0000-0000-0000-000000000011', '2026-11-03', 819, 269, '30, 10', 20.0, 'Owners on camera, Channel 4 Four in a Bed'),
  ('a1000000-0000-0000-0000-000000000012', '2026-11-03', 204, 387, null, null, 'Mixes Maidstone and 1843 content');
