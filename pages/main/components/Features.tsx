export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Simplicity",
      description: "Intuitive interfaces designed for non-technical users. Get started in minutes, not months."
    },
    {
      icon: "🇮🇳",
      title: "Indian Market Fit",
      description: "GST-ready, vernacular support, and built for Indian business practices and compliance needs."
    },
    {
      icon: "📱",
      title: "Mobile-First",
      description: "Access your business data anywhere with responsive design and mobile apps for all modules."
    },
    {
      icon: "🔧",
      title: "Modular Growth",
      description: "Start with what you need, add modules as you grow. Pay only for what you use."
    },
    {
      icon: "🛡️",
      title: "Secure & Reliable",
      description: "Bank-grade security with 99.9% uptime guarantee and automated backups."
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Local support team that understands your business needs and speaks your language."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Why Choose NextWeb ERPs?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built specifically for Indian SMBs with features that matter most to growing businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}