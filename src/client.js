import { createClient } from "@supabase/supabase-js";


const URL = 'https://jylkxfkxbsnhewpeudim.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5bGt4Zmt4YnNuaGV3cGV1ZGltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4Njc5NTMsImV4cCI6MjAyODQ0Mzk1M30.7tOtvqzx_GfLGQCmI2IStLCXBsnRcC3VRAv3tMN3rTo';

export const supabase = createClient(URL, API_KEY);