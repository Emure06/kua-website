import { ArrowLeft, BookOpen, Users, Heart, DollarSign, Building2, School, Scale, Globe, HandCoins, Store, CheckCircle, Award } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: "12 Tugas Penyuluh Agama - KUA Parung Panjang",
  description: "Dua belas tugas pokok Penyuluh Agama Islam di KUA Kecamatan Parung Panjang",
};

export default function PenyuluhanPage() {
  const tugasList = [
    {
      nomor: "01",
      judul: "Penyuluhan Agama Islam di Masjid/Musholla",
      deskripsi: "Memberikan ceramah, pengajian, dan bimbingan keagamaan di masjid dan musholla wilayah binaan",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      nomor: "02",
      judul: "Bimbingan Perkawinan (Bimwin)",
      deskripsi: "Menyelenggarakan bimbingan perkawinan bagi calon pengantin untuk mewujudkan keluarga sakinah",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-rose-600"
    },
    {
      nomor: "03",
      judul: "Pembinaan Keluarga Sakinah",
      deskripsi: "Membina keluarga agar menjadi keluarga sakinah, mawaddah, warahmah melalui konsultasi dan pendampingan",
      icon: <Users className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-600"
    },
    {
      nomor: "04",
      judul: "Penyuluhan Zakat, Infaq, dan Sedekah",
      deskripsi: "Mensosialisasikan dan membina pengelolaan zakat, infaq, sedekah sesuai syariat Islam",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-amber-500 to-orange-600"
    },
    {
      nomor: "05",
      judul: "Penyuluhan Wakaf",
      deskripsi: "Mensosialisasikan dan membina pengelolaan wakaf untuk kemaslahatan umat",
      icon: <HandCoins className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600"
    },
    {
      nomor: "06",
      judul: "Pembinaan Masjid dan Musholla",
      deskripsi: "Membina pengurus masjid/musholla dalam pengelolaan dan pemberdayaan rumah ibadah",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600"
    },
    {
      nomor: "07",
      judul: "Pembinaan Raudhatul Athfal (RA) dan Madrasah Diniyah",
      deskripsi: "Membina lembaga pendidikan diniyah untuk meningkatkan kualitas pendidikan agama anak",
      icon: <School className="w-8 h-8" />,
      color: "from-lime-500 to-green-600"
    },
    {
      nomor: "08",
      judul: "Penyuluhan Hukum Keluarga Islam",
      deskripsi: "Memberikan pemahaman tentang hukum keluarga Islam (nikah, talak, rujuk, waris)",
      icon: <Scale className="w-8 h-8" />,
      color: "from-red-500 to-rose-600"
    },
    {
      nomor: "09",
      judul: "Pembinaan Muallaf",
      deskripsi: "Membina dan mendampingi mualaf dalam mempelajari dan mengamalkan ajaran Islam",
      icon: <Heart className="w-8 h-8" />,
      color: "from-fuchsia-500 to-pink-600"
    },
    {
      nomor: "10",
      judul: "Penyuluhan Moderasi Beragama",
      deskripsi: "Mensosialisasikan nilai-nilai moderasi beragama untuk kerukunan umat beragama",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-emerald-600"
    },
    {
      nomor: "11",
      judul: "Pembinaan Ekonomi Syariah",
      deskripsi: "Membina pengembangan ekonomi syariah (BMT, koperasi syariah, UMKM halal)",
      icon: <Store className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-600"
    },
    {
      nomor: "12",
      judul: "Pembinaan Produk Halal",
      deskripsi: "Mensosialisasikan dan membina kesadaran produk halal di masyarakat",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb */}
        <ScrollReveal animation="slide-left">
          <Link href="/layanan" className="inline-flex items-center text-sm text-kemenag-600 hover:text-kemenag-800 mb-6 transition">
            <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Layanan
          </Link>
        </ScrollReveal>

        {/* Header Section */}
        <ScrollReveal animation="blur-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-kemenag-100 rounded-full mb-6">
              <BookOpen className="w-10 h-10 text-kemenag-600" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
              12 Tugas Penyuluh Agama
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Tugas pokok Penyuluh Agama Islam di KUA Kecamatan Parung Panjang
            </p>
            <div className="w-24 h-1.5 bg-kemenag-600 mx-auto mt-6 rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Pengantar */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-kemenag-600">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Tentang Penyuluh Agama</h2>
              <div className="text-gray-600 space-y-3 leading-relaxed">
                <p>
                  <strong>Penyuluh Agama Islam</strong> adalah aparatur sipil negara yang bertugas 
                  memberikan bimbingan dan penyuluhan keagamaan Islam kepada masyarakat. Di KUA 
                  Kecamatan Parung Panjang, terdapat <strong>12 Penyuluh Agama Islam</strong> yang 
                  tersebar di berbagai wilayah untuk melayani kebutuhan keagamaan masyarakat.
                </p>
                <p>
                  Para penyuluh memiliki <strong>12 tugas pokok</strong> yang menjadi fokus pelayanan 
                  mereka dalam membina dan memberdayakan masyarakat di bidang keagamaan.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 12 Tugas Grid */}
        <div className="max-w-6xl mx-auto mb-12">
          <ScrollReveal animation="fade-up" delay={300}>
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Daftar 12 Tugas Penyuluh Agama Islam
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tugasList.map((tugas, index) => (
              <ScrollReveal 
                key={tugas.nomor}
                animation="fade-up" 
                delay={400 + (index * 100)}
              >
                <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2 h-full">
                  
                  {/* Header Card */}
                  <div className={`bg-gradient-to-br ${tugas.color} p-6 text-white relative overflow-hidden`}>
                    {/* Decorative circle */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    
                    <div className="relative flex items-start justify-between">
                      <div className="flex-1">
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                          Tugas #{tugas.nomor}
                        </span>
                        <h3 className="text-lg font-bold leading-tight mb-2">
                          {tugas.judul}
                        </h3>
                      </div>
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 ml-3">
                        {tugas.icon}
                      </div>
                    </div>
                  </div>

                  {/* Deskripsi */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {tugas.deskripsi}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Info Penyuluh */}
        <ScrollReveal animation="fade-up" delay={1600}>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-kemenag-600 to-kemenag-800 rounded-2xl shadow-xl p-8 md:p-10 text-white">
              <div className="flex items-center mb-6">
                <Award className="w-10 h-10 mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold">Penyuluh Agama Islam KUA Parung Panjang</h2>
              </div>
              <p className="text-kemenag-100 text-base md:text-lg leading-relaxed mb-6">
                KUA Kecamatan Parung Panjang memiliki <strong>12 Penyuluh Agama Islam</strong> yang 
                bertugas memberikan bimbingan dan penyuluhan keagamaan kepada masyarakat di berbagai 
                wilayah. Mereka adalah aparatur profesional yang siap melayani kebutuhan keagamaan umat.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold mb-1">12</p>
                  <p className="text-xs text-kemenag-200">Penyuluh Aktif</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold mb-1">12</p>
                  <p className="text-xs text-kemenag-200">Tugas Pokok</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold mb-1">100%</p>
                  <p className="text-xs text-kemenag-200">Profesional</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold mb-1">24/7</p>
                  <p className="text-xs text-kemenag-200">Siap Melayani</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal animation="fade-up" delay={1800}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Butuh Bimbingan Keagamaan?
              </h3>
              <p className="text-gray-600 mb-6">
                Hubungi penyuluh agama Islam di wilayah Anda untuk konsultasi dan bimbingan keagamaan
              </p>
              <Link href="https://wa.me/6287873951239" target="_blank" rel="noopener noreferrer">
                <button className="bg-kemenag-600 hover:bg-kemenag-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:scale-105">
                  Hubungi Kami
                </button>
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}