import { createClient } from '@supabase/supabase-js';

// These should be replaced with actual Supabase project details in .env.local
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  full_name: string;
  year: '1st' | '2nd' | '3rd' | '4th';
  branch: string;
  role: string;
  email: string;
  created_at: string;
};
