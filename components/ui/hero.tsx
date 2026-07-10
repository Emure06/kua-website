import Link from 'next/link';
import { getKontenData } from '@/lib/kontenService';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default async function Hero() {
  const { heroBackground } = await getKontenData();

  const backgroundImage = heroBackground || 'https://i.imgur.com/46fcjOp.jpeg';

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px]">

        <img 
          src={backgroundImage}
          alt="Gedung KUA Parung Panjang"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Konten */}
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center pt-16">
          <div className="max-w-3xl">
            
            <ScrollReveal animation="blur-in" delay={200} initialDelay={300}>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                SELAMAT DATANG<br />
                DI KUA KECAMATAN<br />
                <span className="text-kemenag-400 inline-block mt-2">PARUNG PANJANG</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={600} initialDelay={500}>
              <p className="text-sm sm:text-base md:text-xl text-gray-200 mb-6 sm:mb-8 md:mb-10 font-light">
                Kami siap melayani masyarakat dengan sepenuh hati
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="scale-in" delay={1000} initialDelay={700}>
              <Link href="/layanan">
                <button className="bg-kemenag-600 hover:bg-kemenag-700 text-white px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg font-semibold transition-all shadow-lg sm:shadow-2xl text-sm sm:text-base md:text-lg hover:scale-105">
                  Jelajahi Layanan
                </button>
              </Link>
            </ScrollReveal>
            
          </div>
        </div>
      </div>
    </section>
  );
}