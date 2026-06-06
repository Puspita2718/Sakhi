import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if credentials are valid and configured (not placeholder strings)
const isConfigured = 
  !!supabaseUrl && 
  !!supabaseAnonKey && 
  supabaseUrl !== 'https://your-project-id.supabase.co' && 
  supabaseAnonKey !== 'your-anon-public-api-key-here' &&
  import.meta.env.VITE_USE_MOCK !== 'true';

let supabaseClientInstance = null;

if (isConfigured) {
  try {
    supabaseClientInstance = createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
  }
}

// Fallback Mock Auth Client
const mockAuth = {
  signInWithPassword: async ({ email, password }) => {
    console.warn('[Supabase Mock] signInWithPassword called with email:', email);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Simulate successful mock validation (accept anything for development)
    if (email && password) {
      return {
        data: {
          user: {
            id: 'mock-uuid-12345',
            email: email,
            user_metadata: { firstName: 'Ananya' }
          },
          session: { access_token: 'mock-token' }
        },
        error: null
      };
    }
    return { data: { user: null, session: null }, error: { message: 'Invalid credentials' } };
  },
  
  signUp: async ({ email, password, options }) => {
    console.warn('[Supabase Mock] signUp called with email:', email);
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    if (email && password) {
      const firstName = options?.data?.firstName || 'Ananya';
      return {
        data: {
          user: {
            id: 'mock-uuid-12345',
            email: email,
            user_metadata: { firstName }
          },
          session: null // Supabase returns session null if email verification is enabled
        },
        error: null
      };
    }
    return { data: { user: null }, error: { message: 'Invalid sign up parameters' } };
  },

  signOut: async () => {
    console.warn('[Supabase Mock] signOut called');
    return { error: null };
  },

  resetPasswordForEmail: async (email) => {
    console.warn('[Supabase Mock] resetPasswordForEmail called with email:', email);
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { data: {}, error: null };
  },

  onAuthStateChange: (callback) => {
    console.warn('[Supabase Mock] onAuthStateChange listener added');
    // Return an unsubscribe function
    return {
      data: {
        subscription: {
          unsubscribe: () => {
            console.warn('[Supabase Mock] onAuthStateChange unsubscribed');
          }
        }
      }
    };
  }
};

export const supabase = isConfigured ? supabaseClientInstance : { auth: mockAuth };
export const isSupabaseConfigured = isConfigured;
export default supabase;
