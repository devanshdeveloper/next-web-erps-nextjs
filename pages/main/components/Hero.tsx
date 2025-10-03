export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-6 animate-fade-in">
            Next Web ERPs – Business Automation Made Simple.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed animate-slide-up">
            Empowering Indian SMBs with powerful, easy-to-use ERP solutions across industries — 
            from schools and e-commerce to manufacturing, finance, salons, and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button className="btn-primary text-lg px-8 py-4">
              Schedule a Demo
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Explore Products
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-70">
            <div>
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">16</div>
              <div className="text-sm text-gray-600">ERP Solutions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}