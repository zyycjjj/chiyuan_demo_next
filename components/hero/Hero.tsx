'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Upload, VolumeX, Sparkles } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { Container } from '../ui/Container'

export function Hero() {
  const [activeTab, setActiveTab] = useState<'text' | 'image'>('text')
  const [selectedModel, setSelectedModel] = useState<'sora2' | 'sora2-pro'>('sora2')
  const [aspectRatio, setAspectRatio] = useState('16:9')
  const [duration, setDuration] = useState('10s')
  const [isMuted, setIsMuted] = useState(true)
  const [videoVisible, setVideoVisible] = useState(false)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative pt-20 md:pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-black" />
      <div className="absolute inset-0 bg-[url('/og-img.png')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,rgba(255,255,255,1),rgba(255,255,255,0.6))] opacity-20" />

      <Container className="relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Sora2: Real physics,{' '}
            <span className="text-white">
              Synced audio,
            </span>{' '}
            Consistent characters.
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Generate cinematic, physics-aware video and synchronized dialogue/effects in one pass.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>100 free credits</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="bg-zinc-900/90 backdrop-blur-md rounded-3xl p-5 md:p-6 shadow-2xl border border-white/10 flex-1 flex flex-col space-y-6">
              <div className="flex justify-center">
                <div className="inline-flex bg-zinc-800 rounded-2xl p-1">
                  <button
                    onClick={() => setActiveTab('text')}
                    className={`py-2.5 px-5 rounded-xl text-sm font-medium transition-all duration-300 min-w-[140px] ${
                      activeTab === 'text'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                        : 'text-gray-400 hover:text-blue-400'
                    }`}
                  >
                    Text to video
                  </button>
                  <button
                    onClick={() => setActiveTab('image')}
                    className={`py-2.5 px-5 rounded-xl text-sm font-medium transition-all duration-300 min-w-[140px] ${
                      activeTab === 'image'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                        : 'text-gray-400 hover:text-blue-400'
                    }`}
                  >
                    Image to video
                  </button>
                </div>
              </div>

              {activeTab === 'text' ? (
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Prompt</label>
                  <textarea
                    placeholder="Describe the video you want to make…"
                    className="w-full px-4 py-3 border border-blue-500/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all duration-200 resize-none bg-zinc-800 text-white h-40 scrollbar-thin"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Upload Image</label>
                  <div className="w-full px-4 py-3 border border-blue-500/20 rounded-2xl bg-zinc-800 flex items-center justify-center h-40 border-dashed cursor-pointer hover:border-blue-500/50 transition-all">
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <p className="text-gray-500 text-sm">Click to upload an image</p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-white mb-2">Model</label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedModel('sora2')}
                    className={`px-5 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${
                      selectedModel === 'sora2'
                        ? 'bg-blue-600 text-white border-transparent shadow-lg shadow-blue-500/30'
                        : 'border-blue-500/30 text-blue-400 hover:bg-blue-500/10'
                    }`}
                  >
                    sora2
                  </button>
                  <button
                    onClick={() => setSelectedModel('sora2-pro')}
                    className={`px-5 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${
                      selectedModel === 'sora2-pro'
                        ? 'bg-blue-600 text-white border-transparent shadow-lg shadow-blue-500/30'
                        : 'border-blue-500/30 text-blue-400 hover:bg-blue-500/10'
                    }`}
                  >
                    sora2 pro
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Aspect Ratio</label>
                  <div className="relative">
                    <select
                      value={aspectRatio}
                      onChange={(e) => setAspectRatio(e.target.value)}
                      className="w-full px-4 py-3 border border-blue-500/20 rounded-2xl bg-zinc-800 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    >
                      <option value="16:9">16:9</option>
                      <option value="9:16">9:16</option>
                      <option value="1:1">1:1</option>
                      <option value="4:3">4:3</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Video Duration</label>
                  <div className="relative">
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full px-4 py-3 border border-blue-500/20 rounded-2xl bg-zinc-800 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    >
                      <option value="5s">5s</option>
                      <option value="10s">10s</option>
                      <option value="15s">15s</option>
                      <option value="20s">20s</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-2">
                <div className="relative w-full max-w-[480px]">
                  <button className="w-full font-medium py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-blue-500/30">
                    Sign in to create
                  </button>
                  <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg shadow-blue-500/50">
                    20 credits
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-1 flex"
          >
            <div className="relative bg-zinc-900/90 backdrop-blur-md rounded-3xl p-5 shadow-2xl border border-blue-500/20 flex-1 flex flex-col">
              <div className="relative w-full h-full flex">
                <div
                  ref={videoContainerRef}
                  className="relative w-full h-full bg-gradient-to-br from-slate-800 via-blue-950/30 to-slate-800 rounded-2xl overflow-hidden"
                >
                  <div className="relative w-full h-full flex flex-col">
                    <div className="relative flex-1 min-h-0">
                      {videoVisible ? (
                        <video
                          loop
                          autoPlay
                          playsInline
                          muted={isMuted}
                          preload="metadata"
                          className="w-full h-full object-contain"
                        >
                          <source src="https://zydemo-1257236742.cos.ap-beijing.myqcloud.com/demo.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                          <div className="text-gray-600">Loading...</div>
                        </div>
                      )}
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className="text-white text-sm font-bold">Sora2 demo reel</div>
                      </div>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white p-2 rounded-lg transition-all duration-200 hover:scale-105"
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                      >
                        <VolumeX className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="flex-shrink-0 px-6 py-6 bg-gradient-to-t from-gray-900/90 to-gray-900/50 backdrop-blur-sm">
                      <div className="text-center text-white">
                        <p className="text-base text-gray-200 mx-auto">
                          Make cinematic clips with physics-aware motion, stable identities, and synchronized audio—powered by Sora2.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
