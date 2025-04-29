import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uqbbfqpemojkqjedbbxh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxYmJmcXBlbW9qa3FqZWRiYnhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2Mzc3NzQsImV4cCI6MjA1OTIxMzc3NH0.KmWM51wdUmRC-LwyKYTGVIkxu8-GbX55EEghlbZpi2M';

export const supabase = createClient(supabaseUrl, supabaseKey);