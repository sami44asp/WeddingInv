import React, { useEffect, useRef } from 'react';

const PETAL_CHARS = ['❀', '✿', '✾', '✽', '❁', '🌸'];

function Petal({ style }) {
  return <div aria-hidden="true" style={style} />;
}

function usePetals(count = 20) {
  return Array.from({ length: count }, (_, i) => {
    const duration = 10 + Math.random() * 14;
    const delay    = -(Math.random() * 20);
    const left     = Math.random() * 100;
    const size     = 9 + Math.random() * 10;
    const char     = PETAL_CHARS[Math.floor(Math.random() * PETAL_CHARS.length)];
    return {
      key: i,
      style: {
        position: 'absolute',
        left: `${left}vw`,
        top: '-40px',
        fontSize: `${size}px`,
        color: 'rgba(201,168,76,0.22)',
        animation: `petalFall ${duration}s ${delay}s linear infinite`,
        pointerEvents: 'none',
        userSelect: 'none',
      },
      char,
    };
  });
}

export default function Hero({ wedding, guestName }) {
  const petals = usePetals(22);

  const heroStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(160deg, #3A0F1C 0%, #5C1A2E 55%, #7A2540 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '100px 24px 64px',
    position: 'relative',
    overflow: 'hidden',
  };

  const glowStyle = {
    position: 'absolute', inset: 0, pointerEvents: 'none',
    background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(201,168,76,0.10) 0%, transparent 70%)',
  };

  return (
    <section style={heroStyle}>
      <div style={glowStyle} />

      {/* Floating petals */}
      {petals.map(p => (
        <div key={p.key} style={p.style}>{p.char}</div>
      ))}

      {/* Guest personalisation */}
      {guestName && (
        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300, fontSize: '12px',
          letterSpacing: '5px', textTransform: 'uppercase',
          color: '#C9A84C', marginBottom: '8px',
          position: 'relative',
        }}>
          Dear {guestName}
        </p>
      )}

      {/* Ornament */}
      <div style={{
        fontSize: '22px', color: '#C9A84C',
        letterSpacing: '10px', marginBottom: '20px',
        position: 'relative',
      }} aria-hidden="true">✦ ✦ ✦</div>

      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 300, fontSize: '12px',
        letterSpacing: '6px', textTransform: 'uppercase',
        color: '#E8D5A0', marginBottom: '14px',
        position: 'relative',
      }}>
        You are cordially invited to celebrate
      </p>

      {/* Names */}
      <h1 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: 'clamp(44px, 9vw, 84px)',
        fontWeight: 400,
        color: '#fff',
        lineHeight: 1.05,
        letterSpacing: '3px',
        position: 'relative',
      }}>
        {wedding.brideName}
      </h1>

      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: 'italic',
        fontSize: 'clamp(20px, 4vw, 36px)',
        fontWeight: 300,
        color: '#E8D5A0',
        margin: '12px 0',
        position: 'relative',
      }}>
        &amp;
      </div>

      <h1 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: 'clamp(44px, 9vw, 84px)',
        fontWeight: 400,
        color: '#fff',
        lineHeight: 1.05,
        letterSpacing: '3px',
        position: 'relative',
      }}>
        {wedding.groomName}
      </h1>

      {/* Double divider */}
      <div style={{ margin: '28px 0', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center', position: 'relative' }}>
        <div style={{ width: '100px', height: '0.5px', background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />
        <div style={{ width: '60px', height: '0.5px', background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />
      </div>

      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 300, fontSize: '13px',
        letterSpacing: '5px', textTransform: 'uppercase',
        color: '#C9A84C',
        position: 'relative',
      }}>
        {wedding.displayDate}
      </p>

      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 300, fontSize: '12px',
        letterSpacing: '3px',
        color: '#E8D5A0', opacity: 0.7,
        marginTop: '8px',
        position: 'relative',
      }}>
        {wedding.city}
      </p>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
      }}>
        <span style={{ fontSize: '10px', letterSpacing: '4px', color: '#C9A84C', opacity: 0.6, textTransform: 'uppercase', fontWeight: 300 }}>Scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, #C9A84C, transparent)',
          animation: 'pulse 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  );
}
