'use client'

import { motion } from 'framer-motion'
import { VolumeX } from 'lucide-react'
import { useState } from 'react'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'

export function Showcase() {
  const [mutedStates, setMutedStates] = useState([true, true, true])

  const toggleMute = (index: number) => {
    setMutedStates(prev => {
      const newStates = [...prev]
      newStates[index] = !newStates[index]
      return newStates
    })
  }

  const showcaseItems = [
    {
      id: 1,
      video: '/demo1.mp4',
      title: 'Cinematic Product Reel',
      description: 'Professional product showcase with synchronized audio'
    },
    {
      id: 2,
      video: '/demo2.mp4',
      title: 'Brand Story Video',
      description: 'Engaging brand narrative with consistent characters'
    },
    {
      id: 3,
      video: '/demo3.mp4',
      title: 'Social Media Content',
      description: 'Eye-catching clips optimized for social platforms'
    }
  ]

  return (
    <Section id="showcase" className="bg-black">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sora2 Showcase
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Selected examples generated with Sora2
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 bg-zinc-900">
                <div className="aspect-video bg-zinc-800 relative">
                  <video
                    loop
                    autoPlay
                    playsInline
                    muted={mutedStates[index]}
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    onClick={() => toggleMute(index)}
                    className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white p-2 rounded-lg transition-all duration-200 hover:scale-105"
                    aria-label={mutedStates[index] ? 'Unmute video' : 'Mute video'}
                  >
                    <VolumeX className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
