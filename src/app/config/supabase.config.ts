import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

// Ensure URL is properly formatted
const supabaseUrl = environment.supabaseUrl;
const supabaseKey = environment.supabaseKey;

// Create Supabase client with additional options
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true
  },
  db: {
    schema: 'public'
  }
}); 