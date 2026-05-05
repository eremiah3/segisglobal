import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, ShoppingBag, Building2, Package, Music, Leaf } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import PageTransition from '../components/PageTransition'
import { useReveal } from '../utils/useReveal'
import '../styles/globals.scss'

const sectors = [
  {
    icon: Cpu,
    name: 'Technology & Digital',
    tag: 'High Growth',
    desc: 'Africa\'s digital economy is accelerating. We back platforms, fintech solutions, and digital infrastructure businesses that are building the rails of tomorrow\'s economy.',
    focus: ['Fintech & Payments', 'SaaS & Platforms', 'Digital Infrastructure', 'E-commerce Enablement'],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  },
  {
    icon: ShoppingBag,
    name: 'Consumer & Lifestyle',
    tag: 'Rising Demand',
    desc: 'Africa\'s growing middle class is creating extraordinary demand for quality consumer goods and lifestyle experiences. We build and back brands positioned to capture this wave.',
    focus: ['FMCG & Food Brands', 'Retail & Distribution', 'Health & Wellness', 'Fashion & Beauty'],
    img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80',
  },
  {
    icon: Building2,
    name: 'Infrastructure',
    tag: 'Long-Term Value',
    desc: 'The infrastructure deficit across Africa represents one of the continent\'s greatest investment opportunities. We participate in real estate, energy, and industrial development.',
    focus: ['Commercial Real Estate', 'Affordable Housing', 'Renewable Energy', 'Industrial Parks'],
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    icon: Package,
    name: 'Logistics & Trade',
    tag: 'Structural Growth',
    desc: 'Cross-border trade is transforming as AfCFTA opens new corridors. We invest in businesses that modernise supply chains and enable intra-African and international commerce.',
    focus: ['Last-Mile Delivery', 'Cross-Border Trade', 'Warehousing & Fulfilment', 'Trade Finance'],
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  },
  {
    icon: Music,
    name: 'Creative Economy',
    tag: 'Global Moment',
    desc: 'African creative talent is commanding global audiences. We invest in media, entertainment, and creator-driven businesses that leverage Africa\'s cultural capital at scale.',
    focus: ['Music & Entertainment', 'Media & Publishing', 'Creator Platforms', 'Sports & Events'],
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
  },
  {
    icon: Leaf,
    name: 'Impact Ventures',
    tag: 'Mission-Aligned',
    desc: 'Businesses with strong social and environmental impact are among our most exciting opportunities. We believe commercial returns and positive impact are not in conflict — they are complementary.',
    focus: ['AgriTech & Food Security', 'EdTech & Skills', 'HealthTech & Access', 'Clean Energy'],
    img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80',
  },
]

const opportunities = [
  { stat: '$180B', label: 'African Digital Economy by 2025' },
  { stat: '1.4B', label: 'Consumer Population by 2030' },
  { stat: '$3.4T', label: 'Infrastructure Investment Needed' },
  { stat: '60%', label: 'Population Under 25 Years Old' },
]

export default function FocusAreas() {
  useReveal()
  return (
    <PageTransition>
      <Helmet>
        <title>Our Focus Areas | SEGIS Global Investment</title>

        <meta name="description" content="SEGIS Global Investment focuses on six high-conviction sectors including technology, consumer brands, infrastructure, logistics, the creative economy, and impact ventures—driving growth across Africa." />

        <link rel="canonical" href="https://segisglobal.com/focus-areas" />

        {/* <!-- Open Graph --> */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SEGIS Global Investment" />
        <meta property="og:url" content="https://segisglobal.com/focus-areas" />
        <meta property="og:title" content="Where We Invest | SEGIS Global Investment" />
        <meta property="og:description" content="We invest across six high-growth sectors—from technology and consumer brands to infrastructure and the creative economy—backing Africa’s next generation of ventures." />

        {/* <!-- FIXED: absolute URL --> */}
        <meta property="og:image" content="https://segisglobal.com/images/OGimage.png" />
        <meta property="og:image:secure_url" content="https://segisglobal.com/images/OGimage.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Where We Invest | SEGIS Global Investment" />
        <meta name="twitter:description" content="Backing high-growth sectors across Africa—from technology and logistics to infrastructure and creative industries." />
        <meta name="twitter:image" content="https://segisglobal.com/images/OGimage.png" />
      </Helmet>
      {/* HERO */}
      <section className="hero hero--inner">
        <div className="hero__bg" style={{ backgroundImage: 'url(/images/focusarea.jpeg)' }} />
        <div className="hero__overlay" />
        <div className="hero__content">
          <span className="hero__tag fade-up fade-up--d1">Sectors</span>
          <h1 className="hero__heading fade-up fade-up--d2">Focused on What Works.<br />Positioned for What's Next.</h1>
          <p className="hero__para fade-up fade-up--d3">
            Six sectors. Deep expertise. A conviction-driven approach to building and backing businesses across Africa.
          </p>
        </div>
      </section>

      {/* MARKET OPPORTUNITY */}
      {/* <section style={{ background: '#FAF8F3', borderBottom: '1px solid #E8E4DC' }}>
        <div className="container" style={{ padding: '3.5rem clamp(1.2rem, 4vw, 3.5rem)' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-label">The African Opportunity</span>
            <h3 style={{ color: '#0D1B2A', maxWidth: '600px', margin: '0 auto' }}>The numbers behind our conviction.</h3>
          </div>
          <div className="stats-row reveal">
            {opportunities.map(o => (
              <div key={o.label} className="stat-block">
                <span className="stat-block__value">{o.stat}</span>
                <span className="stat-block__label">{o.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* SECTOR CARDS */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header reveal">
            <div className="gold-rule" style={{ margin: '0 auto 1.2rem' }} />
            <span className="section-label">Our Six Focus Areas</span>
            <h2 className="section-title">Where We Invest Our Conviction.</h2>
            <p className="section-lead">
              Each sector has been chosen based on market size, structural tailwinds, and our ability to add real value beyond capital.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {sectors.map((s, i) => (
              <div key={s.name} className={`reveal sector-grid ${i % 2 === 0 ? 'sector-grid--normal' : 'sector-grid--reverse'}`}>
                <div className="sector-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="icon-box" style={{ marginBottom: 0 }}><s.icon size={22} /></div>
                    <span className="sector-tag">{s.tag}</span>
                  </div>
                  <h3 style={{ color: '#0D1B2A', marginBottom: '1rem' }}>{s.name}</h3>
                  <p style={{ marginBottom: '1.6rem', color: '#374151' }}>{s.desc}</p>
                  <div className="sector-focus-grid">
                    {s.focus.map(f => (
                      <div key={f} style={{ background: '#FAF8F3', border: '1px solid #E8E4DC', borderRadius: '4px', padding: '0.55rem 0.9rem', fontSize: '0.8rem', fontWeight: 600, color: '#374151', fontFamily: 'DM Sans,sans-serif' }}>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sector-image">
                  <img src={s.img} alt={s.name} style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '6px', display: 'block' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__inner reveal">
            <h2>Operating in One of Our Focus Areas?</h2>
            <p>We're actively looking for businesses and founders building in the sectors that define Africa's future.</p>
            <div className="cta-banner__btns">
              <Link to="/work-with-us" className="btn btn-primary">Work With Us <ArrowRight size={16} /></Link>
              <Link to="/contact" className="btn btn-outline-white">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
