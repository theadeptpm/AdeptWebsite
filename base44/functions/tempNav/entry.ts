Deno.serve(async (req) => {
  const res = await fetch('https://theadeptpmgroup.com/');
  const text = await res.text();
  const aMatches = text.match(/<a [^>]*href="([^"]+)"[^>]*>/gi) || [];
  return new Response(aMatches.join('\n'), { headers: { "Content-Type": "text/plain" } });
});