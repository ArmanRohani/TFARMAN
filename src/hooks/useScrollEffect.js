import { useEffect } from 'react';

const useScrollEffect = (selector, options) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view');
          // To animate only once:
          // observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, [selector, options]);
};

export default useScrollEffect;
