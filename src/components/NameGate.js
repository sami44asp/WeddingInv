import React, { useState, useRef, useEffect } from 'react';

export default function NameGate({ onSubmit }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const handleSubmit = () => {
    if (!name.trim()) { setError('Please enter your name.'); return; }
    onSubmit(name.trim());
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg,#3A0F1C 0%,#5C1A2E 60%,#7A2540 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{
        background: 'rgba(253,248,240,0.06)',
        border: '1px solid rgba(201,168,76,0.45)',
        padding: '48px 36px',
        maxWidth: '400px', width: '100%',
        textAlign: 'center',
      }}>
        {/* ornament */}
        <div style={{ fontSize:'20px', color:'#C9A84C', letterSpacing:'10px', marginBottom:'20px' }}>✦ ✦ ✦</div>

        {/* envelope icon */}
        <div style={{ fontSize:'46px', marginBottom:'14px' }}>✉️</div>

        <h2 style={{
          fontFamily:"'Cinzel',serif", fontSize:'20px', fontWeight:400,
          color:'#fff', marginBottom:'10px',
        }}>
          Welcome!
        </h2>

        <div style={{ width:'60px', height:'0.5px', background:'linear-gradient(to right,transparent,#C9A84C,transparent)', margin:'16px auto' }} />

        <p style={{
          fontFamily:"'Lato',sans-serif", fontWeight:300, fontSize:'14px',
          color:'#E8D5A0', lineHeight:1.8, marginBottom:'28px',
        }}>
          Please enter your name to open your invitation.
        </p>

        {/* name input */}
        <div style={{ textAlign:'left', marginBottom:'14px' }}>
          <label style={{
            display:'block', fontSize:'10px', letterSpacing:'4px',
            textTransform:'uppercase', color:'#C9A84C',
            marginBottom:'8px', fontFamily:"'Lato',sans-serif", fontWeight:300,
          }}>
            Your Full Name
          </label>
          <input
            ref={inputRef}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            placeholder="e.g. Abebe Kebede"
            style={{
              width:'100%', padding:'13px 16px',
              border:'1px solid rgba(201,168,76,0.4)',
              background:'rgba(253,248,240,0.05)',
              color:'#E8D5A0', fontSize:'14px',
              outline:'none', borderRadius:0,
              fontFamily:"'Lato',sans-serif",
            }}
          />
          {error && (
            <p style={{ color:'#e88', fontSize:'12px', marginTop:'6px', textAlign:'left' }}>{error}</p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          style={{
            width:'100%', padding:'15px',
            background:'#C9A84C', color:'#1C0A12',
            border:'none', fontFamily:"'Cinzel',serif",
            fontSize:'12px', letterSpacing:'3px',
            cursor:'pointer', fontWeight:500,
          }}
        >
          Open My Invitation ✦
        </button>
      </div>
    </div>
  );
}
