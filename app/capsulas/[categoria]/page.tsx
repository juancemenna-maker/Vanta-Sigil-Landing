"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  capsulas,
  categoriaLabels,
  PAYMENT_LINK,
  Categoria,
} from "@/app/data/products";

export default function CapsulaPage({
  params,
}: {
  params: { categoria: string };
}) {
  const cat = params.categoria as Categoria;

  if (!categoriaLabels[cat]) {
    notFound();
  }

  const productos = capsulas[cat];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [carouselRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [
      AutoScroll({
        speed: 0.5,
        startDelay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      </div>

      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-sm md:text-base tracking-[0.5em] uppercase font-black">
              VANTA SIGIL
            </h1>
          </Link>

          <Link
            href="/"
            className="uppercase tracking-[0.25em] text-xs text-white/60 hover:text-white transition"
          >
            Volver
          </Link>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pt-40 pb-16">
        <p className="uppercase tracking-[0.3em] text-white/30 text-xs mb-3">
          Cápsula
        </p>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-[-0.05em]">
          {categoriaLabels[cat]}
        </h2>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32">
        {productos.length === 0 ? (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] py-32 text-center">
            <p className="uppercase tracking-[0.3em] text-white/30 text-sm">
              Próxima Cápsula
            </p>
          </div>
        ) : (
          <div className="overflow-hidden" ref={carouselRef}>
            <div className="flex">
              {productos.map((item, index) => (
                <div
                  key={index}
                  className="embla-slide shrink-0 pl-6 flex-[0_0_85%] md:flex-[0_0_42%]"
                >
                  <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] flex flex-col">
                    <div
                      onClick={() => setSelectedImage(item.imagen)}
                      className="relative h-[420px] md:h-[600px] overflow-hidden cursor-pointer"
                    >
                      <img
                        src={item.imagen}
                        alt={item.titulo}
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    </div>

                    <div className="relative z-10 p-8 flex items-center justify-between gap-4">
                      <div>
                        <h4 className="text-2xl uppercase font-black leading-tight">
                          {item.titulo}
                        </h4>
                        <p className="text-white/40 text-sm tracking-[0.1em] mt-1">
                          {item.precio}
                        </p>
                      </div>

                      <a
                        href={PAYMENT_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 bg-white text-black px-6 py-4 rounded-full uppercase tracking-[0.25em] text-xs font-black hover:scale-105 transition"
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              src={selectedImage}
              alt=""
              className="max-w-[95vw] max-h-[92vh] object-contain rounded-[2rem] shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 justify-between items-start">
          <div>
            <h4 className="text-3xl md:text-5xl uppercase font-black tracking-[-0.05em] mb-4">
              Vanta Sigil
            </h4>
            <p className="text-white/40 uppercase tracking-[0.25em] text-xs">
              Dirección de tatuajes experimental
            </p>
          </div>

          <div className="flex flex-col gap-4 uppercase tracking-[0.3em] text-xs text-white/50">
            <a href="https://instagram.com/vantasigil" className="hover:text-white">
              Instagram
            </a>
            <a href="https://wa.me/5491167339927" className="hover:text-white">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}