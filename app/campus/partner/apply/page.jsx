import PartnerApplyPage from "../../../../page-data/campus-partner-apply/main";
import { Schema, buildOrganizationSchema, buildWebSiteSchema, buildFAQSchema, YOUR_ORG } from "@/components/seo";

// Page-specific metadata for Partner Apply page
export const metadata = {
    title: "Become a Partner | Next Web Campus – School ERP Partnership Program",
    description: "Join the Next Web Campus partner network. Earn recurring income by connecting schools with our school management software. No joining fees, flexible work, and comprehensive support. Apply for District Operator or Referral Partner roles.",
    keywords: "Next Web Campus Partner, School ERP Partnership, Become a Partner, District Operator, Referral Partner, School Software Partnership India, Education Technology Partnership, ERP Reseller India",
    alternates: {
        canonical: "https://erp.nextwebworks.in/campus/partner/apply",
    },
    openGraph: {
        type: "website",
        url: "https://erp.nextwebworks.in/campus/partner/apply",
        title: "Become a Partner | Next Web Campus Partnership Program",
        description: "Join our partner network and earn recurring income by connecting schools with Next Web Campus. No joining fees, flexible work, full support provided.",
        images: [
            {
                url: "https://erp.nextwebworks.in/campus/partner-apply-og.webp",
                width: 1200,
                height: 630,
                alt: "Next Web Campus Partner Program",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Become a Partner | Next Web Campus",
        description: "Earn recurring commissions by connecting schools with Next Web Campus. Apply as District Operator or Referral Partner today.",
        images: ["https://erp.nextwebworks.in/campus/partner-apply-og.webp"],
    },
};

// FAQ data for schema (same as in FAQSection component)
const faqs = [
    {
        question: 'Is there any fee to become a partner?',
        answer: 'No. There are no joining fees, registration fees, or any upfront costs. You only invest your time and existing relationships. We believe in earning through value creation, not charging partners to join.',
    },
    {
        question: 'How do payouts work?',
        answer: "Payouts are calculated based on active school subscriptions in your network. You receive recurring commissions as long as schools remain active. Payments are processed monthly via bank transfer, with clear statements showing each school's contribution.",
    },
    {
        question: 'Is this a job? Will I be employed by NextWeb?',
        answer: 'No, this is a partnership, not employment. You work independently, at your own pace, with no fixed hours or reporting requirements. You are essentially a business partner who earns based on the value you create.',
    },
    {
        question: 'Can I do this part-time alongside my current work?',
        answer: 'Absolutely. Many of our partners are working professionals—teachers, consultants, or IT service providers—who do this alongside their primary occupation. The Referral Partner model is especially suited for part-time involvement.',
    },
    {
        question: 'What support is provided after I become a partner?',
        answer: 'You get access to a partner dashboard, marketing materials, product training, and dedicated partner support. We handle all demos, onboarding, and customer support for schools. You focus on introductions and relationships.',
    },
    {
        question: 'What if my district already has a partner?',
        answer: 'We limit partnerships per district to avoid conflicts. During the verification stage, we check region availability. If your district is already covered, we may suggest alternative arrangements or add you to a waitlist.',
    },
    {
        question: 'How long does the approval process take?',
        answer: 'Most applications are reviewed within 2-3 business days. The verification and onboarding call are usually scheduled within a week of application. You can be fully active within 2 weeks of applying.',
    },
    {
        question: "What if I have no sales experience?",
        answer: "You don't need sales experience. If you have genuine relationships with schools and can make trusted introductions, that's what matters. We handle the product demos, negotiations, and technical setup.",
    },
];

// Build all schemas for the Partner Apply page
const schemas = [
    buildOrganizationSchema(),
    buildWebSiteSchema({ url: "https://erp.nextwebworks.in" }),
    buildFAQSchema(faqs),
].filter(Boolean);

export default function PartnerApplyPageWrapper() {
    return (
        <>
            <Schema schema={schemas} id="partner-apply-schema" />
            <PartnerApplyPage />
        </>
    );
}
