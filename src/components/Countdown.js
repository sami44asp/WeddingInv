import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';

function pad(n) { return String(n).padStart(2, '0'); }

function getTimeLeft(targetISO, time) {
  const target = new Date(`${targetISO}T${time}`);
  const now    = new Date();
  const diff   = Math.max(0, target - now);
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000)  / 60000),
    seconds: Math.floor((diff % 60000)    / 1000),
    expired: diff === 0,
  };
}

function Unit({ value, label }) {
  return (
    <div style={{ textAlign: 'center', minWidth: '72px' }}>
      <span style={{
        display: 'block',
        fontFamily: "'Cinzel', serif",
        fontSize: 'clamp(36px, 8vw, 58px)',
        fontWeight: 500,
        color: '#fff',
        lineHeight: 1,
        letterSpacing: '2px',
      }}>
        {pad(value)}
      </span>
      <span style={{
        display: 'block',
        fontFamily: "'Lato', sans-serif",
        fontWeight: 300, fontSize: '10px',
        letterSpacing: '4px', textTransform: 'uppercase',
        color: '#C9A84C', marginTop: '8px',
      }}>
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span style={{
      fontFamily: "'Cinzel', serif",
      fontSize: 'clamp(28px, 6vw, 44px)',
      color: '#C9A84C',
      alignSelf: 'flex-start',
      paddingTop: '8px',
      opacity: 0.7,
    }}>
      :
    </span>
  );
}

export default function Countdown({ targetDate, ceremonyTime }) {
  const [time, setTime] = useState(() => getTimeLeft(targetDate, ceremonyTime));

  useEffect(() => {
    if (time.expired) return;
    const id = setInterval(() => setTime(getTimeLeft(targetDate, ceremonyTime)), 1000);
    return () => clearInterval(id);
  }, [targetDate, ceremonyTime, time.expired]);

  return (
    <section style={{
      padding: '80px 24px',
      background: 'linear-gradient(160deg, #3A0F1C 0%, #5C1A2E 100%)',
    }}>
      <SectionHeader
        eyebrow="The Big Day"
        title="Counting down to"
        italic="forever"
        light
      />

      {time.expired ? (
        <p style={{
          textAlign: 'center',
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: '28px',
          color: '#E8D5A0',
        }}>
          Today is the day! 🎉
        </p>
      ) : (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          <Unit value={time.days}    label="Days"    />
          <Colon />
          <Unit value={time.hours}   label="Hours"   />
          <Colon />
          <Unit value={time.minutes} label="Minutes" />
          <Colon />
          <Unit value={time.seconds} label="Seconds" />
        </div>
      )}
    </section>
  );
}
