import MainPage from "../page-data/main/main";
import { Schema, buildOrganizationSchema, buildWebSiteSchema, buildItemListSchema, YOUR_ORG } from "@/components/seo";

// Home page metadata - redirects to campus but still needs SEO for direct visits
export const metadata = {
    title: "Next Web ERPs – Powerful ERP Solutions for Schools, Colleges & Institutes",
    description: "Next Web ERPs is a modular, scalable ERP ecosystem designed for schools, colleges, coaching institutes and organizations in India. Manage operations, people, data, and growth from a single unified system.",
    keywords: "ERP Software India, School ERP, College ERP, Education ERP, Institute Management System, Business ERP, Next Web ERPs, School Management Software",
    alternates: {
        canonical: "https://erp.nextwebworks.in/",
    },
    openGraph: {
        type: "website",
        url: "https://erp.nextwebworks.in/",
        title: "Next Web ERPs – Powerful ERP Solutions for Schools & Institutions",
        description: "Modular, scalable ERP ecosystem for schools, colleges, coaching institutes, and organizations. Manage operations, people, data, and growth from one platform.",
        images: [
            {
                url: "https://erp.nextwebworks.in/og-image.webp",
                width: 1200,
                height: 630,
                alt: "Next Web ERPs - ERP Platform",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Next Web ERPs – Powerful ERP Solutions for Schools & Institutions",
        description: "Modular, scalable ERP ecosystem for schools, colleges, and organizations in India.",
        images: ["https://erp.nextwebworks.in/og-image.webp"],
    },
};

// ERP products list for ItemList schema
const erpProducts = [
    { name: "Next Web Campus - School Management", url: "https://erp.nextwebworks.in/campus" },
    { name: "Next Web Agency - Agency Management", url: "https://erp.nextwebworks.in/agency" },
    { name: "Next Web BillDesk - Billing & Invoicing", url: "https://erp.nextwebworks.in/billdesk" },
    { name: "Next Web Commerce - E-Commerce Platform", url: "https://erp.nextwebworks.in/commerce" },
    { name: "Next Web FieldOps - Field Operations", url: "https://erp.nextwebworks.in/fieldops" },
    { name: "Next Web FitHub - Fitness Management", url: "https://erp.nextwebworks.in/fithub" },
    { name: "Next Web HelpDesk - Support Ticketing", url: "https://erp.nextwebworks.in/helpdesk" },
    { name: "Next Web Inventory - Stock Management", url: "https://erp.nextwebworks.in/inventory" },
    { name: "Next Web People - HR Management", url: "https://erp.nextwebworks.in/people" },
    { name: "Next Web Plant - Manufacturing ERP", url: "https://erp.nextwebworks.in/plant" },
    { name: "Next Web Procure - Procurement Management", url: "https://erp.nextwebworks.in/procure" },
    { name: "Next Web SalonHub - Salon Management", url: "https://erp.nextwebworks.in/salonhub" },
];

// Build all schemas for the home page
const schemas = [
    buildOrganizationSchema(),
    buildWebSiteSchema({ url: "https://erp.nextwebworks.in" }),
    buildItemListSchema({
        name: "Next Web ERPs - ERP Solutions",
        description: "Complete suite of modular ERP solutions for Indian businesses and institutions",
        url: "https://erp.nextwebworks.in/",
        items: erpProducts,
    }),
].filter(Boolean);

export default function HomePage() {
    return (
        <>
            <Schema schema={schemas} id="home-schema" />
            <MainPage />
        </>
    );
}
