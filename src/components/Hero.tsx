'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Download, MapPin, Sparkles } from 'lucide-react'
import Image from 'next/image'
import FloatingParticles from './FloatingParticles'
import { useMousePosition } from '../hooks/useMousePosition'
import { scrollToSection } from '../lib/utils'
import { useState, useEffect } from 'react'

interface HeroProps {
  darkMode: boolean
}

const roles = [
  'Full-Stack Software Engineer',
  'React & Next.js Developer',
  'Backend API Specialist',
  'UI/UX Focused Frontend Engineer',
  'Open to Global Opportunities',
]

export default function Hero({ darkMode }: HeroProps) {
  const mousePosition = useMousePosition()
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }, 0)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section
      id="home"
      className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center"
    >
      <FloatingParticles darkMode={darkMode} />

     
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
       
        <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">

        
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              animate={{ x: mousePosition.x * 0.01, y: mousePosition.y * 0.01 }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              className="relative"
            >
            
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-30 scale-110" />

             
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/40"
              />

             
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image
                  src="/images/gloria.png"
                  alt="Gloria Aguedu"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

            
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-1 left-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg whitespace-nowrap"
              >
                ⚡ Full-Stack Dev
              </motion.div>

             
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-1 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg"
              >
                🇳🇬 Lagos
              </motion.div>
            </motion.div>
          </motion.div>

         
          <div className="order-2 lg:order-1 text-center lg:text-left w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-4 justify-center lg:justify-start flex-wrap"
            >
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                <Sparkles className="h-3 w-3" /> Available for work
              </span>
              <span className={`flex items-center gap-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <MapPin className="h-3.5 w-3.5" /> Lagos, Nigeria
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-3 leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Gloria Aguedu</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl font-semibold mb-5 h-8"
            >
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                {displayed}
                <span className="animate-pulse text-blue-500">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className={`text-sm sm:text-base lg:text-lg mb-7 leading-relaxed max-w-xl mx-auto lg:mx-0 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              From writing my first{' '}
              <code className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 text-sm">&lt;h1&gt;</code>{' '}
              tag in Lagos to shipping full-stack production apps — I build digital experiences that work beautifully, perform flawlessly, and make businesses grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection('projects')}
                className="px-7 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                View My Work
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ChevronRight className="h-4 w-4" />
                </motion.div>
              </motion.button>

              <motion.a
                href="/gloria-aguedu-cv.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-7 py-3 rounded-xl font-semibold border-2 flex items-center gap-2 transition-all duration-300 justify-center ${
                  darkMode
                    ? 'border-white/10 text-white hover:bg-white/5'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Download className="h-4 w-4" /> Download CV
              </motion.a>
            </motion.div>

          
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-6 sm:gap-10 mt-8 justify-center lg:justify-start"
            >
              {[
                { value: '2+', label: 'Years Experience' },
                { value: '6+', label: 'Projects Built' },
                { value: '2', label: 'Live Products' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-extrabold gradient-text">{stat.value}</div>
                  <div className={`text-xs mt-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}