import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ysvvqxyuouetlrhwrsjr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzdnZxeHl1b3VldGxyaHdyc2pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MDI5NDMsImV4cCI6MjAzMTI3ODk0M30.mZGmhMmcAnpp2IcYUTjUmXZIht6BSXQ8qD0F5_N4wV8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
