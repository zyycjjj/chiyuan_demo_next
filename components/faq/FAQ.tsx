'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQS } from '../../domain/content/data'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <Section id="faq" className="bg-slate-950">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about Sora2
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="bg-zinc-900 rounded-xl shadow-sm overflow-hidden border border-blue-500/10">
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  >
                    <span className="font-medium text-white pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    </motion.div>
                  </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-4 text-gray-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
