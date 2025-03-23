import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [company, setCompany] = useState('praja1')

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Tem alguma dúvida? Nossa equipe está pronta para ajudar você a encontrar os melhores materiais para sua obra.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary-orange" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">vendas1.praja@gmail.com</p>
                <p className="text-gray-600">venda1.praja2@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-orange" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Telefone</h3>
                <p className="text-gray-600">(16) 3382-7634 - Prajá Materiais</p>
                <p className="text-gray-600">(16) 2016-2525 - Prajá 2 Materiais</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-orange" />
              </div>
              <div className='flex flex-col'>
                <h3 className="text-lg font-semibold text-gray-900">Endereço</h3>
                <a href='https://maps.app.goo.gl/PXJUvBtUHVEtPHvY7' target='_blank' className="text-primary-orange underline underline-offset-4">PRAJÁ MATERIAIS</a>
                <a href='https://maps.app.goo.gl/u3gZtFYTSta9CfDV7' target='_blank' className="text-primary-orange underline underline-offset-4">PRAJÁ 2 MATERIAIS</a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}