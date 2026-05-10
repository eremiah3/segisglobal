import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Mail, Phone, Clock, ChevronDown } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import PageTransition from '../components/PageTransition'
import { useReveal } from '../utils/useReveal'
import '../styles/globals.scss'

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzIJMg82km5L-IKK3Aps-mAH1oUdLAAHDP4Z-j59SEoGrya9jOGZY2IzeYRMGTEr9fb/exec'

const faqs = [
  { q: 'What stage of business do you typically work with?', a: 'We work with businesses at various stages — from seed-stage founders to established enterprises. What matters most is the quality of the opportunity and the calibre of the team behind it.' },
  { q: 'How long does your evaluation process take?', a: 'Our initial assessment typically takes 2–3 weeks from first contact. We move quickly when we see a compelling opportunity, and we always communicate clearly about where you stand in our process.' },
  { q: 'Do you only invest in African businesses?', a: 'Our primary focus is Africa and emerging markets, but we actively build bridges between African businesses and international capital and markets. Geography is a lens, not a barrier.' },
  { q: 'What is the minimum investment size you consider?', a: 'We don\'t have a strict minimum. We evaluate opportunities based on their strategic fit, market potential, and the quality of execution — not just the capital requirement.' },
  { q: 'Can I pitch an idea that\'s still early stage?', a: 'Absolutely. Some of our best ventures started as early-stage concepts. We\'re experienced at working with founders from ideation through to scale, so don\'t hesitate to reach out early.' },
]

