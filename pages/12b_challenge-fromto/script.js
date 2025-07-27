import gsap from "gsap";

gsap.fromTo(
  ".reactions",
  { opacity: 0, scale: 0 }, // Start tiny and invisible
  { opacity: 1, scale: 1, duration: 1 } // Grow and appear
);