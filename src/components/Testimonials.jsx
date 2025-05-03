import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const TestimonialCard = ({ quote, author, position, restaurant, image, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="flex items-center text-yellow-400 mb-4">
        <FiStar className="fill-current" />
        <FiStar className="fill-current" />
        <FiStar className="fill-current" />
        <FiStar className="fill-current" />
        <FiStar className="fill-current" />
      </div>
      <p className="text-gray-700 italic mb-6 flex-grow">{quote}</p>
      <div className="flex items-center mt-auto">
        <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-600">{position}, {restaurant}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Serve has completely transformed how we run our restaurant. Orders are processed faster, tables turn over quicker, and our staff can focus on what really matters – the customer experience.",
      author: "Maria Rodriguez",
      position: "Owner",
      restaurant: "Fusion Bites",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      delay: 0.1
    },
    {
      quote: "The analytics alone are worth the investment. We've been able to identify our most profitable dishes and optimize our menu accordingly. Our revenue has increased by 25% since switching to Serve.",
      author: "David Chen",
      position: "General Manager",
      restaurant: "Urban Plate",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      delay: 0.2
    },
    {
      quote: "The simplicity of the system is its greatest strength. Our servers picked it up in no time, and the kitchen staff loves how clear the orders come through. Training new staff is now a breeze.",
      author: "Sarah Johnson",
      position: "Operations Director",
      restaurant: "Harvest Table",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      delay: 0.3
    }
  ];

  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Don't just take our word for it – hear from restaurant owners who've transformed their business with Serve.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              restaurant={testimonial.restaurant}
              image={testimonial.image}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;