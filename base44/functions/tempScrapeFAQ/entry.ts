import { createClientFromRequest } from 'npm:@base44/sdk@0.8.20';

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  
  const res = await base44.asServiceRole.integrations.Core.InvokeLLM({
    prompt: "Extract the FAQ questions and answers, and the CTA section from this page: https://theadeptpmgroup.com/services/business-ai . Return them as JSON.",
    add_context_from_internet: true,
    model: "gemini_3_pro",
    response_json_schema: {
      type: "object",
      properties: {
        faq: {
          type: "array",
          items: {
            type: "object",
            properties: {
              question: { type: "string" },
              answer: { type: "string" }
            }
          }
        },
        cta: {
          type: "object",
          properties: {
            headline: { type: "string" },
            description: { type: "string" },
            button_text: { type: "string" },
            button_link: { type: "string" }
          }
        }
      }
    }
  });

  return new Response(JSON.stringify(res), { headers: { "Content-Type": "application/json" } });
});