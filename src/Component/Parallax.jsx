import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Parallax = ({ children, speed = 0.3, ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    let ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: -speed * 100,      // negative = moves up as you scroll down
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',       // when top of element hits bottom of viewport
          end: 'bottom top',         // until bottom of element hits top
          scrub: true,               // tie progress to scrollbar
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [speed]);

  return <div ref={ref} {...rest}>{children}</div>;
};

export default Parallax;
