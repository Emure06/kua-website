'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-up' | 'blur-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'zoom-rotate';
  delay?: number; // 100, 200, 300, dst
  initialDelay?: number; // Delay sebelum observer aktif (ms)
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  initialDelay = 0,
  className = ''
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Tunggu initialDelay sebelum mulai observe
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2, // Trigger saat 20% terlihat
          rootMargin: '0px 0px -100px 0px', // Trigger 100px sebelum masuk view
        }
      );

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }, initialDelay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [initialDelay]);

  const delayClass = delay > 0 ? `delay-${delay}` : '';

  return (
    <div 
      ref={ref}
      className={`scroll-reveal ${animation} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}