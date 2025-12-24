'use client'

import { motion } from 'framer-motion'
import { WHY_SORA2_ADVANTAGES, KEY_FEATURES } from '../../domain/content/data'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { Card } from '../ui/Card'
import * as Icons from 'lucide-react'

export function Features() {
  return (
    <>
      <Section id="why-sora2" className="bg-slate-950">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Sora2?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The next generation of AI video generation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_SORA2_ADVANTAGES.map((advantage, index) => (
              <motion.div
                key={advantage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icons.CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {advantage.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="features" className="bg-slate-950">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to create professional videos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KEY_FEATURES.map((feature, index) => {
              const Icon = Icons[feature.icon as keyof typeof Icons] as Icons.LucideIcon
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </Section>
    </>
  )
}
