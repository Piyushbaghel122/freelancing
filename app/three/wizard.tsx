import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./Home.css";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.2,
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    const updateLenis = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const animation = gsap.context(() => {
      gsap.to(".hero__title", {
        yPercent: 45,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, pageRef);

    ScrollTrigger.refresh();

    return () => {
      animation.revert();
      gsap.ticker.remove(updateLenis);
      lenis.off("scroll", updateScrollTrigger);
      lenis.destroy();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    gsap.to(e.currentTarget, {
      "--mouse-x": `${e.clientX - rect.left}px`,
      "--mouse-y": `${e.clientY - rect.top}px`,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <main ref={pageRef}>
      <section className="hero" onMouseMove={handleMouseMove}>
        <h1 
          className="hero__title"
          style={{ 
            background: 'none', 
            WebkitTextStroke: '2px #d1d5db',
            color: 'transparent'
          }}
        >
          wizard
        </h1>
        <p className="hero__scroll">Scroll down</p>
      </section>
    </main>
  );
};

export default Hero;