import React from 'react';
import { useLang } from '../hooks/useLang';

export default function LanguageToggle({ fixed = false }) {
  const { lang, toggle } = useLang();

  return (
    <button
      onClick={toggle}
      aria-label="Switch language"
      style={{
        position: fixed ? 'fixed' : 'relative',
        top: fixed ? '14px' : undefined,
        right: fixed ? '16px' : undefined,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 14px',
        background: 'rgba(58,15,28,0.85)',
        border: '1px solid #C9A84C',
        borderRadius: '2px',
        cursor: 'pointer',
        animation: 'slideIn 0.3s ease',
      }}
    >
      <span style={{
        fontFamily: lang === 'en' ? "'Noto Serif Ethiopic', serif" : "'Cinzel', serif",
        fontSize: lang === 'en' ? '13px' : '11px',
        color: '#E8D5A0',
        letterSpacing: lang === 'en' ? '1px' : '2px',
        fontWeight: 400,
        transition: 'all 0.2s',
      }}>
        {lang === 'en' ? 'አማርኛ' : 'English'}
      </span>
    </button>
  );
}
