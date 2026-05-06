import {
  ArrowRight,
  Building2,
  Cpu,
  Package,
  Briefcase,
  TrendingUp,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition";
import { useReveal } from "../utils/useReveal";
import "../styles/globals.scss";

const services = [
  {
    icon: TrendingUp,
    title: "Venture Creation",
    desc: "We build businesses from the ground up — identifying opportunities, building teams, and executing with discipline.",
  },
  {
    icon: Briefcase,
    title: "Strategic Partnerships",
    desc: "We partner with established companies and entrepreneurs to co-create growth strategies that deliver measurable results.",
  },
  {
    icon: Globe,
    title: "Selective Investments",
    desc: "Capital deployed into high potential companies across Africa and emerging markets where we see outsized opportunity.",
  },
  {
    icon: Building2,
    title: "Business Advisory",
    desc: "Expert guidance for businesses at critical inflection points — expansion, restructuring, or positioning for scale.",
  },
];

const sectors = [
  {
    icon: Cpu,
    name: "Technology & Digital",
    desc: "Platforms, fintech, and digital infrastructure driving Africa's next economy.",
  },
  {
    icon: Package,
    name: "Consumer & Lifestyle",
    desc: "FMCG, retail, and lifestyle brands built for the growing African middle class.",
  },
  {
    icon: Building2,
    name: "Infrastructure",
    desc: "Long-horizon plays in energy, real estate, and industrial development.",
  },
  {
    icon: Globe,
    name: "Logistics & Trade",
    desc: "Cross border commerce solutions and supply chain modernisation.",
  },
  {
    icon: TrendingUp,
    name: "Creative Economy",
    desc: "Media, entertainment, and creator driven businesses with global reach.",
  },
  {
    icon: Briefcase,
    name: "Impact Ventures",
    desc: "Businesses with strong social return education, healthcare, agriculture.",
  },
];

// const stats = [
//   { value: "$500M+", label: "Capital Deployed" },
//   { value: "40+", label: "Portfolio Ventures" },
//   { value: "12+", label: "African Markets" },
//   { value: "98%", label: "Partner Retention" },
// ];

const whys = [
  "Deep-rooted networks across African markets",
  "End-to-end execution not just capital",
  "Sector expertise paired with local insight",
  "Long-term partnership, not transactional deals",
  "Transparent, principled governance",
  "Track record of building and scaling businesses",
];

const testimonials = [
  {
    quote:
      "SEGIS brought more than capital they brought conviction. They understood our market before we even pitched them.",
    name: "Adebayo O.",
    role: "Founder, Fintech Startup",
    initial: "A",
  },
  {
    quote:
      "The strategic value SEGIS adds to our partnership is unmatched. They think long-term and execute with precision.",
    name: "Chioma E.",
    role: "CEO, Consumer Brand",
    initial: "C",
  },
  {
    quote:
      "Working with SEGIS opened doors we didn't even know existed. Their network is extraordinary.",
    name: "Kwame A.",
    role: "MD, Logistics Company",
    initial: "K",
  },
];

export default function Home() {
  useReveal();

  return (
    <PageTransition>
      <Helmet>
        <title>SEGIS Global Investment | Strategic Capital for Africa’s Next Generation of Ventures</title>

        <meta name="description" content="SEGIS Global Investment builds, funds, and scales high impact ventures across Africa and global markets. Partner with us to unlock long-term growth and strategic opportunities." />

        <link rel="canonical" href="https://segisglobal.com/" />

        {/* <!-- Open Graph --> */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SEGIS Global Investment" />
        <meta property="og:url" content="https://segisglobal.com/" />
        <meta property="og:title" content="SEGIS Global Investment | Strategic Capital. Long-Term Partnership." />
        <meta property="og:description" content="We partner with bold ideas to build and scale high impact ventures across Africa." />

        {/* <!-- FIXED: absolute URL --> */}
        <meta property="og:image" content="https://segisglobal.com/OGimage.png" />
        <meta property="og:image:secure_url" content="https://segisglobal.com/OGimage.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEGIS Global Investment | Strategic Capital. Long-Term Partnership." />
        <meta name="twitter:description" content="Building and scaling high impact ventures across Africa and beyond." />
        <meta name="twitter:image" content="https://segisglobal.com/OGimage.png" />
      </Helmet>
      {/* HERO */}
      <section className="hero hero--full">
        <div
          className="hero__bg"
          style={{
            backgroundImage: "url(/images/home.jpeg)",
            imageRendering: "auto",
            imageResolution: "1dppx",
            objectFit: "cover",
          }}
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <span className="hero__tag fade-up fade-up--d1">
            SEGIS Global Investment
          </span>
          <h1 className="hero__heading fade-up fade-up--d2">
            We Build.
             <br />
            We Partner.
            <br />
            We Scale.
          </h1>
          <p className="hero__para fade-up fade-up--d3">
            A trading and investment company creating and executing high value
            business opportunities across Africa and beyond.
          </p>
          <div className="hero__cta fade-up fade-up--d4">
            <a href="/what-we-do" className="btn btn-primary">
              Explore What We Do <ArrowRight size={16} />
            </a>
            <a href="/work-with-us" className="btn btn-outline-white">
              Work With Us
            </a>
          </div>
        </div>
        {/* <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div> */}
      </section>

      {/* WHO WE ARE */}
      <section className="section section--white">
        <div className="container">
          <div className="two-col">
            <div className="reveal">
              <div className="gold-rule" />
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">
                Built on Execution.
                <br />
                Driven by Opportunity.
              </h2>
              <p style={{ marginBottom: "1.2rem" }}>
                SEGIS Global Investment is a trading and investment company that
                identifies, builds, and scales high value business opportunities
                across Africa and international markets.
              </p>
              <p style={{ marginBottom: "2rem" }}>
                We don't just invest — we execute. From venture creation to
                strategic partnerships, our approach combines capital,
                expertise, and an extensive network to create lasting commercial
                value.
              </p>
              <a href="/about" className="btn btn-outline">
                Our Full Story <ArrowRight size={16} />
              </a>
            </div>
            <div
              className="reveal home-values-grid"
              style={{
                display: "grid",
                gap: "1.2rem",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              {[
                {
                  n: "01",
                  t: "Our Mission",
                  d: "Creating high value business opportunities that endure.",
                },
                {
                  n: "02",
                  t: "Our Vision",
                  d: "To be Africa's most trusted execution-led investment firm.",
                },
                {
                  n: "03",
                  t: "Our Edge",
                  d: "We bring capital, networks, and hands-on operational expertise.",
                },
                {
                  n: "04",
                  t: "Our Values",
                  d: "Integrity, excellence, long-term thinking, and impact.",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{
                    background: "#FAF8F3",
                    border: "1px solid #E8E4DC",
                    borderRadius: "6px",
                    padding: "1.6rem 1.4rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Sora,sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "#C9A227",
                      display: "block",
                      marginBottom: "0.7rem",
                    }}
                  >
                    {item.n}
                  </span>
                  <h4
                    style={{
                      fontSize: "0.95rem",
                      marginBottom: "0.5rem",
                      color: "#0D1B2A",
                    }}
                  >
                    {item.t}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.83rem",
                      color: "#6B7280",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
      // style={{
      //   background: "#F5F6F8",
      //   borderTop: "1px solid #E8E4DC",
      //   borderBottom: "1px solid #E8E4DC",
      // }}
      >
        {/* <div
          className="container"
          style={{ padding: "0 clamp(1.2rem, 4vw, 3.5rem)" }}
        >
          <div className="stats-row">
            {stats.map((s) => (
              <div key={s.label} className="stat-block reveal">
                <span className="stat-block__value">{s.value}</span>
                <span className="stat-block__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div> */}
      </section>

      {/* WHAT WE DO */}
      <section className="section section--ivory">
        <div className="container">
          <div className="section-header reveal">
            <div className="gold-rule" style={{ margin: "0 auto 1.2rem" }} />
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Execution Is Everything.</h2>
            <p className="section-lead">
              Four integrated capabilities that create value at every stage of
              the business lifecycle.
            </p>
          </div>
          <div className="four-col">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="pcard reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="icon-box">
                  <s.icon size={22} />
                </div>
                <h4 style={{ marginBottom: "0.7rem" }}>{s.title}</h4>
                <p style={{ fontSize: "0.9rem", color: "#6B7280" }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div
            className="reveal"
            style={{ textAlign: "center", marginTop: "3rem" }}
          >
            <a href="/what-we-do" className="btn btn-outline">
              See How We Work <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* IMAGE STRIP */}
      {/* <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          height: "280px",
          overflow: "hidden",
        }}
      >
        {[
          {
            src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
            label: "Glass skyscrapers — ambition & scale",
          },
          {
            src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&q=80",
            label: "Aerial city at night — global reach",
          },
          {
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
            label: "Executive portrait — leadership",
          },
          {
            src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
            label: "Trading data — investment intelligence",
          },
        ].map((img, i) => (
          <div key={i} style={{ overflow: "hidden", position: "relative" }}>
            <img
              src={img.src}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.06)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
        ))}
      </div> */}

      {/* FOCUS SECTORS */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header reveal">
            <div className="gold-rule" style={{ margin: "0 auto 1.2rem" }} />
            <span className="section-label">Focus Sectors</span>
            <h2 className="section-title">Focused on What Works.</h2>
            <p className="section-lead">
              Six carefully chosen sectors where we have the depth, networks,
              and conviction to win.
            </p>
          </div>
          <div className="three-col">
            {sectors.map((s, i) => (
              <div
                key={s.name}
                className="reveal pcard"
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    marginBottom: "0.3rem",
                  }}
                >
                  <div
                    className="icon-box"
                    style={{ marginBottom: 0, width: 44, height: 44 }}
                  >
                    <s.icon size={18} />
                  </div>
                  <h4 style={{ fontSize: "1rem" }}>{s.name}</h4>
                </div>
                <p style={{ fontSize: "0.88rem", color: "#6B7280" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div
            className="reveal"
            style={{ textAlign: "center", marginTop: "3rem" }}
          >
            <a href="/focus-areas" className="btn btn-outline">
              Explore All Sectors <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* WHY SEGIS */}
      <section className="section section--ivory">
        <div className="container">
          <div className="two-col">
            <div className="reveal">
              <img
                src="https://img.freepik.com/premium-photo/why-choose-us_220873-5582.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Executive meeting"
                style={{
                  width: "100%",
                  height: "480px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />
            </div>
            <div className="reveal">
              <div className="gold-rule" />
              <span className="section-label">Why Choose SEGIS</span>
              <h2 className="section-title" style={{ marginBottom: "2rem" }}>
                Partners Who Execute,
                <br />
                Not Just Advise.
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                  marginBottom: "2.5rem",
                }}
              >
                {whys.map((w) => (
                  <div
                    key={w}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.8rem",
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      style={{
                        color: "#C9A227",
                        flexShrink: 0,
                        marginTop: "3px",
                      }}
                    />
                    <span style={{ fontSize: "0.92rem", color: "#374151" }}>
                      {w}
                    </span>
                  </div>
                ))}
              </div>
              <a href="/work-with-us" className="btn btn-primary">
                Work With Us <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header reveal">
            <div className="gold-rule" style={{ margin: "0 auto 1.2rem" }} />
            <span className="section-label">Client Voices</span>
            <h2 className="section-title">What Partners Say.</h2>
          </div>
          <div className="three-col">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card reveal">
                <div className="testimonial-card__quote">"</div>
                <p>{t.quote}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.initial}</div>
                  <div className="testimonial-card__author-info">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      {/* <div className="trust-bar">
        <div className="container">
          <div className="trust-bar__inner">
            <span className="trust-bar__label">Active Across</span>
            <div className="trust-bar__logos">
              {[
                "Nigeria",
                "Ghana",
                "Kenya",
                "South Africa",
                "Egypt",
                "Rwanda",
                "UK",
                "UAE",
              ].map((m) => (
                <span key={m} className="trust-bar__logo">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__inner reveal">
            <span
              className="section-label"
              style={{
                color: "#C9A227",
                textAlign: "center",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Ready to Start?
            </span>
            <h2>Let's Build Something That Works.</h2>
            <p>
              Whether you're a founder, a business seeking growth, or a
              strategic partner we want to hear from you.
            </p>
            <div className="cta-banner__btns">
              <a href="/contact" className="btn btn-primary">
                Start the Conversation <ArrowRight size={16} />
              </a>
              <a href="/work-with-us" className="btn btn-outline-white">
                Work With Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
