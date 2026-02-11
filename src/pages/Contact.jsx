import React, { useState } from 'react';
import { config } from '../config.js';

const c = config.colors;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    if (config.formspreeId === 'YOUR_FORMSPREE_ID') {
      setTimeout(() => {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      }, 1000);
      return;
    }
    try {
      const res = await fetch(`https://formspree.io/f/${config.formspreeId}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else setFormStatus('error');
    } catch { setFormStatus('error'); }
  };

  return (
    <>
      {/* Page header — dark */}
      <section style={{
        padding: '10rem 1.5rem 4rem', background: c.darkBg, textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 80%, ${c.accent}08, transparent 60%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: c.accent, marginBottom: '0.6rem' }}>Get In Touch</div>
          <h1 style={{ fontFamily: `'Playfair Display', serif`, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff' }}>
            {config.contactTitle || <>Request a Free <em style={{ color: c.accent, fontStyle: 'italic' }}>Estimate</em></>}
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.8rem' }}>
            Fill out the form below or call us directly. We'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact form + info — white */}
      <section style={{ padding: '5rem 1.5rem', background: c.bodyBg }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '3.5rem' }}>
          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontFamily: `'Playfair Display', serif`, fontSize: '1.5rem', color: c.darkBg, marginBottom: '0.5rem' }}>
              Send Us a <em style={{ color: c.accent }}>Message</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input placeholder="Your Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <input placeholder="Phone Number *" required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
            <input placeholder="Email Address" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} style={{ color: formData.service ? c.bodyText : c.mutedText }}>
              <option value="">Select a Service...</option>
              {config.services.map((s, i) => (
                <option key={i} value={s.title}>{s.title}</option>
              ))}
            </select>
            <textarea placeholder="Tell us about your project..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            <button type="submit" className="btn-accent" style={{ justifyContent: 'center', width: '100%', padding: '1rem', fontSize: '1rem' }} disabled={formStatus === 'submitting'}>
              {formStatus === 'submitting' ? 'Sending...' : 'Send Request'}
            </button>
            {formStatus === 'success' && (
              <p style={{ color: '#16a34a', fontWeight: 600, fontSize: '0.9rem', textAlign: 'center', padding: '0.8rem', background: '#f0fdf4', borderRadius: 8 }}>
                ✓ Message sent! We'll get back to you within 24 hours.
              </p>
            )}
            {formStatus === 'error' && (
              <p style={{ color: '#dc2626', fontWeight: 600, fontSize: '0.9rem', textAlign: 'center', padding: '0.8rem', background: '#fef2f2', borderRadius: 8 }}>
                Something went wrong. Please call us directly.
              </p>
            )}
          </form>

          {/* Contact info sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontFamily: `'Playfair Display', serif`, fontSize: '1.5rem', color: c.darkBg, marginBottom: '0.5rem' }}>
              Contact <em style={{ color: c.accent }}>Info</em>
            </h2>

            {[
              { icon: '📞', label: 'Phone', value: config.phone, href: `tel:${config.phoneClean}` },
              { icon: '✉️', label: 'Email', value: config.email, href: `mailto:${config.email}` },
              { icon: '📍', label: 'Address', value: config.address },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: 50, height: 50, borderRadius: 12, background: `${c.accent}10`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: c.mutedText, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: '1rem', fontWeight: 600, color: c.darkBg }}>{item.value}</a>
                  ) : (
                    <div style={{ fontSize: '0.95rem', fontWeight: 500, color: c.bodyText }}>{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Hours card */}
            <div style={{
              background: c.lightBg, border: `1px solid ${c.borderLight}`, borderRadius: 16,
              padding: '1.5rem', marginTop: '0.5rem',
            }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.8rem', color: c.darkBg }}>
                🕐 Business Hours
              </h4>
              {Object.values(config.hours).map((h, i) => (
                <div key={i} style={{ fontSize: '0.9rem', color: c.mutedText, lineHeight: 1.9 }}>{h}</div>
              ))}
            </div>

            {/* Quick call CTA */}
            <a href={`tel:${config.phoneClean}`} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
              padding: '1.2rem', borderRadius: 14, background: c.darkBg, color: '#fff',
              fontWeight: 700, fontSize: '1rem', transition: 'all 0.3s', textDecoration: 'none',
            }}>
              📞 Call {config.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
