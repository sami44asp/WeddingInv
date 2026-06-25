import React, { useState, useEffect } from 'react';
import { useLang } from '../hooks/useLang';
import LanguageToggle from './LanguageToggle';
import { WEDDING } from '../data/weddingConfig';

export default function NavBar() {
  const { t, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const names = lang === 'am'
    ? `${WEDDING.brideNameAm} & ${WEDDING.groomNameAm}`
    : `${WEDDING.brideName} & ${WEDDING.groomName}`;

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 24px', height: '58px',
      background: scrolled ? 'rgba(58,15,28,0.97)' : 'transparent',
      boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.3)' : 'none',
      transition: 'background 0.4s, box-shadow 0.4s',
    }}>
      <span style={{
        fontFamily: lang === 'am' ? "'Noto Serif Ethiopic', serif" : "'Cinzel', serif",
        fontSize: lang === 'am' ? '14px' : '13px',
        letterSpacing: lang === 'am' ? '0' : '3px',
        color: '#C9A84C',
      }}>
        {names}
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {[['story', t('ourStory')], ['details', t('details')], ['gallery', t('gallery')], ['rsvp', t('rsvp')]].map(([id, label]) => (
          <span
            key={id}
            onClick={() => scrollTo(id)}
            className={lang === 'am' ? 'amharic' : ''}
            style={{
              fontFamily: lang === 'am' ? "'Noto Serif Ethiopic', serif" : "'Lato', sans-serif",
              fontWeight: 300, fontSize: lang === 'am' ? '13px' : '11px',
              letterSpacing: lang === 'am' ? 0 : '3px',
              textTransform: lang === 'am' ? 'none' : 'uppercase',
              color: '#E8D5A0', cursor: 'pointer', opacity: 0.85,
              display: window.innerWidth < 600 ? 'none' : 'inline',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = 0.85}
          >
            {label}
          </span>
        ))}
        <LanguageToggle />
      </div>
    </nav>
  );
}
