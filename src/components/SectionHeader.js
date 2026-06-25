import React from 'react';
import { useLang } from '../hooks/useLang';

export default function SectionHeader({ eyebrow, title, italic, light = false }) {
  const { lang } = useLang();
  const isAm = lang === 'am';
  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <p style={{
        fontFamily: isAm ? "'Noto Serif Ethiopic', serif" : "'Lato', sans-serif",
        fontWeight: 300, fontSize: '10px',
        letterSpacing: isAm ? 0 : '6px',
        textTransform: isAm ? 'none' : 'uppercase',
        color: light ? '#C9A84C' : '#7A2540',
        marginBottom: '10px',
      }}>{eyebrow}</p>
      <h2 style={{
        fontFamily: isAm ? "'Noto Serif Ethiopic', serif" : "'Cormorant Garamond', serif",
        fontSize: 'clamp(26px, 5vw, 44px)',
        fontWeight: 300,
        color: light ? '#fff' : '#3A0F1C',
        lineHeight: 1.25,
      }}>
        {title}{italic && <> <em style={{ fontStyle: 'italic', color: light ? '#E8D5A0' : '#7A2540' }}>{italic}</em></>}
      </h2>
      <div style={{ margin: '16px auto 0', width: '80px', height: '0.5px', background: 'linear-gradient(to right,transparent,#C9A84C,transparent)' }} />
    </div>
  );
}
