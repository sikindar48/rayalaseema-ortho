import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import DoctorsPage from './pages/DoctorsPage'
import AppointmentPage from './pages/AppointmentPage'
import GalleryPage from './pages/GalleryPage'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </>
  )
}
