import React, { useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 1️⃣ Register the plugin
gsap.registerPlugin(ScrollTrigger);

const SlideUp = ({
  children,
  duration = 2,
  delay = 0.5,
  yFrom = 100,
  ease = Power3.easeInOut,
  ...rest
}) => {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;

    // 2️⃣ Create a from-to tween tied to a scroll trigger
    gsap.fromTo(
      el.current,
      { opacity: 0, y: yFrom },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: el.current,       // element that triggers it
          start: 'top 80%',          // when el.top hits 80% down viewport
          toggleActions: 'play none none none',
          // markers: true,          // uncomment to debug start/end points
        },
      }
    );

    // 3️⃣ Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [duration, delay, yFrom, ease]);

  return (
    <div ref={el} {...rest}>
      {children}
    </div>
  );
};

export default SlideUp;
