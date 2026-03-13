'use client'

import { useState, useEffect } from 'react'

interface MousePosition {
  x: number
  y: number
}

export const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return

    
    if ('ontouchstart' in window) return

    let rafId: number

    const handleMouseMove = (e: MouseEvent): void => {
      cancelAnimationFrame(rafId)

      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return mousePosition
}