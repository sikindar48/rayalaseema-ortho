import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, User, Phone, CheckCircle } from 'lucide-react'

const timings = [
  { day: 'Monday – Saturday', time: '9:00 AM – 1:00 PM', type: 'Morning OPD' },
  { day: 'Monday – Saturday', time: '5:00 PM – 8:00 PM', type: 'Evening OPD' },
  { day: 'Sunday', time: 'Emergency Only', type: 'Emergency' },
]

export default function AppointmentSection() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', concern: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section" style={{ background: '#f4f8ff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          {/* Left: Timings */}
          <div>
            <span className="section-tag">Appointments</span>
            <h2 className="section-title">Book Your Consultation</h2>
            <p style={{ color: '#6b7280', marginBottom: 32, lineHeight: 1.8 }}>
              Get expert orthopedic care from Dr. Vishnu Vardhan Reddy. Walk-in and online appointments available.
            </p>

            <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#1a1a2e', marginBottom: 16 }}>
              OPD Timings
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
              {timings.map((t, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  background: '#fff', borderRadius: 12, padding: '16px 20px',
                  boxShadow: '0 2px 12px rgba(26,79,138,0.07)',
                  borderLeft: `4px solid ${i === 2 ? '#e53e3e' : '#1a4f8a'}`,
                }}>
                  <Clock size={20} color={i === 2 ? '#e53e3e' : '#1a4f8a'} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#1a1a2e' }}>{t.type}</div>
                    <div style={{ fontSize: '0.82rem', color: '#6b7280' }}>{t.day} · {t.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #1a4f8a, #0f3460)',
              borderRadius: 16, padding: '24px',
              color: '#fff',
            }}>
              <div style={{ fontWeight: 700, marginBottom: 8 }}>📍 Location</div>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, lineHeight: 1.7 }}>
                Beside RK Colour Lab Lane<br />
                TTD Road, Srinivasa Nagar<br />
                Near Mediseva, Nandyal<br />
                Andhra Pradesh – 518501
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            background: '#fff', borderRadius: 20,
            padding: 36, boxShadow: '0 8px 40px rgba(26,79,138,0.12)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle size={56} color="#10b981" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>
                  Appointment Requested!
                </h3>
                <p style={{ color: '#6b7280', marginBottom: 24 }}>
                  We'll confirm your appointment shortly. Thank you for choosing Raayalaseema Ortho Hospital.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-primary">Book Another</button>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.2rem', marginBottom: 24, color: '#1a1a2e' }}>
                  Request an Appointment
                </h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2d3748', display: 'block', marginBottom: 6 }}>
                      Full Name *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <User size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2d3748', display: 'block', marginBottom: 6 }}>
                      Phone Number *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Phone size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                      <input
                        required
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2d3748', display: 'block', marginBottom: 6 }}>
                        Preferred Date
                      </label>
                      <div style={{ position: 'relative' }}>
                        <Calendar size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                        <input
                          type="date"
                          value={form.date}
                          onChange={e => setForm({ ...form, date: e.target.value })}
                          style={inputStyle}
                        />
                      </div>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2d3748', display: 'block', marginBottom: 6 }}>
                        Preferred Time
                      </label>
                      <select
                        value={form.time}
                        onChange={e => setForm({ ...form, time: e.target.value })}
                        style={{ ...inputStyle, paddingLeft: 12 }}
                      >
                        <option value="">Select</option>
                        <option>Morning (9AM–1PM)</option>
                        <option>Evening (5PM–8PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2d3748', display: 'block', marginBottom: 6 }}>
                      Chief Concern
                    </label>
                    <textarea
                      placeholder="Describe your symptoms or concern..."
                      value={form.concern}
                      onChange={e => setForm({ ...form, concern: e.target.value })}
                      rows={3}
                      style={{ ...inputStyle, resize: 'vertical', paddingLeft: 12 }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
                    <Calendar size={17} /> Request Appointment
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .appt-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

const inputStyle = {
  width: '100%',
  padding: '11px 12px 11px 36px',
  border: '1.5px solid #e2e8f0',
  borderRadius: 8,
  fontSize: '0.9rem',
  fontFamily: 'Inter, sans-serif',
  color: '#2d3748',
  outline: 'none',
  transition: 'border-color 0.2s',
  background: '#fafafa',
}
