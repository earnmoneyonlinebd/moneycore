// Supabase Client Setup
const SUPABASE_URL = 'https://bwshqavypisyftohfulv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3c2hxYXZ5cGlzeWZ0b2hmdWx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ4MzkyMjksImV4cCI6MjExMDQxNTIyOX0.LR6bi_9WTiem7NM_EeIGyl12apPwd0E0KeOc73NnqmA';

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
