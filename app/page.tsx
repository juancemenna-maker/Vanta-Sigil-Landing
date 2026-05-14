
"use client";

export default function TattooStudioSite() {
  const gallery = [
    "/images/tattoo1.webp",
    "/images/tattoo2.webp",
    "/images/tattoo3.webp",
    "/images/tattoo4.webp",
  ];

  return (
    <main className="bg-black text-white overflow-hidden min-h-screen selection:bg-white selection:text-black">
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
              MENNA
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
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="text-center relative z-10 max-w-6xl">
          <p className="uppercase tracking-[0.7em] text-white/30 text-[10px] md:text-xs mb-8">
            Buenos Aires · Experimental Tattoo Direction
          </p>

          <h2 className="uppercase font-black leading-[0.85] text-[4rem] md:text-[10rem] lg:text-[12rem] tracking-[-0.05em]">
            VANTA
            <br />
            SIGIL
          </h2>

          <div className="mt-10 flex items-center justify-center gap-4 flex-col md:flex-row">
            <a
              href="#booking"
              className="px-8 py-4 rounded-full bg-white text-black uppercase tracking-[0.3em] text-xs font-bold hover:scale-105 transition"
            >
              Book Session
            </a>

            <a
              href="#work"
              className="px-8 py-4 rounded-full border border-white/15 uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition"
            >
              Explore Work
            </a>
          </div>
        </div>

        {/* SIGIL */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
          <div className="text-[18rem] md:text-[30rem] font-black tracking-[-0.1em] select-none">
            ⟁
          </div>
        </div>
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

      {/* GALLERY */}
      <section id="work" className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 gap-8">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />

              <img
                src={image}
                alt="tattoo"
                className="w-full h-[700px] object-cover group-hover:scale-[1.03] transition duration-700"
              />

              <div className="absolute bottom-0 left-0 z-20 p-8">
                <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-2">
                  Archive 0{index + 1}
                </p>

                <h4 className="text-3xl uppercase font-black tracking-tight">
                  Experimental
                </h4>
              </div>
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

            const whatsapp = (
              form.elements.namedItem("whatsapp") as HTMLInputElement
            ).value;

            const email = (
              form.elements.namedItem("email") as HTMLInputElement
            ).value;

            const idea = (
              form.elements.namedItem("idea") as HTMLTextAreaElement
            ).value;

            const message = `NEW BOOKING REQUEST

Name: ${name}
WhatsApp: ${whatsapp}
Email: ${email}
Idea: ${idea}`;

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

          <input
            name="whatsapp"
            type="tel"
            placeholder="+54 9 11 2345 6789"
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-white/40"
          />

          <input
            name="email"
            type="email"
            placeholder="Email (optional)"
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-white/40"
          />

          <textarea
            name="idea"
            rows={6}
            placeholder="Describe your concept"
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-white/40"
          />

          <button className="w-full bg-white text-black py-5 rounded-full uppercase tracking-[0.3em] text-xs font-black hover:scale-[1.01] transition">
            Submit Request
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-white/10 py-16 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 justify-between items-start">
          <div>
            <h4 className="text-3xl md:text-5xl uppercase font-black tracking-[-0.05em] mb-4">
              MENNA
            </h4>

            <p className="text-white/40 uppercase tracking-[0.25em] text-xs">
              Experimental tattoo direction.
            </p>
          </div>

          <div className="flex flex-col gap-4 uppercase tracking-[0.3em] text-xs text-white/50">
            <a href="https://instagram.com" className="hover:text-white">
              Instagram
            </a>

            <a href="mailto:hello@studio.com" className="hover:text-white">
              hello@studio.com
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