import { useEffect, useRef } from 'react'

// ─── CustomCursor ─────────────────────────────────────────────────────────────
// Glowing custom cursor with trailing ring. Hidden on touch devices.

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const rafId = useRef(null)

  useEffect(() => {
    // Don't run on touch-only devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 6 + 'px'
        dotRef.current.style.top  = e.clientY - 6 + 'px'
      }
    }

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x - 18 + 'px'
        ringRef.current.style.top  = ring.current.y - 18 + 'px'
      }
      rafId.current = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      dotRef.current?.style.setProperty('opacity', '1')
      ringRef.current?.style.setProperty('opacity', '1')
    }
    const onLeave = () => {
      dotRef.current?.style.setProperty('opacity', '0')
      ringRef.current?.style.setProperty('opacity', '0')
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseleave', onLeave)
    rafId.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed z-[99999] w-3 h-3 rounded-full pointer-events-none opacity-0 transition-opacity"
        style={{
          background: 'radial-gradient(circle, #a78bfa, #7c3aed)',
          boxShadow: '0 0 12px #7c3aed, 0 0 24px #7c3aed80',
          mixBlendMode: 'screen',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed z-[99998] w-9 h-9 rounded-full pointer-events-none opacity-0 transition-opacity"
        style={{
          border: '1px solid rgba(167,139,250,0.5)',
          mixBlendMode: 'screen',
        }}
      />
    </>
  )
}
