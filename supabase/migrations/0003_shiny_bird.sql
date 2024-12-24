-- Enable the pg_net extension for HTTP requests
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create a function to trigger the Edge Function
CREATE OR REPLACE FUNCTION handle_contact_notification()
RETURNS TRIGGER AS $$
DECLARE
  function_url text;
BEGIN
  -- Get the function URL from environment variable or use a default
  function_url := current_database() || '.functions.supabase.co/handle-contact-notification';
  
  -- Call the Edge Function
  PERFORM
    net.http_post(
      url := 'https://' || function_url,
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || current_user -- Uses the current authenticated user's token
      ),
      body := jsonb_build_object('record', row_to_json(NEW))
    );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger
DROP TRIGGER IF EXISTS on_contact_form_submission ON contact_submissions;
CREATE TRIGGER on_contact_form_submission
  AFTER INSERT ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION handle_contact_notification();