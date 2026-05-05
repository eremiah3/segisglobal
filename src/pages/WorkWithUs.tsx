import { Link } from 'react-router-dom'
import { ArrowRight, Rocket, Building2, Handshake, CheckCircle2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import PageTransition from '../components/PageTransition'
import { useReveal } from '../utils/useReveal'
import '../styles/globals.scss'

const tracks = [
  {
    icon: Rocket,
    title: 'For Founders',
    tag: 'Early to Growth Stage',
    desc: 'You\'ve validated your idea and you\'re ready to scale. You need more than capital — you need execution partners who understand your market and can help you navigate growth.',
    points: ['Seed and growth-stage investment', 'Operational mentorship and support', 'Network access and market introductions', 'Strategic co-building on core functions'],
    cta: 'Apply as a Founder',
  },
  {
    icon: Building2,
    title: 'For Businesses',
    tag: 'Established Companies',
    desc: 'You run a business with proven fundamentals but need a strategic partner to help you expand into new markets, restructure for scale, or access the right capital at the right time.',
    points: ['Market expansion strategy & execution', 'Business restructuring and optimisation', 'Capital raise advisory and access', 'Joint venture and partnership structuring'],
    cta: 'Engage for Business',
  },
  {
    icon: Handshake,
    title: 'For Collaborators',
    tag: 'Strategic Partners',
    desc: 'You represent a fund, institution, or established operator with complementary capabilities. We build co-investment and co-execution partnerships that create shared, durable value.',
    points: ['Co-investment frameworks', 'Joint venture opportunities', 'Deal flow sharing', 'Strategic alliance development'],
    cta: 'Explore Partnership',
  },
]

const process = [
  { num: '01', title: 'Initial Enquiry', desc: 'Submit your details and a brief overview of what you\'re building or looking for. We review every submission.' },
  { num: '02', title: 'First Conversation', desc: 'If there\'s potential alignment, we schedule a focused 45-minute discovery call within 5 business days.' },
  { num: '03', title: 'Deep Dive', desc: 'A structured 2–3 week assessment covering your business, market, team, and strategic fit with our portfolio.' },
  { num: '04', title: 'Proposal', desc: 'We present a clear engagement proposal outlining structure, terms, and what SEGIS will bring to the partnership.' },
  { num: '05', title: 'Execution', desc: 'Onboarding begins. You get access to our team, network, and resources. We start delivering from day one.' },
]

const benefits = [
  'Access to SEGIS\' network across 12+ African markets',
  'Operational expertise, not just capital or advice',
  'Long-term partnership with aligned incentives',
  'Introductions to co-investors and strategic partners',
  'Support across finance, marketing, operations, and HR',
  'Access to our in-house legal and compliance framework',
  'Participation in cross-portfolio knowledge sharing',
  'Quarterly strategy sessions with senior SEGIS leadership',
]

export default function WorkWithUs() {
  useReveal()
  return (
    <PageTransition>
      <Helmet>
        <title>Work With Us | SEGIS Global Investment</title>

        <meta name="description" content="Partner with SEGIS Global Investment. Whether you're a founder, an established business, or a strategic collaborator—we provide capital, execution, and networks to help you scale." />

        <link rel="canonical" href="https://segisglobal.com/work-with-us" />

        {/* <!-- Open Graph --> */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SEGIS Global Investment" />
        <meta property="og:url" content="https://segisglobal.com/work-with-us" />
        <meta property="og:title" content="Work With Us | SEGIS Global Investment" />
        <meta property="og:description" content="Three structured paths for founders, businesses, and partners. We bring more than capital—we bring execution, strategy, and growth." />

        <meta property="og:image" content="https://segisglobal.com/OGimage.png" />
        <meta property="og:image:secure_url" content="https://segisglobal.com/OGimage.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Work With Us | SEGIS Global Investment" />
        <meta name="twitter:description" content="Work with SEGIS—venture building, partnerships, and capital to help you scale with clarity and execution." />
        <meta name="twitter:image" content="https://segisglobal.com/OGimage.png" />
      </Helmet>
      {/* HERO */}
      <section className="hero hero--inner">
        <div className="hero__bg" style={{ backgroundImage: 'url(/images/work.jpeg)' }} />
        <div className="hero__overlay" />
        <div className="hero__content">
          <span className="hero__tag fade-up fade-up--d1">Partnerships</span>
          <h1 className="hero__heading fade-up fade-up--d2">Let's Build Something<br />That Works.</h1>
          <p className="hero__para fade-up fade-up--d3">
            Whether you're a founder, an established business, or a strategic collaborator — there's a way for us to create value together.
          </p>
          <div className="hero__cta fade-up fade-up--d4">
            <Link to="/contact" className="btn btn-primary">Start a Conversation <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* THREE TRACKS */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header reveal">
            <div className="gold-rule" style={{ margin: '0 auto 1.2rem' }} />
            <span className="section-label">Who We Work With</span>
            <h2 className="section-title">Three Ways to Engage.</h2>
            <p className="section-lead">We've built structured pathways for different types of partners. Find the one that fits you.</p>
          </div>
          <div className="three-col">
            {tracks.map((t, i) => (
              <div key={t.title} className="pcard reveal" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="icon-box"><t.icon size={22} /></div>
                <span className="sector-tag" style={{ marginBottom: '1rem', alignSelf: 'flex-start' }}>{t.tag}</span>
                <h3 style={{ color: '#0D1B2A', marginBottom: '1rem', fontSize: '1.4rem' }}>{t.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#6B7280', marginBottom: '1.5rem', flex: 1 }}>{t.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                  {t.points.map(p => (
                    <div key={p} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={15} style={{ color: '#C9A227', flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.84rem', color: '#374151' }}>{p}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-outline" style={{ justifyContent: 'center' }}>
                  {t.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP PROCESS */}
      <section className="section section--navy">
        <div className="container">
          <div className="section-header reveal">
            <div className="gold-rule" style={{ margin: '0 auto 1.2rem' }} />
            <span className="section-label">How It Works</span>
            <h2 className="section-title section-title--white">From First Contact to Full Partnership.</h2>
            <p className="section-lead" style={{ color: 'rgba(255,255,255,0.6)', margin: '0 auto' }}>
              A clear, structured process so you always know where you stand.
            </p>
          </div>
          <div className="process-steps">
            {process.map(p => (
              <div key={p.num} className="step reveal">
                <div className="step__num">{p.num}</div>
                <h4 style={{ color: '#fff', marginBottom: '0.6rem' }}>{p.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.86rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      {/* <section className="section section--ivory">
        <div className="container">
          <div className="two-col">
            <div className="reveal">
              <div className="gold-rule" />
              <span className="section-label">What You Get</span>
              <h2 className="section-title">The SEGIS Difference.</h2>
              <p style={{ marginBottom: '2rem' }}>
                When you work with SEGIS, you're not just getting a cheque or a slide deck.
                You're getting a team of experienced operators who are personally invested in your success.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Start a Conversation <ArrowRight size={16} />
              </Link>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {benefits.map(b => (
                <div key={b} style={{ background: '#fff', border: '1px solid #E8E4DC', borderRadius: '6px', padding: '1.2rem 1.4rem', display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={15} style={{ color: '#C9A227', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.82rem', color: '#374151', lineHeight: 1.55 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* FEATURE IMAGE */}
      <div style={{ height: '420px', overflow: 'hidden', position: 'relative' }}>
        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&q=80"
          alt="Partnership" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,27,42,0.8) 0%, rgba(13,27,42,0.3) 60%, transparent 100%)', display: 'flex', alignItems: 'center' }}>
          <div className="container">
            <blockquote style={{ maxWidth: '560px' }}>
              <p style={{ fontFamily: 'Sora,sans-serif', fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: '1rem' }}>
                "We don't just write cheques.<br />We build alongside you."
              </p>
              <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A227' }}>— SEGIS Leadership</span>
            </blockquote>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__inner reveal">
            <h2>Ready to Build Together?</h2>
            <p>Take the first step. Tell us about your business and what you're looking to achieve.</p>
            <div className="cta-banner__btns">
              <Link to="/contact" className="btn btn-primary">Get in Touch <ArrowRight size={16} /></Link>
              <Link to="/about" className="btn btn-outline-white">Learn About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
