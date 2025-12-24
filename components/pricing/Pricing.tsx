'use client'

import { motion } from 'framer-motion'
import { PRICING_PLANS } from '../../domain/pricing/data'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Check } from 'lucide-react'
import { useState } from 'react'

export function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)

  const handleToggle = (value: 'monthly' | 'yearly') => {
    setBilling(value)
  }

  return (
    <Section id="pricing" className="bg-slate-950">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`text-sm font-medium cursor-pointer transition-colors ${
                billing === 'monthly' ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => handleToggle('monthly')}
            >
              Monthly
            </span>
            <button
              onClick={() => handleToggle(billing === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                billing === 'yearly' ? 'bg-blue-600' : 'bg-zinc-700'
              }`}
            >
              <motion.span
                className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full"
                animate={{ x: billing === 'yearly' ? 28 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span
              className={`text-sm font-medium cursor-pointer transition-colors ${
                billing === 'yearly' ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => handleToggle('yearly')}
            >
              Yearly
              <span className="ml-1 text-xs text-blue-400">(-17%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <Card
                className={`h-full relative cursor-pointer transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? 'bg-blue-500/10 border-2 border-blue-500 scale-105'
                    : plan.popular
                    ? 'border-2 border-blue-500/50'
                    : ''
                }`}
              >
                {plan.popular && selectedPlan !== plan.id && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="success">Most Popular</Badge>
                  </div>
                )}
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      ${billing === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-6">
                    {plan.credits} credits included
                  </p>
                  <Button
                    variant={selectedPlan === plan.id || plan.popular ? 'primary' : 'outline'}
                    className="w-full mb-6"
                    size="sm"
                  >
                    Get Started
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-400">
                        <Check className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
