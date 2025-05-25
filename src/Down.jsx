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
gsap.registerPlugin(ScrollTrigger);




function Down() {
  
  

  return (
    <>
    
<footer class="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800 w-[90%] flex justify-center items-center mt-50">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

      
      
    </>
  );
}

export default Down;
