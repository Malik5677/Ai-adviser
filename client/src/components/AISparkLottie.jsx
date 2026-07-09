import { useMemo } from "react";
<<<<<<< HEAD
import * as LottieModule from "lottie-react";

const Lottie =
  LottieModule?.default?.default ??
  LottieModule?.default ??
  LottieModule;
=======
import Lottie from "lottie-react";
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c

/**
 * A small hand-built Lottie JSON (no external asset download needed —
 * keeps the kiosk fast and fully offline-capable). Draws a glowing
 * rotating "AI spark" made of concentric shapes, used as a lightweight
 * Lottie-powered accent next to the hero heading.
 */
function buildSparkAnimation() {
  return {
    v: "5.9.0",
    fr: 30,
    ip: 0,
    op: 90,
    w: 200,
    h: 200,
    nm: "AI Spark",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "outerRing",
        sr: 1,
        ks: {
          o: { a: 0, k: 70 },
          r: { a: 1, k: [{ t: 0, s: [0] }, { t: 90, s: [360] }] },
          p: { a: 0, k: [100, 100, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        shapes: [
          {
            ty: "el",
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [140, 140] },
            nm: "ring"
          },
          {
            ty: "st",
            c: { a: 0, k: [0.133, 0.827, 0.933, 1] },
            o: { a: 0, k: 60 },
            w: { a: 0, k: 3 },
            lc: 2,
            lj: 2
          }
        ],
        ip: 0,
        op: 90,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "innerRing",
        sr: 1,
        ks: {
          o: { a: 0, k: 80 },
          r: { a: 1, k: [{ t: 0, s: [360] }, { t: 90, s: [0] }] },
          p: { a: 0, k: [100, 100, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { t: 0, s: [90, 90, 100] },
              { t: 45, s: [104, 104, 100] },
              { t: 90, s: [90, 90, 100] }
            ]
          }
        },
        shapes: [
          {
            ty: "el",
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [90, 90] },
            nm: "ring2"
          },
          {
            ty: "st",
            c: { a: 0, k: [0.545, 0.361, 0.965, 1] },
            o: { a: 0, k: 75 },
            w: { a: 0, k: 4 },
            lc: 2,
            lj: 2
          }
        ],
        ip: 0,
        op: 90,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "core",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [100, 100, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { t: 0, s: [80, 80, 100] },
              { t: 45, s: [110, 110, 100] },
              { t: 90, s: [80, 80, 100] }
            ]
          }
        },
        shapes: [
          {
            ty: "el",
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [46, 46] },
            nm: "coreCircle"
          },
          {
            ty: "fill",
            c: { a: 0, k: [0.984, 0.749, 0.141, 1] },
            o: { a: 0, k: 90 }
          }
        ],
        ip: 0,
        op: 90,
        st: 0,
        bm: 0
      }
    ]
  };
}

export default function AISparkLottie({ size = 96, className = "" }) {
  const animationData = useMemo(() => buildSparkAnimation(), []);
  return (
    <div className={className} style={{ width: size, height: size }}>
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}
