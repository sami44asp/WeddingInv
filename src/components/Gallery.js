import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import useReveal from '../hooks/useReveal';
import { useLang } from '../hooks/useLang';

const BG = [
  'linear-gradient(135deg,#F5EDD8,#E8D5A0)',
  'linear-gradient(135deg,#E8D5A0,#D4B970aa)',
  'linear-gradient(135deg,#F5EDD8,#C9A84C22)',
  'linear-gradient(135deg,#E8D5A0,#F5EDD8)',
  'linear-gradient(135deg,#F5EDD8,#E8D5A0)',
];

const GRID = [
  { col:'1/span 2', row:'1' },
  { col:'3',        row:'1/span 2' },
  { col:'1',        row:'2' },
  { col:'2',        row:'2' },
  { col:'1/span 3', row:'3' },
];

export default function Gallery() {
  const { t, lang } = useLang();
  const { ref, visible } = useReveal(0.1);
  const [hovered, setHovered] = useState(null);
  const slots = t('gallerySlots');

  return (
    <section id="gallery" style={{ padding:'80px 24px', background:'#FDF8F0' }}>
      <div ref={ref} className={`reveal ${visible?'visible':''}`} style={{ maxWidth:'760px',margin:'0 auto' }}>
        <SectionHeader eyebrow={t('galleryEyebrow')} title={t('galleryTitle')} italic={t('galleryItalic')} />
        <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gridTemplateRows:'repeat(3,170px)',gap:'4px' }}>
          {GRID.map((g,i) => (
            <div key={i}
              style={{ gridColumn:g.col,gridRow:g.row,background:BG[i],position:'relative',overflow:'hidden',cursor:'pointer',transition:'transform 0.3s',transform:hovered===i?'scale(1.01)':'scale(1)' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{ position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'36px',color:'#5C1A2E',opacity:0.12,pointerEvents:'none' }}>♥</div>
              <div style={{ position:'absolute',bottom:0,left:0,right:0,padding:'18px 14px 12px',background:'linear-gradient(to top,rgba(58,15,28,0.75),transparent)',transform:hovered===i?'translateY(0)':'translateY(100%)',transition:'transform 0.3s' }}>
                <p className={lang==='am'?'amharic':''} style={{ fontFamily:lang==='am'?"'Noto Serif Ethiopic',serif":"'Cormorant Garamond',serif",fontStyle:'italic',fontSize:'13px',color:'#E8D5A0',textAlign:'center' }}>{slots[i]}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign:'center',fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:'11px',letterSpacing:'3px',textTransform:'uppercase',color:'#C9A84C',marginTop:'18px',opacity:0.6 }}>{t('galleryHint')}</p>
      </div>
    </section>
  );
}
