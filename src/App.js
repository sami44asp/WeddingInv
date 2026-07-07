import React from 'react';
import Hero from './components/Hero';
import CoupleSection from './components/CoupleSection';
import EventDetails from './components/EventDetails';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import RSVPSection from './components/RSVPSection';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const WEDDING = {
  groomName:    'Daniel',
  brideName:    'Amara',
  date:         '2026-02-14',
  displayDate:  'Saturday, 14 February 2026',
  ceremonyTime: '4:00 PM',
  receptionTime:'7:00 PM',
  venue:        'The Grand Ballroom, Sheraton Hotel',
  city:         'Addis Ababa, Ethiopia',
  dressCode:    'Black Tie',
  rsvpDeadline: '1 February 2026',
};

// No gate. No token. No device check. No name prompt.
// Scan QR → website opens. That's it.
export default function App() {
  return (
    <div>
      <NavBar couple={`${WEDDING.brideName} & ${WEDDING.groomName}`} />
      <Hero wedding={WEDDING} guestName={null} />
      <CoupleSection wedding={WEDDING} />
      <EventDetails wedding={WEDDING} />
      <Countdown targetDate={WEDDING.date} ceremonyTime="16:00:00" />
      <Gallery />
      <RSVPSection wedding={WEDDING} />
      <Footer wedding={WEDDING} />
    </div>
  );
}
