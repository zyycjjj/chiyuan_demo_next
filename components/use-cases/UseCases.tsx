'use client'

import { motion } from 'framer-motion'
import { USE_CASES } from '../../domain/content/data'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { Card } from '../ui/Card'
import * as Icons from 'lucide-react'

export function UseCases() {
  return (
    <Section id="use-cases" className="bg-slate-950">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Use Cases
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Perfect for creators, businesses, and professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((useCase, index) => {
            const Icon = Icons[useCase.icon as keyof typeof Icons] as Icons.LucideIcon
            return (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border border-blue-500/20">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {useCase.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
