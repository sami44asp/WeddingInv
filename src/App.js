import React, { useState } from 'react';
import './index.css';
import { LangProvider } from './hooks/useLang';
import AccessGate    from './components/AccessGate';
import NavBar        from './components/NavBar';
import Hero          from './components/Hero';
import CoupleSection from './components/CoupleSection';
import EventDetails  from './components/EventDetails';
import Countdown     from './components/Countdown';
import Gallery       from './components/Gallery';
import RSVPSection   from './components/RSVPSection';
import Footer        from './components/Footer';
import AdminPanel    from './components/AdminPanel';
import LanguageToggle from './components/LanguageToggle';

// Simple client-side router — no react-router needed
function getRoute() {
  const path = window.location.pathname;
  if (path.includes('/admin')) return 'admin';
  return 'invitation';
}

function getToken() {
  return new URLSearchParams(window.location.search).get('token');
}

function InvitationApp() {
  const token = getToken();
  const [guest, setGuest] = useState(null);
  const [granted, setGranted] = useState(false);

  const handleGranted = (g) => {
    setGuest(g);
    setGranted(true);
  };

  // No token in URL — show scan prompt
  if (!token) {
    return (
      <div style={{
        minHeight:'100vh',
        background:'linear-gradient(160deg,#3A0F1C 0%,#5C1A2E 60%,#7A2540 100%)',
        display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center',
        textAlign:'center', padding:'40px 24px',
        position:'relative',
      }}>
        <LanguageToggle fixed />
        <div style={{ border:'1px solid rgba(201,168,76,0.4)',padding:'48px 36px',maxWidth:'400px',width:'100%',animation:'fadeUp 0.5s ease' }}>
          <div style={{ fontSize:'22px',color:'#C9A84C',letterSpacing:'10px',marginBottom:'24px' }}>✦ ✦ ✦</div>
          <div style={{ fontSize:'48px', marginBottom:'20px' }}>📱</div>
          <h2 style={{ fontFamily:"'Cinzel',serif",fontSize:'18px',fontWeight:400,color:'#fff',marginBottom:'14px',letterSpacing:'2px',lineHeight:1.4 }}>
            Scan Your QR Code
          </h2>
          <p style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:'14px',color:'#E8D5A0',lineHeight:1.8 }}>
            Please scan the QR code on your personal invitation card to access this invitation.
          </p>
          <div style={{ marginTop:'14px',fontFamily:"'Noto Serif Ethiopic',serif",fontSize:'13px',color:'#C9A84C',opacity:0.75 }}>
            እባክዎ የ QR ኮዱን ይቃኙ።
          </div>
        </div>
      </div>
    );
  }

  // Token present but not yet validated
  if (!granted) {
    return <AccessGate token={token} onGranted={handleGranted} />;
  }

  // Granted — show full invitation
  return (
    <div>
      <NavBar />
      <Hero guest={guest} />
      <CoupleSection />
      <EventDetails />
      <Countdown />
      <Gallery />
      <RSVPSection token={token} />
      <Footer />
    </div>
  );
}

export default function App() {
  const route = getRoute();

  return (
    <LangProvider>
      {route === 'admin' ? <AdminPanel /> : <InvitationApp />}
    </LangProvider>
  );
}
