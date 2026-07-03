// Tiny synthesized sound-effect engine using the Web Audio API.
// Avoids shipping binary audio assets while still giving the kiosk
// satisfying click / whoosh / success feedback. All sounds can be
// globally muted via setSoundEnabled(false).

let audioCtx = null;
let enabled = true;

function getCtx() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    audioCtx = new AC();
  }
  return audioCtx;
}

export function setSoundEnabled(value) {
  enabled = value;
}

export function isSoundEnabled() {
  return enabled;
}

function tone({ freq = 440, duration = 0.15, type = "sine", gain = 0.05, glideTo = null, delay = 0 }) {
  if (!enabled) return;
  const ctx = getCtx();
  if (!ctx) return;
  if (ctx.state === "suspended") ctx.resume();

  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  const start = ctx.currentTime + delay;
  osc.frequency.setValueAtTime(freq, start);
  if (glideTo) {
    osc.frequency.exponentialRampToValueAtTime(glideTo, start + duration);
  }
  g.gain.setValueAtTime(0, start);
  g.gain.linearRampToValueAtTime(gain, start + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  osc.connect(g);
  g.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + duration + 0.05);
}

export const sfx = {
  click: () => tone({ freq: 520, duration: 0.09, type: "triangle", gain: 0.045 }),
  select: () => tone({ freq: 660, duration: 0.12, type: "sine", gain: 0.05, glideTo: 880 }),
  advance: () => {
    tone({ freq: 440, duration: 0.1, type: "sine", gain: 0.04 });
    tone({ freq: 660, duration: 0.14, type: "sine", gain: 0.045, delay: 0.08 });
  },
  thinkPulse: () => tone({ freq: 300, duration: 0.2, type: "sine", gain: 0.02, glideTo: 340 }),
  reveal: () => {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
      tone({ freq: f, duration: 0.35, type: "sine", gain: 0.045, delay: i * 0.09 })
    );
  }
};
