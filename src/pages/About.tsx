import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Handshake, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition";
import { useReveal } from "../utils/useReveal";
import "../styles/globals.scss";

const values = [
  {
    icon: Hammer,
    title: "Build First",
    desc: "We develop and invest in our own ventures.",
  },
  {
    icon: Handshake,
    title: "Partner Strategically",
    desc: "We collaborate where alignment creates value.",
  },
  {
    icon: TrendingUp,
    title: "Invest Selectively",
    desc: "We engage external opportunities with proven potential.",
  },
];

const milestones = [
  {
    year: "2015",
    title: "Founded",
    desc: "SEGIS established in Lagos with a mandate to identify and execute high-value opportunities across African markets.",
  },
  {
    year: "2017",
    title: "First Major Exit",
    desc: "Successfully exited our first venture investment, establishing a track record and attracting institutional interest.",
  },
  {
    year: "2019",
    title: "Pan-African Expansion",
    desc: "Opened strategic offices and partnerships across East and Southern Africa, entering 8 new markets.",
  },
  {
    year: "2021",
    title: "International Reach",
    desc: "Extended operations to the UK and UAE, building bridges between African opportunities and global capital.",
  },
  {
    year: "2023",
    title: "Ventures Division Launch",
    desc: "Launched dedicated venture-building arm, allowing us to own and operate high-potential businesses from inception.",
  },
  {
    year: "2025",
    title: "Scale & Impact",
    desc: "Overseeing a diverse portfolio with operations in 12+ markets and a growing team of execution specialists.",
  },
];

