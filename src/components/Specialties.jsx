import React from 'react'
import { Bone, Activity, Shield, Zap, Heart, Stethoscope } from 'lucide-react'

const specialties = [
  {
    icon: <Bone size={32} />,
    title: 'Joint Replacement',
    color: '#1a4f8a',
    bg: '#e8f0fb',
    items: ['Knee Replacement', 'Hip Replacement', 'Revision Surgeries', 'Partial Knee Replacement'],
  },
  {
    icon: <Activity size={32} />,
    title: 'Arthroscopy',
    color: '#0f9d58',
    bg: '#e6f7ef',
    items: ['ACL Reconstruction', 'Ligament Repair', 'Shoulder Arthroscopy', 'Meniscus Surgery'],
  },
  {
    icon: <Zap size={32} />,
    title: 'Sports Injury',
    color: '#e8a020',
    bg: '#fef3e2',
    items: ['Muscle Tears', 'Tendon Injuries', 'Cartilage Repair', 'Return-to-Sport Programs'],
  },
  {
    icon: <Shield size={32} />,
    title: 'Trauma & Fracture Care',
    color: '#e53e3e',
    bg: '#fde8e8',
    items: ['Accident Injuries', 'Bone Fractures', 'Titanium Implants', 'Emergency Care'],
  },
  {
    icon: <Heart size={32} />,
    title: 'General Orthopedics',
    color: '#805ad5',
    bg: '#f0ebff',
    items: ['Back Pain', 'Joint Pain', 'Arthritis Treatment', 'Sports Injuries'],
  },
  {
    icon: <Stethoscope size={32} />,
    title: 'Post-Surgery Care',
    color: '#2b6cb0',
    bg: '#ebf4ff',
    items: ['Physiotherapy', 'Rehabilitation', 'Pain Management', 'Recovery Programs'],
  },
]

export default function Specialties() {
  return (
    <section className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-tag">Our Specialties</span>
          <h2 className="section-title">Comprehensive Orthopedic Services</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            From complex joint replacements to sports injury recovery — we cover the full spectrum of orthopedic care.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {specialties.map((s, i) => (
            <div key={i} className="card" style={{ padding: 28 }}>
              <div style={{
                width: 64, height: 64, borderRadius: 16,
                background: s.bg, color: s.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontFamily: 'Inter, sans-serif', fontWeight: 700, marginBottom: 14, color: '#1a1a2e' }}>
                {s.title}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem', color: '#6b7280' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
