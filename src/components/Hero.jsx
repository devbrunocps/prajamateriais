import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToFeatures = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='início' className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Construa Seus Sonhos
            <span className="block text-primary-orange">Com Qualidade</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Encontre tudo que você precisa para sua obra em um só lugar. Materiais de qualidade, preços justos e atendimento especializado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button onClick={() => window.location.href = "https://wa.me/551633827634"} className="group bg-primary-orange text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-blue transition-all duration-300 transform hover:scale-105">
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToFeatures}
        >
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
}