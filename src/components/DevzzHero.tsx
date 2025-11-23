import React, { useState } from "react";
import heroBg from "./assets/bg.png";
import logoImage from "./assets/logo.png";

type Props = {
  logoSrc?: string;
};

export default function DevzzHero({ logoSrc }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      <div className="absolute inset-0 -z-20 bg-[#1E1C26]" />

      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat h-[681px] top-[-2px] left-0"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      <header className="relative z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
  <img
    src={logoSrc || logoImage}
    alt="logo"
    className="absolute top-[34px] left-[75px] w-[71px] h-[71px] object-contain"
  />
</div>


          <div className="hidden md:flex absolute top-[58px] left-[495px] w-[450px] h-[22px] items-center gap-6 lg:gap-8 text-sm">
            <a href="#" className="opacity-80 hover:opacity-100">Home</a>
            <a href="#" className="opacity-80 hover:opacity-100">About</a>
            <a href="#" className="opacity-80 hover:opacity-100">Services</a>
            <a href="#" className="opacity-80 hover:opacity-100">Portfolio</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="absolute top-[50px] left-[950px] w-[119px] h-[39px] rounded-[35px] border border-white/40 text-sm flex items-center justify-center gap-[10px] pt-[12px] pb-[12px] pr-[24px] pl-[24px]">
              Log in
            </button>

            <button className="absolute top-[50px] left-[1080px] w-[150px] h-[39px] rounded-[35px] border border-white flex items-center justify-center gap-[10px] bg-white text-slate-900 text-sm pt-[12px] pb-[12px] pr-[24px] pl-[24px]">
              Get in touch
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded bg-white/10"
            onClick={() => setMobileOpen(s => !s)}
            aria-label="menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </nav>

        {mobileOpen && (
          <div className="md:hidden bg-black/60 px-6 py-4 space-y-4">
            <div className="flex flex-col space-y-2">
              <a className="block py-2" href="#">Home</a>
              <a className="block py-2" href="#">About</a>
              <a className="block py-2" href="#">Services</a>
              <a className="block py-2" href="#">Portfolio</a>
            </div>

            <div className="flex flex-col space-y-2 mt-4">
              <button className="w-full px-4 py-2 rounded-full border border-white/40 text-sm">
                Log in
              </button>
              <button className="w-full px-4 py-2 rounded-full bg-white text-slate-900 text-sm">
                Get in touch
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 flex items-center min-h-[75vh] sm:min-h-[80vh] lg:min-h-[85vh]">
        <div className="w-full text-center px-4 sm:px-6 md:px-8 lg:px-12">
     <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
       Your Product Your Idea Our 
       <br className="hidden sm:block" /> 
       Innovation and Engineering
        </h1>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-white/80 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0">
            At <span className="font-semibold">Devzz Tech</span>, we are more than just an IT company — 
            we are a team of innovators, problem solvers, and technology enthusiasts.
            Our mission is to create powerful digital solutions that drive business
            growth and enhance user experiences.
          </p>

          <div className="mt-8 sm:mt-10 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-5 sm:px-6 md:px-7 py-3 
                         rounded-full bg-white text-slate-900 text-sm sm:text-base shadow-sm"
            >
              Contact Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </main>

    </div>
  );
}
