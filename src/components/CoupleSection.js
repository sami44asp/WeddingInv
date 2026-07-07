import React from 'react';
import SectionHeader from './SectionHeader';
import useReveal from './useReveal';

const CORNER = (pos) => {
  const map = {
    tl: { top: -1, left: -1, borderWidth: '2px 0 0 2px' },
    tr: { top: -1, right: -1, borderWidth: '2px 2px 0 0' },
    bl: { bottom: -1, left: -1, borderWidth: '0 0 2px 2px' },
    br: { bottom: -1, right: -1, borderWidth: '0 2px 2px 0' },
  };
  return {
    position: 'absolute',
    width: '22px', height: '22px',
    borderColor: '#C9A84C',
    borderStyle: 'solid',
    ...map[pos],
  };
};

export default function CoupleSection({ wedding }) {
  const { ref, visible } = useReveal();

  return (
    <section id="story" style={{ padding: '80px 24px', background: '#FDF8F0' }}>
      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''}`}
        style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}
      >
        <SectionHeader eyebrow="Our Story" title="Two souls," italic="one beautiful journey" />

        {/* Photo frame */}
        <div style={{
          position: 'relative',
          width: 'min(300px, 80vw)',
          height: 'min(360px, 96vw)',
          margin: '0 auto 40px',
          border: '1px solid #C9A84C',
          padding: '10px',
          background: '#fff',
        }}>
          {/* Replace this div with <img src="..." alt="Amara & Daniel" /> */}
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, #F5EDD8, #E8D5A0)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '12px',
          }}>
            <div style={{ fontSize: '72px', opacity: 0.15, color: '#5C1A2E', lineHeight: 1 }}>♥</div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic', fontSize: '14px',
              color: '#7A2540', opacity: 0.65,
            }}>
              Place couple photo here
            </p>
          </div>
          <div style={CORNER('tl')} />
          <div style={CORNER('tr')} />
          <div style={CORNER('bl')} />
          <div style={CORNER('br')} />
        </div>

        {/* Names & date */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: '22px',
          color: '#5C1A2E',
          marginBottom: '8px',
        }}>
          {wedding.brideName} &amp; {wedding.groomName}
        </p>
        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300, fontSize: '12px',
          letterSpacing: '4px', textTransform: 'uppercase',
          color: '#C9A84C', marginBottom: '32px',
        }}>
          {wedding.displayDate}
        </p>

        {/* Quote */}
        <blockquote style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 'clamp(17px, 3vw, 22px)',
          color: '#7A2540',
          lineHeight: 1.75,
          maxWidth: '500px',
          margin: '0 auto',
          borderLeft: 'none',
          padding: 0,
        }}>
          "From this day forward, you shall not walk alone.
          My heart will be your shelter and my arms will be your home."
        </blockquote>
      </div>
    </section>
  );
}
