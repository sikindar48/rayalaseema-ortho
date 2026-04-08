import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, GraduationCap, Award, Calendar, Stethoscope, Star } from 'lucide-react'
import { doctors } from '../components/Doctors'

const accentGradients = [
  'linear-gradient(135deg, #1a4f8a, #2d7dd2)',
  'linear-gradient(135deg, #0f9d58, #1db954)',
  'linear-gradient(135deg, #e8a020, #f5c842)',
  'linear-gradient(135deg, #805ad5, #b794f4)',
]

export default function DoctorsPage() {
  const [expanded, setExpanded] = useState(null)

  return (
    <main style={{ paddingTop: 72 }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #0f3460 0%, #1a4f8a 100%)',
        padding: '80px 0 60px', color: '#fff', textAlign: 'center',
      }}>
        <div className="container">
          <span style={{
            display: 'inline-block', background: 'rgba(255,255,255,0.12)',
            color: '#f5c842', fontSize: '0.78rem', fontWeight: 600,
            letterSpacing: 2, textTransform: 'uppercase',
            padding: '6px 16px', borderRadius: 20, marginBottom: 16,
          }}>Our Team</span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>
            Meet Our Expert Doctors
          </h1>
          <p style={{ opacity: 0.8, maxWidth: 560, margin: '0 auto', fontSize: '1.05rem' }}>
            A dedicated team of specialists committed to your orthopedic health and complete recovery.
          </p>
        </div>
      </div>

      {/* Doctors grid */}
      <section className="section" style={{ background: '#f4f8ff' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 28,
          }}>
            {doctors.map((doc, i) => (
              <div key={i} style={{
                background: '#fff',
                borderRadius: 24,
                overflow: 'hidden',
                boxShadow: '0 4px 28px rgba(26,79,138,0.10)',
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(26,79,138,0.18)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 28px rgba(26,79,138,0.10)'
                }}
              >
                {/* Photo with gradient overlay */}
                <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
                  <img
                    src={doc.image}
                    alt={doc.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    onError={e => { e.target.src = 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80' }}
                  />
                  {/* Bottom gradient */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(10,20,50,0.75) 0%, transparent 55%)',
                  }} />

                  {/* Experience badge — top right */}
                  <div style={{
                    position: 'absolute', top: 14, right: 14,
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: '#fff', fontSize: '0.72rem', fontWeight: 700,
                    padding: '5px 12px', borderRadius: 20,
                    display: 'flex', alignItems: 'center', gap: 5,
                  }}>
                    <Award size={12} /> {doc.experience}
                  </div>

                  {/* Name overlay — bottom */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '16px 20px',
                  }}>
                    <h3 style={{
                      fontFamily: 'Inter, sans-serif', fontWeight: 700,
                      fontSize: '1.05rem', color: '#fff', marginBottom: 2,
                    }}>{doc.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>{doc.role}</p>
                  </div>
                </div>

                {/* Accent bar */}
                <div style={{ height: 4, background: accentGradients[i] }} />

                {/* Card body */}
                <div style={{ padding: '20px 22px 22px' }}>
                  {/* Qualifications */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    fontSize: '0.8rem', color: doc.accent, fontWeight: 600, marginBottom: 12,
                  }}>
                    <GraduationCap size={14} color={doc.accent} /> {doc.qualifications}
                  </div>

                  {/* Specialization pill */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 7,
                    background: `${doc.accent}12`, borderRadius: 8,
                    padding: '7px 13px', marginBottom: 14,
                    fontSize: '0.78rem', color: doc.accent, fontWeight: 600,
                  }}>
                    <Stethoscope size={13} /> {doc.specialization}
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                    {doc.tags.map((t, j) => (
                      <span key={j} style={{
                        background: '#f0f4ff', color: '#1a4f8a',
                        fontSize: '0.7rem', fontWeight: 600,
                        padding: '4px 11px', borderRadius: 20,
                      }}>{t}</span>
                    ))}
                  </div>

                  {/* Expanded bio */}
                  {expanded === i && (
                    <p style={{
                      fontSize: '0.87rem', color: '#4a5568', lineHeight: 1.8,
                      marginBottom: 16, borderTop: '1px solid #e2e8f0', paddingTop: 14,
                    }}>
                      {doc.bio}
                    </p>
                  )}

                  {/* Footer row: social + toggle */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                    {/* Social icons */}
                    <div style={{ display: 'flex', gap: 8 }}>
                      {doc.instagram && (
                        <a href={doc.instagram} target="_blank" rel="noopener noreferrer"
                          title="Instagram"
                          style={{
                            width: 34, height: 34, borderRadius: 9,
                            background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#fff',
                          }}>
                          <Instagram size={15} />
                        </a>
                      )}
                      <a href="https://www.facebook.com/DrVishnuROH/" target="_blank" rel="noopener noreferrer"
                        title="Facebook"
                        style={{
                          width: 34, height: 34, borderRadius: 9,
                          background: '#1877f2',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#fff',
                        }}>
                        <Facebook size={15} />
                      </a>
                    </div>

                    {/* Toggle bio */}
                    <button
                      onClick={() => setExpanded(expanded === i ? null : i)}
                      style={{
                        background: 'none', border: `1.5px solid ${doc.accent}`,
                        borderRadius: 8, cursor: 'pointer',
                        color: doc.accent, fontSize: '0.78rem', fontWeight: 600,
                        padding: '6px 14px',
                      }}
                    >
                      {expanded === i ? 'Hide' : 'View Profile'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #1a4f8a, #0f3460)',
        padding: '64px 0', textAlign: 'center', color: '#fff',
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 12 }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#f5c842" color="#f5c842" />)}
            <span style={{ fontSize: '0.9rem', opacity: 0.85, marginLeft: 6 }}>4.8 · 750+ Happy Patients</span>
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: 16 }}>
            Ready to Consult Our Experts?
          </h2>
          <p style={{ opacity: 0.8, marginBottom: 28 }}>Book your appointment today and get the best orthopedic care in Nandyal.</p>
          <Link to="/appointment" className="btn btn-accent" style={{ fontSize: '1rem', padding: '14px 32px' }}>
            <Calendar size={17} /> Book Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}
