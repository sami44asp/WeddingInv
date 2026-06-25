import React, { useState, useEffect, useRef } from 'react';
import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';
import { guestStore } from '../data/guestStore';

const S = {
  wrap: { minHeight:'100vh', background:'#1C0A12', padding:'0', fontFamily:"'Lato',sans-serif" },
  header: { background:'#3A0F1C', borderBottom:'1px solid rgba(201,168,76,0.3)', padding:'20px 32px', display:'flex', alignItems:'center', justifyContent:'space-between' },
  title: { fontFamily:"'Cinzel',serif", fontSize:'20px', color:'#C9A84C', letterSpacing:'3px' },
  subtitle: { fontSize:'11px', color:'#E8D5A0', opacity:0.5, letterSpacing:'2px', textTransform:'uppercase', marginTop:'4px' },
  body: { padding:'32px', maxWidth:'1100px', margin:'0 auto' },
  card: { background:'rgba(253,248,240,0.04)', border:'1px solid rgba(201,168,76,0.2)', borderRadius:'2px', padding:'24px', marginBottom:'24px' },
  label: { fontSize:'10px', letterSpacing:'4px', textTransform:'uppercase', color:'#C9A84C', marginBottom:'8px', display:'block' },
  input: { padding:'12px 16px', border:'1px solid rgba(201,168,76,0.4)', background:'rgba(253,248,240,0.04)', color:'#E8D5A0', fontFamily:"'Lato',sans-serif", fontSize:'14px', outline:'none', width:'100%', borderRadius:0 },
  btn: (variant='primary') => ({
    padding: variant==='sm' ? '8px 14px' : '13px 24px',
    background: variant==='danger' ? 'transparent' : variant==='ghost' ? 'transparent' : '#5C1A2E',
    border: variant==='danger' ? '1px solid #8B1A1A' : variant==='ghost' ? '1px solid rgba(201,168,76,0.4)' : 'none',
    color: variant==='danger' ? '#c44' : '#E8D5A0',
    fontFamily:"'Cinzel',serif",
    fontSize: variant==='sm' ? '10px' : '11px',
    letterSpacing:'2px', cursor:'pointer',
    transition:'all 0.2s', borderRadius:0,
    whiteSpace:'nowrap',
  }),
  statBox: { background:'rgba(201,168,76,0.07)', border:'1px solid rgba(201,168,76,0.2)', padding:'20px 24px', textAlign:'center' },
  statNum: { fontFamily:"'Cinzel',serif", fontSize:'32px', color:'#C9A84C', display:'block' },
  statLabel: { fontSize:'10px', letterSpacing:'3px', textTransform:'uppercase', color:'#E8D5A0', opacity:0.55, marginTop:'4px', display:'block' },
  table: { width:'100%', borderCollapse:'collapse' },
  th: { padding:'10px 14px', textAlign:'left', fontSize:'9px', letterSpacing:'3px', textTransform:'uppercase', color:'#C9A84C', borderBottom:'1px solid rgba(201,168,76,0.2)' },
  td: { padding:'14px', borderBottom:'1px solid rgba(255,255,255,0.04)', fontSize:'13px', color:'#E8D5A0', verticalAlign:'middle' },
};

