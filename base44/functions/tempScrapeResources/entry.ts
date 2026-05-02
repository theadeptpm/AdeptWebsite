import { createClientFromRequest } from 'npm:@base44/sdk@0.8.20';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        
        const response = await base44.asServiceRole.integrations.Core.InvokeLLM({
            prompt: "Extract all the recommended resources, tools, and services from the page https://theadeptpmgroup.com/resources. List their names, descriptions, categories, and links if possible.",
            add_context_from_internet: true,
            model: "gemini_3_flash",
            response_json_schema: {
                type: "object",
                properties: {
                    resources: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                name: { type: "string" },
                                description: { type: "string" },
                                link: { type: "string" },
                                category: { type: "string" }
                            }
                        }
                    }
                }
            }
        });

        return Response.json(response);
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});