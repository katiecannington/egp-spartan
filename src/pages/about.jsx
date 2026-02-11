import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config.js';

const c = config.colors;

const About = () => (
  <>
    {/* Page header — dark */}
    <section style={{
      padding: '10rem 1.5rem 4rem', background: c.darkBg, textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 80%, ${c.accent}08, transparent 60%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: c.accent, marginBottom: '0.6rem' }}>Who We Are</div>
        <h1 style={{ fontFamily: `'Playfair Display', serif`, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff' }}>
          About <em style={{ color: c.accent, fontStyle: 'italic' }}>{config.companyName}</em>
        </h1>
      </div>
    </section>

    {/* About content — white */}
    <section style={{ padding: '5rem 1.5rem', background: c.bodyBg }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>
              Your <em>{config.about?.accentWord || 'Success'}</em> is Our Priority
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: c.mutedText, marginBottom: '1.5rem' }}>
              {config.about?.description || config.tagline}
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: c.mutedText, marginBottom: '2rem' }}>
              {config.about?.description2 || `With years of experience serving the local community, ${config.companyName} has built a reputation on quality workmanship, honest pricing, and reliable service. We treat every job — big or small — with the same level of care and professionalism.`}
            </p>
            <Link to="/contact" className="btn-accent">Get in Touch</Link>
          </div>

          {/* Values / highlights */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
            {(config.about?.values || config.whyUs.slice(0, 4)).map((item, i) => (
              <div key={i} style={{
                padding: '1.5rem', borderRadius: 14, background: c.lightBg,
                border: `1px solid ${c.borderLight}`,
              }}>
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.6rem' }}>{item.icon}</span>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: c.darkBg, marginBottom: '0.3rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.82rem', color: c.mutedText, lineHeight: 1.55 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Stats band */}
    <section style={{ padding: '3.5rem 1.5rem', background: c.darkBg }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
        {config.stats?.map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: `'Playfair Display', serif`, fontSize: '2.5rem', color: c.accent }}>{stat.value}</div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.2rem' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section style={{ padding: '5rem 1.5rem', background: c.bodyBg, textAlign: 'center' }}>
      <h2 className="section-title" style={{ fontSize: '2rem' }}>Ready to Work <em>Together</em>?</h2>
      <p style={{ color: c.mutedText, marginBottom: '1.5rem', maxWidth: 500, margin: '0 auto 1.5rem' }}>
        We'd love to hear about your project. Reach out for a free, no-obligation estimate.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/contact" className="btn-accent">Contact Us</Link>
        <a href={`tel:${config.phoneClean}`} className="btn-dark">📞 {config.phone}</a>
      </div>
    </section>
  </>
);

export default About;
