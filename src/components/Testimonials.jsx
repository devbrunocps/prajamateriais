import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Pode contar com a experiência dos proprietários e suas indicações. Preços justos. Confiáveis.",
    author: "Cliente 1",
    role: "Avaliação Google",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
  },
  {
    id: 2,
    content: "Excelente atendimento, ótimos produtos.",
    author: "Cliente 2",
    role: "Avaliação Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
  },
  {
    id: 3,
    content: "Profissionais qualificados... sem contar que os presos são ótimos.",
    author: "Cliente 3",
    role: "Avaliação Google",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id='avaliações' className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600">
            A satisfação dos nossos clientes é nossa maior recompensa
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                  <Quote className="w-12 h-12 text-primary-orange mb-6" />
                  <blockquote className="text-lg md:text-xl text-gray-900 mb-8">
                    {testimonials[currentIndex].content}
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <cite className="font-semibold text-primary-blue not-italic">
                        {testimonials[currentIndex].author}
                      </cite>
                      <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-primary-blue" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronRight className="w-6 h-6 text-primary-blue" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary-orange w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}