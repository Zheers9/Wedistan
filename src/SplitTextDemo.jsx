// SplitTextDemo.jsx
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function SplitTextDemo({ text }) {
  const textRef = useRef(null);
  const splitRef = useRef(null);
  const animRef = useRef(null);

  // (Re)create the SplitText instance
  const setupSplit = () => {
    // clean up old instances
    if (splitRef.current) {
      splitRef.current.revert();
      splitRef.current = null;
    }
    if (animRef.current) {
      animRef.current.revert();
      animRef.current = null;
    }
    // create fresh split
    splitRef.current = SplitText.create(textRef.current, {
      type: 'chars,words,lines'
    });
  };

  useEffect(() => {
    setupSplit();
    window.addEventListener('resize', setupSplit);
    return () => {
      window.removeEventListener('resize', setupSplit);
      // final cleanup
      if (splitRef.current) splitRef.current.revert();
      if (animRef.current) animRef.current.revert();
    };
  }, []);

  const playChars = () => {
    if (animRef.current) animRef.current.revert();
    animRef.current = gsap.from(splitRef.current.chars, {
      x: 150,
      opacity: 0,
      duration: 0.7,
      ease: 'power4.out',
      stagger: 0.04
    });
  };

  const playWords = () => {
    if (animRef.current) animRef.current.revert();
    animRef.current = gsap.from(splitRef.current.words, {
      y: -100,
      opacity: 0,
      rotation: 'random(-80,80)',
      duration: 0.7,
      ease: 'back.out(1.7)',
      stagger: 0.15
    });
  };

  const playLines = () => {
    if (animRef.current) animRef.current.revert();
    animRef.current = gsap.from(splitRef.current.lines, {
      rotationX: -100,
      transformOrigin: '50% 50% -160px',
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.25
    });
  };

  return (
    <div>
      <div
        ref={textRef}
        className="text"
        style={{ cursor: 'default', userSelect: 'none' }}
      >
        {text}
      </div>
      <div style={{ marginTop: 20 }}>
        <button onClick={playChars}>Chars</button>
        <button onClick={playWords} style={{ marginLeft: 8 }}>
          Words
        </button>
        <button onClick={playLines} style={{ marginLeft: 8 }}>
          Lines
        </button>
      </div>
    </div>
  );
}
