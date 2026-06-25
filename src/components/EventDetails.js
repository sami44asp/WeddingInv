import React from 'react';
import SectionHeader from './SectionHeader';
import useReveal from '../hooks/useReveal';
import { useLang } from '../hooks/useLang';
import { WEDDING } from '../data/weddingConfig';

export default function EventDetails() {
  const { t, lang } = useLang();
  const { ref, visible } = useReveal();
  const isAm = lang === 'am';

  const cards = [
    { icon:'📅', label:t('dateLabel'),  value: isAm ? WEDDING.displayDateAm : WEDDING.displayDate, sub: t('valentines') },
    { icon:'⏰', label:t('timeLabel'),  value: `${t('receptionFollows')}: ${WEDDING.ceremonyTime}`, sub: `${t('receptionFollows')}: ${WEDDING.receptionTime}` },
    { icon:'📍', label:t('venueLabel'), value: isAm ? WEDDING.venueAm : WEDDING.venue, sub: isAm ? WEDDING.cityAm : WEDDING.city },
    { icon:'👗', label:t('dressLabel'), value: isAm ? WEDDING.dressCodeAm : WEDDING.dressCode, sub: t('formalAttire') },
  ];

  return (
    <section id="details" style={{ padding:'80px 24px', background:'linear-gradient(180deg,#FDF8F0 0%,#F5EDD8 50%,#FDF8F0 100%)' }}>
      <div ref={ref} className={`reveal ${visible?'visible':''}`} style={{ maxWidth:'700px',margin:'0 auto' }}>
        <SectionHeader eyebrow={t('detailsEyebrow')} title={t('detailsTitle')} italic={t('detailsItalic')} />
        <div style={{ display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'2px',background:'#C9A84C',border:'2px solid #C9A84C' }}>
          {cards.map(({ icon, label, value, sub }) => (
            <div key={label} style={{ background:'#FDF8F0',padding:'32px 20px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:'8px' }}>
              <div style={{ width:'46px',height:'46px',borderRadius:'50%',background:'#5C1A2E',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px',marginBottom:'6px' }}>{icon}</div>
              <p style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'#C9A84C' }}>{label}</p>
              <p className={isAm?'amharic':''} style={{ fontFamily:isAm?"'Noto Serif Ethiopic',serif":"'Cinzel',serif",fontSize:'13px',color:'#3A0F1C',lineHeight:1.6 }}>{value}</p>
              <p className={isAm?'amharic':''} style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:'12px',color:'#7A2540' }}>{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
