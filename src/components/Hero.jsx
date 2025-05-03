import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiChevronRight } from 'react-icons/fi';
import heroBg from '../assets/img-1.jpg';
import heroPOS from '../assets/img-11.jpg';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center pt-24 lg:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
      id="home"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <motion.div
        className="container-custom mx-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Modern POS for 
              <span className="text-primary-400"> Modern </span>
              Restaurants
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Streamline operations, enhance customer experience, and boost revenue with our intuitive restaurant point-of-sale system.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="btn btn-primary bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Started Free
                  <FiChevronRight className="ml-2 inline" />
                </button>
              </Link>
              
              <Link
                to="how-it-works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="btn btn-secondary bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  See How It Works
                </button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-sm text-gray-300"
            >
              <p>Trusted by over 2,000+ restaurants worldwide</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: .5, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center items-center lg:w-1/2 min-h-[300px]"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-2xl flex justify-center items-center"
              >
                <img
                  src={heroPOS}
                  alt="POS Hardware System"
                  className="rounded-xl max-w-xs sm:max-w-sm md:max-w-xl w-full h-auto object-contain shadow-lg"
                />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-success-500 bg-opacity-20 rounded-full">
                    <svg className="w-5 h-5 text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-white">30% faster service</p>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-500 bg-opacity-20 rounded-full">
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-white">20% revenue increase</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero