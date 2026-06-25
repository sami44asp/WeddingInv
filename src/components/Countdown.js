import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import { useLang } from '../hooks/useLang';
import { WEDDING } from '../data/weddingConfig';

function pad(n){ return String(n).padStart(2,'0'); }

function getLeft() {
  const diff = Math.max(0, new Date(WEDDING.ceremonyIso) - new Date());
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000)  / 60000),
    seconds: Math.floor((diff % 60000)    / 1000),
    expired: diff === 0,
  };
}

export default function Countdown() {
  const { t, lang } = useLang();
  const isAm = lang === 'am';
  const [time, setTime] = useState(getLeft);

  useEffect(() => {
    if (time.expired) return;
    const id = setInterval(() => setTime(getLeft()), 1000);
    return () => clearInterval(id);
  }, [time.expired]);

  return (
    <section style={{ padding:'80px 24px', background:'linear-gradient(160deg,#3A0F1C 0%,#5C1A2E 100%)' }}>
      <SectionHeader eyebrow={t('countdownEyebrow')} title={t('countdownTitle')} italic={t('countdownItalic')} light />
      {time.expired ? (
        <p className={isAm?'amharic':''} style={{ textAlign:'center',fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',fontSize:'28px',color:'#E8D5A0' }}>{t('todayMsg')}</p>
      ) : (
        <div style={{ display:'flex',alignItems:'center',justifyContent:'center',gap:'14px',flexWrap:'wrap' }}>
          {[
            [time.days,    t('days')],
            [time.hours,   t('hours')],
            [time.minutes, t('minutes')],
            [time.seconds, t('seconds')],
          ].map(([val, label], i) => (
            <React.Fragment key={label}>
              {i > 0 && <span style={{ fontFamily:"'Cinzel',serif",fontSize:'clamp(26px,5vw,42px)',color:'#C9A84C',opacity:0.6,paddingBottom:'22px' }}>:</span>}
              <div style={{ textAlign:'center',minWidth:'68px' }}>
                <span style={{ display:'block',fontFamily:"'Cinzel',serif",fontSize:'clamp(34px,8vw,56px)',fontWeight:500,color:'#fff',lineHeight:1,letterSpacing:'2px' }}>{pad(val)}</span>
                <span className={isAm?'amharic':''} style={{ display:'block',fontFamily:isAm?"'Noto Serif Ethiopic',serif":"'Lato',sans-serif",fontWeight:300,fontSize:'10px',letterSpacing:isAm?0:'4px',textTransform:isAm?'none':'uppercase',color:'#C9A84C',marginTop:'8px' }}>{label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </section>
  );
}
