import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Features', to: 'features' },
    // { name: 'How It Works', to: 'how-it-works' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Pricing', to: 'pricing' },
    { name: 'Contact', to: 'contact' },
  ];

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
  }`;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="container-custom mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="text-2xl font-bold text-primary-500">
              Smart Summit<span className="text-accent-500">.</span>
            </div>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`font-medium cursor-pointer transition-colors duration-300 ${
                    scrolled
                      ? 'text-gray-800 hover:text-primary-500'
                      : 'text-white hover:text-primary-400 drop-shadow-md'
                  }`}
                  style={!scrolled ? { textShadow: '0 2px 8px rgba(0,0,0,0.7)' } : {}}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden md:block"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className={`btn btn-primary ${scrolled ? '' : 'bg-primary-500 text-white border-white/20 drop-shadow-md'}`}>Get Started</button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md"
            >
              {isMenuOpen ? (
                <FiX className={`${scrolled ? 'text-gray-900' : 'text-white drop-shadow-md' } h-6 w-6`} />
              ) : (
                <FiMenu className={`${scrolled ? 'text-gray-900' : 'text-white drop-shadow-md' } h-6 w-6`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay and sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile menu sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                delay: 0.1 // Slight delay after overlay appears
              }}
              className="fixed left-0 top-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header with close button */}
                <div className="flex items-center justify-between p-4">
                  <div className="text-xl font-bold text-primary-500">
                    Smart Summit<span className="text-accent-500">.</span>
                  </div>
                </div>

                {/* Navigation links */}
                <div className="flex-1 px-6 py-8">
                  <div className="space-y-6">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.2 + index * 0.1 
                        }}
                      >
                        <Link
                          to={link.to}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className="block py-3 text-lg font-medium text-gray-800 hover:text-primary-500 cursor-pointer transition-colors border-b border-gray-100"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer with CTA button */}
                <div className="p-6 border-t border-gray-200">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <button className="w-full btn btn-primary text-lg py-4">
                        Get Started
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar