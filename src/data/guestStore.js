// Guest store — persists to localStorage (simulates a backend DB)
// In production, replace with real API calls to your PHP backend.

const STORE_KEY = 'wedding_guests_v1';
const SCANNED_KEY = 'wedding_scanned_v1';

function loadGuests() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; }
  catch { return []; }
}
function saveGuests(guests) {
  localStorage.setItem(STORE_KEY, JSON.stringify(guests));
}
function loadScanned() {
  try { return JSON.parse(localStorage.getItem(SCANNED_KEY)) || {}; }
  catch { return {}; }
}
function saveScanned(map) {
  localStorage.setItem(SCANNED_KEY, JSON.stringify(map));
}

// Generate a secure random token
function generateToken() {
  const arr = new Uint8Array(32);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b => b.toString(16).padStart(2,'0')).join('');
}

export const guestStore = {
  getAll() { return loadGuests(); },

  add(name) {
    const guests = loadGuests();
    const guest = {
      id: Date.now().toString(),
      name,
      token: generateToken(),
      createdAt: new Date().toISOString(),
      scanned: false,
      scannedAt: null,
      rsvp: null,       // null | { attending, guests, meal, message }
    };
    guests.push(guest);
    saveGuests(guests);
    return guest;
  },

  delete(id) {
    const guests = loadGuests().filter(g => g.id !== id);
    saveGuests(guests);
  },

  // Validate token — returns { valid, used, guest } 
  validateToken(token) {
    const guests = loadGuests();
    const guest = guests.find(g => g.token === token);
    if (!guest) return { valid: false, used: false, guest: null };
    if (guest.scanned) return { valid: true, used: true, guest };
    return { valid: true, used: false, guest };
  },

  // Mark a token as scanned (first access)
  markScanned(token) {
    const guests = loadGuests();
    const idx = guests.findIndex(g => g.token === token);
    if (idx === -1) return;
    guests[idx].scanned = true;
    guests[idx].scannedAt = new Date().toISOString();
    saveGuests(guests);
  },

  // Save RSVP response for a guest
  saveRSVP(token, rsvpData) {
    const guests = loadGuests();
    const idx = guests.findIndex(g => g.token === token);
    if (idx === -1) return;
    guests[idx].rsvp = { ...rsvpData, submittedAt: new Date().toISOString() };
    saveGuests(guests);
  },

  getStats() {
    const guests = loadGuests();
    return {
      total: guests.length,
      scanned: guests.filter(g => g.scanned).length,
      rsvpYes: guests.filter(g => g.rsvp?.attending === 'yes').length,
      rsvpNo:  guests.filter(g => g.rsvp?.attending === 'no').length,
      rsvpPending: guests.filter(g => !g.rsvp).length,
    };
  }
};
