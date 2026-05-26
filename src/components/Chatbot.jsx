import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X, Send, Sparkles } from 'lucide-react'
import { generateResponse, parseMarkdown } from '../utils/chatbotEngine'
import { suggestedPrompts } from '../data/chatbotData'

// ─── Chatbot ──────────────────────────────────────────────────────────────────
// Intent-based AI chatbot with typing animation, smart routing, and markdown.

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'bot',
  text: "Hey 👋 I'm Nithish's AI assistant — trained on his entire portfolio. Ask me about his tech skills, projects, experience, or how to get in touch. What would you like to know?",
  timestamp: Date.now(),
}

/** Render a message text with **bold** markdown support */
function MessageText({ text }) {
  const segments = parseMarkdown(text)
  return (
    <span>
      {segments.map((seg, i) =>
        seg.bold
          ? <strong key={i} className="text-white font-semibold">{seg.text}</strong>
          : <span key={i}>{seg.text}</span>
      )}
    </span>
  )
}

/** Typing indicator dots */
function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-violet-600/40 to-cyan-600/40 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
        <Bot size={13} className="text-violet-300" />
      </div>
      <div className="glass rounded-2xl rounded-bl-sm px-4 py-3 border border-white/6">
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-violet-400"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/** Single chat message bubble */
function ChatMessage({ msg }) {
  const isBot = msg.role === 'bot'
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-end gap-2 ${isBot ? '' : 'flex-row-reverse'}`}
    >
      {isBot && (
        <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-violet-600/40 to-cyan-600/40 border border-violet-500/20 flex items-center justify-center flex-shrink-0 mb-0.5">
          <Bot size={13} className="text-violet-300" />
        </div>
      )}
      <div
        className={`max-w-[82%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isBot
            ? 'glass border border-white/6 text-white/65 rounded-bl-sm'
            : 'bg-gradient-to-br from-violet-600 to-cyan-600 text-white rounded-br-sm shadow-[0_4px_15px_rgba(124,58,237,0.3)]'
        }`}
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {isBot ? <MessageText text={msg.text} /> : msg.text}
      </div>
    </motion.div>
  )
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [intentHistory, setIntentHistory] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Focus input when opened
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300)
  }, [isOpen])

  const sendMessage = (text) => {
    const trimmed = text.trim()
    if (!trimmed || isTyping) return

    setShowSuggestions(false)
    setInput('')

    // Add user message
    setMessages(prev => [...prev, {
      id: Date.now(),
      role: 'user',
      text: trimmed,
      timestamp: Date.now(),
    }])

    // Show typing indicator with realistic delay (800ms–1400ms)
    setIsTyping(true)
    const delay = 800 + Math.random() * 600

    setTimeout(() => {
      const { text: responseText, intentId } = generateResponse(trimmed, intentHistory)

      setIsTyping(false)
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: 'bot',
        text: responseText,
        timestamp: Date.now(),
      }])

      if (intentId) {
        setIntentHistory(prev => [...prev.slice(-4), intentId]) // keep last 5
      }

      // Show new suggestions after bot replies
      setTimeout(() => setShowSuggestions(true), 200)
    }, delay)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        onClick={() => setIsOpen(o => !o)}
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 shadow-[0_0_30px_rgba(124,58,237,0.5)] flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
        animate={{ boxShadow: isOpen ? '0 0 40px rgba(124,58,237,0.7)' : '0 0 25px rgba(124,58,237,0.4)' }}
        aria-label="Open AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen
            ? <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X size={20} /></motion.div>
            : <motion.div key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><Bot size={20} /></motion.div>
          }
        </AnimatePresence>

        {/* Pulse ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-violet-500"
            animate={{ scale: [1, 1.3, 1.3], opacity: [0.6, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="fixed bottom-24 right-6 z-[100] w-[360px] max-w-[calc(100vw-1.5rem)] h-[540px] flex flex-col rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(124,58,237,0.15)]"
            style={{ background: 'rgba(8,15,32,0.95)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.1))' }}
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                  <Sparkles size={16} className="text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-bg2 shadow-[0_0_6px_#4ade80]" />
              </div>
              <div>
                <div className="font-display font-bold text-sm text-white">Nithish AI Assistant</div>
                <div className="text-xs text-cyan-400 font-mono">● Online · Ask me anything</div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-auto p-1.5 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin scrollbar-thumb-violet-800 scrollbar-track-transparent">
              {messages.map(msg => (
                <ChatMessage key={msg.id} msg={msg} />
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested prompts */}
            <AnimatePresence>
              {showSuggestions && !isTyping && messages.length < 4 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-3 pb-2 flex-shrink-0"
                >
                  <div className="flex flex-wrap gap-1.5">
                    {suggestedPrompts.map(prompt => (
                      <button
                        key={prompt}
                        onClick={() => sendMessage(prompt)}
                        className="px-2.5 py-1 rounded-lg text-[11px] text-white/40 border border-white/6 hover:border-violet-500/40 hover:text-white/70 hover:bg-violet-500/10 transition-all duration-200 font-mono"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <div className="flex gap-2 p-3 border-t border-white/5 flex-shrink-0">
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about skills, projects..."
                className="flex-1 bg-white/4 border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-violet-500/40 focus:bg-white/6 transition-all font-body"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-shadow flex-shrink-0"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
