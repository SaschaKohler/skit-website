import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Calendar } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Animation Varianten
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.4
      }
    }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6
      }
    }
  };
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-rose-50 to-amber-50 opacity-50" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-60 h-60 bg-rose-300 rounded-full mix-blend-multiply opacity-20 animate-pulse animation-delay-4000"></div>
        <svg
          className="absolute bottom-0 left-0 w-full text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,149.3C960,139,1056,149,1152,154.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={titleVariants}
            className="mb-4"
          >
            <h1 className="font-heading text-5xl md:text-6xl tracking-widest uppercase text-shadow">
              WordPress Express
            </h1>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={subtitleVariants}
            className="mb-6"
          >
            <h2 className="font-subheading text-3xl md:text-4xl italic text-rose-600">
              Ihre Website in nur 14 Tagen
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={contentVariants}
            className="mb-8"
          >
            <p className="font-body text-lg sm:text-xl text-gray-700">
              Professioneller Webauftritt für Coaches, Berater und kreative Selbstständige – 
              schnell, unkompliziert und mit persönlicher Betreuung.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link
              to="/contact"
              className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium uppercase tracking-widest transition-all hover:shadow-lg transform hover:translate-y-[-2px] inline-flex items-center justify-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Beratungsgespräch 
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="#pricing"
              className="px-8 py-3 bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 rounded-lg font-medium uppercase tracking-widest transition-all hover:shadow-md inline-flex items-center justify-center"
            >
              <Heart className="mr-2 h-5 w-5" />
              Angebot ansehen
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative w-full h-16 sm:h-24"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;