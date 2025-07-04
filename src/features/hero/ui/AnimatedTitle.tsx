import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type AnimatedTitleProps = {
  text: string;
  className?: string;
};

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    const chars = containerRef.current.querySelectorAll(".split-char");
    gsap.set(chars, { opacity: 0, y: 20, color: "#fff" });

    const tl = gsap.timeline();
    tl.to(chars, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "power3.out",
      delay: 0.1,
    })
      .to(
        chars,
        {
          color: "#ff6b00",
          stagger: 0.05,
          duration: 0.4,
          ease: "power1.out",
        },
        ">-0.2"
      );
  }, [text]);

  return (
    <div
      ref={containerRef}
      className={`inline-block font-extrabold tracking-tight ${className}`}
      aria-label={text}
      suppressHydrationWarning
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="split-char inline-block select-none"
          style={{ willChange: "opacity, transform, color" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTitle; 