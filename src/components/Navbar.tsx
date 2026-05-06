import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import './Navbar.scss'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'What We Do', path: '/what-we-do' },
  { name: 'Focus Areas', path: '/focus-areas' },
  { name: 'Ventures', path: '/ventures' },
  { name: 'Work With Us', path: '/work-with-us' },
  { name: 'Contact', path: '/contact' },
]

// const rcNumber = 'RC 1931852'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
            <img src="/logo.png" alt="SEGIS Logo" className="navbar__logo-image" />
            <div className="navbar__brand-text">
              <span className="logo-text">SEGIS</span>
              <span className="logo-sub">Global Investment</span>
              {/* <span className="logo-rc">{rcNumber}</span> */}
            </div>
          </Link>

          <div className="navbar__links">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="navbar__right">
            <Link to="/contact" className="nav-cta" style={{ display: 'none' }}
              data-show-on-scroll>
              Get Started
            </Link>
            <button className="navbar__mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mobile-menu__header">
              <div>
                <div className="logo-text">SEGIS</div>
                <div className="logo-sub">Global Investment</div>
                {/* <div className="logo-rc">{rcNumber}</div> */}
              </div>
              <button className="mobile-menu__close" onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="mobile-menu__links">
              {navLinks.map((link, i) => (
                <motion.div key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}>
                  <Link to={link.path}
                    className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mobile-menu__footer">
              <Link to="/contact" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                Start a Conversation <ArrowRight size={16} />
              </Link>
              <Link to="/work-with-us" className="btn btn-outline" style={{ justifyContent: 'center' }}>
                Work With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
