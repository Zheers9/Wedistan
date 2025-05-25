import { useState } from 'react';
import './App.css';

function App() {
  const currentPath = window.location.pathname;

  let links = [
    { label: 'Home', href: '/main.tsx' },
    { label: 'Test', href: '/Test.tsx' },
    { label: 'Service', href: '/Service.tsx' },
    { label: 'About', href: '/about.tsx' }
  ];
  

  function test(){
    if(links.length == 0){
      return (
        <>
          <p>No avaible</p>
        </>
      )
    }
  }

  return (
    <>
      {test()}
      <ul className="flex flex-row items-start gap-6 top-0 text-md">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`no-underline  !text-black pb-1 ${
                currentPath === link.href
                  ? 'border-b-2 border-[#306D5A] !text-[#306D5A]'
                  : 'border-b-2 border-transparent hover:border-[#306D5A]'
              }`}
              onClick={() => console.log(links)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
