import React, { useState, useEffect, useRef } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Mothukuri Bala Kadaiah',
    procedure: 'Total Knee Replacement',
    rating: 5,
    text: 'Excellent care and successful surgery. The doctor explained everything clearly before the procedure. Very happy with the treatment and recovery.',
    avatar: 'MBK',
    color: '#1a4f8a',
  },
  {
    name: 'Basha',
    procedure: 'ACL Reconstruction',
    rating: 5,
    text: 'Clean hospital, organized staff, great surgical outcome. I was back on my feet much faster than expected. Highly recommend Dr. Vishnu.',
    avatar: 'BA',
    color: '#0f9d58',
  },
  {
    name: 'Murari Bhargav',
    procedure: 'Hip Surgery',
    rating: 5,
    text: 'From consultation to recovery, everything was smooth. The team was professional and caring throughout my entire treatment journey.',
    avatar: 'MB',
    color: '#e8a020',
  },
  {
    name: 'Ravi K',
    procedure: 'Accident Surgery',
    rating: 5,
    text: 'Emergency treatment handled professionally. They were quick, efficient, and reassuring during a very stressful time. Grateful for the care.',
    avatar: 'RK',
    color: '#e53e3e',
  },
  {
    name: 'Vijay Kumar',
    procedure: 'Hand Surgery',
    rating: 5,
    text: 'Surgery explained clearly and done successfully. The post-operative care was excellent. The staff was always available to answer my questions.',
    avatar: 'VK',
    color: '#805ad5',
  },
  {
    name: 'Suresh Babu',
    procedure: 'Shoulder Arthroscopy',
    rating: 5,
    text: 'Best orthopedic hospital in Nandyal. Dr. Vishnu is very skilled and the hospital is very clean and well-equipped. Fully recovered now.',
    avatar: 'SB',
    color: '#2b6cb0',
  },
]

function StarRow({ count = 5 }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={15} fill="#f5c842" color="#f5c842" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [isAuto, setIsAuto] = useState(true)
  const timerRef = useRef(null)

  const startAuto = () => {
    timerRef.current = setInterval(() => setActive(a => (a + 1) % testimonials.length), 4000)
  }

  useEffect(() => {
    if (isAuto) startAuto()
    return () => clearInterval(timerRef.current)
  }, [isAuto])

  const go = (dir) => {
    setIsAuto(false)
    clearInterval(timerRef.current)
    setActive(a => (a + dir + testimonials.length) % testimonials.length)
  }

  // Show 3 cards at a time on desktop
  const visible = [
    testimonials[(active) % testimonials.length],
    testimonials[(active + 1) % testimonials.length],
    testimonials[(active + 2) % testimonials.length],
  ]

  return (
    <section className="section" style={{
      background: 'linear-gradient(135deg, #0f3460 0%, #1a4f8a 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: -80, right: -80,
        width: 300, height: 300, borderRadius: '50%',
        background: 'rgba(255,255,255,0.04)',
      }} />
      <div style={{
        position: 'absolute', bottom: -60, left: -60,
        width: 200, height: 200, borderRadius: '50%',
        background: 'rgba(255,255,255,0.04)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.12)',
            color: '#f5c842',
            fontSize: '0.78rem', fontWeight: 600,
            letterSpacing: 2, textTransform: 'uppercase',
            padding: '6px 16px', borderRadius: 20, marginBottom: 14,
          }}>Patient Stories</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#fff', marginBottom: 12 }}>
            What Our Patients Say
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem' }}>
            Real stories from real patients who trusted us with their care.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          marginBottom: 40,
        }}>
          {visible.map((t, i) => (
            <div key={`${active}-${i}`} style={{
              background: 'rgba(255,255,255,0.07)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 20,
              padding: 28,
              transition: 'all 0.4s ease',
              transform: i === 1 ? 'scale(1.03)' : 'scale(1)',
            }}>
              {/* Quote icon */}
              <Quote size={28} color="rgba(245,200,66,0.4)" style={{ marginBottom: 16 }} />

              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 20, fontSize: '0.95rem' }}>
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: '50%',
                  background: t.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 700, fontSize: '0.85rem',
                  flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem', marginBottom: 4 }}>{t.procedure}</div>
                  <StarRow />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          <button onClick={() => go(-1)} style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>

          <div style={{ display: 'flex', gap: 8 }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => { setIsAuto(false); setActive(i) }} style={{
                width: i === active ? 24 : 8, height: 8,
                borderRadius: 4, border: 'none', cursor: 'pointer',
                background: i === active ? '#f5c842' : 'rgba(255,255,255,0.3)',
                transition: 'all 0.3s',
              }} aria-label={`Go to testimonial ${i + 1}`} />
            ))}
          </div>

          <button onClick={() => go(1)} style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
