/*
  # Update contact notification trigger

  1. Changes
    - Update trigger function to use correct Edge Function URL
    - Fix authentication headers
    - Add error handling
*/

-- Enable the pg_net extension for HTTP requests
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create a function to trigger the Edge Function
CREATE OR REPLACE FUNCTION handle_contact_notification()
RETURNS TRIGGER AS $$
BEGIN
  -- Call the Edge Function using project reference
  PERFORM
    net.http_post(
      url := 'https://npqqzeoghsuzprusuhcy.functions.supabase.co/handle-contact-notification',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || (SELECT current_setting('supabase.service_role_key'))
      ),
      body := jsonb_build_object('record', row_to_json(NEW))
    );
  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Log error but don't prevent insert
    RAISE WARNING 'Failed to send notification: %', SQLERRM;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate the trigger
DROP TRIGGER IF EXISTS on_contact_form_submission ON contact_submissions;
CREATE TRIGGER on_contact_form_submission
  AFTER INSERT ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION handle_contact_notification();