import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase key exists:', !!supabaseAnonKey);

if (!supabaseUrl) {
  throw new Error('VITE_SUPABASE_URL is missing');
}

if (!supabaseAnonKey) {
  throw new Error('VITE_SUPABASE_ANON_KEY is missing');
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

export type Profile = {
  id: string;
  full_name: string;
  year: '1st' | '2nd' | '3rd' | '4th';
  branch: string;
  role: string;
  email: string;
  created_at: string;
};
