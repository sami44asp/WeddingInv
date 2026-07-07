import React, { useState, useEffect } from 'react';

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 32px', height: '60px',
    transition: 'background 0.4s ease, box-shadow 0.4s ease',
  },
  navScrolled: {
    background: 'rgba(58,15,28,0.97)',
    boxShadow: '0 1px 24px rgba(0,0,0,0.3)',
  },
  logo: {
    fontFamily: "'Cinzel', serif",
    fontSize: '15px',
    letterSpacing: '3px',
    color: '#C9A84C',
    textDecoration: 'none',
  },
  links: {
    display: 'flex', gap: '28px', listStyle: 'none',
  },
  link: {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 300,
    fontSize: '11px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: '#E8D5A0',
    textDecoration: 'none',
    opacity: 0.85,
    transition: 'opacity 0.2s',
    cursor: 'pointer',
  },
};

const NAV_ITEMS = [
  { label: 'Our Story', id: 'story' },
  { label: 'Details',   id: 'details' },
  { label: 'Gallery',   id: 'gallery' },
  { label: 'RSVP',      id: 'rsvp' },
];

export default function NavBar({ couple }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
      <span style={styles.logo}>{couple}</span>
      <ul style={styles.links}>
        {NAV_ITEMS.map(({ label, id }) => (
          <li key={id} style={{ listStyle: 'none' }}>
            <span
              style={styles.link}
              onClick={() => scrollTo(id)}
              onMouseEnter={e => e.target.style.opacity = 1}
              onMouseLeave={e => e.target.style.opacity = 0.85}
            >
              {label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
