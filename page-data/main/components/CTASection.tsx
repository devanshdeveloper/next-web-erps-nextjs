export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Simplify Your Business Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of Indian SMBs who trust NextWeb ERPs to automate their business, 
            reduce manual work, and accelerate growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-lg text-lg">
              Schedule a Demo
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500 font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-lg">
              Start Free Trial
            </button>
          </div>
          
          <p className="text-white/75 text-sm mt-6">
            No setup fees • 30-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}