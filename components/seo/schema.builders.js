/**
 * Schema.org Builder Functions for Next Web ERPs
 * Production-grade, composable schema builders
 */

// Organization details for Next Web ERPs
export const YOUR_ORG = {
    name: "Next Web ERPs",
    url: "https://erp.nextwebworks.in",
    logo: "https://erp.nextwebworks.in/logo.png",
    description: "Next Web ERPs is a modular, scalable ERP ecosystem designed to help schools, colleges, institutes, and organizations manage operations, people, data, and growth from a single unified system.",
    address: {
        streetAddress: "",
        addressLocality: "India",
        addressRegion: "India",
        postalCode: "",
        addressCountry: "IN",
    },
    contactPoint: {
        telephone: "",
        contactType: "sales",
        email: "contact@nextwebworks.in",
    },
    sameAs: [
        "https://www.linkedin.com/company/nextwebworks/",
        "https://www.facebook.com/nextwebworks/",
        "https://www.instagram.com/nextwebworks/",
    ],
};

/**
 * Build Organization Schema
 */
export const buildOrganizationSchema = ({
    name = YOUR_ORG.name,
    url = YOUR_ORG.url,
    logo = YOUR_ORG.logo,
    description = YOUR_ORG.description,
    sameAs = YOUR_ORG.sameAs,
    address = YOUR_ORG.address,
    contactPoint = YOUR_ORG.contactPoint,
} = {}) => ({
    "@type": "Organization",
    name,
    url,
    ...(logo && { logo }),
    ...(description && { description }),
    ...(sameAs && sameAs.length > 0 && { sameAs }),
    ...(address && {
        address: {
            "@type": "PostalAddress",
            ...address,
        },
    }),
    ...(contactPoint && {
        contactPoint: {
            "@type": "ContactPoint",
            ...contactPoint,
        },
    }),
});

/**
 * Build WebSite Schema with SearchAction
 */
export const buildWebSiteSchema = ({
    name = YOUR_ORG.name,
    url = YOUR_ORG.url,
    searchUrl,
} = {}) => ({
    "@type": "WebSite",
    name,
    url,
    ...(searchUrl && {
        potentialAction: {
            "@type": "SearchAction",
            target: `${searchUrl}?q={search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    }),
});

/**
 * Build SoftwareApplication Schema (for ERP products)
 */
export const buildSoftwareApplicationSchema = ({
    name,
    description,
    image,
    url,
    applicationCategory = "BusinessApplication",
    operatingSystem = "Web Browser",
    offers,
    aggregateRating,
    review,
}) => {
    const images = Array.isArray(image) ? image : image ? [image] : [];

    // Default offers (for software products without pricing displayed)
    const defaultOffers = {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "INR",
        price: "0",
        priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
        seller: {
            "@type": "Organization",
            name: YOUR_ORG.name,
            url: YOUR_ORG.url,
        },
    };

    return {
        "@type": "SoftwareApplication",
        name,
        ...(description && { description }),
        ...(images.length > 0 && { image: images }),
        applicationCategory,
        operatingSystem,
        ...(url && { url }),
        offers: offers || defaultOffers,
        ...(aggregateRating && {
            aggregateRating: { "@type": "AggregateRating", ...aggregateRating },
        }),
        ...(review && {
            review: Array.isArray(review)
                ? review.map((r) => ({ "@type": "Review", ...r }))
                : { "@type": "Review", ...review },
        }),
    };
};

/**
 * Build Breadcrumb Schema
 */
export const buildBreadcrumbSchema = (items) => {
    if (!items || items.length === 0) return null;

    return {
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url.startsWith("http")
                ? item.url
                : `${YOUR_ORG.url}${item.url}`,
        })),
    };
};

/**
 * Build FAQ Schema
 */
export const buildFAQSchema = (faqs) => {
    if (!faqs || faqs.length === 0) return null;

    return {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
};

/**
 * Build ItemList Schema (for collection/category pages)
 */
export const buildItemListSchema = ({ name, description, items, url }) => {
    if (!items || items.length === 0) return null;

    return {
        "@type": "ItemList",
        name,
        ...(description && { description }),
        ...(url && { url }),
        numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            ...(item.url && { url: item.url }),
        })),
    };
};

/**
 * Build LocalBusiness Schema
 */
export const buildLocalBusinessSchema = () => ({
    "@type": "LocalBusiness",
    name: YOUR_ORG.name,
    url: YOUR_ORG.url,
    logo: YOUR_ORG.logo,
    description: YOUR_ORG.description,
    address: {
        "@type": "PostalAddress",
        ...YOUR_ORG.address,
    },
    ...(YOUR_ORG.contactPoint.telephone && { telephone: YOUR_ORG.contactPoint.telephone }),
    ...(YOUR_ORG.contactPoint.email && { email: YOUR_ORG.contactPoint.email }),
    sameAs: YOUR_ORG.sameAs,
    priceRange: "$$",
});

// Helper: Truncate text for meta descriptions
export function truncateText(text, maxLength = 160) {
    if (!text) return "";
    const cleaned = text.replace(/\s+/g, " ").trim();
    return cleaned.length > maxLength
        ? cleaned.substring(0, maxLength - 3) + "..."
        : cleaned;
}

// Helper: Strip HTML and truncate
export function stripHtmlAndTruncate(html, maxLength = 160) {
    if (!html) return "";
    const text = html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
    return text.length > maxLength
        ? text.substring(0, maxLength - 3) + "..."
        : text;
}
