export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-black px-6 text-center">
      
      <h1 className="text-4xl font-bold uppercase mb-4">
        Payment Approved
      </h1>

      <p className="text-white/60 mb-8">
        Thanks for your purchase. Your print is ready to download.
      </p>

      {/* 🔥 DESCARGA SIMPLE */}
      <a
        href="/downloads/print-pack.zip"
        download
        className="px-6 py-3 bg-white text-black font-bold uppercase rounded-full hover:scale-105 transition"
      >
        Download Print
      </a>

    </div>
  );
}