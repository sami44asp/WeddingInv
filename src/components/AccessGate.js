import React, { useEffect, useState } from 'react';
import { guestStore } from '../data/guestStore';
import { useLang } from '../hooks/useLang';
import LanguageToggle from './LanguageToggle';

const S = {
  wrap: {
    minHeight: '100vh',
    background: 'linear-gradient(160deg, #3A0F1C 0%, #5C1A2E 60%, #7A2540 100%)',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    padding: '40px 24px', textAlign: 'center',
    position: 'relative',
  },
  card: {
    background: 'rgba(253,248,240,0.06)',
    border: '1px solid rgba(201,168,76,0.4)',
    padding: '48px 36px',
    maxWidth: '420px',
    width: '100%',
    animation: 'fadeUp 0.5s ease',
  },
  ornament: { fontSize: '24px', color: '#C9A84C', letterSpacing: '8px', marginBottom: '24px' },
  title: {
    fontFamily: "'Cinzel', serif",
    fontSize: '22px', fontWeight: 400,
    color: '#fff', marginBottom: '14px', lineHeight: 1.3,
  },
  msg: {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 300, fontSize: '14px',
    color: '#E8D5A0', lineHeight: 1.8,
  },
  sub: {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 300, fontSize: '12px',
    color: '#C9A84C', marginTop: '16px',
    opacity: 0.75, lineHeight: 1.7,
  },
  spinner: {
    width: '36px', height: '36px',
    border: '2px solid rgba(201,168,76,0.2)',
    borderTopColor: '#C9A84C',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
    margin: '0 auto 24px',
  },
  icon: { fontSize: '40px', marginBottom: '20px' },
};

export default function AccessGate({ token, onGranted, guestName }) {
  const { t, lang } = useLang();
  const [status, setStatus] = useState('checking'); // checking | granted | invalid | used

  useEffect(() => {
    if (!token) { setStatus('invalid'); return; }

    // Simulate async validation (replace with real API call)
    const timer = setTimeout(() => {
      const result = guestStore.validateToken(token);
      if (!result.valid) { setStatus('invalid'); return; }
      if (result.used)   { setStatus('used');    return; }

      // First access — mark as scanned
      guestStore.markScanned(token);
      onGranted(result.guest);
      setStatus('granted');
    }, 1400);

    return () => clearTimeout(timer);
  }, [token]);

  if (status === 'granted') return null;

  return (
    <div style={S.wrap}>
      <LanguageToggle fixed />

      <div style={S.card}>
        <div style={S.ornament}>✦ ✦ ✦</div>

        {status === 'checking' && (
          <>
            <div style={S.spinner} />
            <p style={S.msg} className={lang === 'am' ? 'amharic' : ''}>{t('validating')}</p>
          </>
        )}

        {status === 'invalid' && (
          <>
            <div style={S.icon}>🚫</div>
            <h2 style={S.title} className={lang === 'am' ? 'amharic' : ''}>{t('invalidTitle')}</h2>
            <p style={S.msg}  className={lang === 'am' ? 'amharic' : ''}>{t('invalidMsg')}</p>
          </>
        )}

        {status === 'used' && (
          <>
            <div style={S.icon}>⚠️</div>
            <h2 style={S.title} className={lang === 'am' ? 'amharic' : ''}>{t('usedTitle')}</h2>
            <p style={S.msg}  className={lang === 'am' ? 'amharic' : ''}>{t('usedMsg')}</p>
            <p style={S.sub}  className={lang === 'am' ? 'amharic' : ''}>{t('usedSubMsg')}</p>
          </>
        )}
      </div>
    </div>
  );
}
