import { useEffect, useState } from 'react'

// ─── ScrollProgress ───────────────────────────────────────────────────────────
// Thin gradient bar at the top showing read progress.

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total   = el.scrollHeight - el.clientHeight
      setPct(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[999] h-[2px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500"
        style={{
          width: `${pct}%`,
          boxShadow: '0 0 8px #7c3aed, 0 0 20px #7c3aed60',
          transition: 'width 0.08s linear',
        }}
      />
    </div>
  )
}
