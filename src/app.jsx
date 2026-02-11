import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { config } from './config.js';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Reviews from './pages/Reviews.jsx';
import Contact from './pages/Contact.jsx';

const c = config.colors;

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/contact', label: 'Contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <div style={{ fontFamily: `'Outfit', sans-serif`, color: c.bodyText, background: c.bodyBg }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; background: ${c.bodyBg}; }
        a { text-decoration: none; color: inherit; }
        img { max-width: 100%; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }

        .nav-link { position: relative; padding: 0.5rem 0.8rem; font-weight: 500; font-size: 0.9rem; border-radius: 50px; transition: all 0.3s; letter-spacing: 0.01em; }
        .nav-link:hover { background: ${c.accent}18; color: ${c.accent}; }
        .nav-link.active { background: ${c.accent}; color: ${c.accentText}; font-weight: 600; }

        .btn-accent { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.8rem 1.8rem; background: ${c.accent}; color: ${c.accentText}; font-weight: 600; font-size: 0.9rem; border-radius: 50px; border: none; cursor: pointer; transition: all 0.3s; letter-spacing: 0.02em; font-family: 'Outfit', sans-serif; }
        .btn-accent:hover { filter: brightness(1.1); transform: translateY(-2px); box-shadow: 0 8px 24px ${c.accent}44; }

        .btn-outline-light { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.8rem 1.8rem; background: transparent; color: #fff; font-weight: 600; font-size: 0.9rem; border-radius: 50px; border: 2px solid rgba(255,255,255,0.4); cursor: pointer; transition: all 0.3s; font-family: 'Outfit', sans-serif; }
        .btn-outline-light:hover { background: rgba(255,255,255,0.1); border-color: #fff; }

        .btn-dark { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.8rem 1.8rem; background: ${c.darkBg}; color: #fff; font-weight: 600; font-size: 0.9rem; border-radius: 50px; border: none; cursor: pointer; transition: all 0.3s; font-family: 'Outfit', sans-serif; }
        .btn-dark:hover { background: ${c.darkBgHover || '#333'}; transform: translateY(-2px); }

        .section-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.18em; color: ${c.accent}; margin-bottom: 0.6rem; }
        .section-title { font-family: 'Playfair Display', serif; font-size: 2.6rem; color: ${c.darkBg}; line-height: 1.15; margin-bottom: 1rem; }
        .section-title em { font-style: italic; color: ${c.accent}; }

        .card { background: #fff; border: 1px solid ${c.borderLight}; border-radius: 16px; transition: all 0.35s; overflow: hidden; }
        .card:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,0.08); }

        input, textarea, select { width: 100%; padding: 0.9rem 1.1rem; border-radius: 10px; border: 1px solid ${c.borderLight}; background: #fff; color: ${c.bodyText}; font-family: 'Outfit', sans-serif; font-size: 0.95rem; transition: border-color 0.3s, box-shadow 0.3s; outline: none; }
        input:focus, textarea:focus, select:focus { border-color: ${c.accent}; box-shadow: 0 0 0 3px ${c.accent}18; }
        textarea { resize: vertical; min-height: 120px; }

        .floating-cta { position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 99; animation: float 3s ease-in-out infinite; }
        .floating-cta a { display: flex; align-items: center; gap: 0.5rem; background: ${c.accent}; color: ${c.accentText}; padding: 0.85rem 1.4rem; border-radius: 50px; font-weight: 700; font-size: 0.9rem; box-shadow: 0 8px 32px ${c.accent}44; transition: all 0.3s; }
        .floating-cta a:hover { transform: scale(1.05); }

        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .mobile-toggle { display: flex !important; }
          .section-title { font-size: 1.9rem !important; }
          .floating-cta .cta-label { display: none; }
        }
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>

      {/* ─── NAVIGATION ─── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: isScrolled ? 'rgba(255,255,255,0.96)' : (isHome ? 'transparent' : 'rgba(255,255,255,0.96)'),
        backdropFilter: isScrolled || !isHome ? 'blur(16px)' : 'none',
        borderBottom: isScrolled || !isHome ? `1px solid ${c.borderLight}` : 'none',
        transition: 'all 0.4s',
        padding: isScrolled ? '0.5rem 0' : '0.8rem 0',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.5rem' }}>{config.icon}</span>
            <span style={{
              fontWeight: 700, fontSize: '1.1rem',
              color: isScrolled || !isHome ? c.darkBg : '#fff',
              transition: 'color 0.4s',
            }}>
              {config.companyName}
            </span>
          </Link>

          <div className="nav-links-desktop" style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                style={{
                  color: location.pathname === item.path ? c.accentText :
                    (isScrolled || !isHome ? c.bodyText : 'rgba(255,255,255,0.85)'),
                }}
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${config.phoneClean}`} className="btn-accent" style={{ marginLeft: '0.8rem', padding: '0.55rem 1.2rem', fontSize: '0.85rem' }}>
              📞 {config.phone}
            </a>
          </div>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
            background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '0.5rem',
          }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                width: 22, height: 2.5, borderRadius: 2, transition: 'all 0.3s',
                background: isScrolled || !isHome ? c.darkBg : '#fff',
                transform: mobileMenuOpen ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'scaleX(0)') : 'none',
                opacity: mobileMenuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu" style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(16px)',
            borderBottom: `1px solid ${c.borderLight}`,
            padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.3rem',
          }}>
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                style={{ display: 'block', padding: '0.7rem 0.8rem', color: location.pathname === item.path ? c.accentText : c.bodyText }}>
                {item.label}
              </Link>
            ))}
            <a href={`tel:${config.phoneClean}`} className="btn-accent" style={{ textAlign: 'center', justifyContent: 'center', marginTop: '0.5rem' }}>
              📞 Call Now
            </a>
          </div>
        )}
      </nav>

      {/* ─── ROUTES ─── */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: c.darkBg, padding: '4rem 1.5rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.3rem' }}>{config.icon}</span>
                <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>{config.companyName}</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 300 }}>
                {config.tagline}
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>Pages</h4>
              {navItems.map((item) => (
                <div key={item.path} style={{ marginBottom: '0.5rem' }}>
                  <Link to={item.path} style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }}>
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <h4 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>Contact</h4>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 2 }}>
                <div><a href={`tel:${config.phoneClean}`} style={{ color: 'rgba(255,255,255,0.6)' }}>{config.phone}</a></div>
                <div><a href={`mailto:${config.email}`} style={{ color: 'rgba(255,255,255,0.6)' }}>{config.email}</a></div>
                <div>{config.address}</div>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>Hours</h4>
              {Object.values(config.hours).map((h, i) => (
                <div key={i} style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9 }}>{h}</div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>
            <div>© {new Date().getFullYear()} {config.companyName}. All rights reserved. | {config.license || 'Licensed & Insured'}</div>
            <a href="https://www.egpgrow.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem', marginTop: '0.8rem', color: 'rgba(255,255,255,0.35)', transition: 'opacity 0.3s', opacity: 0.6 }} onMouseEnter={e => e.currentTarget.style.opacity = '1'} onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}>
              <img src="/egp-logo-white.png" alt="EGP" style={{ height: '20px', width: 'auto' }} />
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.05em' }}>Powered by EGP</span>
            </a>
          </div>
        </div>
      </footer>

      {/* ─── FLOATING CTA ─── */}
      <div className="floating-cta">
        <a href={`tel:${config.phoneClean}`}>
          <span>📞</span>
          <span className="cta-label">{config.floatingCtaText || 'Call Now'}</span>
        </a>
      </div>
    </div>
  );
};

export default App;