export default function AdminPanel() {
  const [guests, setGuests] = useState([]);
  const [name, setName] = useState('');
  const [baseUrl, setBaseUrl] = useState('https://wedding-inv-beryl.vercel.app/');
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [copied, setCopied] = useState(null);
  const [stats, setStats] = useState({});
  const qrRef = useRef(null);

  const refresh = () => {
    setGuests(guestStore.getAll());
    setStats(guestStore.getStats());
  };

  useEffect(() => { refresh(); }, []);

  const addGuest = () => {
    if (!name.trim()) return;
    guestStore.add(name.trim());
    setName('');
    refresh();
  };

  const removeGuest = (id) => {
    guestStore.delete(id);
    if (selectedGuest?.id === id) setSelectedGuest(null);
    refresh();
  };

  const getLink = (token) => `${baseUrl}?token=${token}`;

  const copyLink = (token, id) => {
    navigator.clipboard.writeText(getLink(token));
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const downloadQR = (guest) => {
    const canvas = document.getElementById(`qr-canvas-${guest.id}`);
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `QR_${guest.name.replace(/\s+/g,'_')}.png`;
    a.click();
  };

  const rsvpBadge = (guest) => {
    if (!guest.rsvp) return { label:'Pending', color:'#C9A84C' };
    if (guest.rsvp.attending==='yes') return { label:'Attending', color:'#2D6A4F' };
    return { label:'Declined', color:'#8B1A1A' };
  };

  return (
    <div style={S.wrap}>
      <div style={S.header}>
        <div>
          <div style={S.title}>Wedding Admin</div>
          <div style={S.subtitle}>Guest Manager · QR Generator</div>
        </div>
        <a href="/" style={{ ...S.btn('ghost'), textDecoration:'none', padding:'10px 18px', fontSize:'10px' }}>← View Invitation</a>
      </div>

      <div style={S.body}>
        {/* Stats */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'2px', marginBottom:'28px', background:'rgba(201,168,76,0.15)' }}>
          {[
            [stats.total||0, 'Total Guests'],
            [stats.scanned||0, 'Scanned'],
            [(stats.rsvpYes||0)+(stats.rsvpNo||0), 'RSVPs In'],
            [stats.rsvpYes||0, 'Attending'],
          ].map(([n,l]) => (
            <div key={l} style={S.statBox}>
              <span style={S.statNum}>{n}</span>
              <span style={S.statLabel}>{l}</span>
            </div>
          ))}
        </div>

        {/* Base URL */}
        <div style={S.card}>
          <label style={S.label}>Base Invitation URL</label>
          <div style={{ display:'flex', gap:'8px' }}>
            <input value={baseUrl} onChange={e=>setBaseUrl(e.target.value)} style={S.input} placeholder="https://biruhmind.et/wedding-invitation/our_invitation.php" />
          </div>
          <p style={{ fontSize:'11px', color:'#E8D5A0', opacity:0.4, marginTop:'8px' }}>Token will be appended as ?token=... to this URL</p>
        </div>

        {/* Add guest */}
        <div style={S.card}>
          <label style={S.label}>Add New Guest</label>
          <div style={{ display:'flex', gap:'10px' }}>
            <input
              value={name} onChange={e=>setName(e.target.value)}
              onKeyDown={e=>e.key==='Enter'&&addGuest()}
              placeholder="Guest full name"
              style={S.input}
            />
            <button onClick={addGuest} style={S.btn()}>Add Guest</button>
          </div>
        </div>

        {/* Guest list + QR preview side by side */}
        <div style={{ display:'grid', gridTemplateColumns:selectedGuest?'1fr 340px':'1fr', gap:'16px' }}>
          {/* Table */}
          <div style={S.card}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px' }}>
              <span style={S.label}>Guest List ({guests.length})</span>
            </div>
            {guests.length === 0 ? (
              <p style={{ color:'#E8D5A0', opacity:0.35, fontSize:'13px', textAlign:'center', padding:'32px 0' }}>No guests added yet.</p>
            ) : (
              <table style={S.table}>
                <thead>
                  <tr>
                    {['Name','Status','RSVP','Actions'].map(h=><th key={h} style={S.th}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {guests.map(g => {
                    const badge = rsvpBadge(g);
                    return (
                      <tr key={g.id} style={{ background: selectedGuest?.id===g.id ? 'rgba(201,168,76,0.06)' : 'transparent' }}>
                        <td style={S.td}>
                          <span style={{ fontWeight:400 }}>{g.name}</span>
                          <span style={{ display:'block', fontSize:'10px', color:'#C9A84C', opacity:0.5, marginTop:'2px', letterSpacing:'1px' }}>
                            {new Date(g.createdAt).toLocaleDateString()}
                          </span>
                        </td>
                        <td style={S.td}>
                          <span style={{ fontSize:'11px', padding:'3px 10px', border:`1px solid ${g.scanned?'#2D6A4F':'rgba(201,168,76,0.4)'}`, color:g.scanned?'#6fcfa0':'#C9A84C' }}>
                            {g.scanned ? '✓ Scanned' : 'Not scanned'}
                          </span>
                        </td>
                        <td style={S.td}>
                          <span style={{ fontSize:'11px', padding:'3px 10px', border:`1px solid ${badge.color}44`, color:badge.color }}>
                            {badge.label}
                          </span>
                        </td>
                        <td style={S.td}>
                          <div style={{ display:'flex', gap:'6px', flexWrap:'wrap' }}>
                            <button onClick={()=>setSelectedGuest(selectedGuest?.id===g.id?null:g)} style={S.btn('ghost',true)}>QR</button>
                            <button onClick={()=>copyLink(g.token,g.id)} style={S.btn('ghost',true)}>
                              {copied===g.id ? '✓' : 'Link'}
                            </button>
                            <button onClick={()=>removeGuest(g.id)} style={{ ...S.btn('danger'), fontSize:'10px', padding:'8px 12px' }}>✕</button>
                          </div>
                          {/* Hidden canvas for download */}
                          <div style={{ position:'absolute', left:'-9999px' }}>
                            <QRCodeCanvas id={`qr-canvas-${g.id}`} value={getLink(g.token)} size={400} fgColor="#3A0F1C" bgColor="#FDF8F0" level="M" />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>

          {/* QR Preview panel */}
          {selectedGuest && (
            <div style={{ ...S.card, textAlign:'center', animation:'fadeUp 0.3s ease' }}>
              <p style={{ ...S.label, textAlign:'center', marginBottom:'20px' }}>QR Code — {selectedGuest.name}</p>
              <div style={{ display:'inline-block', padding:'16px', background:'#FDF8F0', border:'1px solid #C9A84C', position:'relative' }}>
                {['tl','tr','bl','br'].map(p=>(
                  <div key={p} style={{ position:'absolute',width:'14px',height:'14px',borderColor:'#5C1A2E',borderStyle:'solid',
                    ...(p==='tl'?{top:-1,left:-1,borderWidth:'2px 0 0 2px'}:p==='tr'?{top:-1,right:-1,borderWidth:'2px 2px 0 0'}:p==='bl'?{bottom:-1,left:-1,borderWidth:'0 0 2px 2px'}:{bottom:-1,right:-1,borderWidth:'0 2px 2px 0'})
                  }}/>
                ))}
                <QRCodeSVG value={getLink(selectedGuest.token)} size={200} fgColor="#3A0F1C" bgColor="#FDF8F0" level="M" />
              </div>
              <p style={{ fontSize:'11px', color:'#E8D5A0', opacity:0.45, marginTop:'14px', wordBreak:'break-all', lineHeight:1.6 }}>
                {getLink(selectedGuest.token)}
              </p>
              <div style={{ display:'flex', gap:'8px', marginTop:'20px', justifyContent:'center' }}>
                <button onClick={()=>downloadQR(selectedGuest)} style={S.btn()}>Download QR</button>
                <button onClick={()=>copyLink(selectedGuest.token,selectedGuest.id)} style={S.btn('ghost')}>
                  {copied===selectedGuest.id ? '✓ Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
