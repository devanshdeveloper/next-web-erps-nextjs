/**
 * Schema Component for Next.js (App Router)
 * Production-grade JSON-LD structured data injection
 * 
 * Features:
 * - Supports single or multiple schemas
 * - SSR-friendly (SEO bots see it immediately)
 * - Auto-injects @context
 */

export default function Schema({ schema, id }) {
    if (!schema) return null;

    // Handle array of schemas or single schema
    const json = Array.isArray(schema)
        ? schema
            .filter(Boolean) // Remove null/undefined schemas
            .map((s) => ({
                "@context": "https://schema.org",
                ...s,
            }))
        : {
            "@context": "https://schema.org",
            ...schema,
        };

    // Don't render if empty array
    if (Array.isArray(json) && json.length === 0) return null;

    return (
        <script
            id={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(json, null, 0),
            }}
        />
    );
}
