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
import SlideRight from './Component/SlideRight';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Parallax from './Component/Parallax';
import dress from './assets/dress.png'
import photo from './assets/photo.jpg'
import Down from './Down';
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
  delay: .5,
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
    delay: .8,
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
  delay: .9,
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

  <main className="
          absolute inset-0         /* fill the container on mobile */
          flex justify-center items-center  /* center both axes on mobile */
          sm:inset-auto sm:top-30    /* at ≥640px, go back to your own positioning */
          sm:flex-none sm:justify-start sm:items-start 
          fade-in
          flex-col
          
        ">
    
    <div className='flex flex-row pb-18 w-full'>
      <div
        className="flex flex-col   sm:mt-10 sm:top-30 xl:mt-30 xl:top-30   justify-center sm:items-start   xl:mt-10 sm:text-start">
        <h1 ref={el}
          className="text-center tracking-wide text-xl sm:text-2xl md:text-4xl xl:text-5xl xl:text-6xl sm:text-left">
          DIGITAL <br />INVITATION
        </h1>
        <p ref={el2} className="sm:w-50 xl:w-100 xl:text-lg text-sm text-center pt-3  sm:text-left">
          EXPLORE FANTACY NICE DESIGN TEMPLATE TO INVITATION
        </p>

        <a href="#" ref={el3} className="
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
                      
                    ">
          See Template
        </a>
      </div>

      <Fanish>
        <div
          className='sm:ml-70 lg:ml-80 xl:ml-130  flex justify-center aligns-center items-center rounded-full overflow-hidden'>
          <img src={mainImg} alt="Main illustration" className='sm:w-50 sm:h-70 lg:w-60 lg:h-80 xl:w-90 xl:h-130  bg-[#306D5A]' />
        </div>
      </Fanish>

      <div className='flex flex-col sm:ml-0 lg:ml-96  xl:ml-150 w-20 mt-30 lg:mt-10 xl:mt-30 items-start'>
        <SlideDown delay={1.2}>
          <p className='text-left w-60 text-lg '>Do you want contact us <br />Our social media</p>
        </SlideDown>

        <SlideDown delay={2} yFrom={-20}>
          <a href="#" className="
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
                      
                    ">
            CONTACT US
          </a>
        </SlideDown>

      </div>





    </div>


    <div className="flex flex-row justify-center items-center min-h-screen w-full pl-0 -ml-16 gap-40 lg:gap-20 xl:gap-40 ">

      <SlideUp delay={.2}>
        <div className="flex justify-center items-center flex-col pb-30">
          <div className='overflow-hidden rounded-t-full shadow-md '>
            <img src={temp1} alt="" className='w-70 h-110 lg:w-60 lg:h-100 xl:w-70 xl:h-110  o' />
          </div>
          <h1 className='pt-5 text-2xl'>Template 1</h1>
        </div>
      </SlideUp>
      <SlideDown delay={.3}>
        <div className="flex justify-center items-center flex-col pt-10">
          <div className='overflow-hidden rounded-t-full '>
            <img src={temp1} alt="" className='w-70 h-110 lg:w-60 lg:h-100 xl:w-70 xl:h-110  o' />
          </div>
          <h1 className='pt-5 text-2xl'>Template 1</h1>
          <a href="#" className="
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
                      
                    ">
            See Template
          </a>
        </div>
      </SlideDown>

      <SlideUp delay={.2}>
        <div className="flex justify-center items-center flex-col pb-30">
          <div className='overflow-hidden rounded-t-full '>
            <img src={temp1} alt="" className='w-70 h-110 lg:w-60 lg:h-100 xl:w-70 xl:h-110  o' />
          </div>
          <h1 className='pt-5 text-2xl'>Template 1</h1>
        </div>
      </SlideUp>
    </div>

    <div className="flex flex-row justify-center items-center  w-full pl-0 -ml-16 gap-40 lg:gap-10 xl:gap-40 pt-20">
      <div className='grid grid-cols-5 gap-10'>
        <SlideUp delay={.3}>
          <div className='w-50 h-50 lg:w-40 lg:h-40 xl:w-50 xl:h-50 bg-[#306D5A] rounded-2xl overflow-hidden'>
            <img src={dress} alt="" className='p-7 invert' />
          </div>
        </SlideUp>

        <SlideUp delay={.1}>
          <div className='w-50 h-50 lg:w-40 lg:h-40 xl:w-50 xl:h-50 bg-[#306D5A] rounded-2xl overflow-hidden'>
            <img src={dress} alt="" className='p-7 invert' />
          </div>
        </SlideUp>
        <h1 className='text-3xl font-semibold pt-[30%]'>OTHER <br />SERVICE</h1>
        <SlideUp delay={.1}>
          <div className='w-50 h-50 lg:w-40 lg:h-40 xl:w-50 xl:h-50 bg-[#306D5A] rounded-2xl overflow-hidden'>
            <img src={dress} alt="" className='p-7 invert' />
          </div>
        </SlideUp>
        <SlideUp delay={.3}>
          <div className='w-50 h-50 lg:w-40 lg:h-40 xl:w-50 xl:h-50 bg-[#306D5A] rounded-2xl overflow-hidden'>
            <img src={dress} alt="" className='p-7 invert' />
          </div>
        </SlideUp>
      </div>
    </div>


    <div class="flex flex-col md:flex-row items-center justify-center w-full min-h-screen p-4 md:p-8 pl-10">

      <div class="relative w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0 flex-row">
        <SlideDown delay={0.3}>
          <div class="relative w-40 h-60 lg:w-40 lg:h-40 xl:w-40 xl:h-60 mr-5">
            <img src={photo} alt="Photographer Sample" class="rounded-3xl shadow-lg object-cover w-full h-full  " />
          </div>
        </SlideDown>
        <SlideUp delay={0.2}>
          <div class="relative w-60 h-80 lg:w-50 lg:h-50 xl:w-60 xl:h-80 ">
            <img src={photo} alt="Photographer Sample" class="rounded-3xl shadow-lg object-cover w-full h-full  " />
          </div>
        </SlideUp>

      </div>

      <div class="text-center md:text-left w-full md:w-1/2 space-y-4 px-4 -ml-20">
        <h2 class="text-2xl md:text-3xl font-medium text-black">WE PROVIDE BEST</h2>
        <h1 class="text-3xl md:text-5xl font-bold text-[#306D5A]">PHOTOGRAPHER</h1>
        <button
          class="mt-4 px-6 py-2 !bg-[#306D5A] text-white !rounded-2xl hover:bg-green-800 transition">CONTACT</button>
      </div>
    </div>

    <div className='flex flex-col  items-center justify-center w-full mt-10  -ml-20'>
      <div className='flex flex-row justify-center items-center gap-10'>
        <SlideRight xFrom={100}>
          <div class="relative w-35 h-35 ">
            <img src={photo} alt="Photographer Sample" class="rounded-3xl shadow-lg object-cover w-full h-full  " />
          </div>
        </SlideRight>
        <SlideRight xFrom={100}>
          <div class="relative w-40 h-40 ">
            <img src={photo} alt="Photographer Sample" class="rounded-3xl shadow-lg object-cover w-full h-full  " />
          </div>
        </SlideRight>
        <SlideUp>
          <div class="relative w-50 h-50 ">
            <img src={photo} alt="Photographer Sample" class="rounded-3xl shadow-lg object-cover w-full h-full  " />
          </div>
        </SlideUp>

        <SlideRight>
          <div class="relative w-40 h-40 ">
            <img src={photo} alt="Photographer Sample" class="rounded-3xl shadow-lg object-cover w-full h-full  " />
          </div>
        </SlideRight>

        <SlideRight>
          <div class="relative w-35 h-35 ">
            <img src={photo} alt="Photographer Sample" class="rounded-3xl shadow-lg object-cover w-full h-full  " />
          </div>
        </SlideRight>


      </div>
      <div className='pt-10'>
        <h1 className='text-4xl font-bold color-[#306D5A]'>CHOOSE YOUR FLOWER</h1>
        <button
          class="mt-4 px-6 py-2 !bg-[#306D5A] text-white !rounded-2xl hover:bg-green-800 transition">CONTACT</button>

      </div>
    </div>

    

    <Down />
  </main>







</>
);
}

export default mainBody;