import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import useReveal from './useReveal';

const INITIAL = { name: '', attending: 'yes', guests: '1', meal: '', message: '' };

export default function RSVPSection({ wedding }) {
  const { ref, visible } = useReveal();
  const [form, setForm]       = useState(INITIAL);
  const [status, setStatus]   = useState('idle'); // idle | loading | success | error
  const [error, setError]     = useState('');

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = async () => {
    if (!form.name.trim()) { setError('Please enter your name.'); return; }
    setError('');
    setStatus('loading');

    /*
     * ── Connect to your PHP backend ──────────────────────────────
     * Replace the URL below with your real endpoint.
     * match the RSVP to the correct guest record.
     *
     * Example endpoint:
     *   POST /api/rsvp
     *
     * Uncomment and adapt the fetch below:
     *
     *   const res = await fetch('/api/rsvp', {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *   });
     *   if (!res.ok) throw new Error('Server error');
     *
     * ────────────────────────────────────────────────────────────
     */

    // Simulated success for demo:
    await new Promise(r => setTimeout(r, 1200));
    setStatus('success');
  };

  return (
    <section id="rsvp" style={{ padding: '80px 24px', background: '#FDF8F0' }}>
      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''}`}
        style={{ maxWidth: '520px', margin: '0 auto' }}
      >
        <SectionHeader eyebrow="Kindly Reply" title="Reserve your" italic="seat" />

        <p style={{
          textAlign: 'center',
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300, fontSize: '13px',
          color: '#7A2540', marginBottom: '36px',
          lineHeight: 1.7,
        }}>
          Please respond by <strong style={{ fontWeight: 400 }}>{wedding.rsvpDeadline}</strong>
        </p>

        {status === 'success' ? (
          <SuccessState attending={form.attending} name={form.name} />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Name */}
            <Field label="Full Name">
              <input
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={e => set('name', e.target.value)}
                style={inputStyle}
              />
            </Field>

            {/* Attending toggle */}
            <Field label="Will you attend?">
              <div style={{ display: 'flex', gap: '10px' }}>
                {[['yes', 'Joyfully Accepts'], ['no', 'Regretfully Declines']].map(([val, label]) => (
                  <button
                    key={val}
                    onClick={() => set('attending', val)}
                    style={{
                      flex: 1, padding: '14px 8px',
                      border: `1px solid ${form.attending === val ? '#5C1A2E' : '#C9A84C'}`,
                      background: form.attending === val ? '#5C1A2E' : 'transparent',
                      color: form.attending === val ? '#E8D5A0' : '#7A2540',
                      fontFamily: "'Cinzel', serif",
                      fontSize: '11px', letterSpacing: '1.5px',
                      cursor: 'pointer', transition: 'all 0.2s',
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </Field>

            {/* Guests — only if attending */}
            {form.attending === 'yes' && (
              <Field label="Number of Guests">
                <select
                  value={form.guests}
                  onChange={e => set('guests', e.target.value)}
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                >
                  {['1 — Just me', '2 — Myself & partner', '3 — Three guests', '4 — Four guests'].map((o, i) => (
                    <option key={i} value={i + 1}>{o}</option>
                  ))}
                </select>
              </Field>
            )}

            {/* Meal preference */}
            {form.attending === 'yes' && (
              <Field label="Meal Preference">
                <select
                  value={form.meal}
                  onChange={e => set('meal', e.target.value)}
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                >
                  <option value="">Select preference</option>
                  <option value="standard">Standard</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="halal">Halal</option>
                  <option value="gluten-free">Gluten-free</option>
                </select>
              </Field>
            )}

            {/* Message */}
            <Field label="Message for the Couple (optional)">
              <textarea
                placeholder="Share your wishes or any special requests…"
                value={form.message}
                onChange={e => set('message', e.target.value)}
                style={{ ...inputStyle, height: '90px', resize: 'none' }}
              />
            </Field>

            {error && (
              <p style={{ color: '#9B3556', fontSize: '13px', textAlign: 'center' }}>{error}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === 'loading'}
              style={{
                width: '100%', padding: '18px',
                background: status === 'loading' ? '#7A2540' : '#5C1A2E',
                color: '#E8D5A0',
                border: 'none',
                fontFamily: "'Cinzel', serif",
                fontSize: '12px', letterSpacing: '4px',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s',
              }}
            >
              {status === 'loading' ? 'Sending…' : 'Send Reply ✦'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label style={{
        display: 'block',
        fontFamily: "'Lato', sans-serif",
        fontWeight: 300, fontSize: '10px',
        letterSpacing: '4px', textTransform: 'uppercase',
        color: '#5C1A2E', marginBottom: '8px',
      }}>
        {label}
      </label>
      {children}
    </div>
  );
}

function SuccessState({ attending, name }) {
  return (
    <div style={{
      border: '1px solid #C9A84C',
      padding: '48px 32px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '32px', marginBottom: '16px', opacity: 0.8 }}>✦</div>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: 'italic',
        fontSize: '28px',
        color: '#5C1A2E',
        marginBottom: '12px',
      }}>
        {attending === 'yes' ? "We're so excited!": "Thank you for letting us know"}
      </p>
      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 300, fontSize: '14px',
        color: '#7A2540', lineHeight: 1.7,
      }}>
        {attending === 'yes'
          ? `Thank you, ${name}. Your RSVP has been received. We can't wait to celebrate with you!`
          : `Thank you, ${name}. We'll miss you on our special day and hope to celebrate with you soon.`}
      </p>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  border: '1px solid #C9A84C',
  background: 'transparent',
  fontFamily: "'Lato', sans-serif",
  fontWeight: 300,
  fontSize: '14px',
  color: '#1C0A12',
  outline: 'none',
  borderRadius: 0,
};
