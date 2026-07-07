export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div 
        className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1564568128752-469480458230?w=1200')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center pt-16">
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
              SELAMAT DATANG<br />
              DI KUA KECAMATAN<br />
              <span className="text-kemenag-400">PARUNG PANJANG</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-200 mb-6 md:mb-8">
              Kami siap melayani masyarakat
            </p>
            <button className="bg-kemenag-600 hover:bg-kemenag-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold transition shadow-lg text-sm md:text-base">
              Jelajahi Layanan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}