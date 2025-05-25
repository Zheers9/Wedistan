import { useRef } from 'react';

import { useState, useEffect } from 'react';
import './App.css';
import mainImg from './assets/main.jpg'; 
import temp1 from './assets/temp1.webp'
import Logo from './assets/logo.png'; 
import gsap from 'gsap';
import Fanish from './DisintegrationEffect'
import SplitTextDemo from './SplitTextDemo';
import {Power3} from 'gsap'
import FadeIn from './Component/SlideRight';
import SlideDown from './Component/SlideDown';
import SlideUp from './Component/SlideUp';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Parallax from './Component/Parallax';
import dress from './assets/dress.png'
gsap.registerPlugin(ScrollTrigger);




function mainBody() {
  let el = useRef();
  let el2 = useRef();
  let el3 = useRef();

 
  useEffect(function() {
    // start hidden
    gsap.set(el.current, { opacity: 0,x:-100 });
    // fade it in
    gsap.to(el.current, {
      opacity: 1,
      duration: 2,
      delay:    .5,
      ease: Power3.easeInOut,
      x:0
    });
  });
  useEffect(function() {
    // start hidden
    gsap.set(el2.current, { opacity: 0,x:-100 });
    // fade it in
    gsap.to(el2.current, {
      opacity: 1,
      duration: 2,
      delay:    .8,
      ease: Power3.easeInOut,
      x:0
    });
  });
  useEffect(function() {
    // start hidden
    gsap.set(el3.current, { opacity: 0,y:-100 });
    // fade it in
    gsap.to(el3.current, {
      opacity: 1,
      duration: 2,
      delay:    .9,
      ease: Power3.easeInOut,
      y:0
    });
  });


  

  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 1900);
    return () => clearTimeout(timer);
  }, []);

  if (!showMain) {
    return (
      <div className="h-screen w-screen flex justify-center items-center -ml-20 ">
        <img src={Logo} alt="" className='w-100 h-100 mb-30 fade-in2' />
      </div>
      
    );
  }
  

  return (
    <>
    
      <main
        className="
          absolute inset-0         /* fill the container on mobile */
          flex justify-center items-center  /* center both axes on mobile */
          sm:inset-auto sm:top-30    /* at ≥640px, go back to your own positioning */
          sm:flex-none sm:justify-start sm:items-start 
          fade-in
          flex-col
          
        "
        >
          <div className='grid  grid-cols-3 pb-18 '>
            <div className="flex flex-col   sm:mt-10 sm:top-30 lg:mt-30 lg:top-30   justify-center sm:items-start   lg:mt-10 sm:text-start">
                <h1 ref={el} className="text-center tracking-wide text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl sm:text-left">
                  DIGITAL <br />INVITATION
                </h1>
                <p ref={el2} className="sm:w-50 lg:w-100 lg:text-lg text-sm text-center pt-3  sm:text-left">
                  EXPLORE FANTACY NICE DESIGN TEMPLATE TO INVITATION
                </p>
          
                  <a
                    href="#"
                    ref={el3}
                    className="
                      inline-block
                      bg-[#306D5A]        /* green background */
                      !text-white            /* white text */
                      font-semibold         /* slightly bolder text */
                      uppercase             /* if you want all-caps */
                      py-2 px-6 
                                  /* vertical/horizontal padding */
                      rounded-2xl          /* pill shape */
                      hover:bg-[#355b4f]  /* darker on hover */
                      transition-colors     /* smooth color transition */
                      duration-200          /* 200ms timing */
                      mt-5
                      
                    "
                  >
                    See Template
                  </a>
            </div>
            
            <Fanish >
                  <div className='sm:ml-70 lg:ml-130  flex justify-center aligns-center items-center rounded-full overflow-hidden'>
                    <img src={mainImg} alt="Main illustration" className='sm:w-50 sm:h-70 lg:w-90 lg:h-130  bg-[#306D5A]' />
                  </div>
            </Fanish>

            <div className='flex flex-col ml-120 w-full mt-30 items-start'>
              <SlideDown delay={1.2}>
                <p className='text-left w-200 text-lg'>Do you want contact us <br />Our social media</p>
              </SlideDown>
              
              <SlideDown delay={2} yFrom={-20}>
                <a
                    href="#"
                    
                    className="
                      inline-block
                      bg-[#438a74]        /* green background */
                      !text-white            /* white text */
                      font-semibold         /* slightly bolder text */
                      uppercase             /* if you want all-caps */
                      py-2 px-6 
                       !w-35
                       !h-9           /* vertical/horizontal padding */
                      rounded-2xl          /* pill shape */
                      hover:bg-[#355b4f]  /* darker on hover */
                      transition-colors     /* smooth color transition */
                      duration-200          /* 200ms timing */
                      mt-5
                      text-sm
                      
                    "
                  >
                    CONTACT US
                  </a>
              </SlideDown>
              
            </div>

            
              
          
            
          </div>
          
          
          <div className="flex flex-row justify-center items-center min-h-screen w-full pl-0 -ml-16 gap-40">
            
            <SlideUp>
              <div className="flex justify-center items-center flex-col pb-30">
                <div className='overflow-hidden rounded-t-full shadow-md '>
                  <img src={temp1} alt="" className='w-70 h-110  o' />
                </div> 
                <h1 className='pt-5 text-2xl'>Template 1</h1>
              </div>
            </SlideUp>
            <SlideDown delay={.9}>
              <div className="flex justify-center items-center flex-col pt-10">
                <div className='overflow-hidden rounded-t-full '>
                  <img src={temp1} alt="" className='w-70 h-110  o' />
                </div>                
                <h1 className='pt-5 text-2xl'>Template 1</h1>
                <a
                    href="#"
                    
                    className="
                      inline-block
                      bg-[#306D5A]        /* green background */
                      !text-white            /* white text */
                      font-semibold         /* slightly bolder text */
                      uppercase             /* if you want all-caps */
                      py-2 px-6 
                                  /* vertical/horizontal padding */
                      rounded-2xl          /* pill shape */
                      hover:bg-[#355b4f]  /* darker on hover */
                      transition-colors     /* smooth color transition */
                      duration-200          /* 200ms timing */
                      mt-5
                      
                    "
                  >
                    See Template
                  </a>
              </div>
            </SlideDown>
            
            <SlideUp>
              <div className="flex justify-center items-center flex-col pb-30">
                <div className='overflow-hidden rounded-t-full '>
                  <img src={temp1} alt="" className='w-70 h-110  o' />
                </div>
                <h1 className='pt-5 text-2xl'>Template 1</h1>
              </div>
            </SlideUp>
          </div>

          <div className="flex flex-row justify-center items-center  w-full pl-0 -ml-16 gap-40 pt-20">
            <div className='grid grid-cols-5 gap-10'>
              <SlideUp delay={.5}>
                <div className='w-50 h-50 bg-[#306D5A] rounded-2xl overflow-hidden'>
                  <img src={dress} alt="" className='p-7 invert' />
                </div>
              </SlideUp>
              
              <SlideUp delay={.3}>
                <div className='w-50 h-50 bg-[#306D5A] rounded-2xl overflow-hidden'>
                  <img src={dress} alt="" className='p-7 invert' />
                </div>
              </SlideUp>
              <h1 className='text-3xl font-semibold pt-[30%]'>OTHER <br />SERVICE</h1>
              <SlideUp delay={.3}>
                <div className='w-50 h-50 bg-[#306D5A] rounded-2xl overflow-hidden'>
                  <img src={dress} alt="" className='p-7 invert' />
                </div>
              </SlideUp>
              <SlideUp delay={.5}>
                <div className='w-50 h-50 bg-[#306D5A] rounded-2xl overflow-hidden'>
                  <img src={dress} alt="" className='p-7 invert' />
                </div>
              </SlideUp>
            </div>
          </div>

                <h1 className='mt-100'></h1>

            
      </main>
      
    </>
  );
}

export default mainBody;
