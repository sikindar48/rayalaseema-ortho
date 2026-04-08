import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Award, Users, Clock } from 'lucide-react'

const stats = [
  { icon: <Users size={22} />, value: '750+', label: 'Happy Patients' },
  { icon: <Award size={22} />, value: '4.87', label: 'Star Rating' },
  { icon: <Clock size={22} />, value: '24/7', label: 'Emergency Care' },
  { icon: <CheckCircle size={22} />, value: '100%', label: 'Dedication' },
]

const highlights = [
  'Experienced orthopedic surgeon',
  'Clean & modern infrastructure',
  'Advanced surgical techniques',
  'Friendly and supportive staff',
  'Excellent patient outcomes',
  'Affordable treatment options',
]

export default function About() {
  return (
    <section className="section" style={{ background: '#f4f8ff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          {/* Image side */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 20, overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(26,79,138,0.2)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80"
                alt="Hospital interior"
                style={{ width: '100%', height: 460, objectFit: 'cover' }}
              />
            </div>
            {/* Floating stats */}
            <div style={{
              position: 'absolute', bottom: -24, right: -24,
              background: '#fff', borderRadius: 16, padding: '20px 24px',
              boxShadow: '0 8px 32px rgba(26,79,138,0.15)',
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
              minWidth: 240,
            }}>
              {stats.map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ color: '#1a4f8a', marginBottom: 4, display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '1.3rem', color: '#1a1a2e' }}>{s.value}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="section-tag">About Us</span>
            <h2 className="section-title">Specialized Orthopedic Care You Can Trust</h2>
            <p style={{ color: '#6b7280', marginBottom: 20, lineHeight: 1.8 }}>
              Dr. Vishnu's Raayalaseema Ortho Hospital is a specialized orthopedic center in Nandyal dedicated to advanced bone and joint care. Led by Dr. Vishnu Vardhan Reddy (MBBS, MS Ortho, FIJR), the hospital focuses on modern surgical treatments, patient-friendly care, and faster recovery.
            </p>
            <p style={{ color: '#6b7280', marginBottom: 28, lineHeight: 1.8 }}>
              We combine cutting-edge surgical techniques with compassionate care to ensure every patient receives the best possible outcome — from consultation to complete recovery.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 32 }}>
              {highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle size={17} color="#10b981" />
                  <span style={{ fontSize: '0.9rem', color: '#2d3748' }}>{h}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
