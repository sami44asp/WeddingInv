import React from 'react';
import { useLang } from '../hooks/useLang';
import { WEDDING } from '../data/weddingConfig';

const PETALS = ['❀','✿','✾','✽','❁'];

export default function Hero({ guest }) {
  const { t, lang } = useLang();
  const isAm = lang === 'am';

  const petals = Array.from({ length: 20 }, (_, i) => ({
    key: i,
    left: `${Math.random() * 100}vw`,
    duration: `${10 + Math.random() * 14}s`,
    delay: `${-(Math.random() * 18)}s`,
    size: `${9 + Math.random() * 10}px`,
    char: PETALS[Math.floor(Math.random() * PETALS.length)],
  }));

  const brideName = isAm ? WEDDING.brideNameAm : WEDDING.brideName;
  const groomName = isAm ? WEDDING.groomNameAm : WEDDING.groomName;
  const date      = isAm ? WEDDING.displayDateAm : WEDDING.displayDate;
  const city      = isAm ? WEDDING.cityAm : WEDDING.city;

  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #3A0F1C 0%, #5C1A2E 55%, #7A2540 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '100px 24px 64px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{ position:'absolute',inset:0,pointerEvents:'none',
        background:'radial-gradient(ellipse 70% 50% at 50% 40%,rgba(201,168,76,0.09) 0%,transparent 70%)' }} />

      {/* Petals */}
      {petals.map(p => (
        <div key={p.key} aria-hidden="true" style={{
          position:'absolute', left:p.left, top:'-40px',
          fontSize:p.size, color:'rgba(201,168,76,0.2)',
          animation:`petalFall ${p.duration} ${p.delay} linear infinite`,
          pointerEvents:'none',
        }}>{p.char}</div>
      ))}

      {/* Guest name */}
      {guest?.name && (
        <p style={{
          fontFamily: isAm ? "'Noto Serif Ethiopic', serif" : "'Lato', sans-serif",
          fontWeight: 300, fontSize: '12px',
          letterSpacing: isAm ? 0 : '5px',
          textTransform: isAm ? 'none' : 'uppercase',
          color: '#C9A84C', marginBottom: '10px', position: 'relative',
        }}>
          {isAm ? `ውድ ${guest.name}` : `Dear ${guest.name}`}
        </p>
      )}

      <div style={{ fontSize:'22px',color:'#C9A84C',letterSpacing:'10px',marginBottom:'20px',position:'relative' }} aria-hidden="true">
        ✦ ✦ ✦
      </div>

      <p style={{
        fontFamily: isAm ? "'Noto Serif Ethiopic', serif" : "'Lato', sans-serif",
        fontWeight: 300, fontSize: isAm ? '14px' : '12px',
        letterSpacing: isAm ? 0 : '6px',
        textTransform: isAm ? 'none' : 'uppercase',
        color: '#E8D5A0', marginBottom: '16px', position: 'relative',
      }}>
        {t('cordiallyInvited')}
      </p>

      <h1 style={{
        fontFamily: isAm ? "'Noto Serif Ethiopic', serif" : "'Cinzel', serif",
        fontSize: 'clamp(40px, 9vw, 80px)', fontWeight: 400,
        color: '#fff', lineHeight: 1.05, letterSpacing: isAm ? '2px' : '3px',
        position: 'relative',
      }}>
        {brideName}
      </h1>

      <div style={{
        fontFamily: isAm ? "'Noto Serif Ethiopic', serif" : "'Cormorant Garamond', serif",
        fontStyle: 'italic', fontSize: 'clamp(20px,4vw,34px)',
        fontWeight: 300, color: '#E8D5A0', margin: '12px 0', position: 'relative',
      }}>
        &amp;
      </div>

      <h1 style={{
        fontFamily: isAm ? "'Noto Serif Ethiopic', serif" : "'Cinzel', serif",
        fontSize: 'clamp(40px, 9vw, 80px)', fontWeight: 400,
        color: '#fff', lineHeight: 1.05, letterSpacing: isAm ? '2px' : '3px',
        position: 'relative',
      }}>
        {groomName}
      </h1>

      <div style={{ margin:'28px 0', display:'flex', flexDirection:'column', gap:'5px', alignItems:'center', position:'relative' }}>
        <div style={{ width:'100px',height:'0.5px',background:'linear-gradient(to right,transparent,#C9A84C,transparent)' }}/>
        <div style={{ width:'60px',height:'0.5px',background:'linear-gradient(to right,transparent,#C9A84C,transparent)' }}/>
      </div>

      <p style={{
        fontFamily: isAm ? "'Noto Serif Ethiopic', serif" : "'Lato', sans-serif",
        fontWeight: 300, fontSize: isAm ? '14px' : '13px',
        letterSpacing: isAm ? 0 : '4px', textTransform: isAm ? 'none' : 'uppercase',
        color: '#C9A84C', position: 'relative',
      }}>
        {date}
      </p>

      <p style={{
        fontFamily: isAm ? "'Noto Serif Ethiopic', serif" : "'Lato', sans-serif",
        fontWeight: 300, fontSize: '12px', letterSpacing: isAm ? 0 : '3px',
        color: '#E8D5A0', opacity: 0.7, marginTop: '6px', position: 'relative',
      }}>
        {city}
      </p>

      {/* Scroll hint */}
      <div style={{ position:'absolute',bottom:'28px',left:'50%',transform:'translateX(-50%)',
        display:'flex',flexDirection:'column',alignItems:'center',gap:'6px' }}>
        <div style={{ width:'1px',height:'36px',
          background:'linear-gradient(to bottom,#C9A84C,transparent)',
          animation:'pulse 2s ease-in-out infinite' }} />
      </div>
    </section>
  );
}
