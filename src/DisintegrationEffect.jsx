
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import html2canvas from 'html2canvas';
import imagesLoaded from 'imagesloaded';
import './App.css';

// register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function DisintegrationEffect(props) {
  var containerRef = useRef(null);

  useEffect(function() {
    var el = containerRef.current;

    // wait until all images in the container are loaded
    imagesLoaded(el, function() {
      // capture with transparent background
      html2canvas(el, {
        backgroundColor: null,
        useCORS: true
      }).then(function(canvas) {
        var width     = canvas.width;
        var height    = canvas.height;
        var ctx       = canvas.getContext('2d');
        var imageData = ctx.getImageData(0, 0, width, height);
        var COUNT     = 75;
        var fragments = [];

        // hide original element
        el.style.visibility = 'hidden';

        // create empty ImageData slots
        for (var i = 0; i < COUNT; i++) {
          fragments.push(ctx.createImageData(width, height));
        }

        // distribute pixels into fragments
        for (var x = 0; x < width; x++) {
          for (var y = 0; y < height; y++) {
            var idx  = (x + y * width) * 4;
            var slot = Math.floor((COUNT * (Math.random() + 2 * x / width)) / 3);
            for (var p = 0; p < 4; p++) {
              fragments[slot].data[idx + p] = imageData.data[idx + p];
            }
          }
        }

        // for each fragment: draw, append, animate
        fragments.forEach(function(data, i) {
          var fragCanvas = canvas.cloneNode();
          fragCanvas.getContext('2d').putImageData(data, 0, 0);
          fragCanvas.className = 'capture-canvas';
          el.parentNode.appendChild(fragCanvas);

          var angle = (Math.random() - 0.5) * Math.PI * 2;
          var rot   = 30 * (Math.random() - 0.5);

          gsap.timeline({
            scrollTrigger: {
              trigger: el,
             scrub: 1,
            start: 'top bottom',
            start: 'top 80%',
            end: 'bottom 10%' ,      // wait until el is 80% up the viewport
             end:   'bottom top',
            onEnter: function() {
              el.style.visibility = 'hidden';
            }
            }
          }).to(fragCanvas, {
            duration: 1,
            rotate:    rot,
            x:         40 * Math.sin(angle),
            y:         40 * Math.cos(angle),
            opacity:   0,
            delay:     (i / COUNT) * 2
          });
        });
      });
    });

    // cleanup generated canvases and ScrollTriggers on unmount
    return function() {
      document.querySelectorAll('.capture-canvas')
        .forEach(function(c) { c.remove(); });

      ScrollTrigger.getAll().forEach(function(st) { st.kill(); });
    };
  }, []);

  return (
    <div className="disintegrate-wrapper" ref={containerRef}>
      {props.children}
    </div>
  );
}
