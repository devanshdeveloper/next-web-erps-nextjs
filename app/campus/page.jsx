import CampusApp from "../../page-data/campus/main";
import { Schema, buildOrganizationSchema, buildWebSiteSchema, buildSoftwareApplicationSchema, buildFAQSchema, YOUR_ORG } from "@/components/seo";

// Page-specific metadata for Campus ERP
export const metadata = {
    title: "Next Web Campus – School Management Software for Indian Schools",
    description: "Next Web Campus is an all-in-one school management software designed for schools, colleges, and coaching institutes in India. Manage admissions, fees, attendance, exams, and parent communication from a single platform.",
    keywords: "School Management Software India, School ERP, Student Management System, Fee Management System, Attendance System, Education ERP, CBSE School Software, ICSE School Software, Coaching Institute Software, Next Web Campus",
    alternates: {
        canonical: "https://erp.nextwebworks.in/campus",
    },
    openGraph: {
        type: "website",
        url: "https://erp.nextwebworks.in/campus",
        title: "Next Web Campus – Smart School Management Software",
        description: "All-in-one school ERP for admissions, fees, attendance, exams, and parent communication. Built for Indian schools, colleges, and coaching institutes.",
        images: [
            {
                url: "https://erp.nextwebworks.in/campus/og-image.webp",
                width: 1200,
                height: 630,
                alt: "Next Web Campus - School Management Software",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Next Web Campus – School Management Software for Indian Schools",
        description: "All-in-one school ERP for admissions, fees, attendance, exams, and parent communication.",
        images: ["https://erp.nextwebworks.in/campus/og-image.webp"],
    },
};

// FAQ data for schema (same as in FAQ component)
const faqs = [
    {
        question: 'How long does it take to set up NextWeb Campus?',
        answer: 'Most institutions are up and running within 2-3 days. Our team helps with data migration, staff training, and initial setup. Small schools can start even faster with our quick-start templates.',
    },
    {
        question: 'Do you provide training for our staff?',
        answer: 'Yes, we provide comprehensive training for all staff members including administrators, teachers, and front office. Training is available via video calls, on-site visits, and our detailed documentation portal.',
    },
    {
        question: 'Are GST-compliant receipts automatically generated?',
        answer: "Absolutely. All fee receipts are GST-compliant with your institution's GSTIN, proper tax breakdowns, and sequential numbering. You can customize receipt templates with your logo and branding.",
    },
    {
        question: 'Can parents access the system?',
        answer: 'Yes, parents get their own mobile app and web portal to view attendance, fees, report cards, and communicate with teachers. They also receive WhatsApp and SMS notifications for important updates.',
    },
    {
        question: 'What happens to our existing data?',
        answer: 'We handle complete data migration from Excel sheets, other software, or paper records. Our team ensures all student, staff, and financial data is accurately transferred with zero data loss.',
    },
    {
        question: 'Is the system suitable for coaching centers?',
        answer: 'Yes, NextWeb Campus is designed for K-12 schools, coaching centers, and small colleges. We support batch-wise management, course enrollment, and flexible fee structures perfect for coaching institutes.',
    },
    {
        question: 'What payment methods are supported for fee collection?',
        answer: 'We integrate with all major payment gateways including Razorpay, Paytm, and bank transfers. Parents can pay online via UPI, cards, net banking, or wallets. Cash and cheque payments can also be recorded.',
    },
    {
        question: 'Do you offer customer support in regional languages?',
        answer: 'Yes, our support team can assist in Hindi, Marathi, Tamil, Telugu, and other major Indian languages. The software interface is currently in English with multi-language support coming soon.',
    },
];

// Build all schemas for the Campus page
const schemas = [
    buildOrganizationSchema(),
    buildWebSiteSchema({ url: "https://erp.nextwebworks.in" }),
    buildSoftwareApplicationSchema({
        name: "Next Web Campus",
        description: "All-in-one school management software for Indian schools, colleges, and coaching institutes. Manage admissions, fees, attendance, exams, and parent communication from a single digital platform.",
        url: "https://erp.nextwebworks.in/campus",
        applicationCategory: "EducationalApplication",
    }),
    buildFAQSchema(faqs),
].filter(Boolean);

export default function CampusPage() {
    return (
        <>
            <Schema schema={schemas} id="campus-schema" />
            <CampusApp />
        </>
    );
}