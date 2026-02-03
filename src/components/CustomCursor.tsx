import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface CustomCursorProps {
  containerRef: React.RefObject<HTMLElement>;
}

const CustomCursor = ({ containerRef }: CustomCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const container = containerRef.current;
    const cursor = cursorRef.current;

    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseEnter = () => {
      setIsVisible(true);
      gsap.to(cursor, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      gsap.to(cursor, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Card hover effects
    const cards = container.querySelectorAll(".media-card");
    
    const onCardEnter = (e: Event) => {
      setIsHovering(true);
      const card = e.currentTarget as HTMLElement;
      gsap.to(card, {
        scale: 1.04,
        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(card.querySelector("img, .bg-gradient-to-br"), {
        filter: "brightness(1.05)",
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(cursor, {
        scale: 1.2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onCardLeave = (e: Event) => {
      setIsHovering(false);
      const card = e.currentTarget as HTMLElement;
      gsap.to(card, {
        scale: 1,
        boxShadow: "none",
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(card.querySelector("img, .bg-gradient-to-br"), {
        filter: "brightness(1)",
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("mousemove", onMouseMove);

    cards.forEach((card) => {
      card.addEventListener("mouseenter", onCardEnter);
      card.addEventListener("mouseleave", onCardLeave);
    });

    return () => {
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("mousemove", onMouseMove);
      
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", onCardEnter);
        card.removeEventListener("mouseleave", onCardLeave);
      });
    };
  }, [containerRef]);

  // Hide on mobile/tablet
  const isTouchDevice = typeof window !== "undefined" && "ontouchstart" in window;
  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      style={{ opacity: 0 }}
    >
      <div
        className={`w-12 h-12 rounded-full border-2 border-primary transition-all duration-300 ${
          isHovering ? "bg-primary/10" : ""
        }`}
      />
    </div>
  );
};

export default CustomCursor;
