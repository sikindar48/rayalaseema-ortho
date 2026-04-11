import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Star, MapPin, Phone, ChevronDown, Award, GraduationCap } from 'lucide-react'

// High-quality hospital/orthopedic images from Unsplash
const slides = [
  {
    url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&q=80',
    label: 'Modern Operation Theatre',
  },
  {
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80',
    label: 'Advanced ICU Care',
  },
  {
    url: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1600&q=80',
    label: 'Expert Orthopedic Surgery',
  },
]

const specialties = ['Joint Replacement', 'Arthroscopy', 'Sports Injuries', 'Trauma Care', 'Eye Care']

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [typedIndex, setTypedIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setTypedIndex(i => (i + 1) % specialties.length), 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 600, overflow: 'hidden' }}>
      {/* Background slides */}
      {slides.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${s.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: i === current ? 1 : 0,
          transition: 'opacity 1.2s ease',
          zIndex: 0,
        }} />
      ))}

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(10,30,70,0.82) 0%, rgba(26,79,138,0.65) 60%, rgba(0,0,0,0.3) 100%)',
        zIndex: 1,
      }} />

      {/* Content */}
      <div className="container" style={{
        position: 'relative', zIndex: 2,
        height: '100%', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 40,
        paddingTop: 72,
      }}>
        <div style={{ maxWidth: 600, color: '#fff', flex: 1 }}>
          {/* Rating badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 30, padding: '7px 16px', marginBottom: 24,
          }}>
            <Star size={15} fill="#f5c842" color="#f5c842" />
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>4.8 Rating</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ fontSize: '0.85rem' }}>750+ Happy Patients</span>
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 5vw, 3.4rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: 12,
          }}>
            Dr. Vishnu's<br />
            <span style={{ color: '#f5c842' }}>Raayalaseema</span> Ortho & Eye Hospital
          </h1>

          <p style={{ fontSize: '1.1rem', opacity: 0.85, marginBottom: 20 }}>
            Advanced Orthopedic Care in Nandyal
          </p>

          {/* Rotating specialty */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32,
            fontSize: '1rem', opacity: 0.9,
          }}>
            <span>Expert Treatment for</span>
            <span style={{
              background: 'rgba(232,160,32,0.25)',
              border: '1px solid rgba(232,160,32,0.5)',
              borderRadius: 6, padding: '3px 12px',
              color: '#f5c842', fontWeight: 600,
              transition: 'all 0.4s',
              minWidth: 200, textAlign: 'center',
            }}>
              {specialties[typedIndex]}
            </span>
          </div>

          {/* Location */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 32, opacity: 0.8, fontSize: '0.9rem' }}>
            <MapPin size={16} />
            <span>Srinivasa Nagar, Nandyal, Andhra Pradesh</span>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/appointment" className="btn btn-accent" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              <Phone size={17} /> Book Appointment
            </Link>
            <Link to="/about" className="btn btn-outline" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              Learn More
            </Link>
          </div>
        </div>

        {/* Doctor card — right side */}
        <div className="hero-doctor-card" style={{
          flexShrink: 0,
          background: 'rgba(255,255,255,0.07)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: 24,
          padding: '32px 28px',
          textAlign: 'center',
          color: '#fff',
          minWidth: 240,
        }}>
          {/* Photo */}
          <div style={{
            width: 130, height: 130,
            borderRadius: '50%',
            overflow: 'hidden',
            margin: '0 auto 18px',
            border: '3px solid rgba(245,200,66,0.7)',
            boxShadow: '0 0 0 6px rgba(245,200,66,0.15)',
          }}>
            <img
              src="https://scontent.fbep2-1.fna.fbcdn.net/v/t39.30808-6/306097622_538755258051196_6059214289491815171_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=JlkWzBu8MzMQ7kNvwFiC9FC&_nc_oc=Adq8FLCRVDf8q_p3n0jr9Cugep3-2u1r7NPLorPUJlHRtIuIucua7RE5nJJXjtRtJ89BHLT2KjSYkVO1pZ3Yi4ME&_nc_zt=23&_nc_ht=scontent.fbep2-1.fna&_nc_gid=XP9sC01pXkayGFhSvEPy1Q&_nc_ss=7a389&oh=00_Af0tybvYDUgO6wsumo_ta69jfjTeWO56xAoLokPN_4yJxw&oe=69DBE9F6"
              alt="Dr. Vishnu Vardhan Reddy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              onError={e => {
                e.target.src = 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&q=80'
              }}
            />
          </div>

          <h3 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.1rem', fontWeight: 700,
            marginBottom: 4, color: '#fff',
          }}>
            Dr. Vishnu Vardhan Reddy
          </h3>

          <p style={{ fontSize: '0.8rem', color: '#f5c842', fontWeight: 600, marginBottom: 12 }}>
            Founder & Chief Orthopedic Surgeon
          </p>

          {/* Qualifications */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(255,255,255,0.1)',
            borderRadius: 20, padding: '5px 14px',
            fontSize: '0.78rem', fontWeight: 600, marginBottom: 16,
          }}>
            <GraduationCap size={13} color="#f5c842" />
            MBBS · MS Ortho · FIJR
          </div>

          {/* Specialties */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 18 }}>
            {['Bone & Joint Specialist', 'Joint Replacement Expert', 'Arthroscopy Surgeon'].map((s, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 7,
                fontSize: '0.78rem', color: 'rgba(255,255,255,0.8)',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#f5c842', flexShrink: 0 }} />
                {s}
              </div>
            ))}
          </div>

          {/* Experience badge */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            background: 'rgba(232,160,32,0.2)',
            border: '1px solid rgba(232,160,32,0.4)',
            borderRadius: 8, padding: '8px 14px',
            fontSize: '0.8rem', fontWeight: 600, color: '#f5c842',
          }}>
            <Award size={14} /> 10+ Years Experience
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div style={{
        position: 'absolute', bottom: 80, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 8, zIndex: 2,
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? 28 : 8, height: 8,
            borderRadius: 4, border: 'none', cursor: 'pointer',
            background: i === current ? '#f5c842' : 'rgba(255,255,255,0.4)',
            transition: 'all 0.3s',
          }} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
        color: 'rgba(255,255,255,0.6)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
        fontSize: '0.75rem', letterSpacing: 1,
      }}>
        <span>SCROLL</span>
        <ChevronDown size={18} style={{ animation: 'bounce 1.5s infinite' }} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @media (max-width: 900px) {
          .hero-doctor-card { display: none !important; }
        }
      `}</style>
    </section>
  )
}
