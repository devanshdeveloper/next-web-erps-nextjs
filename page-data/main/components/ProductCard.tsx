interface Product {
  name: string;
  tagline: string;
  slug: string;
  icon: string;
}

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export default function ProductCard({ product, delay = 0 }: ProductCardProps) {
  return (
    <div 
      className="product-card group animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {product.icon}
        </div>
        
        <h3 className="text-lg font-semibold text-blue-600 mb-2 group-hover:text-orange-500 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {product.tagline}
        </p>
        
        <a 
          href={`/${product.slug}`}
          className="inline-flex items-center text-blue-600 hover:text-orange-500 font-medium text-sm group-hover:underline transition-colors"
        >
          Learn more
          <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}