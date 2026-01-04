import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const imgWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (window.innerWidth <= 768 || !imgWrapRef.current) return;
      const x = (window.innerWidth - e.pageX) / 40;
      const y = (window.innerHeight - e.pageY) / 40;
      imgWrapRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-black" aria-label="Hero Section">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#14532d] rounded-full blur-[100px] animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-emerald-900 rounded-full blur-[100px] animate-blob" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-zinc-800 rounded-full blur-[100px] animate-blob" style={{ animationDelay: "4s" }}></div>
        </div>
        <div className="absolute inset-0 bg-grid-move opacity-[0.1]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8 pt-8 lg:pt-0 reveal-on-scroll">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white heading-glow">
            Make your Portfolio <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-emerald-300 to-[#22c55e] typing-cursor">instantly!</span> <br />
            Build your Portfolio for <span className="relative inline-block"><span className="relative z-10 text-white">FREE</span><div className="absolute bottom-1 left-0 w-full h-3 bg-[#16a34a]/60 -skew-x-12 -z-0"></div></span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed border-l-2 border-[#22c55e] pl-6">
            See the kind of work that gets noticed—before placements even start.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => document.getElementById("wall-section")?.scrollIntoView({ behavior: "smooth" })}
              className="hover-jump group relative px-8 py-4 bg-[#16a34a] text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:ring-offset-2 focus:ring-offset-black"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Portfolios
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </button>
            <button className="hover-jump px-8 py-4 bg-transparent border border-zinc-700 text-white font-semibold rounded-full hover:border-[#22c55e] hover:text-[#4ade80] transition-all duration-300">
              How It Works
            </button>
          </div>
        </div>

        <div className="relative w-full h-full flex items-center justify-center lg:justify-end reveal-on-scroll pb-10 lg:pb-0" style={{ transitionDelay: "200ms" }}>
          <div className="relative w-full max-w-md bg-zinc-900 rounded-2xl border border-zinc-700 shadow-2xl transition-all duration-700 group cursor-default p-2 mx-auto lg:mr-0">
            <div className="absolute inset-0 bg-[#22c55e]/20 blur-2xl -z-10 rounded-2xl opacity-50"></div>
            <div className="h-full w-full bg-black rounded-xl overflow-hidden flex flex-col border border-zinc-800 relative">
              <div ref={imgWrapRef} className="h-64 md:h-80 bg-zinc-800 relative overflow-hidden group will-change-transform">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
                  alt="Student coding workspace"
                  fill
                  className="object-cover object-center bw-to-color transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur border border-[#22c55e]/30 text-[#4ade80] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                  Verified Placement Ready
                </div>
              </div>
              <div className="mt-4 px-6 pb-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-2xl text-white">Jayden Ross</h3>
                    <p className="text-sm text-zinc-500 mt-1">Computer Science • Class of 2024</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1 text-xs text-[#4ade80] bg-[#052e16]/20 px-3 py-1 rounded-full border border-[#22c55e]/20">
                      <span>HIRED</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-[10px] uppercase font-bold rounded bg-zinc-800 text-zinc-300 border border-zinc-700 hover:border-[#22c55e]/50 hover:text-white transition-colors">React Native</span>
                  <span className="px-2 py-1 text-[10px] uppercase font-bold rounded bg-zinc-800 text-zinc-300 border border-zinc-700 hover:border-[#22c55e]/50 hover:text-white transition-colors">TypeScript</span>
                  <span className="px-2 py-1 text-[10px] uppercase font-bold rounded bg-zinc-800 text-zinc-300 border border-zinc-700 hover:border-[#22c55e]/50 hover:text-white transition-colors">Figma</span>
                </div>
                <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 hover:border-[#22c55e]/30 transition-all hover:translate-x-1 cursor-pointer flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-[#052e16]/20 flex items-center justify-center text-[#22c55e] shrink-0 border border-[#22c55e]/10">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-sm font-bold truncate">FinTech Dashboard</p>
                    <p className="text-xs text-zinc-500 truncate">Capstone Project • 98/100</p>
                  </div>
                  <svg className="w-4 h-4 text-zinc-600 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bw-to-color { filter: grayscale(100%) contrast(95%) brightness(90%); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
        .group:hover .bw-to-color { filter: grayscale(0%) contrast(100%) brightness(100%); }
        .bg-grid-move { background-size: 50px 50px; background-image: linear-gradient(to right, rgba(39,39,42,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(39,39,42,0.5) 1px, transparent 1px); animation: grid-move 20s linear infinite; }
        .heading-glow { text-shadow: 0 0 20px rgba(34,197,94,0.12); }
        .typing-cursor::after { content: '|'; animation: pulse 1s infinite; color: #4ade80; }
        .hover-jump:hover { animation: bounce-short 0.5s ease-in-out 1; }
        @keyframes grid-move { 0% { transform: translateY(0) } 100% { transform: translateY(40px) } }
        @keyframes bounce-short { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-5px) } }
        @keyframes blob { 0% { transform: translate(0px,0px) scale(1) } 33% { transform: translate(30px,-50px) scale(1.1) } 66% { transform: translate(-20px,20px) scale(0.9) } 100% { transform: translate(0px,0px) scale(1) } }
        .animate-blob { animation: blob 7s infinite; }
      `}</style>
    </section>
  );
}
