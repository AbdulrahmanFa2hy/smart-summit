import { motion } from 'framer-motion';

const Step = ({ number, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8 sm:mb-10 mx-auto w-full max-w-xl text-center"
    >
      <div className="flex flex-col items-center mb-4">
        <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold mb-2">
          {number}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      </div>
      <p className="text-gray-600 text-lg">{description}</p>
    </motion.div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Simple Setup",
      description: "Get up and running in minutes with our intuitive setup wizard. Import your menu, customize your layout, and connect your hardware with guided assistance."
    },
    {
      number: 2,
      title: "Streamlined Operations",
      description: "Take orders, manage tables, track inventory, and process payments all from one unified system. Designed for speed and ease of use during even the busiest service times."
    },
    {
      number: 3,
      title: "Actionable Insights",
      description: "Review comprehensive reports on sales, menu performance, staff productivity, and customer behavior. Make data-driven decisions to optimize your business."
    }
  ];

  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Our platform is designed with restaurant workflows in mind, making it intuitive and efficient.</p>
        </motion.div>
        <div className="mt-12 flex flex-col items-center gap-6">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;