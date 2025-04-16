// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://epuxrgpnodizpsqwhaxw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdXhyZ3Bub2RpenBzcXdoYXh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NDc4NjUsImV4cCI6MjA2MDMyMzg2NX0.bHAoMZNvBwtuDx6MSETwLrw3Uz_39xkaqPsGZA7x1GA';

export const supabase = createClient(supabaseUrl, supabaseKey);
