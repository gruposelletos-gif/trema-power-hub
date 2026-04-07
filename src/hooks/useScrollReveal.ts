import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: if IntersectionObserver doesn't fire within 1s, show content
    const fallbackTimer = setTimeout(() => setVisible(true), 1000);

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallbackTimer);
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    // Small delay to ensure DOM is settled
    requestAnimationFrame(() => {
      if (ref.current) obs.observe(ref.current);
    });

    return () => {
      clearTimeout(fallbackTimer);
      obs.disconnect();
    };
  }, [threshold]);

  return { ref, visible };
}
