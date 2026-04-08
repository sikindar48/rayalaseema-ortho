import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Specialties from '../components/Specialties'
import Doctors from '../components/Doctors'
import Facilities from '../components/Facilities'
import Testimonials from '../components/Testimonials'
import AppointmentSection from '../components/Appointment'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Specialties />
      <Doctors />
      <Facilities />
      <Testimonials />
      <AppointmentSection />
    </main>
  )
}
