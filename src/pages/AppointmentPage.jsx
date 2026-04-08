import React from 'react'
import AppointmentSection from '../components/Appointment'
import { Phone, MapPin, Instagram, Clock } from 'lucide-react'

export default function AppointmentPage() {
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
          }}>Appointments</span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>
            Book Your Appointment
          </h1>
          <p style={{ opacity: 0.8, maxWidth: 560, margin: '0 auto', fontSize: '1.05rem' }}>
            Get expert orthopedic care from Dr. Vishnu Vardhan Reddy. Walk-in and online appointments available.
          </p>
        </div>
      </div>

      {/* Quick contact cards */}
      <div style={{ background: '#fff', padding: '32px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { icon: <Phone size={22} />, title: 'Call Us', sub: 'Available on Appointment', color: '#1a4f8a' },
              { icon: <Clock size={22} />, title: 'OPD Hours', sub: 'Mon–Sat: 9AM–1PM, 5PM–8PM', color: '#0f9d58' },
              { icon: <MapPin size={22} />, title: 'Location', sub: 'Srinivasa Nagar, Nandyal', color: '#e8a020' },
              { icon: <Instagram size={22} />, title: 'Instagram', sub: '@raayalaseema_hospitals', color: '#e1306c' },
            ].map((c, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                background: '#f4f8ff', borderRadius: 12, padding: '16px 20px',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: c.color, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>{c.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a1a2e' }}>{c.title}</div>
                  <div style={{ fontSize: '0.82rem', color: '#6b7280' }}>{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AppointmentSection />

      {/* Map placeholder */}
      <section style={{ background: '#fff', padding: '0 0 64px' }}>
        <div className="container">
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: 20, color: '#1a1a2e' }}>
            Find Us on Map
          </h3>
          <div style={{
            borderRadius: 16, overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(26,79,138,0.1)',
            height: 380,
          }}>
            <iframe
              title="Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.0!2d78.4867!3d15.4789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI4JzQ0LjAiTiA3OMKwMjknMTIuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p style={{ marginTop: 12, fontSize: '0.88rem', color: '#6b7280' }}>
            📍 Beside RK Colour Lab Lane, TTD Road, Srinivasa Nagar, Near Mediseva, Nandyal, AP – 518501
          </p>
        </div>
      </section>
    </main>
  )
}
