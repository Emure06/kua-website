import Link from 'next/link';
import { getKontenData } from '@/lib/kontenService';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default async function Hero() {
  const { heroBackground } = await getKontenData();

  const backgroundImage = heroBackground || 'https://images.unsplash.com/photo-1564568128752-469480458230?w=1200';

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div 
        className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url('${backgroundImage}')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center pt-16">
          <div className="max-w-3xl">
            
            {/* Judul - BLUR IN EXTREME */}
            <ScrollReveal animation="blur-in" delay={200} initialDelay={300}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                SELAMAT DATANG<br />
                DI KUA KECAMATAN<br />
                <span className="text-kemenag-400 inline-block mt-2">PARUNG PANJANG</span>
              </h1>
            </ScrollReveal>
            
            {/* Subtitle - FADE UP */}
            <ScrollReveal animation="fade-up" delay={600} initialDelay={500}>
              <p className="text-base md:text-xl text-gray-200 mb-8 md:mb-10 font-light">
                Kami siap melayani masyarakat dengan sepenuh hati
              </p>
            </ScrollReveal>
            
            {/* Tombol - SCALE IN BOUNCE */}
            <ScrollReveal animation="scale-in" delay={1000} initialDelay={700}>
              <Link href="/layanan">
                <button className="bg-kemenag-600 hover:bg-kemenag-700 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold transition-all shadow-2xl text-base md:text-lg hover:scale-105 hover:shadow-kemenag-600/50">
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