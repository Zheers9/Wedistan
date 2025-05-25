import React, { useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';

const FadeIn = ({
  children,
  duration = 2,
  delay = 0.5,
  xFrom = -100,
  ease = Power3.easeInOut,
  setOptions={ opacity: 0, x: xFrom },
  ...rest

}) => {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;
    // start hidden
    gsap.set(el.current,setOptions );
    // fade it in
    gsap.to(el.current, {
      opacity: 1,
      duration,
      delay,
      ease,
      x: 0,
    });
  }, [duration, delay, xFrom, ease]);

  return (
    <div ref={el} {...rest}>
      {children}
    </div>
  );
};

export default FadeIn;
