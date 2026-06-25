import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import SectionHeader from './SectionHeader';
import useReveal from './useReveal';

export default function QRSection({ url }) {
  const { ref, visible } = useReveal();

  return (
    <section style={{
      padding: '80px 24px',
      background: 'linear-gradient(180deg, #FDF8F0 0%, #F5EDD8 100%)',
    }}>
      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''}`}
        style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}
      >
        <SectionHeader eyebrow="Share Your Invitation" title="Your personal" italic="QR code" />

        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300, fontSize: '13px',
          color: '#7A2540', lineHeight: 1.8,
          marginBottom: '36px',
        }}>
          This QR code is unique to you. It links directly to your personal invitation
          and will be used to verify your attendance on the day.
        </p>

        {/* QR code frame */}
        <div style={{
          display: 'inline-block',
          padding: '20px',
          border: '1px solid #C9A84C',
          background: '#fff',
          position: 'relative',
        }}>
          {/* Corner decorations */}
          {['tl','tr','bl','br'].map(pos => (
            <div key={pos} style={{
              position: 'absolute',
              width: '16px', height: '16px',
              borderColor: '#5C1A2E',
              borderStyle: 'solid',
              ...(pos === 'tl' ? { top: -1, left: -1, borderWidth: '2px 0 0 2px' } :
                  pos === 'tr' ? { top: -1, right: -1, borderWidth: '2px 2px 0 0' } :
                  pos === 'bl' ? { bottom: -1, left: -1, borderWidth: '0 0 2px 2px' } :
                                 { bottom: -1, right: -1, borderWidth: '0 2px 2px 0' }),
            }} />
          ))}

          <QRCodeSVG
            value={url}
            size={180}
            fgColor="#3A0F1C"
            bgColor="#ffffff"
            level="M"
            includeMargin={false}
          />
        </div>

        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300, fontSize: '11px',
          letterSpacing: '3px', textTransform: 'uppercase',
          color: '#C9A84C', marginTop: '20px', opacity: 0.75,
        }}>
          Personal · Non-transferable
        </p>

        {/* URL display */}
        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300, fontSize: '11px',
          color: '#9B3556', marginTop: '8px',
          wordBreak: 'break-all', opacity: 0.6,
        }}>
          {url}
        </p>
      </div>
    </section>
  );
}
