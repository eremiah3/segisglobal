import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__gold-bar" />
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <span className="logo-text">SEGIS</span>
              <span className="logo-sub">Global Investment</span>
              <p>
                A trading and investment company creating and executing high-value
                business opportunities across Africa and beyond.
              </p>
              <div className="footer__socials">
                {/* <a href="#" className="footer__social">Li</a> */}
                <a href="#" className="footer__social">Tw</a>
                <a href="#" className="footer__social">Ig</a>
                <a href="#" className="footer__social">Fb</a>
              </div>
            </div>

            <div>
              <span className="footer__col-title">Company</span>
              <div className="footer__links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/what-we-do">What We Do</Link>
                <Link to="/focus-areas">Focus Areas</Link>
                <Link to="/ventures">Ventures</Link>
              </div>
            </div>

            <div>
              <span className="footer__col-title">Engage</span>
              <div className="footer__links">
                <Link to="/work-with-us">Work With Us</Link>
                <Link to="/work-with-us">For Founders</Link>
                <Link to="/work-with-us">For Businesses</Link>
                <Link to="/work-with-us">Partnerships</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>

            <div>
              <span className="footer__col-title">Get in Touch</span>
              <div className="footer__contact">
                <div className="footer__contact-item">
                  <MapPin size={14} className="icon" />
                  <span>Lagos, Nigeria &amp; Global Offices</span>
                </div>
                <div className="footer__contact-item">
                  <Mail size={14} className="icon" />
                  <span>info@segisglobal.com</span>
                </div>
                <div className="footer__contact-item">
                  <Phone size={14} className="icon" />
                  <span>+234 913 261 7863</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <span className="footer__copy">
            &copy; {new Date().getFullYear()} SEGIS Global Investment. All rights reserved.
          </span>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
