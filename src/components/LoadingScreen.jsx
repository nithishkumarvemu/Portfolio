import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── LoadingScreen ────────────────────────────────────────────────────────────
// Displays a cinematic loader for 2.2s then fades out.
// Controlled by parent via `onComplete` callback.

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('loading') // 'loading' | 'done'

  useEffect(() => {
    // Animate progress 0 → 100 over ~1.8s
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setPhase('done')
          setTimeout(onComplete, 500)
          return 100
        }
        return p + Math.random() * 8 + 2
      })
    }, 60)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase === 'loading' && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg"
        >
          {/* Background radial */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12)_0%,transparent_70%)]" />

          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-10"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-[0_0_60px_rgba(124,58,237,0.6)]">
              <span className="font-display font-black text-3xl text-white">N</span>
            </div>
            {/* Spinning ring */}
            <div className="absolute inset-[-6px] border-[2px] border-transparent border-t-violet-500 border-r-cyan-500 rounded-2xl animate-spin" />
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-display font-bold text-lg tracking-[0.3em] grad-text uppercase mb-8"
          >
            Nithish Kumar Vemu
          </motion.p>

          {/* Progress bar */}
          <div className="w-64 h-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="font-mono text-xs text-white/20 mt-3 tracking-widest">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
