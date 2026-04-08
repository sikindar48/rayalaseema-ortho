import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Award, GraduationCap, Stethoscope } from 'lucide-react'

export const doctors = [
  {
    name: 'Dr. Vishnu Vardhan Reddy',
    role: 'Founder & Chief Orthopedic Surgeon',
    qualifications: 'MBBS | MS Ortho | FIJR',
    specialization: 'Joint Replacement & Arthroscopy Expert',
    experience: '10+ Years',
    image: 'https://scontent.fbep2-1.fna.fbcdn.net/v/t39.30808-6/306097622_538755258051196_6059214289491815171_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=JlkWzBu8MzMQ7kNvwFiC9FC&_nc_oc=Adq8FLCRVDf8q_p3n0jr9Cugep3-2u1r7NPLorPUJlHRtIuIucua7RE5nJJXjtRtJ89BHLT2KjSYkVO1pZ3Yi4ME&_nc_zt=23&_nc_ht=scontent.fbep2-1.fna&_nc_gid=XP9sC01pXkayGFhSvEPy1Q&_nc_ss=7a389&oh=00_Af0tybvYDUgO6wsumo_ta69jfjTeWO56xAoLokPN_4yJxw&oe=69DBE9F6',
    instagram: 'https://www.instagram.com/raayalaseema_hospitals/',
    followers: '2300+',
    tags: ['Bone & Joint Specialist', 'Arthroscopy', 'Joint Replacement'],
    bio: 'Dr. Vishnu Vardhan Reddy is known for delivering successful orthopedic surgeries with compassionate patient care and advanced surgical techniques. He founded Raayalaseema Ortho & Eye Hospital to bring world-class orthopedic care to Nandyal.',
    accent: '#1a4f8a',
  },
  {
    name: 'Dr. Anitha Reddy',
    role: 'Anesthesiologist',
    qualifications: 'MBBS | MD Anesthesia',
    specialization: 'Surgical Anesthesia & Pain Management',
    experience: '8+ Years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    tags: ['Anesthesia', 'Pain Management', 'Critical Care'],
    bio: 'Dr. Anitha Reddy specializes in surgical anesthesia and post-operative pain management, ensuring patient comfort and safety throughout every procedure.',
    accent: '#0f9d58',
  },
  {
    name: 'Dr. Ravi Kumar',
    role: 'Physiotherapist & Rehab Specialist',
    qualifications: 'BPT | MPT (Ortho)',
    specialization: 'Post-Surgery Rehabilitation',
    experience: '6+ Years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    tags: ['Physiotherapy', 'Rehabilitation', 'Sports Recovery'],
    bio: 'Dr. Ravi Kumar leads the rehabilitation team, designing personalized recovery programs that help patients regain full mobility and return to active life faster.',
    accent: '#e8a020',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'General Physician & Emergency Care',
    qualifications: 'MBBS | MD General Medicine',
    specialization: 'Emergency & Pre-operative Care',
    experience: '7+ Years',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    tags: ['Emergency Care', 'General Medicine', 'Pre-op Assessment'],
    bio: 'Dr. Priya Sharma manages emergency cases and pre-operative assessments, ensuring every patient is medically optimized before surgery.',
    accent: '#805ad5',
  },
]

export default function Doctors() {
  return (
    <section className="section" style={{ background: '#f4f8ff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-tag">Our Team</span>
          <h2 className="section-title">Meet Our Expert Doctors</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            A dedicated team of specialists committed to your orthopedic health and recovery.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {doctors.map((doc, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(26,79,138,0.09)',
              transition: 'transform 0.25s, box-shadow 0.25s',
              cursor: 'default',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,79,138,0.16)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(26,79,138,0.09)'
              }}
            >
              {/* Image area */}
              <div style={{ position: 'relative', height: 220, background: `${doc.accent}18` }}>
                <img
                  src={doc.image}
                  alt={doc.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  onError={e => { e.target.src = 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80' }}
                />
                {/* Experience badge */}
                <div style={{
                  position: 'absolute', top: 14, right: 14,
                  background: doc.accent,
                  color: '#fff', fontSize: '0.72rem', fontWeight: 700,
                  padding: '5px 12px', borderRadius: 20,
                  display: 'flex', alignItems: 'center', gap: 5,
                }}>
                  <Award size={12} /> {doc.experience}
                </div>
              </div>

              {/* Accent bar */}
              <div style={{ height: 4, background: doc.accent }} />

              {/* Content */}
              <div style={{ padding: '20px 22px 22px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: 3 }}>
                  {doc.name}
                </h3>
                <p style={{ fontSize: '0.82rem', color: '#6b7280', marginBottom: 4 }}>{doc.role}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.78rem', color: doc.accent, fontWeight: 600, marginBottom: 14 }}>
                  <GraduationCap size={13} /> {doc.qualifications}
                </div>

                {/* Specialization */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  background: `${doc.accent}12`, borderRadius: 8,
                  padding: '8px 12px', marginBottom: 14,
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
                      padding: '3px 10px', borderRadius: 20,
                    }}>{t}</span>
                  ))}
                </div>

                {doc.instagram && (
                  <a href={doc.instagram} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      fontSize: '0.78rem', color: '#e1306c', fontWeight: 600,
                    }}>
                    <Instagram size={13} /> @raayalaseema_hospitals · {doc.followers} followers
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <Link to="/doctors" className="btn btn-primary">View All Doctors</Link>
        </div>
      </div>
    </section>
  )
}
