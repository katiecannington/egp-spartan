import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config.js';

const c = config.colors;

const Home = () => (
  <>
    {/* ─── HERO — DARK ─── */}
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      background: c.darkBg,
    }}>
      {/* Background gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 30% 50%, ${c.accent}12, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.03), transparent 50%)`,
        pointerEvents: 'none',
      }} />

      {/* Decorative accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)`,
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '8rem 1.5rem 4rem', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 500px' }}>
            {config.hero.badge && (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 500,
                color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem',
                animation: 'fadeUp 0.6s ease both',
              }}>
                {config.hero.badge}
              </div>
            )}

            <h1 style={{
              fontFamily: `'Playfair Display', serif`, fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              lineHeight: 1.08, color: '#fff', marginBottom: '1.2rem',
              animation: 'fadeUp 0.8s ease both',
            }}>
              {config.hero.headline.split(config.hero.accentWord || '').map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>{part}<em style={{ color: c.accent, fontStyle: 'italic' }}>{config.hero.accentWord}</em></span>
                ) : <span key={i}>{part}</span>
              )}
            </h1>

            <p style={{
              fontSize: '1.1rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.55)',
              marginBottom: '2rem', maxWidth: 520,
              animation: 'fadeUp 1s ease both',
            }}>
              {config.hero.subheadline}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeUp 1.2s ease both' }}>
              <Link to="/contact" className="btn-accent">{config.hero.ctaText}</Link>
              <a href={`tel:${config.phoneClean}`} className="btn-outline-light">
                📞 {config.hero.emergencyText || 'Call Now'}
              </a>
            </div>

            {config.trustBadges && (
              <div style={{ display: 'flex', gap: '1.8rem', marginTop: '2.5rem', flexWrap: 'wrap', animation: 'fadeUp 1.4s ease both' }}>
                {config.trustBadges.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                    <span style={{ fontSize: '1.1rem' }}>{b.icon}</span>
                    <span style={{ fontWeight: 500 }}>{b.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Stats cards on right */}
          <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {config.stats?.map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16, padding: '1.4rem 2rem', textAlign: 'center', minWidth: 170,
                animation: `fadeUp ${1 + i * 0.2}s ease both`,
                backdropFilter: 'blur(10px)',
              }}>
                <div style={{ fontFamily: `'Playfair Display', serif`, fontSize: '2.2rem', color: c.accent, lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.3rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar at bottom of hero */}
      {config.statsBar && (
        <div style={{
          background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '1.5rem 0', marginTop: 'auto',
        }}>
          <div style={{
            maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem',
            display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem',
          }}>
            {config.statsBar.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: `'Playfair Display', serif`, fontSize: '1.6rem', color: '#fff', fontWeight: 700 }}>{s.value}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>

    {/* ─── SERVICES PREVIEW — WHITE ─── */}
    <section style={{ padding: '6rem 1.5rem', background: c.bodyBg }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="section-label">What We Do</div>
            <h2 className="section-title">{config.servicesTitle || <>Our <em>Services</em></>}</h2>
          </div>
          <Link to="/services" className="btn-dark" style={{ fontSize: '0.85rem' }}>View All Services →</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {config.services.slice(0, 3).map((svc, i) => (
            <div key={i} className="card" style={{ padding: '2rem' }}>
              <div style={{
                width: 52, height: 52, borderRadius: 12, background: `${c.accent}12`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                marginBottom: '1.2rem',
              }}>
                {svc.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: c.darkBg }}>{svc.title}</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: c.mutedText }}>{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── WHY US — LIGHT ACCENT BG ─── */}
    <section style={{ padding: '6rem 1.5rem', background: c.lightBg }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label">The Difference</div>
          <h2 className="section-title">{config.whyTitle || <>Why Choose <em>Us</em></>}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {config.whyUs.map((item, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '2rem 1.5rem', borderRadius: 16, background: '#fff', border: `1px solid ${c.borderLight}` }}>
              <div style={{
                width: 60, height: 60, borderRadius: '50%', background: `${c.accent}10`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem',
                fontSize: '1.5rem',
              }}>
                {item.icon}
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: c.darkBg }}>{item.title}</h4>
              <p style={{ fontSize: '0.85rem', color: c.mutedText, lineHeight: 1.6 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── REVIEWS PREVIEW ─── */}
    <section style={{ padding: '6rem 1.5rem', background: c.bodyBg }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="section-label">Trusted by Locals</div>
            <h2 className="section-title">What Our <em>Customers</em> Say</h2>
          </div>
          <Link to="/reviews" className="btn-dark" style={{ fontSize: '0.85rem' }}>All Reviews →</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {config.testimonials.slice(0, 3).map((rev, i) => (
            <div key={i} className="card" style={{ padding: '2rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 8, left: 18, fontFamily: `'Playfair Display', serif`, fontSize: '4rem', color: `${c.accent}15`, lineHeight: 1 }}>"</div>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '0.8rem' }}>
                {Array.from({ length: rev.rating || 5 }).map((_, j) => (
                  <span key={j} style={{ color: '#f59e0b', fontSize: '0.95rem' }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: '0.93rem', lineHeight: 1.7, color: c.mutedText, fontStyle: 'italic', marginBottom: '1.2rem' }}>
                "{rev.quote}"
              </p>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: c.darkBg }}>{rev.author}</div>
              <div style={{ fontSize: '0.8rem', color: c.mutedText }}>{rev.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── CTA BAND — DARK ─── */}
    <section style={{
      padding: '4rem 1.5rem', background: c.darkBg,
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <h2 style={{ fontFamily: `'Playfair Display', serif`, fontSize: '2rem', color: '#fff', marginBottom: '0.8rem' }}>
          {config.ctaBand?.headline || <>Ready to Get <em style={{ color: c.accent, fontStyle: 'italic' }}>Started</em>?</>}
        </h2>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>
          {config.ctaBand?.subtext || 'Get a free estimate today. No obligation, no pressure.'}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn-accent">{config.hero.ctaText}</Link>
          <a href={`tel:${config.phoneClean}`} className="btn-outline-light">📞 {config.phone}</a>
        </div>
      </div>
    </section>
  </>
);

export default Home;
