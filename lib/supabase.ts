import { createClient } from '@supabase/supabase-js';

// Memoize Supabase client to prevent multiple instantiations
let memoizedSupabaseClient: ReturnType<typeof createClient> | null = null;

export const supabase = () => {
  if (!memoizedSupabaseClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase configuration');
    }

    memoizedSupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: true,
        detectSessionInUrl: false,
      },
      global: {
        headers: { 'x-my-custom-header': 'my-app-name' },
      },
    });
  }
  return memoizedSupabaseClient;
};

export const createServerSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Missing Supabase server configuration');
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
    },
    global: {
      headers: { 'x-my-custom-header': 'my-app-name-server' },
    },
  });
};
