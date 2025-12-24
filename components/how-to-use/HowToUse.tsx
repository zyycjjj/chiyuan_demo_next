'use client'

import { motion } from 'framer-motion'
import { HOW_TO_USE_STEPS } from '../../domain/content/data'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { Card } from '../ui/Card'

export function HowToUse() {
  return (
    <Section id="how-to-use" className="bg-slate-950">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How To Use Sora2
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Create stunning videos in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {HOW_TO_USE_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full relative border border-blue-500/20">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">
                  {step.id}
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
