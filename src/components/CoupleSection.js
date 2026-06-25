import React from 'react';
import SectionHeader from './SectionHeader';
import useReveal from '../hooks/useReveal';
import { useLang } from '../hooks/useLang';
import { WEDDING } from '../data/weddingConfig';

const CORNER = (pos) => {
  const map = { tl:{top:-1,left:-1,borderWidth:'2px 0 0 2px'}, tr:{top:-1,right:-1,borderWidth:'2px 2px 0 0'}, bl:{bottom:-1,left:-1,borderWidth:'0 0 2px 2px'}, br:{bottom:-1,right:-1,borderWidth:'0 2px 2px 0'} };
  return { position:'absolute',width:'20px',height:'20px',borderColor:'#C9A84C',borderStyle:'solid',...map[pos] };
};

export default function CoupleSection() {
  const { t, lang } = useLang();
  const { ref, visible } = useReveal();
  const isAm = lang === 'am';
  const brideName = isAm ? WEDDING.brideNameAm : WEDDING.brideName;
  const groomName = isAm ? WEDDING.groomNameAm : WEDDING.groomName;
  const date      = isAm ? WEDDING.displayDateAm : WEDDING.displayDate;

  return (
    <section id="story" style={{ padding:'80px 24px', background:'#FDF8F0' }}>
      <div ref={ref} className={`reveal ${visible?'visible':''}`} style={{ maxWidth:'680px',margin:'0 auto',textAlign:'center' }}>
        <SectionHeader eyebrow={t('storyEyebrow')} title={t('storyTitle')} italic={t('storyItalic')} />

        {/* Photo frame — replace inner div with <img> */}
        <div style={{ position:'relative',width:'min(280px,78vw)',height:'min(340px,94vw)',margin:'0 auto 36px',border:'1px solid #C9A84C',padding:'10px',background:'#fff' }}>
          <div style={{ width:'100%',height:'100%',background:'linear-gradient(135deg,#F5EDD8,#E8D5A0)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'10px' }}>
            <div style={{ fontSize:'64px',opacity:0.14,color:'#5C1A2E',lineHeight:1 }}>♥</div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',fontSize:'13px',color:'#7A2540',opacity:0.6 }}>Couple photo here</p>
          </div>
          {['tl','tr','bl','br'].map(p=><div key={p} style={CORNER(p)} />)}
        </div>

        <p className={isAm?'amharic':''} style={{ fontFamily:isAm?"'Noto Serif Ethiopic',serif":"'Cormorant Garamond',serif",fontStyle:'italic',fontSize:'20px',color:'#5C1A2E',marginBottom:'6px' }}>
          {brideName} &amp; {groomName}
        </p>
        <p className={isAm?'amharic':''} style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:'11px',letterSpacing:isAm?0:'4px',textTransform:isAm?'none':'uppercase',color:'#C9A84C',marginBottom:'30px' }}>
          {date}
        </p>

        <blockquote className={isAm?'amharic':''} style={{ fontFamily:isAm?"'Noto Serif Ethiopic',serif":"'Cormorant Garamond',serif",fontStyle:'italic',fontSize:'clamp(16px,3vw,21px)',color:'#7A2540',lineHeight:1.8,maxWidth:'480px',margin:'0 auto',padding:0,borderLeft:'none' }}>
          {t('storyQuote')}
        </blockquote>
      </div>
    </section>
  );
}
