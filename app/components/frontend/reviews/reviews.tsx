"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

type Review = {
  name: string;
  role: string;
  rating: string;
  message: string;
  initials: string;
  color: string;
};

const reviews: Review[] = [
  {
    name: "Honey Atalkar",
    role: "Software Engineering Student",
    rating: "4.8",
    message:
      "Sheryians Coding School is the best place to learn coding online. The teachers explain every topic step by step.",
    initials: "H",
    color: "#944b59",
  },
  {
    name: "Parth Gupta",
    role: "Frontend Developer",
    rating: "4.7",
    message:
      "Learning at Sheryians Coding School has been an amazing experience! The mentors explain everything clearly.",
    initials: "P",
    color: "#6939c8",
  },
  {
    name: "Mohd Siraj",
    role: "Web Developer",
    rating: "4.1",
    message:
      "I had a great experience at coaching. The teachers are highly supportive and knowledgeable.",
    initials: "MS",
    color: "#d19d24",
  },
  {
    name: "Aditya Kumar",
    role: "Coding Mentor",
    rating: "4.6",
    message:
      "Proudly sharing our teaching journey and helping students build real development skills.",
    initials: "A",
    color: "#8e4056",
  },
  {
    name: "Akash Warade",
    role: "MERN Stack Student",
    rating: "4.9",
    message:
      "After three months in the MERN batch, I can confidently build complete applications.",
    initials: "AW",
    color: "#42825c",
  },
  {
    name: "Pragati Nayak",
    role: "Junior Web Developer",
    rating: "4.3",
    message:
      "This school is a place full of memories and knowledge. Every session made me more confident.",
    initials: "P",
    color: "#8053d0",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="review-card flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 w-[400px] shrink-0 text-white backdrop-blur-md">
      <header className="review-card__header flex items-center gap-4 mb-4">
        <span
          className="review-card__avatar w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg"
          style={{ backgroundColor: review.color }}
        >
          {review.initials}
        </span>
        <div>
          <h2 className="font-bold text-lg">{review.name}</h2>
          <p className="text-sm text-white/60">{review.role}</p>
        </div>
      </header>

      <div className="review-card__divider w-full h-px bg-white/10 my-4" />

      <div className="review-card__rating flex items-center gap-2 mb-3">
        <span className="font-bold">{review.rating}</span>
        <strong aria-label={`${review.rating} out of 5 stars`} className="text-yellow-500 text-lg">
          {"\u2605\u2605\u2605\u2605\u2605"}
        </strong>
      </div>

      <p className="review-card__message text-white/70 text-sm leading-relaxed">{review.message}</p>
    </article>
  );
}

function ReviewRow({
  items,
  direction,
}: {
  items: Review[];
  direction: "left" | "right";
}) {
  return (
    <div className="reviews__row flex w-full mt-6">
      <div className={`reviews__track reviews__track--${direction} flex w-max gap-6 px-3`}>
        <div className="reviews__group flex gap-6">
          {items.map((review) => (
            <ReviewCard key={`${direction}-${review.name}`} review={review} />
          ))}
        </div>

        <div className="reviews__group flex gap-6" aria-hidden="true">
          {items.map((review) => (
            <ReviewCard
              key={`${direction}-${review.name}-copy`}
              review={review}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    const updateLenis = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
      gsap.fromTo(
        ".reviews__row",
        { y: 80, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: ".reviews",
            start: "top 85%",
            end: "top 20%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".reviews__track--right",
        { xPercent: -50 },
        {
          xPercent: 0,
          duration: 24,
          repeat: -1,
          ease: "none",
          scrollTrigger: {
            trigger: ".reviews",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play pause resume pause",
          },
        },
      );

      gsap.fromTo(
        ".reviews__track--left",
        { xPercent: 0 },
        {
          xPercent: -50,
          duration: 24,
          repeat: -1,
          ease: "none",
          scrollTrigger: {
            trigger: ".reviews",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play pause resume pause",
          },
        },
      );
    }, pageRef);

    ScrollTrigger.refresh();

    return () => {
      context.revert();
      gsap.ticker.remove(updateLenis);
      lenis.off("scroll", updateScrollTrigger);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={pageRef} className="w-full bg-black py-20 font-sans z-50 relative">
      <section className="intro flex flex-col items-center justify-center text-center text-white mb-16 px-4">
        <p className="text-indigo-400 font-medium tracking-widest uppercase text-sm mb-4">Scroll to explore</p>
        <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
          Student stories
        </h2>
      </section>

      <section className="reviews relative w-full overflow-hidden py-10">
        <div className="reviews__fade reviews__fade--left absolute top-0 bottom-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="reviews__fade reviews__fade--right absolute top-0 bottom-0 right-0 z-10 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        
        <ReviewRow items={reviews.slice(0, 3)} direction="right" />
        <ReviewRow items={reviews.slice(3)} direction="left" />
      </section>
    </div>
  );
}
