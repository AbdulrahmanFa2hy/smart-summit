import { motion } from 'framer-motion';
import { 
  FiCreditCard, 
  FiPieChart, 
  FiServer, 
  FiSmartphone, 
  FiUsers, 
  FiLock 
} from 'react-icons/fi';

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-3 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <div className="bg-primary-50 p-3 rounded-full">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <FiCreditCard className="w-6 h-6 text-primary-500" />,
      title: "Swift Payments",
      description: "Process payments in seconds with multiple payment options including cards, mobile payments, and gift cards.",
      delay: 0.1
    },
    {
      icon: <FiPieChart className="w-6 h-6 text-primary-500" />,
      title: "Intelligent Analytics",
      description: "Real-time insights on sales, inventory, and customer behavior to make data-driven decisions.",
      delay: 0.2
    },
    {
      icon: <FiServer className="w-6 h-6 text-primary-500" />,
      title: "Inventory Management",
      description: "Track ingredients, manage stock levels, and receive alerts when items need to be reordered.",
      delay: 0.3
    },
    {
      icon: <FiSmartphone className="w-6 h-6 text-primary-500" />,
      title: "Mobile Ordering",
      description: "Allow staff to take orders tableside or let customers order directly from their phones.",
      delay: 0.4
    },
    {
      icon: <FiUsers className="w-6 h-6 text-primary-500" />,
      title: "Staff Management",
      description: "Track hours, manage shifts, and monitor performance for your entire team.",
      delay: 0.5
    },
    {
      icon: <FiLock className="w-6 h-6 text-primary-500" />,
      title: "Secure System",
      description: "Bank-level encryption and security measures to protect your business and customer data.",
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="section bg-gray-50">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="section-subtitle"
          >
            Everything you need to run your restaurant efficiently in one streamlined system.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;