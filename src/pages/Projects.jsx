import React from 'react'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    title: 'She Stitch – E-commerce Fashion Store',
    desc: 'A full-stack e-commerce platform for fashion products with product listings, cart functionality, and secure checkout. Designed for a smooth shopping experience with responsive UI.',
    ss: '/mentalhealth.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    repo: 'https://github.com/AmanVilvas/SheStich',
    liveLinks: [
      { label: 'Link 1', url: 'https://shestitch.us.cc', type: 'primary' },
      { label: 'Link 2 (old)', url: 'https://shestitch.store', type: 'legacy' }
    ]
  },
  {
    title: '🤖 American Sign Language Interpreter',
    desc: 'Real-time sign language recognition system that converts hand gestures into text using Mediapipe and TensorFlow, enabling seamless communication for deaf and mute users.',
    ss: '/ISL.png',
    tech: ['Mediapipe', 'TensorFlow', 'React', 'Flask'],
    repo: 'https://github.com/rishiarmaan/ISL-Interpreter'
  },
  {
    title: '💼 Portfolio Website',
    desc: 'A modern, responsive personal portfolio website built with React and Framer Motion to showcase projects, skills, and achievements with smooth animations.',
    ss: '/portfolio.png',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    repo: 'https://github.com/rishiarmaan/Armaan-Rishi-Portfolio',
    liveLinks: [
      { label: 'Live Site', url: 'https://rishipotfolio.us.cc', type: 'primary' }
    ]
  },
  {
    title: 'Emergency Response Chatbot',
    desc: 'AI-powered chatbot that assists users in emergency situations by providing quick responses and guidance using NLP and conversational AI techniques.',
    ss: '/Docuchat.png',
    tech: ['Gemini API', 'LangChain', 'Python', 'Streamlit'],
    repo: 'https://github.com/rishiarmaan/Emergency_response_system'
  },
  {
    title: '📊 ProfileX – Data Profiler',
    desc: 'A smart data profiling tool that analyzes CSV datasets, handles missing values, and provides interactive visualizations for better data understanding.',
    ss: '/ProfileX.png',
    tech: ['Streamlit', 'Pandas', 'Plotly'],
    repo: 'https://github.com/rishiarmaan/ProfileX'
  },
  {
    title: '🧬 Breast Cancer Prediction',
    desc: 'Machine learning model to predict breast cancer using classification algorithms like Random Forest and XGBoost with optimized performance on imbalanced datasets.',
    ss: '/breastpred.png',
    tech: ['scikit-learn', 'XGBoost', 'Pandas'],
    repo: 'https://github.com/rishiarmaan/Breast-cancer-pridiction'
  }
]

// ── Beautiful SVG Icons ──────────────────────────────────────────────────────
const IconGlobe = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const IconArrow = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

const IconGitHub = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const IconHistory = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 .49-4.95" />
  </svg>
)

// ── Link Button Component ─────────────────────────────────────────────────────
function LiveLinkBtn({ link, idx }) {
  const isPrimary = link.type === 'primary'
  const isLegacy = link.type === 'legacy'

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ y: -2, scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        textDecoration: 'none',
        padding: '5px 11px 5px 8px',
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.02em',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s ease',
        ...(isPrimary ? {
          background: 'linear-gradient(135deg, rgba(6,182,212,0.18), rgba(34,211,238,0.08))',
          border: '1px solid rgba(6,182,212,0.45)',
          color: '#22d3ee',
          boxShadow: '0 0 10px rgba(6,182,212,0.15), inset 0 1px 0 rgba(255,255,255,0.06)'
        } : isLegacy ? {
          background: 'linear-gradient(135deg, rgba(251,146,60,0.12), rgba(245,158,11,0.06))',
          border: '1px solid rgba(251,146,60,0.35)',
          color: '#fb923c',
          boxShadow: '0 0 10px rgba(251,146,60,0.1), inset 0 1px 0 rgba(255,255,255,0.04)'
        } : {})
      }}
    >
      {/* Shimmer sweep */}
      <motion.span
        style={{
          position: 'absolute',
          inset: 0,
          background: isPrimary
            ? 'linear-gradient(90deg, transparent, rgba(34,211,238,0.08), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(251,146,60,0.08), transparent)',
          transform: 'translateX(-100%)',
        }}
        whileHover={{ transform: 'translateX(100%)', transition: { duration: 0.5 } }}
      />

      {/* Left icon */}
      <span style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        borderRadius: 5,
        background: isPrimary
          ? 'rgba(6,182,212,0.2)'
          : 'rgba(251,146,60,0.18)',
        flexShrink: 0
      }}>
        {isLegacy ? <IconHistory /> : <IconGlobe />}
      </span>

      {/* Label */}
      <span>{link.label}</span>

      {/* Arrow */}
      <span style={{ opacity: 0.65, marginLeft: 1 }}>
        <IconArrow />
      </span>
    </motion.a>
  )
}

// ── GitHub Button ─────────────────────────────────────────────────────────────
function GitHubBtn({ repo }) {
  return (
    <motion.a
      href={repo}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -2, scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        textDecoration: 'none',
        padding: '5px 11px 5px 8px',
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.02em',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: '#9ca3af',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
    >
      <span style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        borderRadius: 5,
        background: 'rgba(255,255,255,0.08)',
        flexShrink: 0
      }}>
        <IconGitHub />
      </span>
      <span>GitHub</span>
      <span style={{ opacity: 0.5 }}><IconArrow /></span>
    </motion.a>
  )
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works from my GitHub repositories.
        </p>

        <div
          style={{
            display: 'grid',
            gap: 24,
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: 0
              }}
            >
              {/* Screenshot */}
              <a href={p.repo} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={{ scale: 1.03 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                  <img
                    src={p.ss}
                    alt={p.title}
                    style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 12, display: 'block' }}
                  />
                </motion.div>

                <div style={{ marginTop: 12 }}>
                  <h3 style={{ fontSize: 17, color: '#0ea5e9', marginBottom: 6, fontWeight: 600 }}>{p.title}</h3>
                  <p style={{ fontSize: 13.5, color: '#bbb', marginBottom: 8, lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </a>

              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6 }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: 'rgba(0,255,255,0.05)',
                      border: '1px solid rgba(0,255,255,0.1)',
                      padding: '3px 8px',
                      borderRadius: 6,
                      fontSize: 11.5,
                      color: '#aaf'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* ── Action Buttons Row ── */}
              {(p.liveLinks?.length > 0 || p.repo) && (
                <>
                  <div style={{
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(0,255,255,0.1), transparent)',
                    margin: '12px 0'
                  }} />
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, alignItems: 'center' }}>
                    {/* GitHub button always shown */}
                    <GitHubBtn repo={p.repo} />

                    {/* Live links */}
                    {p.liveLinks?.map((link, i) => (
                      <LiveLinkBtn key={i} link={link} idx={i} />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}