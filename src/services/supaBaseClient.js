import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cjokcqqqzqoeewuonyvp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqb2tjcXFxenFvZWV3dW9ueXZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4Mjc4NjQsImV4cCI6MjA2MzQwMzg2NH0.FUI5mc-t_PZdgHa2VV04yyqa2q4QZLisNhdSYxDDESk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