export default function About() {
  useReveal();
  return (
    <PageTransition>
      <Helmet>
        <title>About SEGIS Global Investment | Our Story, Vision & Investment Approach</title>
        <meta name="description" content="Founded in 2015, SEGIS Global Investment builds, funds, and scales high-impact ventures across Africa. Discover our story, expertise, and long-term commitment to transformative growth." />
        <link rel="canonical" href="https://segisglobal.com/about" />


        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SEGIS Global Investment" />
        <meta property="og:url" content="https://segisglobal.com/about" />
        <meta property="og:title" content="About SEGIS Global Investment" />
        <meta property="og:description" content="Since 2015, we have built and scaled ventures across Africa—combining deep expertise with a long-term investment vision." />


        <meta property="og:image" content="https://segisglobal.com/OGimage.png" />
        <meta property="og:image:secure_url" content="https://segisglobal.com/OGimage.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About SEGIS Global Investment" />
        <meta name="twitter:description" content="Building and scaling impactful ventures across Africa since 2015." />
        <meta name="twitter:image" content="https://segisglobal.com/OGimage.png" />
      </Helmet>
      {/* HERO */}
      <section className="hero hero--inner">
        <div
          className="hero__bg"
          style={{ backgroundImage: "url(/images/about.jpeg)" }}
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <span className="hero__tag fade-up fade-up--d1">Our Story</span>
          <h1 className="hero__heading fade-up fade-up--d2">
            Built on Execution.
            <br />
            Driven by Opportunity.
          </h1>
          <p className="hero__para fade-up fade-up--d3">
            A decade of building businesses, forging partnerships, and
            delivering results across Africa and beyond.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section section--white">
        <div className="container">
          <div className="two-col">
            <div className="reveal">
              <div className="gold-rule" />
              <span className="section-label">Our Story</span>
              <h2 className="section-title">
                Where We Started, Where We're Going.
              </h2>
              <p style={{ marginBottom: "1.2rem" }}>
                SEGIS Global Investment was founded on a simple thesis: Africa's
                most significant commercial opportunities are not found on
                spreadsheets — they are discovered through deep market
                relationships, relentless on-the-ground work, and a willingness
                to execute when others hesitate.
              </p>
              <p style={{ marginBottom: "1.2rem" }}>
                Our founders combined decades of experience across investment
                banking, entrepreneurship, and multinational operations to build
                a firm that bridges the gap between capital and execution.
              </p>
              <p>
                Today, SEGIS operates across 12+ markets with a growing
                portfolio of ventures, partnerships, and investments — each one
                built on the same foundation of conviction, discipline, and
                long-term thinking.
              </p>
            </div>
            <div className="reveal">
              <img
                src="https://plus.unsplash.com/premium_photo-1707155465527-c5a2935b21cc?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Business meeting"
                style={{
                  width: "100%",
                  height: "460px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section section--ivory">
        <div className="container">
          <div className="reveal mission-vision-grid">
            {[
              {
                label: "Our Mission",
                icon: "◈",
                text: "To identify, create, and execute high-value commercial opportunities across Africa and international markets — building businesses that generate lasting economic value and meaningful impact.",
              },
              {
                label: "Our Vision",
                icon: "◉",
                text: "To be the most trusted execution-led investment and ventures company in Africa — known for building businesses that endure, partnerships that last, and a standard of excellence that sets the benchmark.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="mission-vision-card"
                style={{
                  background: "#fff",
                  border: "1px solid #E8E4DC",
                  borderRadius: "6px",
                  padding: "3rem 2.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "1.8rem",
                    color: "#C9A227",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  {item.icon}
                </span>
                <span className="section-label">{item.label}</span>
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    color: "#374151",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header reveal">
            <div className="gold-rule" style={{ margin: "0 auto 1.2rem" }} />
            <span className="section-label">How We Operate</span>
            <h2 className="section-title">How We Operate.</h2>
          </div>
          <div className="three-col">
            {values.map((v) => (
              <div key={v.title} className="pcard reveal">
                <div className="icon-box">
                  <v.icon size={22} />
                </div>
                <h4 style={{ marginBottom: "0.7rem" }}>{v.title}</h4>
                <p style={{ fontSize: "0.9rem", color: "#6B7280" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP MINDSET */}
      {/* <section className="section section--ivory">
        <div className="container">
          <div className="two-col">
            <div className="reveal">
              <div className="gold-rule" />
              <span className="section-label">Leadership Mindset</span>
              <h2 className="section-title">How We Think About Leadership.</h2>
              <p style={{ marginBottom: "1.2rem" }}>
                At SEGIS, leadership is not a title — it's a commitment. We
                expect our partners and portfolio leaders to demonstrate
                conviction, accountability, and an unwavering orientation toward
                results.
              </p>
              <p style={{ marginBottom: "1.2rem" }}>
                We build teams that operate with the discipline of seasoned
                operators and the ambition of founders. This combination —
                discipline plus ambition — is the hallmark of every business we
                build or back.
              </p>
              <p>
                Our leadership model is collaborative, transparent, and deeply
                committed to developing the next generation of African business
                leaders.
              </p>
            </div>
            <div
              className="reveal"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              {[
                "We hire for character and capability equally.",
                "We build flat, accountable structures that move fast.",
                "We invest in talent development at every level.",
                "We lead with data but decide with conviction.",
              ].map((p) => (
                <div
                  key={p}
                  style={{
                    background: "#fff",
                    border: "1px solid #E8E4DC",
                    borderRadius: "6px",
                    padding: "1.4rem 1.6rem",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#C9A227",
                      fontWeight: 700,
                      fontFamily: "Sora,sans-serif",
                      fontSize: "1.2rem",
                      lineHeight: 1,
                    }}
                  >
                    →
                  </span>
                  <p style={{ fontSize: "0.92rem", color: "#374151" }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/*
      <section className="section section--white">
        <div className="container">
          <div className="section-header reveal">
            <div className="gold-rule" style={{ margin: "0 auto 1.2rem" }} />
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Key Milestones.</h2>
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "1px",
                background: "#E8E4DC",
                transform: "translateX(-50%)",
                zIndex: 0,
              }}
              className="hide-mobile"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2.5rem",
              }}
            >
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className="reveal"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "3rem",
                    alignItems: "center",
                  }}
                >
                  {i % 2 === 0 ? (
                    <>
                      <div style={{ textAlign: "right", paddingRight: "2rem" }}>
                        <span
                          style={{
                            fontFamily: "Sora,sans-serif",
                            fontSize: "2rem",
                            fontWeight: 800,
                            color: "#C9A227",
                          }}
                        >
                          {m.year}
                        </span>
                        <h4
                          style={{ color: "#0D1B2A", marginBottom: "0.5rem" }}
                        >
                          {m.title}
                        </h4>
                        <p style={{ fontSize: "0.88rem", color: "#6B7280" }}>
                          {m.desc}
                        </p>
                      </div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div style={{ paddingLeft: "2rem" }}>
                        <span
                          style={{
                            fontFamily: "Sora,sans-serif",
                            fontSize: "2rem",
                            fontWeight: 800,
                            color: "#C9A227",
                          }}
                        >
                          {m.year}
                        </span>
                        <h4
                          style={{ color: "#0D1B2A", marginBottom: "0.5rem" }}
                        >
                          {m.title}
                        </h4>
                        <p style={{ fontSize: "0.88rem", color: "#6B7280" }}>
                          {m.desc}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__inner reveal">
            <h2>Ready to Build With Us?</h2>
            <p>Explore how SEGIS can partner with your business or idea.</p>
            <div className="cta-banner__btns">
              <Link to="/work-with-us" className="btn btn-primary">
                Work With Us <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline-white">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
