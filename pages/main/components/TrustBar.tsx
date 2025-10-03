export default function TrustBar() {
  const testimonials = [
    {
      quote: "NextWeb Campus transformed our school operations. No more manual attendance or fee tracking!",
      name: "Priya Sharma",
      role: "Principal, Modern Public School"
    },
    {
      quote: "Our online sales doubled after implementing NextWeb Commerce. The inventory sync is flawless.",
      name: "Rajesh Kumar",
      role: "Founder, StyleHub Fashion"
    },
    {
      quote: "Finally, an ERP that understands Indian business needs. GST compliance made simple.",
      name: "Meera Patel",
      role: "CA, Patel & Associates"
    }
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-xl opacity-90">
            Join hundreds of SMBs who've transformed their operations with NextWeb ERPs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-white/10 backdrop-blur p-6 rounded-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-orange-500 text-2xl mb-4">"</div>
              <p className="mb-4 leading-relaxed opacity-90">
                {testimonial.quote}
              </p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm opacity-75">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-sm opacity-75 mb-6">Trusted by 500+ businesses across India</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="w-20 h-8 bg-white/20 rounded flex items-center justify-center text-xs">Logo</div>
            <div className="w-20 h-8 bg-white/20 rounded flex items-center justify-center text-xs">Logo</div>
            <div className="w-20 h-8 bg-white/20 rounded flex items-center justify-center text-xs">Logo</div>
            <div className="w-20 h-8 bg-white/20 rounded flex items-center justify-center text-xs">Logo</div>
          </div>
        </div>
      </div>
    </section>
  );
}