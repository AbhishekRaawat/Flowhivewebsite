/*
  # Update contact notification system

  1. Changes
    - Add emails table for tracking notifications
    - Update notification function with better error handling
*/

-- Create emails table if it doesn't exist
CREATE TABLE IF NOT EXISTS emails (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  to_email text NOT NULL,
  subject text NOT NULL,
  content text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on emails table
ALTER TABLE emails ENABLE ROW LEVEL SECURITY;

-- Allow service role to insert emails
CREATE POLICY "Service role can manage emails"
  ON emails
  TO service_role
  USING (true)
  WITH CHECK (true);