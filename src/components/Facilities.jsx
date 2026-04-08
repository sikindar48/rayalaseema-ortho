import React from 'react'
import { Monitor, Zap, Bed, Heart, AlertCircle, Users } from 'lucide-react'

const facilities = [
  {
    icon: <Monitor size={28} />,
    title: 'Modern Operation Theatre',
    desc: 'State-of-the-art OT with advanced surgical equipment and strict sterile protocols.',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80',
    color: '#1a4f8a',
  },
  {
    icon: <Zap size={28} />,
    title: 'Digital X-Ray & Imaging',
    desc: 'High-resolution digital X-ray for precise diagnosis and treatment planning.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80',
    color: '#0f9d58',
  },
  {
    icon: <Bed size={28} />,
    title: 'Comfortable Patient Rooms',
    desc: 'Clean, well-ventilated rooms designed for patient comfort and faster recovery.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    color: '#e8a020',
  },
  {
    icon: <Heart size={28} />,
    title: 'Post-Surgery Care',
    desc: 'Dedicated post-operative care with physiotherapy and rehabilitation support.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    color: '#e53e3e',
  },
  {
    icon: <AlertCircle size={28} />,
    title: 'Emergency Care',
    desc: '24/7 emergency orthopedic care for accidents, fractures, and trauma cases.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80',
    color: '#805ad5',
  },
  {
    icon: <Users size={28} />,
    title: 'Experienced Nursing Staff',
    desc: 'Trained and compassionate nursing team providing round-the-clock patient support.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
    color: '#2b6cb0',
  },
]

export default function Facilities() {
  return (
    <section className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-tag">Infrastructure</span>
          <h2 className="section-title">World-Class Hospital Facilities</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Modern infrastructure designed to support the best surgical outcomes and patient comfort.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
        }}>
          {facilities.map((f, i) => (
            <div key={i} className="card" style={{ overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <img
                  src={f.image}
                  alt={f.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  width: 48, height: 48, borderRadius: 12,
                  background: f.color, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }}>
                  {f.icon}
                </div>
              </div>
              <div style={{ padding: '20px 24px' }}>
                <h3 style={{ fontSize: '1rem', fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#1a1a2e', marginBottom: 8 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
