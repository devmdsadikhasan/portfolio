import { useEffect, useRef } from 'react';

export function useLenis() {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    let rafId: number;

    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;

        lenisRef.current = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });

        function raf(time: number) {
          lenisRef.current?.raf(time);
          rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        // Handle anchor links
        const handleAnchorClick = (e: Event) => {
          const target = e.target as HTMLAnchorElement;
          const href = target.getAttribute('href');

          if (href?.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element && lenisRef.current) {
              lenisRef.current.scrollTo(element, {
                offset: 0,
                duration: 1.5,
              });
            }
          }
        };

        // Add event listener for anchor links
        document.addEventListener('click', handleAnchorClick);

        // Clean up event listener
        return () => {
          document.removeEventListener('click', handleAnchorClick);
        };

      } catch (error) {
        console.warn('Failed to initialize Lenis:', error);
      }
    };

    const cleanup = initLenis();

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      cleanup?.then(cleanupFn => cleanupFn?.());
    };
  }, []);

  return lenisRef.current;
}