
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

    <button className="w-14 h-14 rounded-full border border-white/10 text-3xl hover:bg-white hover:text-black transition">
      +
    </button>
  </div>

  <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
    {gallery.map((image, index) => (
      <div
        key={index}
        className="min-w-[320px] md:min-w-[500px] group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
      >
        <img
          src={image}
          alt="tattoo"
          className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 p-8">
          <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-2">
            Work 0{index + 1}
          </p>

          <h4 className="text-3xl uppercase font-black">
            Vanta Piece
          </h4>
        </div>
      </div>
    ))}
  </div>
</section>

{/* OBJECTS */}
<section className="max-w-7xl mx-auto px-6 pb-32">
  <div className="flex items-center justify-between mb-10">
    <div>
      <p className="uppercase tracking-[0.3em] text-white/30 text-xs mb-3">
        Visual Collection
      </p>

      <h3 className="text-5xl md:text-7xl font-black uppercase tracking-[-0.05em]">
        Objects
      </h3>
    </div>

    <button className="w-14 h-14 rounded-full border border-white/10 text-3xl hover:bg-white hover:text-black transition">
      +
    </button>
  </div>

  <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
    {gallery.map((image, index) => (
      <div
        key={index}
        className="min-w-[280px] md:min-w-[400px] group relative overflow-hidden rounded-[2rem] border border-white/10"
      >
        <img
          src={image}
          alt="object"
          className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 p-6">
          <h4 className="uppercase font-black text-2xl">
            Print / Object
          </h4>
        </div>
      </div>
    ))}
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

    <button className="w-14 h-14 rounded-full border border-white/10 text-3xl hover:bg-white hover:text-black transition">
      +
    </button>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-10 min-h-[260px] flex flex-col justify-between">
      <div>
        <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">
          001
        </p>

        <h4 className="text-3xl uppercase font-black">
          Jewelry
        </h4>
      </div>

      <p className="text-white/40 text-sm uppercase tracking-[0.2em]">
        Coming Soon
      </p>
    </div>

    <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-10 min-h-[260px] flex flex-col justify-between">
      <div>
        <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">
          002
        </p>

        <h4 className="text-3xl uppercase font-black">
          Apparel
        </h4>
      </div>

      <p className="text-white/40 text-sm uppercase tracking-[0.2em]">
        Future Drop
      </p>
    </div>

    <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-10 min-h-[260px] flex flex-col justify-between">
      <div>
        <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">
          003
        </p>

        <h4 className="text-3xl uppercase font-black">
          Sigil Objects
        </h4>
      </div>

      <p className="text-white/40 text-sm uppercase tracking-[0.2em]">
        Archive Pending
      </p>
    </div>
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
      `https://wa.me/54911TU_NUMERO?text=${encodedMessage}`,
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
    placeholder="Idea: approximate size, body placement, blackwork or color, references, concept..."
    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-white/40"
  />

  <div className="border border-dashed border-white/15 rounded-2xl p-8 bg-white/[0.02]">
    <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-3">
      References
    </p>

    <input
      type="file"
      multiple
      className="text-sm text-white/60 file:mr-4 file:px-4 file:py-2 file:border-0 file:rounded-full file:bg-white file:text-black file:font-bold file:cursor-pointer"
    />

    <p className="text-xs text-white/30 mt-4 uppercase tracking-[0.2em]">
      After opening WhatsApp, attach your references in the chat.
    </p>
  </div>

  <button className="w-full bg-white text-black py-5 rounded-full uppercase tracking-[0.3em] text-xs font-black hover:scale-[1.01] transition">
    Open WhatsApp Request
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