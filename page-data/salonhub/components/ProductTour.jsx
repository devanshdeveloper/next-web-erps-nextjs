import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Calendar, 
  Package, 
  BarChart3, 
  Users,
  CreditCard,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { animateProductTour } from '../lib/gsap-init';

const ProductTour = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      animateProductTour();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const tourSections = [
    {
      id: "booking",
      title: "Smart Booking Dashboard",
      subtitle: "Never miss an appointment",
      description: "Real-time calendar view with drag-and-drop scheduling. Automatic conflict detection and waitlist management.",
      features: [
        "Drag & drop scheduling",
        "Conflict detection", 
        "Waitlist automation",
        "Multi-stylist view"
      ],
      mockup: {
        type: "calendar",
        data: [
          { time: "9:00 AM", client: "Priya S.", service: "Hair Cut", stylist: "Maya", status: "confirmed" },
          { time: "10:30 AM", client: "Anita G.", service: "Color", stylist: "Ravi", status: "in-progress" },
          { time: "12:00 PM", client: "Kavya P.", service: "Facial", stylist: "Priya", status: "upcoming" }
        ]
      }
    },
    {
      id: "inventory",
      title: "Inventory Management",
      subtitle: "Never run out of supplies",
      description: "Track products, set low-stock alerts, and manage suppliers. Automatic deduction when products are sold.",
      features: [
        "Real-time stock tracking",
        "Low stock alerts",
        "Supplier management",
        "Auto deduction on sales"
      ],
      mockup: {
        type: "inventory",
        data: [
          { name: "L'Oreal Hair Color", stock: 25, alert: false, category: "Hair Care" },
          { name: "OPI Nail Polish", stock: 3, alert: true, category: "Nail Care" },
          { name: "Face Mask - Hydrating", stock: 12, alert: false, category: "Skincare" }
        ]
      }
    },
    {
      id: "pos",
      title: "GST-Compliant POS",
      subtitle: "Billing made simple",
      description: "Complete billing system with GST calculations, multiple payment options, and automatic receipt generation.",
      features: [
        "GST compliance",
        "Multiple payment methods",
        "Digital receipts",
        "Discount management"
      ],
      mockup: {
        type: "pos",
        data: {
          client: "Priya Sharma",
          services: [
            { name: "Hair Cut & Styling", price: 800, gst: 144 },
            { name: "Hair Color", price: 1500, gst: 270 }
          ],
          products: [
            { name: "Hair Serum", price: 450, gst: 81 }
          ],
          subtotal: 2750,
          gst: 495,
          total: 3245
        }
      }
    },
    {
      id: "analytics",
      title: "Business Analytics",
      subtitle: "Data-driven decisions",
      description: "Comprehensive reports on revenue, stylist performance, popular services, and customer insights.",
      features: [
        "Revenue analytics",
        "Stylist performance",
        "Service popularity",
        "Customer insights"
      ],
      mockup: {
        type: "analytics",
        data: {
          revenue: "₹1,25,000",
          growth: "+23%",
          appointments: 156,
          clients: 89,
          topService: "Hair Cut & Color",
          topStylist: "Maya Patel"
        }
      }
    }
  ];

  const renderMockup = (section) => {
    switch (section.mockup.type) {
      case 'calendar':
        return (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-semibold text-slate-900">Today's Schedule</h4>
              <Calendar className="w-6 h-6 text-blue-500" />
            </div>
            <div className="space-y-4">
              {section.mockup.data.map((appointment, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-xl border-l-4 ${
                    appointment.status === 'confirmed' ? 'bg-green-50 border-green-500' :
                    appointment.status === 'in-progress' ? 'bg-pink-500/10 border-pink-500' :
                    'bg-orange-500/10 border-orange-500'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-slate-900">{appointment.time}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                          appointment.status === 'in-progress' ? 'bg-pink-500/20 text-pink-500' :
                          'bg-orange-500/20 text-orange-500/80'
                        }`}>
                          {appointment.status.replace('-', ' ')}
                        </span>
                      </div>
                      <p className="font-medium text-slate-900">{appointment.client}</p>
                      <p className="text-sm text-slate-600">{appointment.service} • {appointment.stylist}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'inventory':
        return (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-semibold text-slate-900">Inventory Status</h4>
              <Package className="w-6 h-6 text-blue-500" />
            </div>
            <div className="space-y-4">
              {section.mockup.data.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-600">{item.category}</p>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${item.alert ? 'text-red-600' : 'text-green-600'}`}>
                      {item.stock} units
                    </div>
                    {item.alert && (
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                        Low Stock
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'pos':
        return (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-semibold text-slate-900">Invoice - {section.mockup.data.client}</h4>
              <CreditCard className="w-6 h-6 text-blue-500" />
            </div>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-slate-700 mb-2">Services</h5>
                {section.mockup.data.services.map((service, index) => (
                  <div key={index} className="flex justify-between py-2">
                    <span className="text-slate-600">{service.name}</span>
                    <span className="font-medium">₹{service.price}</span>
                  </div>
                ))}
              </div>
              <div>
                <h5 className="font-medium text-slate-700 mb-2">Products</h5>
                {section.mockup.data.products.map((product, index) => (
                  <div key={index} className="flex justify-between py-2">
                    <span className="text-slate-600">{product.name}</span>
                    <span className="font-medium">₹{product.price}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600">Subtotal</span>
                  <span>₹{section.mockup.data.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">GST (18%)</span>
                  <span>₹{section.mockup.data.gst}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total</span>
                  <span className="text-blue-500">₹{section.mockup.data.total}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-semibold text-slate-900">This Month's Performance</h4>
              <BarChart3 className="w-6 h-6 text-blue-500" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <motion.div 
                className="bg-blue/10 rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-blue-500">{section.mockup.data.revenue}</div>
                <div className="text-sm text-slate-600">Revenue</div>
                <div className="text-xs text-green-600">{section.mockup.data.growth}</div>
              </motion.div>
              <motion.div 
                className="bg-pink-500/10 rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-pink-500">{section.mockup.data.appointments}</div>
                <div className="text-sm text-slate-600">Appointments</div>
                <div className="text-xs text-green-600">+15%</div>
              </motion.div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Active Clients</span>
                <span className="font-medium">{section.mockup.data.clients}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Top Service</span>
                <span className="font-medium">{section.mockup.data.topService}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Top Performer</span>
                <span className="font-medium">{section.mockup.data.topStylist}</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-pink-500/10 text-pink-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Smartphone className="w-4 h-4" />
            <span>Product Tour</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            See SalonHub in action
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore the key features that make salon management effortless and help you grow your business
          </p>
        </motion.div>

        <div className="space-y-32">
          {tourSections.map((section, index) => (
            <motion.div
              key={section.id}
              className={`tour-section grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <CheckCircle className="w-4 h-4" />
                  <span>Feature {index + 1}</span>
                </div>
                
                <h3 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                  {section.title}
                </h3>
                
                <div className="text-xl text-pink-500 font-semibold mb-6">
                  {section.subtitle}
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {section.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {section.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + (featureIndex * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue/90 transition-colors duration-200"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Try This Feature</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Mockup */}
              <motion.div
                className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} relative`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative max-w-lg mx-auto">
                  {renderMockup(section)}
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500/20 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-pink-500/10 rounded-full"></div>
                  <div className="absolute top-1/2 -left-8 w-6 h-6 bg-blue/20 rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTour;