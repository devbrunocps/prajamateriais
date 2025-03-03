import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Hammer, Truck, Shield, Wrench, Calculator, Headset as HeadSet } from 'lucide-react';

const features = [
  {
    icon: Hammer,
    title: 'Produtos de Qualidade',
    description: 'Oferecemos as melhores marcas do mercado',
  },
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description: 'Entregamos em toda a região',
  },
  {
    icon: Shield,
    title: 'Garantia Total',
    description: 'Produtos com garantia de fábrica',
  },
  {
    icon: Wrench,
    title: 'Assistência Técnica',
    description: 'Suporte especializado para suas obras',
  },
  {
    icon: Calculator,
    title: 'Orçamento Grátis',
    description: 'Cotações sem compromisso',
  },
  {
    icon: HeadSet,
    title: 'Atendimento Premium',
    description: 'Equipe especializada para ajudar',
  },
];

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
    >
      <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary-orange" />
      </div>
      <h3 className="text-xl font-semibold text-primary-blue mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Por Que Escolher a Praja?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinamos qualidade, preço justo e excelência no atendimento para oferecer a melhor experiência em materiais de construção.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}