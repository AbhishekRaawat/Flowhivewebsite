-- Enable the pg_net extension for HTTP requests
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create a function to trigger the Edge Function
CREATE OR REPLACE FUNCTION handle_contact_notification()
RETURNS TRIGGER AS $$
BEGIN
  -- Call the Edge Function
  PERFORM
    net.http_post(
      url := CURRENT_SETTING('app.settings.edge_function_url') || '/handle-contact-notification',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || CURRENT_SETTING('app.settings.service_role_key')
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