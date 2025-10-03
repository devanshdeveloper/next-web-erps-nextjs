

import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import UseCases from './components/UseCases';
import TrustBar from './components/TrustBar';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <Features />
        <UseCases />
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;