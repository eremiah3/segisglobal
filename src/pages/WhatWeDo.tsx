import { Link } from 'react-router-dom'
import { ArrowRight, Lightbulb, Handshake, TrendingUp, BarChart3 } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { useReveal } from '../utils/useReveal'
import '../styles/globals.scss'

const services = [
  {
    icon: Lightbulb,
    title: 'Venture Creation',
    sub: 'We Build From Zero.',
    desc: 'We identify commercial gaps, assemble teams, and build businesses from the ground up. From concept validation to market entry to scale — we own the process end-to-end. Venture creation is our most hands-on capability and where our edge is sharpest.',
    bullets: ['Market research & opportunity validation', 'Business model design & financial architecture', 'Team building & operations setup', 'Go-to-market strategy & execution'],
  },
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    sub: 'We Partner to Win.',
    desc: 'We co-create growth strategies with established companies and ambitious entrepreneurs. Our partnerships go beyond advisory — we bring network access, operational support, and capital to make shared success a reality.',
    bullets: ['Joint venture structuring', 'Market access & distribution partnerships', 'Co-investment frameworks', 'Growth strategy & implementation'],
  },
  {
    icon: TrendingUp,
    title: 'Selective Investments',
    sub: 'We Deploy Capital Strategically.',
    desc: 'We invest in high-potential companies at the intersection of Africa\'s structural growth drivers. Every investment decision is underpinned by deep sector knowledge, rigorous analysis, and a clear path to value creation.',
    bullets: ['Seed to growth-stage investments', 'African market focus with global lens', 'Active portfolio support', 'Clear exit horizon planning'],
  },
  {
    icon: BarChart3,
    title: 'Business Advisory',
    sub: 'We Accelerate What Already Works.',
    desc: 'For businesses at critical inflection points, our advisory practice provides strategic direction, operational expertise, and access to our network. We embed where needed and stay until the job is done.',
    bullets: ['Strategic planning & restructuring', 'Market expansion strategy', 'Capital raise preparation', 'Operational efficiency & systems'],
  },
]

const process = [
  { num: '01', title: 'Discovery', desc: 'We spend time understanding your business, market, and the opportunity before anything else.' },
  { num: '02', title: 'Assessment', desc: 'Rigorous analysis of commercial potential, team capability, and strategic fit with our portfolio.' },
  { num: '03', title: 'Structuring', desc: 'We design the right engagement model — whether venture, partnership, investment, or advisory.' },
  { num: '04', title: 'Execution', desc: 'We activate resources, teams, and networks to deliver against the agreed strategy.' },
  { num: '05', title: 'Optimisation', desc: 'Continuous performance review and strategy refinement to compound results over time.' },
]

export default function WhatWeDo() {
  useReveal()
  return (
    <PageTransition>
      {/* HERO */}
      <section className="hero hero--inner">
        <div className="hero__bg" style={{ backgroundImage: 'url(/images/what.jpeg)' }} />
        <div className="hero__overlay" />
        <div className="hero__content">
          <span className="hero__tag fade-up fade-up--d1">Our Services</span>
          <h1 className="hero__heading fade-up fade-up--d2">What We Do Is Simple.<br />Execution Is Everything.</h1>
          <p className="hero__para fade-up fade-up--d3">
            Four integrated capabilities — all built around one principle: delivering results, not just advice.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      {services.map((s, i) => (
        <section key={s.title} className={`section ${i % 2 === 0 ? 'section--white' : 'section--ivory'}`}>
          <div className="container">
            <div className={`two-col ${i % 2 !== 0 ? 'reverse' : ''}`} style={{ flexDirection: i % 2 !== 0 ? undefined : undefined }}>
              <div className="reveal" style={{ order: i % 2 !== 0 ? 2 : 1 }}>
                <div className="gold-rule" />
                <span className="section-label">{`0${i + 1} / 04`}</span>
                <h2 className="section-title" style={{ marginBottom: '0.4rem' }}>{s.title}</h2>
                <p style={{ fontFamily: 'Sora,sans-serif', fontWeight: 600, color: '#C9A227', marginBottom: '1.4rem', fontSize: '1.05rem' }}>{s.sub}</p>
                <p style={{ marginBottom: '2rem' }}>{s.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  {s.bullets.map(b => (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A227', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: '#374151' }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal" style={{ order: i % 2 !== 0 ? 1 : 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ background: i % 2 === 0 ? '#FAF8F3' : '#fff', border: '1px solid #E8E4DC', borderRadius: '6px', padding: '4rem 3rem', textAlign: 'center', width: '100%' }}>
                  <s.icon size={64} style={{ color: '#C9A227', margin: '0 auto 2rem' }} />
                  <h3 style={{ color: '#0D1B2A', marginBottom: '1rem' }}>{s.title}</h3>
                  <Link to="/work-with-us" className="btn btn-outline-gold">Engage This Capability <ArrowRight size={14} /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* PROCESS */}
      <section className="section section--navy">
        <div className="container">
          <div className="section-header reveal">
            <div className="gold-rule" style={{ margin: '0 auto 1.2rem' }} />
            <span className="section-label">How We Work</span>
            <h2 className="section-title section-title--white">Our Process.</h2>
            <p className="section-lead" style={{ color: 'rgba(255,255,255,0.6)', margin: '0 auto' }}>
              Every engagement follows a disciplined framework designed to maximise the probability of success.
            </p>
          </div>
          <div className="process-steps">
            {process.map(p => (
              <div key={p.num} className="step reveal">
                <div className="step__num">{p.num}</div>
                <h4 style={{ color: '#fff' }}>{p.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.87rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section section--ivory">
        <div className="container">
          <div className="two-col">
            <div className="reveal">
              <div className="gold-rule" />
              <span className="section-label">Why Clients Choose Us</span>
              <h2 className="section-title">We Don't Just Show Up.<br />We Deliver.</h2>
              <p style={{ marginBottom: '2rem' }}>
                The companies and founders who work with SEGIS choose us because we bring something most
                firms can't offer: the combination of strategic thinking and the operational capability to execute it.
              </p>
              <Link to="/work-with-us" className="btn btn-primary">Start a Conversation <ArrowRight size={16} /></Link>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {['Experienced operators, not just analysts', 'Extensive African market networks', 'Structured, transparent engagements', 'Long-term aligned incentives', 'Sector-specific expertise', 'Proven execution track record'].map(item => (
                <div key={item} style={{ background: '#fff', border: '1px solid #E8E4DC', borderRadius: '6px', padding: '1.4rem', fontSize: '0.85rem', color: '#374151', fontWeight: 500 }}>
                  <span style={{ color: '#C9A227', marginRight: '0.5rem', fontWeight: 700 }}>✓</span> {item}
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
            <h2>Ready to Engage?</h2>
            <p>Tell us about your business and let's explore which capability fits best.</p>
            <div className="cta-banner__btns">
              <Link to="/contact" className="btn btn-primary">Get in Touch <ArrowRight size={16} /></Link>
              <Link to="/work-with-us" className="btn btn-outline-white">Work With Us</Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
