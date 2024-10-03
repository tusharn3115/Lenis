import React, { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';
import img10 from './images/10.jpg';
import img11 from './images/11.jpg';
import img12 from './images/12.jpg';
import img13 from './images/13.jpg';
import img14 from './images/14.jpg';
import img15 from './images/15.jpg';
import img16 from './images/16.jpg';
import img17 from './images/17.jpg';
import img18 from './images/18.jpg';
import img19 from './images/19.jpg';
import img20 from './images/20.jpg';

const App = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
      console.log(e)
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  });

  useGSAP(() => {
    document.querySelectorAll(".elem").forEach((elem) => {
      let img = elem.querySelector("img");
      let tl = gsap.timeline();
    
      let xTransform = gsap.utils.random(-100, 100);
    
      tl.set(
        img,
        {
          transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
        },
        "start"
      )
        .to(
          img,
          {
            scale: 0,
            ease: "none",
            scrollTrigger: {
              trigger: elem,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
          "start"
        )
        .to(elem, {
          xPercent: xTransform,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
    });
  });


  return (
    <div className="w-full bg-zinc-800">
      <div
        className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 overflow-hidden pr-5 sm:pr-10 md:pr-20"
      >
        <div className="elem col-span-1 row-span-1" style={{ "--r": 1, "--c": 3 }}>
          <img className="w-full h-auto transform scale-150" src={img1} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 2, "--c": 6 }}>
          <img className="w-full h-auto transform scale-150" src={img2} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 3, "--c": 2 }}>
          <img className="w-full h-auto transform scale-150" src={img3} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 4, "--c": 7 }}>
          <img className="w-full h-auto transform scale-150" src={img4} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 5, "--c": 4 }}>
          <img className="w-full h-auto transform scale-150" src={img5} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 6, "--c": 8 }}>
          <img className="w-full h-auto transform scale-150" src={img6} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 7, "--c": 3 }}>
          <img className="w-full h-auto transform scale-150" src={img7} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 8, "--c": 6 }}>
          <img className="w-full h-auto transform scale-150" src={img8} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 9, "--c": 2 }}>
          <img className="w-full h-auto transform scale-150" src={img9} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 10, "--c": 7 }}>
          <img className="w-full h-auto transform scale-150" src={img10} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 11, "--c": 4 }}>
          <img className="w-full h-auto transform scale-150" src={img11} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 12, "--c": 8 }}>
          <img className="w-full h-auto transform scale-150" src={img12} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 13, "--c": 3 }}>
          <img className="w-full h-auto transform scale-150" src={img13} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 14, "--c": 6 }}>
          <img className="w-full h-auto transform scale-150" src={img14} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 15, "--c": 2 }}>
          <img className="w-full h-auto transform scale-150" src={img15} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 16, "--c": 7 }}>
          <img className="w-full h-auto transform scale-150" src={img16} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 17, "--c": 4 }}>
          <img className="w-full h-auto transform scale-150" src={img17} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 18, "--c": 8 }}>
          <img className="w-full h-auto transform scale-150" src={img18} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 19, "--c": 3 }}>
          <img className="w-full h-auto transform scale-150" src={img19} />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 20, "--c": 6 }}>
          <img className="w-full h-auto transform scale-150" src={img20} />
        </div>
      </div>

      <div
        className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white"
      >
        <h1
          className="text-4xl sm:text-4xl md:text-8xl font-['Aeonik'] uppercase mb-4"
        >
          THOMAS VANCE <sup>®</sup>
        </h1>
        <h2 className="text-2xl sm:text-2xl md:text-5xl font-['Aeonik'] font-thin">
          セカンドビッグ
        </h2>
      </div>

      <div
        className="w-full h-screen bg-[#d1d1d1] flex items-center justify-center mx-auto py-24 sm:py-48 md:py-96 relative z-[999] text-center"
      >
        <p
          className="text-black leading-8 sm:leading-10 md:leading-[3rem] text-left font-['Aeonik'] text-xl sm:text-2xl md:text-4xl w-3/4"
        >
          Welcome to our clothing brand! We are dedicated to providing
          high-quality, stylish, and comfortable clothing for all occasions. Our
          mission is to make you look and feel your best with our carefully
          curated collections. Thank you for choosing us as your go-to brand for
          all your fashion needs.®
        </p>
      </div>
    </div>
  )
}

export default App