<<<<<<< HEAD
# Wedding Invitation System
## ዳንኤል & አማራ — Bilingual Wedding Invitation with QR Gate

---

## 🗂 Project Structure

```
src/
├── App.js                     ← Main router (invitation vs admin)
├── data/
│   ├── weddingConfig.js       ← 🔧 EDIT THIS — couple names, date, venue
│   └── guestStore.js          ← Guest DB (localStorage for dev, replace with API)
├── i18n/
│   └── translations.js        ← All English + Amharic strings
├── hooks/
│   ├── useLang.js             ← Language context (en/am toggle)
│   └── useReveal.js           ← Scroll-based fade-in
└── components/
    ├── AccessGate.js          ← QR token validator (blocks invalid/used tokens)
    ├── NavBar.js              ← Fixed nav with language toggle
    ├── LanguageToggle.js      ← EN ↔ አማርኛ button
    ├── Hero.js                ← Full-screen hero with petals
    ├── CoupleSection.js       ← Photo frame + quote
    ├── EventDetails.js        ← Date/time/venue/dress cards
    ├── Countdown.js           ← Live countdown timer
    ├── Gallery.js             ← Mosaic photo grid
    ├── RSVPSection.js         ← Bilingual RSVP form
    ├── Footer.js
    ├── SectionHeader.js
    └── AdminPanel.js          ← 🔑 Guest manager + QR generator
```

---

## 🚀 Getting Started

```bash
npm install
npm start
```

- **Invitation:** `http://localhost:3000/`  
- **Admin panel:** `http://localhost:3000/admin`

---

## ⚙️ Configuration

### 1. Update couple details
Edit `src/data/weddingConfig.js`:
```js
groomName: 'Daniel',
brideName: 'Amara',
date: '2026-02-14',
venue: 'The Grand Ballroom, Sheraton Hotel',
// ... and Amharic equivalents
```

### 2. Set your live URL
In the Admin Panel, update the **Base Invitation URL** field to your PHP page:
```
https://biruhmind.et/wedding-invitation/our_invitation.php
```
Each guest link will be:  
`https://biruhmind.et/wedding-invitation/our_invitation.php?token=<unique_token>`

---

## 👥 Guest Management (Admin Panel → `/admin`)

1. **Add guests** — enter name, click Add Guest  
2. **QR generated automatically** — each guest gets a unique token  
3. **Download QR** — save as PNG to print on invitation cards  
4. **Copy Link** — send via WhatsApp / email  
5. **Track status** — see who has scanned and who has RSVPed  

---

## 🔒 Single-Use QR Logic

Each token can only grant access once:

| Scenario | Result |
|----------|--------|
| Valid token, first scan | ✅ Invitation opens |
| Valid token, already scanned | ❌ "Invitation Already Used" screen |
| Invalid / missing token | ❌ "Invalid Invitation" screen |
| No token in URL | 📱 "Please scan your QR code" screen |

### Connecting to your PHP backend

Replace the `guestStore` calls in `src/data/guestStore.js` with real API calls:

```js
// In validateToken — call your PHP API:
const res = await fetch(`/api/validate?token=${token}`);
const data = await res.json();
// { valid: true, used: false, guest: { id, name, ... } }

// In markScanned:
await fetch('/api/mark-scanned', {
  method: 'POST',
  body: JSON.stringify({ token }),
});

// In saveRSVP:
await fetch('/api/rsvp', {
  method: 'POST',
  body: JSON.stringify({ token, ...rsvpData }),
});
```

---

## 🌍 Language System

All strings live in `src/i18n/translations.js` under `en` and `am` keys.  
Toggle button appears in the navbar and on all access screens.  
Amharic uses **Noto Serif Ethiopic** — loaded from Google Fonts.

To add more languages, add a new key block in `translations.js` and update `useLang.js`.

---

## 📸 Adding Real Photos

**Couple photo** — in `CoupleSection.js`, replace:
```jsx
<div style={{ /* placeholder */ }} />
```
with:
```jsx
<img src="/photos/couple.jpg" alt="Amara & Daniel" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
```

**Gallery photos** — in `Gallery.js`, replace the `♥` placeholder `<div>` inside each `GalleryItem` with an `<img>` tag.

---

## 🏗 Build for Production

```bash
npm run build
```

Upload the `build/` folder to your server.  
Ensure your `.htaccess` has:
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ /index.html [L]
```
=======
# WeddingInv
>>>>>>> e6b0f79414e6147b8a21cf061ed2691f99184b69
