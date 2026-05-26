// ─── Chatbot Engine ───────────────────────────────────────────────────────────
// Core logic for intent detection and response selection.
// Import this in Chatbot.jsx — don't use state here, keep it pure functions.

import { intents, fallbacks } from '../data/chatbotData'

/**
 * Normalize text: lowercase, strip punctuation, collapse spaces.
 * @param {string} text
 * @returns {string}
 */
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Score how well a message matches an intent.
 * Uses exact keyword match + substring match with different weights.
 * @param {string} message - normalized user message
 * @param {string[]} triggers - intent trigger keywords
 * @returns {number} score (higher = better match)
 */
function scoreIntent(message, triggers) {
  let score = 0
  const words = message.split(' ')

  for (const trigger of triggers) {
    const normalizedTrigger = normalize(trigger)
    // Exact word match gets higher score
    if (words.includes(normalizedTrigger)) {
      score += 10
    }
    // Substring match (handles phrases like "spring boot")
    else if (message.includes(normalizedTrigger)) {
      score += 8
    }
    // Partial word match for compound terms
    else if (normalizedTrigger.split(' ').some(w => words.includes(w) && w.length > 3)) {
      score += 3
    }
  }
  return score
}

/**
 * Get a random item from an array (for answer variety).
 * @param {any[]} arr
 * @returns {any}
 */
function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

/**
 * Main intent matching function.
 * Returns the best-matching intent or null.
 * @param {string} message - raw user input
 * @returns {{ intent: object, score: number } | null}
 */
export function matchIntent(message) {
  const normalized = normalize(message)
  let bestMatch = null
  let bestScore = 0

  for (const intent of intents) {
    const score = scoreIntent(normalized, intent.triggers)
    if (score > bestScore) {
      bestScore = score
      bestMatch = intent
    }
  }

  // Only return a match if confidence is high enough
  return bestScore >= 3 ? { intent: bestMatch, score: bestScore } : null
}

/**
 * Generate a response for the user message.
 * Returns { text, intentId } — intentId null means fallback.
 * @param {string} message
 * @param {string[]} conversationHistory - previous intentIds for context
 * @returns {{ text: string, intentId: string | null }}
 */
export function generateResponse(message, conversationHistory = []) {
  const match = matchIntent(message)

  if (match) {
    // If the same intent was last answered, try a different answer variant
    const lastIntent = conversationHistory[conversationHistory.length - 1]
    const answers = match.intent.answers

    let selectedAnswer
    if (lastIntent === match.intent.id && answers.length > 1) {
      // Rotate to a different answer
      const filtered = answers.filter((_, i) => i !== 0)
      selectedAnswer = randomFrom(filtered)
    } else {
      selectedAnswer = randomFrom(answers)
    }

    return { text: selectedAnswer, intentId: match.intent.id }
  }

  // No match → contextual fallback
  return { text: randomFrom(fallbacks), intentId: null }
}

/**
 * Format markdown-style bold (**text**) for rendering.
 * Returns array of segments: { text, bold }
 * @param {string} text
 * @returns {{ text: string, bold: boolean }[]}
 */
export function parseMarkdown(text) {
  const segments = []
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  for (const part of parts) {
    if (part.startsWith('**') && part.endsWith('**')) {
      segments.push({ text: part.slice(2, -2), bold: true })
    } else {
      segments.push({ text: part, bold: false })
    }
  }
  return segments
}
