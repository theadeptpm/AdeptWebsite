import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        
        const payload = await req.json();
        
        if (!payload.data || payload.event?.entity_name !== 'Lead') {
            return Response.json({ error: 'Invalid payload' }, { status: 400 });
        }

        const lead = payload.data;
        
        const body = `
New Contact Form Submission:

Name: ${lead.first_name} ${lead.last_name || ''}
Email: ${lead.email}
Phone: ${lead.phone || 'N/A'}
Company: ${lead.company || 'N/A'}
Website: ${lead.website || 'N/A'}
Service Interest: ${lead.service_interest}

Message: 
${lead.message || 'N/A'}
        `;

        await base44.asServiceRole.integrations.Core.SendEmail({
            to: "hello@theadeptpmgroup.com",
            subject: `New Contact Request from ${lead.first_name} ${lead.last_name || ''}`.trim(),
            body: body,
            from_name: "Adept PM Group Website"
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
});