import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config.js';

const c = config.colors;

const Reviews = () => (
  <>
    {/* Page header — dark */}
    <section style={{
      padding: '10rem 1.5rem 4rem', background: c.darkBg, textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 80%, ${c.accent}08, transparent 60%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: c.accent, marginBottom: '0.6rem' }}>Trusted by Locals</div>
        <h1 style={{ fontFamily: `'Playfair Display', serif`, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff' }}>
          Customer <em style={{ color: c.accent, fontStyle: 'italic' }}>Reviews</em>
        </h1>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.8rem' }}>
          Don't just take our word for it — hear from our happy customers.
        </p>
      </div>
    </section>

    {/* Overall rating highlight */}
    <section style={{ padding: '3rem 1.5rem', background: c.lightBg, textAlign: 'center' }}>
      <div style={{ maxWidth: 500, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '0.5rem' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{ color: '#f59e0b', fontSize: '1.5rem' }}>★</span>
          ))}
        </div>
        <div style={{ fontFamily: `'Playfair Display', serif`, fontSize: '1.6rem', color: c.darkBg, marginBottom: '0.3rem' }}>
          {config.reviewHighlight?.rating || '4.9'} out of 5.0
        </div>
        <div style={{ fontSize: '0.88rem', color: c.mutedText }}>
          Based on {config.reviewHighlight?.count || '100+'} reviews
        </div>
      </div>
    </section>

    {/* Reviews grid — white */}
    <section style={{ padding: '5rem 1.5rem', background: c.bodyBg }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {config.testimonials.map((rev, i) => (
            <div key={i} className="card" style={{ padding: '2rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 8, left: 18, fontFamily: `'Playfair Display', serif`, fontSize: '4rem', color: `${c.accent}15`, lineHeight: 1 }}>"</div>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                {Array.from({ length: rev.rating || 5 }).map((_, j) => (
                  <span key={j} style={{ color: '#f59e0b', fontSize: '1rem' }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: c.mutedText, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                "{rev.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%', background: `${c.accent}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '0.9rem', color: c.accent,
                }}>
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: c.darkBg }}>{rev.author}</div>
                  <div style={{ fontSize: '0.8rem', color: c.mutedText }}>{rev.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ padding: '4rem 1.5rem', background: c.darkBg, textAlign: 'center' }}>
      <h2 style={{ fontFamily: `'Playfair Display', serif`, fontSize: '2rem', color: '#fff', marginBottom: '0.8rem' }}>
        Join Our <em style={{ color: c.accent, fontStyle: 'italic' }}>Happy Customers</em>
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>Experience the difference for yourself.</p>
      <Link to="/contact" className="btn-accent">Get Your Free Estimate</Link>
    </section>
  </>
);

export default Reviews;
