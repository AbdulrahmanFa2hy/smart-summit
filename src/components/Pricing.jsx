import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

const PricingCard = ({ title, price, features, isPopular, delay, period }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative ${isPopular ? 'border-2 border-primary-500' : 'border border-gray-200'}`}
    >
      {isPopular && (
        <div className="bg-primary-500 text-white text-center py-1 px-4 text-sm font-semibold absolute top-0 right-0 rounded-bl-lg">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600">/{period}</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <FiCheck className="text-success-500 mt-1 mr-2 flex-shrink-0" />
              ) : (
                <FiX className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
              )}
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        <button 
          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
            isPopular 
              ? 'bg-primary-500 text-white hover:bg-primary-600' 
              : 'bg-white text-primary-500 border border-primary-500 hover:bg-primary-50'
          }`}
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      title: "Starter",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        { text: "1 POS Terminal", included: true },
        { text: "Basic Reporting", included: true },
        { text: "Menu Management", included: true },
        { text: "Payment Processing", included: true },
        { text: "Email Support", included: true },
        { text: "Inventory Management", included: false },
        { text: "Staff Management", included: false },
        { text: "Advanced Analytics", included: false },
      ],
      isPopular: false,
      delay: 0.1
    },
    {
      title: "Professional",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        { text: "3 POS Terminals", included: true },
        { text: "Advanced Reporting", included: true },
        { text: "Menu Management", included: true },
        { text: "Payment Processing", included: true },
        { text: "Priority Support", included: true },
        { text: "Inventory Management", included: true },
        { text: "Staff Management", included: true },
        { text: "Advanced Analytics", included: false },
      ],
      isPopular: true,
      delay: 0.2
    },
    {
      title: "Enterprise",
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        { text: "Unlimited POS Terminals", included: true },
        { text: "Custom Reporting", included: true },
        { text: "Menu Management", included: true },
        { text: "Payment Processing", included: true },
        { text: "24/7 Support", included: true },
        { text: "Inventory Management", included: true },
        { text: "Staff Management", included: true },
        { text: "Advanced Analytics", included: true },
      ],
      isPopular: false,
      delay: 0.3
    }
  ];

  return (
    <section id="pricing" className="section bg-white">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Simple Pricing</h2>
          <p className="section-subtitle">Choose the plan that works best for your restaurant.</p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  !annual ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'
                }`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  annual ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'
                }`}
                onClick={() => setAnnual(true)}
              >
                Annual (20% off)
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={annual ? plan.annualPrice : plan.monthlyPrice}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={plan.delay}
              period={annual ? "month, billed annually" : "month"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;