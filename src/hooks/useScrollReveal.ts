import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use requestAnimationFrame to ensure DOM is settled before observing
    const rafId = requestAnimationFrame(() => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        },
        { threshold, rootMargin: "0px 0px -10% 0px" }
      );
      obs.observe(el);

      // Store observer for cleanup
      (el as any)._scrollRevealObs = obs;
    });

    return () => {
      cancelAnimationFrame(rafId);
      const obs = (el as any)?._scrollRevealObs;
      if (obs) {
        obs.disconnect();
        delete (el as any)._scrollRevealObs;
      }
    };
  }, [threshold]);

  return { ref, visible };
}
