'use client'

import { motion } from 'framer-motion'
import { VolumeX } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'

export function Showcase() {
  const [mutedStates, setMutedStates] = useState([true, true, true, true, true, true])
  const [visibleIndices, setVisibleIndices] = useState<number[]>([])
  const containerRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggleMute = (index: number) => {
    setMutedStates(prev => {
      const newStates = [...prev]
      newStates[index] = !newStates[index]
      return newStates
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'))
          if (entry.isIntersecting && !visibleIndices.includes(index)) {
            setVisibleIndices(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.1 }
    )

    containerRefs.current.forEach((container) => {
      if (container) observer.observe(container)
    })

    return () => observer.disconnect()
  }, [visibleIndices])

  const showcaseItems = [
    {
      id: 1,
      video: '/demo1.mp4',
      title: 'Brands & eCommerce',
      description: 'Product highlights, launch teasers, and how-it-works clips'
    },
    {
      id: 2,
      video: '/demo2.mp4',
      title: 'Social & Creators',
      description: 'Daily Shorts/Reels with a cohesive story world'
    },
    {
      id: 3,
      video: '/demo3.mp4',
      title: 'Education & Training',
      description: 'Course explainers, lab simulations, and process walk-throughs'
    },
    {
      id: 4,
      video: '/demo1.mp4',
      title: 'Product & Engineering',
      description: 'App flows, hardware demos, and concept simulations'
    },
    {
      id: 5,
      video: '/demo2.mp4',
      title: 'Pre-viz for film',
      description: 'Shot exploration, lighting tests, and camera planning'
    },
    {
      id: 6,
      video: '/demo3.mp4',
      title: 'Cinematic Product Reel',
      description: 'Professional product showcase with synchronized audio'
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
              <div
                ref={(el) => { containerRefs.current[index] = el }}
                data-index={index}
                className="relative rounded-2xl overflow-hidden border border-blue-500/20 bg-zinc-900"
              >
                <div className="aspect-video bg-zinc-800 relative">
                  {visibleIndices.includes(index) ? (
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
                  ) : (
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                      <div className="text-gray-600">Loading...</div>
                    </div>
                  )}
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
