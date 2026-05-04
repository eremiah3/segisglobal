import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import WhatWeDo from './pages/WhatWeDo'
import FocusAreas from './pages/FocusAreas'
import Ventures from './pages/Ventures'
import WorkWithUs from './pages/WorkWithUs'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Show preloader on every route change
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 2600)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="app">
      <Preloader loading={loading} />
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/focus-areas" element={<FocusAreas />} />
            <Route path="/ventures" element={<Ventures />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App