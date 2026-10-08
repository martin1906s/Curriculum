'use client';

import { useEffect, useRef } from 'react';

export default function Reveal({ children, className = '', delay = 0 }) {
  const element = useRef(null);

  useEffect(() => {
    const node = element.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node?.classList.add('is-visible');
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible');
        observer.unobserve(node);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={element} className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</div>;
}
