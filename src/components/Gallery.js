import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import useReveal from './useReveal';

const SLOTS = [
  { id: 1, label: 'Where it all began',   span: 'wide', bg: 'linear-gradient(135deg,#F5EDD8,#E8D5A0)' },
  { id: 2, label: 'The proposal',         span: 'tall', bg: 'linear-gradient(135deg,#E8D5A0,#C9A84C22)' },
  { id: 3, label: 'Engagement',           span: 'normal', bg: 'linear-gradient(135deg,#F5EDD8,#D4B97022)' },
  { id: 4, label: 'Our adventure',        span: 'normal', bg: 'linear-gradient(135deg,#E8D5A0,#F5EDD8)' },
  { id: 5, label: 'Always together',      span: 'normal', bg: 'linear-gradient(135deg,#F5EDD8,#E8D5A0)' },
];

export default function Gallery() {
  const { ref, visible } = useReveal(0.1);
  const [hovered, setHovered] = useState(null);

  return (
    <section id="gallery" style={{ padding: '80px 24px', background: '#FDF8F0' }}>
      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''}`}
        style={{ maxWidth: '760px', margin: '0 auto' }}
      >
        <SectionHeader eyebrow="Our Memories" title="A glimpse of our" italic="journey" />

        {/*
          Replace the placeholder divs below with:
          <img src={photo.src} alt={photo.label} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 180px)',
          gap: '4px',
        }}>
          {/* Slot 1 — wide top */}
          <GalleryItem
            slot={SLOTS[0]}
            style={{ gridColumn: '1 / span 2', gridRow: '1' }}
            hovered={hovered === 0}
            onHover={setHovered}
            idx={0}
          />
          {/* Slot 2 — tall right */}
          <GalleryItem
            slot={SLOTS[1]}
            style={{ gridColumn: '3', gridRow: '1 / span 2' }}
            hovered={hovered === 1}
            onHover={setHovered}
            idx={1}
          />
          {/* Slot 3 */}
          <GalleryItem
            slot={SLOTS[2]}
            style={{ gridColumn: '1', gridRow: '2' }}
            hovered={hovered === 2}
            onHover={setHovered}
            idx={2}
          />
          {/* Slot 4 */}
          <GalleryItem
            slot={SLOTS[3]}
            style={{ gridColumn: '2', gridRow: '2' }}
            hovered={hovered === 3}
            onHover={setHovered}
            idx={3}
          />
          {/* Slot 5 — full bottom */}
          <GalleryItem
            slot={SLOTS[4]}
            style={{ gridColumn: '1 / span 3', gridRow: '3' }}
            hovered={hovered === 4}
            onHover={setHovered}
            idx={4}
          />
        </div>

        <p style={{
          textAlign: 'center',
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300, fontSize: '11px',
          letterSpacing: '3px', textTransform: 'uppercase',
          color: '#C9A84C', marginTop: '20px', opacity: 0.7,
        }}>
          Replace placeholders with your photos
        </p>
      </div>
    </section>
  );
}

function GalleryItem({ slot, style, hovered, onHover, idx }) {
  return (
    <div
      style={{
        ...style,
        background: slot.bg,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        transform: hovered ? 'scale(1.01)' : 'scale(1)',
      }}
      onMouseEnter={() => onHover(idx)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Placeholder heart */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '36px', color: '#5C1A2E', opacity: 0.12,
        pointerEvents: 'none',
      }}>
        ♥
      </div>

      {/* Hover overlay with label */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '20px 16px 12px',
        background: 'linear-gradient(to top, rgba(58,15,28,0.75), transparent)',
        transform: hovered ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic', fontSize: '14px',
          color: '#E8D5A0', textAlign: 'center',
        }}>
          {slot.label}
        </p>
      </div>
    </div>
  );
}
