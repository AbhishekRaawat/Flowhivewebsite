import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const NOTIFICATION_EMAIL = 'rawat.abhishek5900l@gmail.com' // Replace with your email

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { record } = await req.json()

    // Format email content
    const emailContent = `
      New Contact Form Submission

      Name: ${record.name}
      Email: ${record.email}
      ${record.company ? `Company: ${record.company}` : ''}
      ${record.phone ? `Phone: ${record.phone}` : ''}
      
      Message:
      ${record.message}
      
      Submitted: ${new Date(record.created_at).toLocaleString()}
    `.trim()

    // Initialize Supabase client
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      }
    )

    // Send email notification
    const { error: emailError } = await supabaseAdmin
      .from('emails')
      .insert({
        to_email: NOTIFICATION_EMAIL,
        subject: 'New Contact Form Submission',
        content: emailContent,
      })

    if (emailError) throw emailError

    return new Response(
      JSON.stringify({ message: 'Notification sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Notification error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})