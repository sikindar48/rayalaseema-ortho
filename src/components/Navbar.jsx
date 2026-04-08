import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/appointment', label: 'Appointment' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: isHome && !scrolled ? 'transparent' : 'rgba(255,255,255,0.97)',
      backdropFilter: isHome && !scrolled ? 'none' : 'blur(12px)',
      boxShadow: isHome && !scrolled ? 'none' : '0 2px 20px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      borderBottom: isHome && !scrolled ? 'none' : '1px solid #e2e8f0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
          <span style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            fontSize: '1.15rem',
            color: isHome && !scrolled ? '#fff' : '#1a4f8a',
            transition: 'color 0.3s',
          }}>Dr. Vishnu's</span>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: isHome && !scrolled ? 'rgba(255,255,255,0.85)' : '#e8a020',
            transition: 'color 0.3s',
          }}>Raayalaseema Ortho & Eye Hospital</span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              padding: '8px 14px',
              borderRadius: 6,
              fontWeight: 500,
              fontSize: '0.9rem',
              color: pathname === l.to
                ? '#1a4f8a'
                : isHome && !scrolled ? 'rgba(255,255,255,0.9)' : '#2d3748',
              background: pathname === l.to ? 'rgba(26,79,138,0.08)' : 'transparent',
              transition: 'all 0.2s',
            }}>{l.label}</Link>
          ))}
          <a href="tel:+916281482624" className="btn btn-accent" style={{ marginLeft: 8, padding: '9px 20px', fontSize: '0.85rem' }}>
            <Phone size={15} /> Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          color: isHome && !scrolled ? '#fff' : '#1a4f8a',
        }} className="hamburger" aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: '#fff',
          borderTop: '1px solid #e2e8f0',
          padding: '16px 24px 24px',
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              display: 'block',
              padding: '12px 0',
              fontWeight: 500,
              color: pathname === l.to ? '#1a4f8a' : '#2d3748',
              borderBottom: '1px solid #f0f0f0',
            }}>{l.label}</Link>
          ))}
          <a href="tel:+916281482624" className="btn btn-accent" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
            <Phone size={15} /> Book Appointment
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
