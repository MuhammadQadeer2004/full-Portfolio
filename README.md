# Animated Portfolio (React + Tailwind + Framer Motion + Express)

```
portfolio/
├── client/   -> React website (Vercel par live hogi)
└── server/   -> Contact form ka backend (Render par live hoga)
```

## 1. Apna content badlo
Sirf **`client/src/data/portfolio.js`** edit karo: naam, projects, skills, experience, links.
Aur ye bhi karo:
- `client/public/cv.pdf` -> apni CV isi naam se rakh do
- `client/index.html` -> title, og:url, og:image (LinkedIn preview ke liye `public/og.png`, size 1200x630)
- `client/public/favicon.svg` -> apna initial

## 2. Local par chalao

**Terminal 1 (backend):**
```bash
cd server
npm install
cp .env.example .env     # phir .env me apna Gmail App Password daalo
npm run dev
```
**Terminal 2 (frontend):**
```bash
cd client
npm install
cp .env.example .env
npm run dev
```
Browser me `http://localhost:5173` kholo.
(Agar `.env` me email set nahi, to contact form ka message server ke console me print hoga, testing ke liye theek hai.)

## 3. Live karo (free)

### Backend -> Render
1. `portfolio` ko GitHub par push karo.
2. render.com > New > **Web Service** > apni repo chuno.
3. Root Directory: `server` | Build: `npm install` | Start: `npm start`
4. Environment variables: `CLIENT_URL` (Vercel ka URL, step baad me update karna), `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`, `NODE_ENV=production`
5. Deploy ke baad URL milega, jaise `https://xyz.onrender.com`
   (Free plan par pehli request 30-50 second le sakti hai kyunke server so jata hai.)

### Frontend -> Vercel
1. vercel.com > Add New > Project > wohi repo.
2. Root Directory: `client` | Framework: Vite (auto detect ho jata hai)
3. Environment variable: `VITE_API_URL` = Render ka URL
4. Deploy. Phir Render me `CLIENT_URL` ko Vercel ke URL se update karo.

## 4. LinkedIn aur CV
- LinkedIn > Profile > **Contact info / Featured** me live link add karo.
- Post me 10-15 second ki screen recording lagao (hero ka name hover effect dikhao).
- CV me "Portfolio: your-site.vercel.app" aur GitHub link likho.

## Animations jo isme hain
- Hero name: cursor ke paas letters mote hote hain (Framer Motion spring + variable font)
- Scroll progress bar, section titles ka reveal
- Projects accordion, mobile menu, contact form messages
- Skills marquee (hover par ruk jati hai), experience ki line scroll ke saath banti hai
- `prefers-reduced-motion` ka khayal rakha gaya hai
