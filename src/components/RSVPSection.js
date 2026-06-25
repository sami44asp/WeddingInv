import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import useReveal from '../hooks/useReveal';
import { useLang } from '../hooks/useLang';
import { WEDDING } from '../data/weddingConfig';
import { guestStore } from '../data/guestStore';

const inputStyle = {
  width:'100%', padding:'12px 16px',
  border:'1px solid #C9A84C', background:'transparent',
  fontFamily:"'Lato',sans-serif", fontWeight:300,
  fontSize:'14px', color:'#1C0A12',
  outline:'none', borderRadius:0,
};

export default function RSVPSection({ token }) {
  const { t, lang } = useLang();
  const { ref, visible } = useReveal();
  const isAm = lang === 'am';
  const [form, setForm] = useState({ name:'', attending:'yes', guests:'1', meal:'', message:'' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const set = (k,v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    if (!form.name.trim()) { setError(t('nameError')); return; }
    setError(''); setStatus('loading');
    await new Promise(r => setTimeout(r, 1000));
    if (token) guestStore.saveRSVP(token, form);
    setStatus('success');
  };

  const deadline = isAm ? WEDDING.rsvpDeadlineAm : WEDDING.rsvpDeadline;
  const mealOpts = t('mealOptions');
  const guestOpts = t('guestOptions');

  return (
    <section id="rsvp" style={{ padding:'80px 24px', background:'#FDF8F0' }}>
      <div ref={ref} className={`reveal ${visible?'visible':''}`} style={{ maxWidth:'520px',margin:'0 auto' }}>
        <SectionHeader eyebrow={t('rsvpEyebrow')} title={t('rsvpTitle')} italic={t('rsvpItalic')} />
        <p className={isAm?'amharic':''} style={{ textAlign:'center',fontFamily:isAm?"'Noto Serif Ethiopic',serif":"'Lato',sans-serif",fontWeight:300,fontSize:'13px',color:'#7A2540',marginBottom:'36px',lineHeight:1.8 }}>
          {t('rsvpDeadlineMsg')} <strong style={{ fontWeight:400 }}>{deadline}</strong>
        </p>

        {status === 'success' ? (
          <div style={{ border:'1px solid #C9A84C',padding:'48px 32px',textAlign:'center' }}>
            <div style={{ fontSize:'28px',marginBottom:'14px',opacity:0.8 }}>✦</div>
            <p className={isAm?'amharic':''} style={{ fontFamily:isAm?"'Noto Serif Ethiopic',serif":"'Cormorant Garamond',serif",fontStyle:'italic',fontSize:'26px',color:'#5C1A2E',marginBottom:'12px' }}>{t('successTitle')}</p>
            <p className={isAm?'amharic':''} style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:'14px',color:'#7A2540',lineHeight:1.7 }}>
              {form.attending==='yes' ? t('successYes') : t('successNo')}
            </p>
          </div>
        ) : (
          <div style={{ display:'flex',flexDirection:'column',gap:'20px' }}>
            {/* Name */}
            <div>
              <label className={isAm?'amharic':''} style={{ display:'block',fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'#5C1A2E',marginBottom:'8px' }}>{t('nameLabel')}</label>
              <input type="text" placeholder={t('namePlaceholder')} value={form.name} onChange={e=>set('name',e.target.value)} style={inputStyle} className={isAm?'amharic':''} />
            </div>

            {/* Attend toggle */}
            <div>
              <label className={isAm?'amharic':''} style={{ display:'block',fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'#5C1A2E',marginBottom:'8px' }}>{t('attendLabel')}</label>
              <div style={{ display:'flex',gap:'10px' }}>
                {[['yes',t('accepts')],['no',t('declines')]].map(([val,label])=>(
                  <button key={val} onClick={()=>set('attending',val)} className={isAm?'amharic':''} style={{ flex:1,padding:'14px 8px',border:`1px solid ${form.attending===val?'#5C1A2E':'#C9A84C'}`,background:form.attending===val?'#5C1A2E':'transparent',color:form.attending===val?'#E8D5A0':'#7A2540',fontFamily:isAm?"'Noto Serif Ethiopic',serif":"'Cinzel',serif",fontSize:'11px',letterSpacing:isAm?0:'1.5px',cursor:'pointer',transition:'all 0.2s' }}>{label}</button>
                ))}
              </div>
            </div>

            {/* Guests */}
            {form.attending==='yes' && (
              <div>
                <label className={isAm?'amharic':''} style={{ display:'block',fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'#5C1A2E',marginBottom:'8px' }}>{t('guestsLabel')}</label>
                <select value={form.guests} onChange={e=>set('guests',e.target.value)} style={{ ...inputStyle,cursor:'pointer' }}>
                  {guestOpts.map((o,i)=><option key={i} value={i+1}>{o}</option>)}
                </select>
              </div>
            )}

            {/* Meal */}
            {form.attending==='yes' && (
              <div>
                <label className={isAm?'amharic':''} style={{ display:'block',fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'#5C1A2E',marginBottom:'8px' }}>{t('mealLabel')}</label>
                <select value={form.meal} onChange={e=>set('meal',e.target.value)} style={{ ...inputStyle,cursor:'pointer' }}>
                  {mealOpts.map((o,i)=><option key={i} value={i===0?'':o.toLowerCase()}>{o}</option>)}
                </select>
              </div>
            )}

            {/* Message */}
            <div>
              <label className={isAm?'amharic':''} style={{ display:'block',fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'#5C1A2E',marginBottom:'8px' }}>{t('messageLabel')}</label>
              <textarea placeholder={t('messagePlaceholder')} value={form.message} onChange={e=>set('message',e.target.value)} className={isAm?'amharic':''} style={{ ...inputStyle,height:'88px',resize:'none' }} />
            </div>

            {error && <p className={isAm?'amharic':''} style={{ color:'#8B1A1A',fontSize:'13px',textAlign:'center' }}>{error}</p>}

            <button onClick={handleSubmit} disabled={status==='loading'} className={isAm?'amharic':''} style={{ width:'100%',padding:'18px',background:status==='loading'?'#7A2540':'#5C1A2E',color:'#E8D5A0',border:'none',fontFamily:isAm?"'Noto Serif Ethiopic',serif":"'Cinzel',serif",fontSize:'12px',letterSpacing:isAm?0:'4px',cursor:status==='loading'?'not-allowed':'pointer',transition:'background 0.2s' }}>
              {status==='loading' ? t('sending') : `${t('sendReply')} ✦`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