export default function Contact() {
  useReveal()
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
      })
      setStatus('success')
      setForm({ name: '', email: '', company: '', phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', fontFamily: 'Manrope,sans-serif', fontSize: '0.9rem',
    padding: '0.85rem 1.1rem', border: '1px solid #E8E4DC', borderRadius: '4px',
    background: '#FAF8F3', color: '#1A2535', outline: 'none',
    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Contact SEGIS Global Investment | Partner With Us</title>

        <meta name="description" content="Get in touch with SEGIS Global Investment. Whether you're a founder, investor, or partner, let’s explore opportunities to build and scale impactful ventures across Africa." />

        <link rel="canonical" href="https://segisglobal.com/contact" />

        {/* <!-- Open Graph --> */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SEGIS Global Investment" />
        <meta property="og:url" content="https://segisglobal.com/contact" />
        <meta property="og:title" content="Contact SEGIS Global Investment" />
        <meta property="og:description" content="Let’s connect. Partner with SEGIS to build and scale high impact ventures across Africa." />

        {/* <!-- FIXED: absolute image URL --> */}
        <meta property="og:image" content="https://segisglobal.com/OGimage.png" />
        <meta property="og:image:secure_url" content="https://segisglobal.com/OGimage.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact SEGIS Global Investment" />
        <meta name="twitter:description" content="Reach out to explore partnerships, investments, and venture opportunities across Africa." />
        <meta name="twitter:image" content="https://segisglobal.com/OGimage.png" />
      </Helmet>
      {/* HERO */}
      <section className="hero hero--inner">
        <div className="hero__bg" style={{ backgroundImage: 'url(/images/contact.jpeg)' }} />
        <div className="hero__overlay" />
        <div className="hero__content">
          <span className="hero__tag fade-up fade-up--d1">Get in Touch</span>
          <h1 className="hero__heading fade-up fade-up--d2">Start the Conversation.</h1>
          <p className="hero__para fade-up fade-up--d3">
            Whether you have a business opportunity, a partnership proposal, or simply want to learn more we want to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section section--white">
        <div className="container">
          <div className="contact-main-grid">
            {/* LEFT */}
            <div className="reveal">
              <div className="gold-rule" />
              <span className="section-label">Contact Information</span>
              <h2 className="contact-heading" style={{ marginBottom: '1.6rem', color: '#0D1B2A' }}>We're Ready<br />to Listen.</h2>
              <p style={{ marginBottom: '2.5rem', color: '#374151' }}>
                Reach out directly or use the form. We review every message and respond within 2 business days.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {[
                  { icon: MapPin, label: 'Location', val: '96 Bode Thomas road, Surulere Lagos State, Nigeria.' },
                  { icon: Mail, label: 'Email', val: 'info@segisglobal.com\nsegis.global.invt@gmail.com' },
                  { icon: Phone, label: 'Phone', val: '+234 901 944 4372\n+44 7534 644786' },
                  // { icon: Clock, label: 'Business Hours', val: 'Monday – Friday\n8:00 AM – 6:00 PM WAT' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 42, height: 42, borderRadius: '4px', background: 'rgba(201,162,39,0.08)', border: '1px solid rgba(201,162,39,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A227', flexShrink: 0 }}>
                      <item.icon size={16} />
                    </div>
                    <div>
                      <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A227', display: 'block', marginBottom: '0.3rem' }}>{item.label}</span>
                      <span style={{ fontSize: '0.88rem', color: '#374151', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{item.val}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office image */}
              <img src="/images/contact.jpeg"
                alt="SEGIS Office" style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '6px' }} />
            </div>

            {/* FORM */}
            <div className="reveal">
              <div className="contact-form-wrapper">
                <h3 style={{ color: '#0D1B2A', marginBottom: '0.4rem' }}>Send Us a Message</h3>
                <p style={{ fontSize: '0.88rem', color: '#6B7280', marginBottom: '2.5rem' }}>
                  Fill in the form below and our team will be in touch shortly.
                </p>

                {status === 'success' ? (
                  <div style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(14,95,52,0.08)', border: '2px solid rgba(14,95,52,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem' }}>✓</div>
                    <h4 style={{ color: '#0D1B2A', marginBottom: '0.8rem' }}>Message Sent!</h4>
                    <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '2rem' }}>
                      Thank you for reaching out. We'll review your message and respond within 2 business days.
                    </p>
                    <button onClick={() => setStatus('idle')} className="btn btn-outline" style={{ margin: '0 auto' }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }} className="contact-form-grid">
                      <div>
                        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#1A2535', fontFamily: 'DM Sans,sans-serif', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" style={inputStyle}
                          onFocus={e => { e.target.style.borderColor = '#C9A227'; e.target.style.boxShadow = '0 0 0 3px rgba(201,162,39,0.1)' }}
                          onBlur={e => { e.target.style.borderColor = '#E8E4DC'; e.target.style.boxShadow = 'none' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#1A2535', fontFamily: 'DM Sans,sans-serif', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>Email Address *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" style={inputStyle}
                          onFocus={e => { e.target.style.borderColor = '#C9A227'; e.target.style.boxShadow = '0 0 0 3px rgba(201,162,39,0.1)' }}
                          onBlur={e => { e.target.style.borderColor = '#E8E4DC'; e.target.style.boxShadow = 'none' }} />
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }} className="contact-form-grid">
                      <div>
                        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#1A2535', fontFamily: 'DM Sans,sans-serif', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>Company Name</label>
                        <input name="company" value={form.company} onChange={handleChange} placeholder="Your Company" style={inputStyle}
                          onFocus={e => { e.target.style.borderColor = '#C9A227'; e.target.style.boxShadow = '0 0 0 3px rgba(201,162,39,0.1)' }}
                          onBlur={e => { e.target.style.borderColor = '#E8E4DC'; e.target.style.boxShadow = 'none' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#1A2535', fontFamily: 'DM Sans,sans-serif', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>Phone Number</label>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+234 000 000 0000" style={inputStyle}
                          onFocus={e => { e.target.style.borderColor = '#C9A227'; e.target.style.boxShadow = '0 0 0 3px rgba(201,162,39,0.1)' }}
                          onBlur={e => { e.target.style.borderColor = '#E8E4DC'; e.target.style.boxShadow = 'none' }} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#1A2535', fontFamily: 'DM Sans,sans-serif', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>Subject *</label>
                      <select name="subject" value={form.subject} onChange={handleChange} required style={{ ...inputStyle, cursor: 'pointer' }}
                        onFocus={e => { e.target.style.borderColor = '#C9A227'; e.target.style.boxShadow = '0 0 0 3px rgba(201,162,39,0.1)' }}
                        onBlur={e => { e.target.style.borderColor = '#E8E4DC'; e.target.style.boxShadow = 'none' }}>
                        <option value="">Select a subject...</option>
                        <option>Investment Opportunity</option>
                        <option>Partnership Enquiry</option>
                        <option>Business Advisory</option>
                        <option>Venture Building</option>
                        <option>Media & Press</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#1A2535', fontFamily: 'DM Sans,sans-serif', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                        placeholder="Tell us about your business, your goals, and how you'd like to work with SEGIS..."
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                        onFocus={e => { e.target.style.borderColor = '#C9A227'; e.target.style.boxShadow = '0 0 0 3px rgba(201,162,39,0.1)' }}
                        onBlur={e => { e.target.style.borderColor = '#E8E4DC'; e.target.style.boxShadow = 'none' }} />
                    </div>
                    {status === 'error' && (
                      <div style={{ background: 'rgba(200,50,50,0.06)', border: '1px solid rgba(200,50,50,0.2)', borderRadius: '4px', padding: '0.9rem 1.2rem', fontSize: '0.85rem', color: '#c83232' }}>
                        Something went wrong. Please try again or email us directly at info@segisglobal.com
                      </div>
                    )}
                    <button type="submit" disabled={status === 'sending'} className="btn btn-primary" style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? 0.7 : 1 }}>
                      {status === 'sending' ? 'Sending...' : 'Send Message'} <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <div className="contact-map">
        <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1800&q=60"
          alt="Lagos skyline" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.6) brightness(0.85)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', border: '1px solid #E8E4DC', borderRadius: '6px', padding: '1.5rem 2rem', textAlign: 'center', boxShadow: '0 8px 32px rgba(13,27,42,0.15)' }}>
            <MapPin size={24} style={{ color: '#C9A227', margin: '0 auto 0.6rem' }} />
            <strong style={{ fontFamily: 'Sora,sans-serif', color: '#0D1B2A', display: 'block', marginBottom: '0.3rem' }}>SEGIS Global Investment</strong>
            <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>Nigeria</span>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="section section--ivory">
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div className="section-header reveal">
              <div className="gold-rule" style={{ margin: '0 auto 1.2rem' }} />
              <span className="section-label">Frequently Asked</span>
              <h2 className="section-title">Common Questions.</h2>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: '#fff', border: `1px solid ${openFaq === i ? 'rgba(201,162,39,0.4)' : '#E8E4DC'}`, borderRadius: '6px', overflow: 'hidden', transition: 'border-color 0.25s ease' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1.3rem 1.6rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                    <span style={{ fontFamily: 'Sora,sans-serif', fontWeight: 600, color: '#0D1B2A', fontSize: '0.95rem' }}>{faq.q}</span>
                    <ChevronDown size={18} style={{ color: '#C9A227', flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }} />
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 1.6rem 1.4rem', fontSize: '0.9rem', color: '#374151', lineHeight: 1.75, borderTop: '1px solid #E8E4DC' }}>
                      <div style={{ paddingTop: '1rem' }}>{faq.a}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__inner reveal">
            <h2>Not Sure Where to Start?</h2>
            <p>Just send us a message. We'll help you figure out the best way to work together.</p>
            <div className="cta-banner__btns">
              <Link to="/work-with-us" className="btn btn-primary">See How We Work <ArrowRight size={16} /></Link>
              <Link to="/about" className="btn btn-outline-white">Learn About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
