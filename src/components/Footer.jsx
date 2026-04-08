import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Instagram, Facebook, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#0f1e3d', color: 'rgba(255,255,255,0.75)' }}>
      <div className="container" style={{ padding: '64px 24px 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 40,
          marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.2rem', color: '#fff', marginBottom: 4 }}>
                Dr. Vishnu's
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#e8a020' }}>
                Raayalaseema Ortho & Eye Hospital
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 20 }}>
              Advanced Orthopedic & Eye Care in Nandyal. Specializing in Joint Replacement, Arthroscopy, Sports Injuries, Trauma Care & Ophthalmology.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
              <a href="https://www.instagram.com/raayalaseema_hospitals/" target="_blank" rel="noopener noreferrer"
                title="Instagram"
                style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', flexShrink: 0,
                }}>
                <Instagram size={17} />
              </a>
              <a href="https://www.facebook.com/DrVishnuROH/" target="_blank" rel="noopener noreferrer"
                title="Facebook"
                style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: '#1877f2',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', flexShrink: 0,
                }}>
                <Facebook size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 700, marginBottom: 20, fontSize: '0.95rem' }}>
              Quick Links
            </h4>
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/doctors', label: 'Our Doctors' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/appointment', label: 'Book Appointment' },
            ].map(l => (
              <Link key={l.to} to={l.to} style={{
                display: 'block', marginBottom: 10, fontSize: '0.88rem',
                color: 'rgba(255,255,255,0.65)',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#e8a020'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
              >
                → {l.label}
              </Link>
            ))}
          </div>

          {/* Specialties */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 700, marginBottom: 20, fontSize: '0.95rem' }}>
              Specialties
            </h4>
            {['Joint Replacement', 'Knee Replacement', 'Hip Replacement', 'Arthroscopy', 'ACL Reconstruction', 'Trauma Care', 'Sports Injuries', 'Eye Care (Ophthalmology)'].map(s => (
              <div key={s} style={{ marginBottom: 8, fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)' }}>
                • {s}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 700, marginBottom: 20, fontSize: '0.95rem' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <MapPin size={16} color="#e8a020" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                  Beside RK Colour Lab Lane, TTD Road,<br />
                  Srinivasa Nagar, Near Mediseva,<br />
                  Nandyal, AP – 518501
                </span>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Phone size={16} color="#e8a020" />
                <a href="tel:+916281482624" style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)' }}>+91 62814 82624</a>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Mail size={16} color="#e8a020" />
                <span style={{ fontSize: '0.88rem' }}>Online Appointment Available</span>
              </div>
            </div>

            {/* OPD Timings */}
            <div style={{
              marginTop: 20, background: 'rgba(255,255,255,0.05)',
              borderRadius: 10, padding: '14px 16px',
            }}>
              <div style={{ color: '#e8a020', fontWeight: 600, fontSize: '0.82rem', marginBottom: 8 }}>OPD Timings</div>
              <div style={{ fontSize: '0.82rem', lineHeight: 1.8 }}>
                Mon–Sat: 9AM–1PM & 5PM–8PM<br />
                Sunday: Emergency Only<br />
                <span style={{ color: '#f5c842', fontWeight: 600 }}>Emergency & Trauma: 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: '0.82rem' }}>
            © 2026 Dr. Vishnu's Raayalaseema Ortho & Eye Hospital. All rights reserved.
          </p>
          <p style={{ fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 4 }}>
            Made with <Heart size={13} fill="#e53e3e" color="#e53e3e" /> for better orthopedic care in Nandyal
          </p>
        </div>
      </div>
    </footer>
  )
}
