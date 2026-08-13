import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function startAnimation() {
  const tl = gsap.timeline();

  tl.to(".panel", {
    xPercent: 100,
    duration: 1.2,
    stagger: 0.12,
    ease: "expo.out",
  })

    .fromTo(
      ".hero-title",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      "-=0.6"
    )

    .fromTo(
      ".hero-desc",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      "-=0.6"
    );
}

if (typeof window !== "undefined") {
  window.addEventListener("load", startAnimation);
}