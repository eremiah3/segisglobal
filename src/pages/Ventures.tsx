import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import PageTransition from '../components/PageTransition'
import { useReveal } from '../utils/useReveal'
import '../styles/globals.scss'

const active = [
  { name: 'TradeLink Africa', sector: 'Logistics & Trade', stage: 'Growth', desc: 'A cross-border trade facilitation platform connecting African SMEs to regional and international markets. Operating in 6 countries with 2,000+ active merchants.', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80' },
  { name: 'Meridian Consumer Brands', sector: 'Consumer & Lifestyle', stage: 'Scale', desc: 'A portfolio of premium consumer brands built for Africa\'s rising middle class. Spanning food, personal care, and household products across West and East Africa.', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=700&q=80' },
  { name: 'Apex Digital Solutions', sector: 'Technology', stage: 'Expansion', desc: 'A B2B SaaS company providing enterprise resource planning and financial management tools purpose-built for African businesses.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80' },
]

const building = [
  { name: 'Project Clarity', sector: 'Impact / EdTech', status: 'In Development', desc: 'A vocational training and credentialing platform designed to close the skills gap for Africa\'s young workforce.' },
  { name: 'GreenCore Energy', sector: 'Infrastructure', status: 'Pre-Launch', desc: 'Distributed renewable energy solutions for commercial and industrial clients across Sub-Saharan Africa.' },
  { name: 'CityMart Retail', sector: 'Consumer', status: 'Pilot Stage', desc: 'A modern convenience retail chain bringing quality products and a premium experience to underserved urban markets.' },
]

const interests = [
  { area: 'Fintech & Payments', note: 'Particularly payment infrastructure and embedded finance for underbanked populations.' },
  { area: 'AgriTech', note: 'Businesses improving yield, reducing waste, or creating market access for smallholder farmers.' },
  { area: 'Healthcare Access', note: 'Scalable health service delivery and health product distribution at the base of the pyramid.' },
  { area: 'Media & Entertainment', note: 'Content businesses leveraging African IP for both domestic and global audiences.' },
]

export default function Ventures() {
  useReveal()
  return (
    <PageTransition>
      <Helmet>
        <title>Our Ventures | SEGIS Global Investment</title>

        <meta name="description" content="Explore SEGIS Global Investment’s portfolio of ventures—active businesses, emerging opportunities, and scalable platforms built across Africa for long-term growth." />

        <link rel="canonical" href="https://segisglobal.com/ventures" />

        {/* <!-- Open Graph --> */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SEGIS Global Investment" />
        <meta property="og:url" content="https://segisglobal.com/ventures" />
        <meta property="og:title" content="Our Ventures | SEGIS Global Investment" />
        <meta property="og:description" content="Discover the ventures SEGIS has built and backed—from cross-border platforms to consumer brands shaping Africa’s next phase of growth." />

        {/* <!-- FIXED: absolute URL --> */}
        <meta property="og:image" content="https://segisglobal.com/OGimage.png" />
        <meta property="og:image:secure_url" content="https://segisglobal.com/OGimage.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Ventures | SEGIS Global Investment" />
        <meta name="twitter:description" content="A portfolio of scalable ventures across Africa—built for impact and long-term value." />
        <meta name="twitter:image" content="https://segisglobal.com/OGimage.png" />
      </Helmet>
      {/* HERO */}
      <section className="hero hero--inner">
        <div className="hero__bg" style={{ backgroundImage: 'url(/images/venture.jpeg)' }} />
        <div className="hero__overlay" />
        <div className="hero__content">
          <span className="hero__tag fade-up fade-up--d1">Our Portfolio</span>
          <h1 className="hero__heading fade-up fade-up--d2">Built. Building. Expanding.</h1>
          <p className="hero__para fade-up fade-up--d3">
            A growing portfolio of businesses created, co-built, and backed by SEGIS — each one a testament to our execution-first philosophy.
          </p>
        </div>
      </section>

      {/* ACTIVE VENTURES */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header reveal">
            <div className="gold-rule" style={{ margin: '0 auto 1.2rem' }} />
            <span className="section-label">Active Portfolio</span>
            <h2 className="section-title">Current Ventures.</h2>
            <p className="section-lead">Businesses we've built or backed that are operating and scaling today.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {active.map((v, i) => (
              <div key={v.name} className={`reveal venture-card ${i % 2 === 0 ? 'venture-card--normal' : 'venture-card--reverse'}`}>
                <div className="venture-content">
                  <div style={{ display: 'flex', gap: '0.7rem', marginBottom: '1.4rem', alignItems: 'center' }}>
                    <span className="sector-tag">{v.sector}</span>
                    <span style={{ background: 'rgba(14,95,52,0.08)', border: '1px solid rgba(14,95,52,0.2)', color: '#0e5f34', borderRadius: '2px', padding: '0.3rem 0.75rem', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'DM Sans,sans-serif' }}>{v.stage}</span>
                  </div>
                  <h3 style={{ color: '#0D1B2A', marginBottom: '1rem' }}>{v.name}</h3>
                  <p style={{ color: '#374151', marginBottom: '1.8rem' }}>{v.desc}</p>
                  <a href="#" className="btn btn-outline" style={{ fontSize: '0.82rem' }}>
                    Learn More <ExternalLink size={13} />
                  </a>
                </div>
                <div className="venture-image">
                  <img src={v.img} alt={v.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '320px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN DEVELOPMENT */}
      <section className="section section--ivory">
        <div className="container">
          <div className="section-header reveal">
            <div className="gold-rule" style={{ margin: '0 auto 1.2rem' }} />
            <span className="section-label">Pipeline</span>
            <h2 className="section-title">In Development.</h2>
            <p className="section-lead">Ventures currently being built, piloted, or prepared for launch.</p>
          </div>
          <div className="three-col">
            {building.map(v => (
              <div key={v.name} className="pcard reveal">
                <span style={{ display: 'inline-block', background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.25)', borderRadius: '2px', padding: '0.3rem 0.7rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#A8851E', fontFamily: 'DM Sans,sans-serif', marginBottom: '1.2rem' }}>{v.status}</span>
                <h4 style={{ marginBottom: '0.5rem', color: '#0D1B2A' }}>{v.name}</h4>
                <span className="section-label" style={{ marginBottom: '0.8rem', display: 'block', fontSize: '0.68rem' }}>{v.sector}</span>
                <p style={{ fontSize: '0.88rem', color: '#6B7280' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC INTERESTS */}
      <section className="section section--white">
        <div className="container">
          <div className="two-col">
            <div className="reveal">
              <div className="gold-rule" />
              <span className="section-label">Strategic Interests</span>
              <h2 className="section-title">Where We're Looking Next.</h2>
              <p>
                Beyond our current portfolio, we're actively seeking opportunities in these areas.
                If you're building in these spaces, we want to hear from you.
              </p>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {interests.map(item => (
                <div key={item.area} style={{ background: '#FAF8F3', border: '1px solid #E8E4DC', borderRadius: '6px', padding: '1.5rem 1.8rem' }}>
                  <h4 style={{ color: '#0D1B2A', marginBottom: '0.5rem', fontSize: '1rem' }}>{item.area}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#6B7280', margin: 0 }}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', height: '220px', overflow: 'hidden' }}>
        {[
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=70',
          'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=70',
          'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&q=70',
          'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&q=70',
          'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=70',
        ].map((src, i) => (
          <div key={i} style={{ overflow: 'hidden' }}>
            <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
          </div>
        ))}
      </div> */}

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__inner reveal">
            <h2>Have a Business We Should Know About?</h2>
            <p>We're always open to conversations with exceptional founders and operators building in our focus areas.</p>
            <div className="cta-banner__btns">
              <Link to="/work-with-us" className="btn btn-primary">Work With Us <ArrowRight size={16} /></Link>
              <Link to="/contact" className="btn btn-outline-white">Start a Conversation</Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
