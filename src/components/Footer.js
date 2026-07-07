import React from 'react';

export default function Footer({ wedding }) {
  return (
    <footer style={{
      background: '#3A0F1C',
      padding: '48px 24px',
      textAlign: 'center',
    }}>
      <div style={{
        width: '60px', height: '0.5px',
        background: 'linear-gradient(to right, transparent, #C9A84C, transparent)',
        margin: '0 auto 24px',
      }} />

      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: 'italic',
        fontSize: '22px',
        color: '#E8D5A0',
        marginBottom: '8px',
      }}>
        {wedding.brideName} &amp; {wedding.groomName}
      </p>

      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 300, fontSize: '11px',
        letterSpacing: '4px', textTransform: 'uppercase',
        color: '#C9A84C', opacity: 0.7,
        marginBottom: '24px',
      }}>
        {wedding.displayDate}
      </p>

      <div style={{
        width: '60px', height: '0.5px',
        background: 'linear-gradient(to right, transparent, #C9A84C, transparent)',
        margin: '0 auto 24px',
      }} />

      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 300, fontSize: '11px',
        letterSpacing: '2px',
        color: '#C9A84C', opacity: 0.4,
      }}>
        This invitation is personal and non-transferable
      </p>
    </footer>
  );
}
