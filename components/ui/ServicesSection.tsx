import { Heart, BookOpen, Users, FileText, HandHeart, Building } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Pernikahan",
    desc: "Pelayanan pendaftaran dan pencatatan nikah",
    link: "/layanan/pernikahan"
  },
  {
    icon: <BookOpen className="w-12 h-12" />,
    title: "Bimbingan Perkawinan",
    desc: "Bimwin untuk calon pengantin",
    link: "/bimwin"
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Keluarga Sakinah",
    desc: "Pembinaan keluarga harmonis",
    link: "/layanan/keluarga-sakinah"
  },
  {
    icon: <FileText className="w-12 h-12" />,
    title: "Wakaf & Zakat",
    desc: "Pelayanan administrasi wakaf dan zakat",
    link: "/layanan/wakaf-zakat"
  },
  {
    icon: <HandHeart className="w-12 h-12" />,
    title: "Penyuluhan Agama",
    desc: "Sosialisasi dan bimbingan keagamaan",
    link: "/layanan/penyuluhan"
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-16 bg-kemenag-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          Layanan Kami
        </h2>
        
        {/* Grid 1 kolom di HP, 2 kolom di tablet, 3 kolom di laptop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl transition text-center group flex flex-col h-full"
            >
              <div className="text-kemenag-600 mb-3 md:mb-4 flex justify-center group-hover:scale-110 transition">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mb-4 flex-grow">
                {service.desc}
              </p>
              <Link 
                href={service.link}
                className="inline-block bg-kemenag-600 hover:bg-kemenag-700 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg text-xs md:text-sm font-semibold transition mt-auto"
              >
                Selengkapnya
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}