import { Calendar, Clock } from 'lucide-react';
import { getKontenData } from '@/lib/kontenService';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default async function WeeklyActivity() {
  const { weeklyActivities } = await getKontenData();

  if (weeklyActivities.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-kemenag-50">
      <div className="container mx-auto px-4">
        
        {/* Header - BLUR IN EXTREME */}
        <ScrollReveal animation="blur-in" delay={100}>
          <div className="text-center mb-12">
            <ScrollReveal animation="zoom-rotate" delay={200}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-kemenag-600 rounded-full mb-6 shadow-xl">
                <Calendar className="w-10 h-10 text-white" />
              </div>
            </ScrollReveal>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Kegiatan Mingguan
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Jadwal kegiatan rutin KUA Kecamatan Parung Panjang
            </p>
            <div className="w-32 h-1.5 bg-kemenag-600 mx-auto mt-6 rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Grid Kegiatan - ALTERNATING ANIMATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weeklyActivities.map((activity, index) => {
            // Alternating animations: slide-left, fade-up, fade-up, slide-right
            const animations = ['slide-left', 'fade-up', 'fade-up', 'slide-right'];
            const animation = animations[index % animations.length];
            
            return (
              <ScrollReveal 
                key={index}
                animation={animation as any} 
                delay={300 + (index * 200)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-kemenag-100 hover:-translate-y-3 h-full group">
                  
                  {/* Foto */}
                  {activity.foto && (
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={activity.foto} 
                        alt={activity.judul}
                        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  )}
                  
                  {/* Konten */}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-kemenag-100 rounded-full flex items-center justify-center mr-3">
                        <Clock className="w-5 h-5 text-kemenag-600" />
                      </div>
                      <span className="text-xs text-kemenag-600 font-bold uppercase tracking-wider">Mingguan</span>
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg mb-3 group-hover:text-kemenag-600 transition-colors">
                      {activity.judul}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Kegiatan rutin yang diselenggarakan oleh KUA untuk masyarakat
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}