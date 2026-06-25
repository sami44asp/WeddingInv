import React from 'react';
import { useLang } from '../hooks/useLang';
import { WEDDING } from '../data/weddingConfig';

export default function Footer() {
  const { t, lang } = useLang();
  const isAm = lang === 'am';
  const names = isAm ? `${WEDDING.brideNameAm} & ${WEDDING.groomNameAm}` : `${WEDDING.brideName} & ${WEDDING.groomName}`;
  const date  = isAm ? WEDDING.displayDateAm : WEDDING.displayDate;

  return (
    <footer style={{ background:'#3A0F1C', padding:'48px 24px', textAlign:'center' }}>
      <div style={{ width:'60px',height:'0.5px',background:'linear-gradient(to right,transparent,#C9A84C,transparent)',margin:'0 auto 24px' }} />
      <p className={isAm?'amharic':''} style={{ fontFamily:isAm?"'Noto Serif Ethiopic',serif":"'Cormorant Garamond',serif",fontStyle:'italic',fontSize:'20px',color:'#E8D5A0',marginBottom:'8px' }}>{names}</p>
      <p className={isAm?'amharic':''} style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:'11px',letterSpacing:isAm?0:'4px',textTransform:isAm?'none':'uppercase',color:'#C9A84C',opacity:0.65,marginBottom:'24px' }}>{date}</p>
      <div style={{ width:'60px',height:'0.5px',background:'linear-gradient(to right,transparent,#C9A84C,transparent)',margin:'0 auto 24px' }} />
      <p className={isAm?'amharic':''} style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:'11px',letterSpacing:'2px',color:'#C9A84C',opacity:0.35 }}>{t('footerNote')}</p>
    </footer>
  );
}
