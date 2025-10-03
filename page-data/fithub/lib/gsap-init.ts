import gsap from "gsap";

let isInitialized = false;
let ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;

export async function initGSAP() {
  if (typeof window !== "undefined" && !isInitialized) {
    ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  }

  if (isInitialized) return;

  gsap.registerPlugin(ScrollTrigger);
  isInitialized = true;
}

export { gsap, ScrollTrigger };

export default () => {};
