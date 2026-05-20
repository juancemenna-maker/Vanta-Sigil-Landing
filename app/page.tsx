
"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";

export default function TattooStudioSite() {
 const works = [
  "/images/works/spiral.webp",
  "/images/works/bunnie.jpeg",
  "/images/works/chakras.webp",
  "/images/works/alacran.webp",
   "/images/works/khangi.webp",
   "/images/works/sigil-alberto.webp",
   "/images/works/handsigil.webp",
  "/images/works/mc-employee.webp",
  "/images/works/kohsamui.webp",
  "/images/works/backsigil.webp",
  
 
];



const designs = [
  "/images/objects/sheet.webp",
  "/images/objects/fullback.webp",
  "/images/objects/flashsheet1.webp",
  "/images/objects/flashsheet2.webp",
  "/images/objects/freehand.webp",
  "/images/objects/sigil.webp",
  "/images/objects/moresigils.webp",
  "/images/objects/freehan.webp",
];




const [selectedImage, setSelectedImage] = useState<string | null>(null);

const [worksRef] = useEmblaCarousel(
  {
    loop: true,
    dragFree: true,
    align: "start",
  },
  [
    AutoScroll({
      speed: 0.6,
      startDelay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]
);

const [designsRef] = useEmblaCarousel(
  {
    loop: true,
    dragFree: true,
    align: "start",
  },
  [
    AutoScroll({
      speed: 0.5,
      startDelay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]
);

useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
  };
}, []);

useEffect(() => {
    const dot = document.querySelector(".cursor-dot") as HTMLElement;
    const outline = document.querySelector(".cursor-outline") as HTMLElement;

    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;

      outline.animate(
        {
          left: `${x - 20}px`,
          top: `${y - 20}px`,
        },
        {
          duration: 80,
          fill: "forwards",
        }
      );
    });
  }, []);
  
  return (
    <main className="bg-black text-white overflow-hidden min-h-screen selection:bg-white selection:text-black">
          <div className="cursor-dot" />
          <div className="cursor-outline" />
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl bg-white/10" />
      </div>

      {/* NAV */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-sm md:text-base tracking-[0.5em] uppercase font-black">
              VANTA SIGIL
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-10 uppercase tracking-[0.25em] text-xs text-white/60">
            <a href="#work" className="hover:text-white transition">
              Work
            </a>

            <a href="#archive" className="hover:text-white transition">
              Archive
            </a>

            <a href="#booking" className="hover:text-white transition">
              Booking
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

     
      {/* HERO */}
<section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">


  {/* BACKGROUND */}
  <div className="absolute inset-0 bg-black" />

  {/* GRAIN */}
  <div className="absolute inset-0 opacity-[0.04] mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

  {/* FLOATING SIGILS COMPOSITION */}
<motion.img
  src="/images/sigils-combined.webp"
  alt=""
  animate={{
    y: [0, -20, 0],
    rotate: [0, 1.5, -1.5, 0],
    scale: [1, 1.02, 1],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
className="absolute w-[900px] md:w-[1200px] opacity-[0.15] mix-blend-screen pointer-events-none select-none will-change-transform"/>

{/* PARTICLES */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {[...Array(20)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-20"
      initial={{
        x: Math.random() * 2000,
        y: Math.random() * 1200,
      }}
      animate={{
        y: [null, -100],
        opacity: [0, 0.3, 0],
      }}
      transition={{
        duration: 5 + Math.random() * 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  ))}
</div>

{/* EXTRA GLOW */}
<div className="absolute w-[1000px] h-[1000px] rounded-full bg-white/[0.03] blur-[220px]" />

  {/* SIDE GLYPH */}
  <motion.img
    src="/images/sigil3.png"
    alt=""
    animate={{
      y: [0, 15, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-10 top-1/2 -translate-y-1/2 h-[70vh] opacity-[0.05] hidden md:block"
  />

  {/* GLOW */}
  <div className="absolute w-[700px] h-[700px] rounded-full bg-white/10 blur-[180px]" />

{/* CONTENT */}
<motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 2.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative z-20 text-center max-w-5xl"
>
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 1.4 }}
    className="uppercase tracking-[0.6em] text-white/40 text-xs mb-6"
  >
    Buenos Aires · Tattoo · Objects · Ritual Design
  </motion.p>

  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.8,
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="text-6xl md:text-[9rem] font-black uppercase tracking-[-0.08em] leading-none mb-8"
  >
    Vanta
    <br />
    Sigil
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: 1.2,
      duration: 1.6,
    }}
    className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
  >
    Tattoo studio and experimental visual archive merging blackwork,
    symbolic systems, cyber aesthetics and collectible objects.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 1.5,
      duration: 1.4,
    }}
    className="flex flex-col md:flex-row gap-4 justify-center"
  >
    <a
      href="#booking"
      className="px-8 py-5 rounded-full bg-white text-black uppercase tracking-[0.3em] text-xs font-black hover:scale-105 transition"
    >
      Request Session
    </a>

    <a
      href="#work"
      className="px-8 py-5 rounded-full border border-white/10 uppercase tracking-[0.3em] text-xs text-white/70 hover:bg-white hover:text-black transition"
    >
      Explore Archive
    </a>
  </motion.div>
</motion.div>
</section>

{/* MANIFESTO */}
<section className="max-w-5xl mx-auto px-6 py-32 text-center">
  <p className="uppercase tracking-[0.4em] text-white/30 text-xs mb-8">
    Manifesto
  </p>

  <h3 className="text-3xl md:text-6xl uppercase font-black leading-[1.1] tracking-[-0.04em] text-white/90">
    Tattooing as identity architecture.
    <br />
    Dark symbolism, cyber sigils,
    <br />
    brutal textures and skin rituals.
  </h3>
</section>

{/* WORKS */}
<section id="work" className="max-w-7xl mx-auto px-6 pb-32">
  <div className="flex items-center justify-between mb-10">
    <div>
      <p className="uppercase tracking-[0.3em] text-white/30 text-xs mb-3">
        Archive
      </p>

      <h3 className="text-5xl md:text-7xl font-black uppercase tracking-[-0.05em]">
        Works
      </h3>
    </div>
  </div>

  <div className="overflow-hidden" ref={worksRef}>
    <div className="flex">
      {works.map((image, index) => (
        <div
          key={index}
          onClick={() => setSelectedImage(image)}
          className="embla-slide shrink-0 pl-6 flex-[0_0_85%] md:flex-[0_0_42%] cursor-pointer"
        >
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
            <img
              src={image}
              alt="tattoo"
              className="w-full h-[420px] md:h-[600px] object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8">
              <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-2">
                Work 0{index + 1}
              </p>

              <h4 className="text-3xl uppercase font-black">
                Vanta Piece
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* DESIGNS */}
<section className="max-w-7xl mx-auto px-6 pb-32">
  <div className="flex items-center justify-between mb-10">
    <div>
      <p className="uppercase tracking-[0.3em] text-white/30 text-xs mb-3">
        Visual Collection
      </p>

      <h3 className="text-5xl md:text-7xl font-black uppercase tracking-[-0.05em]">
        Designs
      </h3>
    </div>
  </div>

  <div className="overflow-hidden" ref={designsRef}>
    <div className="flex">
      {designs.map((image, index) => (
        <div
          key={index}
          onClick={() => setSelectedImage(image)}
          className="embla-slide shrink-0 pl-6 flex-[0_0_80%] md:flex-[0_0_35%] cursor-pointer"
        >
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">
            <img
              src={image}
              alt="object"
              className="w-full h-[380px] md:h-[500px] object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* DROPS */}
<section className="max-w-7xl mx-auto px-6 pb-40">
  <div className="flex items-center justify-between mb-10">
    <div>
      <p className="uppercase tracking-[0.3em] text-white/30 text-xs mb-3">
        Future Capsules
      </p>

      <h3 className="text-5xl md:text-7xl font-black uppercase tracking-[-0.05em]">
        Drops
      </h3>
    </div>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
  {[
    {
      number: "001",
      title: "Jewelry",
    },
    {
      number: "002",
      title: "Apparel",
    },
    {
      number: "003",
      title: "Sigil Objects",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="group relative rounded-[2rem] border border-white/10 bg-white/[0.02] p-10 min-h-[260px] overflow-hidden flex flex-col justify-between transition duration-500 hover:border-white/30"
    >
      {/* CONTENT */}
      <div className="relative z-10">
        <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">
          {item.number}
        </p>

        <h4 className="text-3xl uppercase font-black">
          {item.title}
        </h4>
      </div>

      {/* DEFAULT TEXT */}
      <p className="relative z-10 text-white/40 text-sm uppercase tracking-[0.2em] transition duration-500 group-hover:opacity-0">
        Future Drop
      </p>

      {/* HOVER OVERLAY */}
      <div className="absolute inset-0 bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
        <p className="uppercase tracking-[0.4em] text-sm font-black">
          Coming Soon
        </p>
      </div>

      {/* GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />
    </div>
  ))}
</div>
</section>

      {/* STRIP */}
      <section className="border-y border-white/10 py-10 overflow-hidden">
        <div className="flex whitespace-nowrap gap-10 text-white/10 uppercase text-5xl md:text-8xl font-black tracking-[-0.05em] animate-pulse">
          <span>BLACKWORK</span>
          <span>VANTA</span>
          <span>SIGIL</span>
          <span>CYBER</span>
          <span>FLASH</span>
          <span>RITUAL</span>
          <span>EXPERIMENTAL</span>
        </div>
      </section>

      {/* BOOKING */}
      <section
        id="booking"
        className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20"
      >
        <div>
          <p className="uppercase tracking-[0.4em] text-white/30 text-xs mb-6">
            Booking
          </p>

          <h3 className="text-5xl md:text-7xl font-black uppercase leading-[0.95] tracking-[-0.05em] mb-8">
            Request
            <br />
            Session
          </h3>

          <p className="text-white/50 text-lg leading-relaxed max-w-md">
            Send references, placement, approximate size and your idea.
          </p>
        </div>

        <form
  className="space-y-5"
  onSubmit={(e) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value;

    const idea = (
      form.elements.namedItem("idea") as HTMLTextAreaElement
    ).value;

    const message = `NEW BOOKING REQUEST

Name: ${name}

Idea:
${idea}

Please attach your references in this chat.`;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/5491167339927?text=${encodedMessage}`,
      "_blank"
    );
  }}
>
  <input
    name="name"
    type="text"
    placeholder="Name"
    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-white/40"
  />

  <textarea
    name="idea"
    rows={7}
    placeholder="Idea: approximate size, body placement, blackwork or color, concept..."
    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-white/40"
  />

  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
    Attach references directly in the WhatsApp conversation.
  </p>

  <button className="w-full bg-white text-black py-5 rounded-full uppercase tracking-[0.3em] text-xs font-black hover:scale-[1.01] transition">
    Open WhatsApp Request
  </button>
</form>
      </section>

{/* FULLSCREEN IMAGE VIEWER */}
{selectedImage && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedImage(null)}
    className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 cursor-pointer"
  >
    <motion.img
      initial={{ scale: 0.92, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      src={selectedImage}
      alt=""
      className="max-w-[95vw] max-h-[92vh] object-contain rounded-[2rem] shadow-2xl"
    />
  </motion.div>
)}

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-white/10 py-16 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 justify-between items-start">
          <div>
            <h4 className="text-3xl md:text-5xl uppercase font-black tracking-[-0.05em] mb-4">
              Vanta Sigil
            </h4>

            <p className="text-white/40 uppercase tracking-[0.25em] text-xs">
              Experimental tattoo direction.
            </p>
          </div>

          <div className="flex flex-col gap-4 uppercase tracking-[0.3em] text-xs text-white/50">
            <a href="https://instagram.com/vantasigil" className="hover:text-white">
              Instagram
            </a>

            <a href="juancemenna@gmail.com" className="hover:text-white">
              juancemenna@gmail.com
            </a>

            <a
              href="https://wa.me/5491167339927"
              className="hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}