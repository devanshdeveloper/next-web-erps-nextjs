import ProductCard from './ProductCard';

const products = [
  {
    name: "NextWeb Campus",
    tagline: "Student, staff & admin — one campus control panel.",
    slug: "campus",
    icon: "🎓"
  },
  {
    name: "NextWeb Commerce",
    tagline: "Sell online, manage orders & fulfillment — end-to-end.",
    slug: "commerce",
    icon: "🛒"
  },
  {
    name: "NextWeb Inventory",
    tagline: "Real-time stock, warehouses and replenishment.",
    slug: "inventory",
    icon: "📦"
  },
  {
    name: "NextWeb Agency",
    tagline: "Pitch-to-delivery CRM and project ops for agencies.",
    slug: "agency",
    icon: "🎯"
  },
  {
    name: "NextWeb People",
    tagline: "Hiring, payroll and performance — one people platform.",
    slug: "people",
    icon: "👥"
  },
  {
    name: "NextWeb FitHub",
    tagline: "Memberships, trainers and classes — run your gym smoothly.",
    slug: "fithub",
    icon: "💪"
  },
  {
    name: "NextWeb Plant",
    tagline: "Plan, produce and track your factory operations in real time.",
    slug: "plant",
    icon: "🏭"
  },
  {
    name: "NextWeb BillDesk",
    tagline: "GST-ready invoicing, automated billing & fast payment tracking.",
    slug: "billdesk",
    icon: "💳"
  },
  {
    name: "NextWeb SalonHub",
    tagline: "Appointments, inventory, and client management for salons and spas.",
    slug: "salonhub",
    icon: "💇"
  },
  {
    name: "NextWeb Finance",
    tagline: "Cash flow, GST reports, and accounting in one place.",
    slug: "finance",
    icon: "💰"
  },
  {
    name: "NextWeb Procure",
    tagline: "Simplify purchase orders, vendor management, and supplier workflows.",
    slug: "procure",
    icon: "📋"
  },
  {
    name: "NextWeb FieldOps",
    tagline: "Manage field teams, service jobs, and site operations easily.",
    slug: "fieldops",
    icon: "🚛"
  },
  {
    name: "NextWeb Projects",
    tagline: "Plan, track, and deliver projects on time and on budget.",
    slug: "projects",
    icon: "📊"
  },
  {
    name: "NextWeb Compliance",
    tagline: "Simplify regulatory compliance & audit-ready document management.",
    slug: "compliance",
    icon: "✅"
  },
  {
    name: "NextWeb Analytics",
    tagline: "Actionable insights and performance dashboards for smarter decisions.",
    slug: "analytics",
    icon: "📈"
  },
  {
    name: "NextWeb HelpDesk",
    tagline: "Manage tickets, customer queries & service workflows effectively.",
    slug: "helpdesk",
    icon: "🎧"
  }
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Complete Business Automation Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from 16 specialized ERP solutions designed for Indian SMBs. 
            Each module integrates seamlessly for unified business management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard 
              key={product.slug} 
              product={product} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}