import React from 'react';
import SectionHeader from './SectionHeader';
import useReveal from './useReveal';

const CARDS = (w) => [
  { icon: '📅', label: 'Date',       value: w.displayDate,    sub: "Valentine's Day" },
  { icon: '⏰', label: 'Time',       value: `Ceremony ${w.ceremonyTime}`, sub: `Reception ${w.receptionTime}` },
  { icon: '📍', label: 'Venue',      value: w.venue,          sub: w.city },
  { icon: '👗', label: 'Dress Code', value: w.dressCode,      sub: 'Formal Attire' },
];

export default function EventDetails({ wedding }) {
  const { ref, visible } = useReveal();
  const cards = CARDS(wedding);

  return (
    <section
      id="details"
      style={{
        padding: '80px 24px',
        background: 'linear-gradient(180deg, #FDF8F0 0%, #F5EDD8 50%, #FDF8F0 100%)',
      }}
    >
      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''}`}
        style={{ maxWidth: '720px', margin: '0 auto' }}
      >
        <SectionHeader eyebrow="Ceremony & Reception" title="The" italic="Details" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2px',
          background: '#C9A84C',
          border: '2px solid #C9A84C',
        }}>
          {cards.map(({ icon, label, value, sub }) => (
            <div key={label} style={{
              background: '#FDF8F0',
              padding: '36px 24px',
              textAlign: 'center',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
            }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: '#5C1A2E',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px', marginBottom: '8px',
              }}>
                {icon}
              </div>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300, fontSize: '10px',
                letterSpacing: '4px', textTransform: 'uppercase',
                color: '#C9A84C',
              }}>
                {label}
              </p>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '14px', color: '#3A0F1C',
                lineHeight: 1.6, fontWeight: 400,
              }}>
                {value}
              </p>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300, fontSize: '12px',
                color: '#7A2540',
              }}>
                {sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
