import React, { useState } from 'react'
import { X, Award, Newspaper, Image, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = ['All', 'Hospital', 'Surgery & ICU', 'Awards', 'News & Media']

const galleryItems = [
  // Hospital interior
  { cat: 'Hospital', type: 'image', src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80', title: 'Modern Operation Theatre', desc: 'State-of-the-art OT with advanced surgical equipment' },
  { cat: 'Hospital', type: 'image', src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80', title: 'Patient Care Ward', desc: 'Comfortable and clean patient rooms' },
  { cat: 'Hospital', type: 'image', src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80', title: 'Hospital Reception', desc: 'Welcoming reception area for patients' },
  { cat: 'Hospital', type: 'image', src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', title: 'Rehabilitation Center', desc: 'Post-surgery physiotherapy and rehab' },

  // Surgery & ICU
  { cat: 'Surgery & ICU', type: 'image', src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80', title: 'Surgical Suite', desc: 'Advanced orthopedic surgical setup' },
  { cat: 'Surgery & ICU', type: 'image', src: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80', title: 'Digital X-Ray Unit', desc: 'High-resolution digital imaging for diagnosis' },
  { cat: 'Surgery & ICU', type: 'image', src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80', title: 'ICU Monitoring', desc: 'Advanced patient monitoring systems' },
  { cat: 'Surgery & ICU', type: 'image', src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80', title: 'Arthroscopy Equipment', desc: 'Specialized arthroscopic surgical tools' },

  // Awards
  { cat: 'Awards', type: 'award', src: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80', title: 'Best Orthopedic Surgeon Award 2023', desc: 'Recognized for excellence in joint replacement surgery in Nandyal region' },
  { cat: 'Awards', type: 'award', src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', title: 'Patient Choice Award 2024', desc: '4.87 star rating with 750+ positive patient reviews' },
  { cat: 'Awards', type: 'award', src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80', title: 'FIJR Fellowship Achievement', desc: 'Dr. Vishnu Vardhan Reddy awarded Fellowship in Joint Replacement' },

  // News & Media
  { cat: 'News & Media', type: 'news', src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80', title: 'Featured in Eenadu', desc: 'Hospital\'s advanced joint replacement services covered by leading Telugu newspaper' },
  { cat: 'News & Media', type: 'news', src: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80', title: 'TV9 Andhra Coverage', desc: 'Dr. Vishnu featured on TV9 discussing modern orthopedic treatments' },
  { cat: 'News & Media', type: 'news', src: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80', title: 'Sakshi Health Feature', desc: 'Raayalaseema Ortho Hospital highlighted for affordable quality care' },
]

const typeIcon = { award: <Award size={14} />, news: <Newspaper size={14} />, image: <Image size={14} /> }
const typeColor = { award: '#e8a020', news: '#0f9d58', image: '#1a4f8a' }

export default function GalleryPage() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.cat === active)

  const goLightbox = (dir) => {
    setLightbox(i => {
      const next = (i + dir + filtered.length) % filtered.length
      return next
    })
  }

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
          }}>Gallery</span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>
            Hospital Gallery
          </h1>
          <p style={{ opacity: 0.8, maxWidth: 560, margin: '0 auto', fontSize: '1.05rem' }}>
            A glimpse into our facilities, achievements, awards, and media coverage.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: '#f4f8ff' }}>
        <div className="container">
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40, justifyContent: 'center' }}>
            {categories.map(c => (
              <button key={c} onClick={() => setActive(c)} style={{
                padding: '9px 20px', borderRadius: 30,
                border: active === c ? 'none' : '1.5px solid #e2e8f0',
                background: active === c ? '#1a4f8a' : '#fff',
                color: active === c ? '#fff' : '#6b7280',
                fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer',
                transition: 'all 0.2s', fontFamily: 'Inter, sans-serif',
              }}>{c}</button>
            ))}
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {filtered.map((item, i) => (
              <div key={i} className="card" style={{ cursor: 'pointer', overflow: 'hidden' }}
                onClick={() => setLightbox(i)}>
                <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                  <img src={item.src} alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute', top: 12, left: 12,
                    background: typeColor[item.type],
                    color: '#fff', borderRadius: 20, padding: '4px 10px',
                    fontSize: '0.72rem', fontWeight: 600,
                    display: 'flex', alignItems: 'center', gap: 4,
                  }}>
                    {typeIcon[item.type]} {item.cat}
                  </div>
                </div>
                <div style={{ padding: '16px 18px' }}>
                  <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#1a1a2e', marginBottom: 6 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: '#6b7280' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.92)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }} onClick={() => setLightbox(null)}>
          <button onClick={e => { e.stopPropagation(); goLightbox(-1) }} style={{
            position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff',
            width: 48, height: 48, borderRadius: '50%', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><ChevronLeft size={24} /></button>

          <div style={{ maxWidth: 800, width: '90%', textAlign: 'center' }}
            onClick={e => e.stopPropagation()}>
            <img src={filtered[lightbox].src} alt={filtered[lightbox].title}
              style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', borderRadius: 12 }} />
            <div style={{ color: '#fff', marginTop: 16 }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, marginBottom: 6 }}>{filtered[lightbox].title}</h3>
              <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>{filtered[lightbox].desc}</p>
            </div>
          </div>

          <button onClick={e => { e.stopPropagation(); goLightbox(1) }} style={{
            position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff',
            width: 48, height: 48, borderRadius: '50%', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><ChevronRight size={24} /></button>

          <button onClick={() => setLightbox(null)} style={{
            position: 'absolute', top: 20, right: 20,
            background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff',
            width: 40, height: 40, borderRadius: '50%', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><X size={20} /></button>
        </div>
      )}
    </main>
  )
}
