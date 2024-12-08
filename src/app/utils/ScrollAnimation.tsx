import React, { useEffect, useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  startScroll: number;
  endScroll: number;
  maxTranslateY: number;
  maxScale: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  startScroll,
  endScroll,
  maxTranslateY,
  maxScale,
}) => {
  // Using useRef to store reference to the container
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollY = window.scrollY;

      // Normalize scroll position between startScroll and endScroll
      const progress = Math.min(Math.max((scrollY - startScroll) / (endScroll - startScroll), 0), 1);

      // Calculate transformations
      const translateY = progress * maxTranslateY;
      const scale = 1 + progress * (maxScale - 1);

      // Apply transformations
      if (containerRef.current) {
        containerRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startScroll, endScroll, maxTranslateY, maxScale]);

  return (
    // Directly passing the ref to the div element
    <div ref={containerRef} className="scroll-animation-container">
      {children}
    </div>
  );
};

export default ScrollAnimation;
