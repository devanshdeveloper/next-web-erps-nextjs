import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Database, Smartphone, Wifi, Printer, Shield } from 'lucide-react';

const Integrations: React.FC = () => {
  const integrations = [
    {
      icon: <Database className="text-blue-500" size={24} />,
      title: "ERP Connectors",
      description: "SAP, Oracle, Tally, and custom ERP systems",
      items: ["SAP", "Oracle", "Tally", "QuickBooks"]
    },
    {
      icon: <Zap className="text-green-500" size={24} />,
      title: "NextWeb Ecosystem",
      description: "Seamless integration with Inventory and Procurement modules",
      items: ["Inventory", "Procurement", "Finance", "CRM"]
    },
    {
      icon: <Wifi className="text-orange-500" size={24} />,
      title: "IoT & PLCs",
      description: "Connect machines and sensors for real-time data capture",
      items: ["Siemens", "Allen-Bradley", "Modbus", "OPC-UA"]
    },
    {
      icon: <Smartphone className="text-purple-500" size={24} />,
      title: "Mobile Scanners",
      description: "Barcode and RFID scanning on Android devices",
      items: ["Zebra", "Honeywell", "Datalogic", "Android"]
    },
    {
      icon: <Printer className="text-amber-500" size={24} />,
      title: "Label Printers",
      description: "Direct printing for work orders and material labels",
      items: ["Zebra ZPL", "Brother", "DYMO", "Generic"]
    },
    {
      icon: <Shield className="text-red-500" size={24} />,
      title: "Security & Access",
      description: "Active Directory, LDAP, and role-based access control",
      items: ["Active Directory", "LDAP", "SSO", "2FA"]
    }
  ];

  return (
    <section id="integrations" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            <span className="text-blue-500">Integrations</span> & Ecosystem
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Connect NextWeb Plant with your existing systems and devices for seamless operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white rounded-lg mr-3 shadow-sm">
                  {integration.icon}
                </div>
                <h3 className="font-semibold text-slate-800 text-lg">{integration.title}</h3>
              </div>
              
              <p className="text-slate-600 mb-4">{integration.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {integration.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="bg-white text-slate-700 px-3 py-1 rounded-full text-sm font-medium border border-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-6">
            Don't see your integration? We offer custom API development and system connectors.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Request Custom Integration
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;