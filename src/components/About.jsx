import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3"
                alt="Nossa loja"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-orange rounded-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue">
              Nossa História
            </h2>
            <p className="text-lg text-gray-600">
              Desde 1995, a Praja Materiais tem sido referência em materiais de construção, ajudando pessoas a realizarem o sonho da casa própria. Nossa equipe de especialistas combina experiência com dedicação para entregar os melhores produtos e serviços.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-primary-orange">25+</h4>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-primary-orange">10k+</h4>
                <p className="text-gray-600">Clientes Atendidos</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-primary-orange">98%</h4>
                <p className="text-gray-600">Satisfação</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-primary-orange">24h</h4>
                <p className="text-gray-600">Suporte Online</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}