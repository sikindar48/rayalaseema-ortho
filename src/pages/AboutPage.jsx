import React from 'react'
import { CheckCircle, Award, Target, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

const whyUs = [
  '750+ Positive Patient Reviews',
  'Highly Experienced Surgeon',
  'Advanced Surgical Equipment',
  'Affordable Treatment',
  'Personalized Patient Care',
  'Fast Recovery Programs',
  'Clean & Modern Infrastructure',
  'Emergency Care Available',
]

const milestones = [
  { year: '2018', event: 'Hospital Founded by Dr. Vishnu Vardhan Reddy' },
  { year: '2019', event: 'First 100 successful joint replacement surgeries' },
  { year: '2020', event: 'Expanded OT with advanced arthroscopy equipment' },
  { year: '2022', event: 'Reached 500+ happy patients milestone' },
  { year: '2024', event: '750+ patients, 4.87 star rating achieved' },
  { year: '2026', event: 'Continuing to serve Nandyal & Rayalaseema region' },
]

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      {/* Page Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #0f3460 0%, #1a4f8a 100%)',
        padding: '80px 0 60px',
        color: '#fff',
        textAlign: 'center',
      }}>
        <div className="container">
          <span style={{
            display: 'inline-block', background: 'rgba(255,255,255,0.12)',
            color: '#f5c842', fontSize: '0.78rem', fontWeight: 600,
            letterSpacing: 2, textTransform: 'uppercase',
            padding: '6px 16px', borderRadius: 20, marginBottom: 16,
          }}>About Us</span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>
            About Raayalaseema Ortho Hospital
          </h1>
          <p style={{ opacity: 0.8, maxWidth: 560, margin: '0 auto', fontSize: '1.05rem' }}>
            Dedicated to advanced orthopedic care in Nandyal since 2018.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 64 }}>
            <div style={{
              background: '#f4f8ff', borderRadius: 20, padding: 36,
              borderLeft: '4px solid #1a4f8a',
            }}>
              <Target size={32} color="#1a4f8a" style={{ marginBottom: 16 }} />
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.2rem', marginBottom: 12, color: '#1a1a2e' }}>
                Our Mission
              </h3>
              <p style={{ color: '#6b7280', lineHeight: 1.8 }}>
                To provide world-class orthopedic care to every patient in Nandyal and the Rayalaseema region — combining advanced surgical techniques with compassionate, affordable treatment.
              </p>
            </div>
            <div style={{
              background: '#f4f8ff', borderRadius: 20, padding: 36,
              borderLeft: '4px solid #e8a020',
            }}>
              <Eye size={32} color="#e8a020" style={{ marginBottom: 16 }} />
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.2rem', marginBottom: 12, color: '#1a1a2e' }}>
                Our Vision
              </h3>
              <p style={{ color: '#6b7280', lineHeight: 1.8 }}>
                To be the most trusted orthopedic center in Andhra Pradesh — known for surgical excellence, patient-first care, and making quality bone & joint treatment accessible to all.
              </p>
            </div>
          </div>

          {/* About content */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span className="section-tag">Our Story</span>
              <h2 className="section-title">Built on Trust, Driven by Excellence</h2>
              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: 16 }}>
                Dr. Vishnu's Raayalaseema Ortho Hospital was founded with a single purpose — to bring advanced orthopedic care closer to the people of Nandyal and the Rayalaseema region.
              </p>
              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: 16 }}>
                Under the leadership of Dr. Vishnu Vardhan Reddy (MBBS, MS Ortho, FIJR), the hospital has grown into a trusted center for complex joint replacements, arthroscopic surgeries, and trauma care.
              </p>
              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: 28 }}>
                Every patient who walks through our doors receives personalized attention, transparent communication, and the highest standard of surgical care — at an affordable cost.
              </p>
              <Link to="/appointment" className="btn btn-primary">Book a Consultation</Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=700&q=80"
                alt="Hospital operation theatre"
                style={{ borderRadius: 20, width: '100%', height: 400, objectFit: 'cover', boxShadow: '0 20px 60px rgba(26,79,138,0.2)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ background: '#f4f8ff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Reasons Patients Trust Us</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {whyUs.map((w, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: '#fff', borderRadius: 12, padding: '16px 20px',
                boxShadow: '0 2px 12px rgba(26,79,138,0.07)',
              }}>
                <CheckCircle size={20} color="#10b981" />
                <span style={{ fontWeight: 500, color: '#2d3748' }}>{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">Milestones & Achievements</h2>
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: 2, background: '#e2e8f0', transform: 'translateX(-50%)',
            }} />
            {milestones.map((m, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: 32, position: 'relative',
              }}>
                <div style={{
                  width: '44%',
                  background: '#f4f8ff', borderRadius: 12, padding: '16px 20px',
                  boxShadow: '0 2px 12px rgba(26,79,138,0.07)',
                }}>
                  <div style={{ color: '#1a4f8a', fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>{m.year}</div>
                  <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>{m.event}</div>
                </div>
                <div style={{
                  position: 'absolute', left: '50%', top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 14, height: 14, borderRadius: '50%',
                  background: '#1a4f8a', border: '3px solid #fff',
                  boxShadow: '0 0 0 3px #1a4f8a',
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
