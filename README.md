# NIILM University — AI Career Advisor 🎓✨

A premium, animation-heavy kiosk tool built for live workshop showcases. A
student answers a few quick questions and an NVIDIA-hosted AI model (with a
smart offline fallback) recommends the best-fit program at **NIILM
University**, presented with a full cinematic reveal.

---

## How the flow works

1. **Landing** — animated hero screen, "Start My Journey"
2. **Name** — student types their name
<<<<<<< HEAD
3. **Qualification** — Class 10 / Class 12 / Diploma / Graduate, each with its own path:

   **Class 10 path** (mirrors the real choice every Class 10 student faces):
   - Select **Board** (CBSE / HBSE)
   - Select **favourite Class 10 subjects** — board-specific list (CBSE and HBSE have different optional subjects)
   - Select a **Stream preference**: Non-Medical (PCM), Medical (PCB), Both Combined (PCMB), Commerce, or Humanities
   - Result: the app confirms the chosen **stream** (not a specific university course — a Class 10 student isn't picking a degree yet) and previews which real NIILM programs that stream opens up later

   **Class 12 path** (unchanged in spirit, fixed in substance):
   - Select **favourite Class 12 subjects** — a *separate, correct* list (Physics, Chemistry, Biology, Accountancy, Economics, Political Science, etc.) instead of reusing Class 10 subjects
   - Select a broad **interest area** (Engineering, Management, Pharmacy, etc.) — if Engineering, a follow-up asks which branch
   - Result: a specific NIILM program recommendation

   **Diploma / Graduate path**:
   - Select **what diploma or degree they already hold** (e.g. Diploma in Mechanical Engg., B.Com, B.Tech, LLB…)
   - Result: the right next step at NIILM (e.g. lateral entry, or the closest matching department)

4. **AI Thinking** — animated brain visual while the recommendation is generated
5. **Result** — confetti, a typed-out headline, the recommendation (stream or program), real career-journey timeline, and the list of companies hiring NIILM graduates. Every program card has a **working "Check it out" link** that opens the correct, real NIILM University department page in a new tab.

All program data (branches, specialisations, careers, campus highlights, and department links) was extracted from the NIILM University presentation deck and cross-checked against the live NIILM University website.

### Why the AI can't give a nonsensical answer

Early versions of this tool let the AI both *pick* the program and *explain* the pick — which let it invent things like "Math relates to Pharmacy" when a student's subject and stated interest didn't actually connect. The architecture now works differently:

- **The pick and its reasoning are always computed deterministically**, from real overlap between the student's subjects and each program's actual subject tags (or their explicit interest/stream choice when there's no subject overlap to point to). This runs with zero network calls, so it works **fully offline** if no NVIDIA API key is configured — this isn't a degraded fallback, it's the real recommendation engine.
- **The NVIDIA API, when configured, is only ever asked to restyle the headline and one encouragement line** on top of the already-decided, fact-checked result. It's explicitly instructed not to introduce new facts or relationships, and its output is discarded (falling back to a deterministic template) if it doesn't look like clean, on-topic JSON.

This means the recommendation itself is never dependent on — or at the mercy of — what a language model decides to say.
=======
3. **Qualification** — 10th / 12th / Diploma / Graduate
4. **Favourite Subjects** *(only shown for Class 12 students)* — multi-select
5. **Interest** — Engineering, Management & Law, Pharmacy, Agriculture,
   Fashion Design, Beauty & Wellness, Hotel Management, or "Not sure"
   - If **Engineering** is picked, a follow-up asks which branch excites
     them most (AI/Coding, Electronics/IoT, Machines/Robotics,
     Infrastructure, Energy) — mapped straight to a NIILM B.Tech branch.
6. **AI Thinking** — animated brain visual while the recommendation is generated
7. **Result** — confetti, AI-generated headline (typed out live), the
   recommended program with a tilting "image" card, two runner-up programs,
   an animated career-journey timeline, and the list of companies hiring
   NIILM graduates.

All program data (branches, specialisations, careers, campus highlights) was
extracted directly from the NIILM University presentation deck you provided.
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c

---

## ✨ Features

<<<<<<< HEAD
- Board-aware Class 10 stream selector (CBSE / HBSE), matching how Indian students actually choose their path
- Separate, correct Class 12 subject list (not reused from Class 10)
- Diploma/Graduate "what do you already hold" path with tailored next-step recommendations
- Deterministic, fact-checked recommendation engine — works fully offline, no API key required
- Real, working "Check it out" links to the correct NIILM University department page for every program
=======
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
- Aurora animated gradient background
- Three.js / React Three Fiber particle universe
- AI-style typewriter text effect for the recommendation reveal
- Confetti burst when the result appears
- Animated "AI brain" while the model is thinking
- A hand-built Lottie animation (no external asset download) on the landing hero
- Glassmorphism UI throughout
- Interactive 3D-tilt program cards
- GSAP-animated career timeline with a drawn connecting line
- Optional synthesized sound effects (click / select / reveal — no audio
  files needed, muteable)
- Fully responsive, dark premium theme
<<<<<<< HEAD
- Graceful AI flavor-text fallback: if the NVIDIA API key is missing or the request
  fails, a deterministic template takes over instantly so the live demo never breaks
=======
- Graceful offline fallback: if the NVIDIA API key is missing or the request
  fails, a local rule-based recommendation engine takes over instantly so
  the live demo never breaks
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c

---

## 🧱 Tech Stack

**Frontend:** React 19, Vite, Tailwind CSS, Framer Motion, GSAP, Three.js,
React Three Fiber, React Router, Lottie (lottie-react), Lucide icons, Axios

**Backend:** Node.js, Express, NVIDIA NIM API, dotenv, CORS

---

## 📁 Project Structure

```
niilm-ai-advisor/
├── client/                 # React + Vite front-end
│   ├── src/
│   │   ├── components/     # All UI components (steps, backgrounds, cards…)
│   │   ├── data/           # Local mirror of program data (offline fallback)
│   │   ├── utils/sound.js  # WebAudio sound effects
│   │   ├── api.js          # Axios client → backend
│   │   ├── App.jsx         # Wizard state machine
│   │   └── main.jsx
│   └── .env.example
├── server/                  # Express API
│   ├── data/niilmData.js    # Program catalogue (source of truth)
│   ├── utils/recommend.js   # Local rule-based recommendation engine
│   ├── utils/nvidia.js      # NVIDIA NIM API client
│   ├── index.js             # Express app + /api/recommend
│   └── .env.example
└── package.json              # Root convenience scripts
```

---

## 🚀 Setup

### 1. Install dependencies

```bash
npm run install:all
```

(or manually: `cd server && npm install`, then `cd ../client && npm install`)

### 2. Add your NVIDIA API key

Get a free key from **https://build.nvidia.com** (NVIDIA NIM API).

```bash
cd server
cp .env.example .env
```

Edit `server/.env`:

```
NVIDIA_API_KEY=nvapi-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NVIDIA_MODEL=meta/llama-3.1-70b-instruct
PORT=4000
```

> No key yet? The app still works — it automatically falls back to a local
> rule-based recommendation engine so you can rehearse/demo offline.

### 3. (Optional) Point the client at a different backend URL

```bash
cd client
cp .env.example .env
# VITE_API_URL=http://localhost:4000
```

### 4. Run it

From the project root (runs both server and client together):

```bash
npm run dev
```

- Backend: http://localhost:4000
- Frontend: http://localhost:5173

Or run them separately:

```bash
npm run dev:server
npm run dev:client
```

### 5. Build for the workshop kiosk (production)

```bash
npm run build:client
```

This outputs a static site in `client/dist/` — serve it with any static
host, or `npm install -g serve && serve client/dist`. Keep the `server`
running (e.g. `npm run dev:server` or `node server/index.js`) alongside it
so `/api/recommend` stays reachable.

---

## 🔧 Customising / Updating Course Data

All NIILM program data lives in **`server/data/niilmData.js`** (source of
truth) and is mirrored in **`client/src/data/niilmData.js`** (offline
fallback only). Edit both files if you add/remove programs, so the fallback
stays consistent with the AI-grounded catalogue.

Each program entry looks like:

```js
{
  id: "cse-ai",
  group: "B.Tech Engineering",
  name: "B.Tech Computer Science Engineering",
  specialisation: "AI · Machine Learning · Data Science",
  tags: ["math", "computer-science", "physics", "logic"],
  interests: ["engineering", "coding", "ai"],
  careers: ["AI Engineer", "Software Developer", "Data Scientist", ...],
  highlights: ["AI & Robotics Labs", "Apple Mac Lab", ...],
  blurb: "..."
}
```

<<<<<<< HEAD
The program catalogue in `server/data/niilmData.js` is the only source of
truth for programs, tags, and links — the deterministic engine (and, for
flavor text only, the NVIDIA model) both work from it, so a course NIILM
doesn't actually offer can never appear.
=======
The NVIDIA model is prompted with this exact catalogue and is instructed to
only recommend a program `id` from this list — so it can never invent a
course NIILM doesn't actually offer.

---

## 🛡️ Why the AI call can't break the demo

`server/index.js` always tries the NVIDIA API first. If the key is missing,
the network is down, the response times out (15s), or the model returns
something unparsable, the server silently falls back to
`server/utils/recommend.js` — a deterministic scoring engine using the
student's subjects + interest — and still returns a complete, well-formatted
result. The front-end doesn't need to know which path was used.
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c

---

## ⚡ Performance / Fast Loading

The landing screen and questionnaire load first; heavy visuals are
code-split with `React.lazy` + `Suspense` and only stream in when actually
needed:

- **Three.js particle universe** — loads right after first paint (behind
  the Aurora CSS background, so there's no visible pop-in)
- **Landing Lottie spark** — loads just after the hero text
- **Result screen** (confetti, career timeline, program cards) — only
  loads once the AI recommendation is ready

This cut the initial JS payload from ~565 KB gzipped to ~296 KB gzipped,
with the rest deferred until it's actually on screen.

---

## 🎤 Presenting at the Workshop

- Run it in full-screen kiosk mode in Chrome (`F11`) for the cleanest look.
- The sound toggle (top-right) lets you mute/unmute the click & reveal
  sound effects depending on the venue.
- Each full run takes about 45–60 seconds end-to-end, perfect for a quick
  demo with a live audience.
