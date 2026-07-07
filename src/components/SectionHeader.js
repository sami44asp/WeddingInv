import React from 'react';

export default function SectionHeader({ eyebrow, title, italic, light = false }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 300,
        fontSize: '10px',
        letterSpacing: '6px',
        textTransform: 'uppercase',
        color: light ? '#C9A84C' : '#7A2540',
        marginBottom: '10px',
      }}>
        {eyebrow}
      </p>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(28px, 5vw, 46px)',
        fontWeight: 300,
        color: light ? '#fff' : '#3A0F1C',
        lineHeight: 1.2,
      }}>
        {title}{italic && <> <em style={{ fontStyle: 'italic', color: light ? '#E8D5A0' : '#7A2540' }}>{italic}</em></>}
      </h2>
      <div style={{ margin: '18px auto 0', display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
        <div style={{ width: '80px', height: '0.5px', background: light ? 'linear-gradient(to right,transparent,#C9A84C,transparent)' : 'linear-gradient(to right,transparent,#C9A84C,transparent)' }} />
      </div>
    </div>
  );
}
