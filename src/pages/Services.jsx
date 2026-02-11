import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config.js';

const c = config.colors;

const Services = () => (
  <>
    {/* Page header — dark */}
    <section style={{
      padding: '10rem 1.5rem 4rem', background: c.darkBg, textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 80%, ${c.accent}08, transparent 60%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: c.accent, marginBottom: '0.6rem' }}>What We Do</div>
        <h1 style={{ fontFamily: `'Playfair Display', serif`, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff' }}>
          Our <em style={{ color: c.accent, fontStyle: 'italic' }}>Services</em>
        </h1>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.8rem', maxWidth: 550, margin: '0.8rem auto 0' }}>
          {config.servicesSubtitle || 'Professional solutions tailored to your needs. Every job done right the first time.'}
        </p>
      </div>
    </section>

    {/* Services grid — white */}
    <section style={{ padding: '5rem 1.5rem', background: c.bodyBg }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.8rem' }}>
          {config.services.map((svc, i) => (
            <div key={i} className="card" style={{ padding: '2.2rem', position: 'relative' }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                background: c.accent, borderRadius: '16px 16px 0 0',
                opacity: 0.8,
              }} />
              <div style={{
                width: 56, height: 56, borderRadius: 14, background: `${c.accent}10`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem',
                marginBottom: '1.2rem',
              }}>
                {svc.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.6rem', color: c.darkBg }}>{svc.title}</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: c.mutedText, marginBottom: '1rem' }}>{svc.description}</p>
              {svc.features && (
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {svc.features.map((f, j) => (
                    <li key={j} style={{ fontSize: '0.85rem', color: c.mutedText, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: c.accent, fontWeight: 700, fontSize: '0.9rem' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Service areas */}
    <section style={{ padding: '4rem 1.5rem', background: c.lightBg }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <div className="section-label">Proudly Serving</div>
        <h2 className="section-title" style={{ fontSize: '2rem' }}>{config.areasTitle || <>Our Service <em>Areas</em></>}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.8rem', marginTop: '2rem' }}>
          {config.serviceAreas.map((area, i) => (
            <div key={i} style={{
              padding: '0.7rem 1rem', borderRadius: 10, background: '#fff',
              border: `1px solid ${c.borderLight}`, fontSize: '0.9rem', fontWeight: 500, color: c.darkBg,
            }}>
              📍 {area}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ padding: '4rem 1.5rem', background: c.darkBg, textAlign: 'center' }}>
      <h2 style={{ fontFamily: `'Playfair Display', serif`, fontSize: '2rem', color: '#fff', marginBottom: '0.8rem' }}>
        Need a <em style={{ color: c.accent, fontStyle: 'italic' }}>Quote</em>?
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>Free estimates, no obligation. Let's talk about your project.</p>
      <Link to="/contact" className="btn-accent">Get Free Estimate</Link>
    </section>
  </>
);

export default Services;
