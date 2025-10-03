export default function UseCases() {
  const useCases = [
    {
      title: "Educational Institutions",
      subtitle: "NextWeb Campus in action",
      benefits: [
        "Cut administrative paperwork by 80%",
        "Automated fee collection and receipts",
        "Digital student records and progress tracking"
      ],
      image: "🎓"
    },
    {
      title: "E-commerce Businesses",
      subtitle: "NextWeb Commerce + Inventory",
      benefits: [
        "Unified inventory across all channels",
        "Automated order processing and fulfillment",
        "Real-time sales analytics and reporting"
      ],
      image: "🛒"
    },
    {
      title: "Manufacturing Units",
      subtitle: "NextWeb Plant + Finance",
      benefits: [
        "Real-time production monitoring",
        "Automated GST compliance and reporting",
        "Streamlined supply chain management"
      ],
      image: "🏭"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Real Impact Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how NextWeb ERPs transform operations for businesses like yours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={useCase.title}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl mb-6 text-center">{useCase.image}</div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                {useCase.title}
              </h3>
              <p className="text-orange-500 font-medium mb-4">
                {useCase.subtitle}
              </p>
              <ul className="space-y-2">
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start text-gray-600">
                    <span className="text-orange-500 mr-2 font-bold">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}