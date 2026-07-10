import { ArrowLeft, Eye, Target, Heart, Users, BookOpen, Shield, Star } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: "Visi & Misi - KUA Parung Panjang",
  description: "Visi dan Misi Kantor Urusan Agama Kecamatan Parung Panjang",
};

export default function VisiMisiPage() {
  const misiList = [
    {
      nomor: "01",
      teks: "Memberikan pelayanan nikah, rujuk, wakaf, dan bimbingan keagamaan secara cepat, tepat, dan transparan.",
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-500 to-rose-600"
    },
    {
      nomor: "02",
      teks: "Meningkatkan kualitas pelayanan publik berbasis digital.",
      icon: <Star className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      nomor: "03",
      teks: "Memperkuat moderasi beragama dan kerukunan umat.",
      icon: <Users className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-600"
    },
    {
      nomor: "04",
      teks: "Meningkatkan profesionalisme aparatur KUA.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-amber-500 to-orange-600"
    },
    {
      nomor: "05",
      teks: "Mewujudkan tata kelola pemerintahan yang bersih dan akuntabel.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb */}
        <ScrollReveal animation="slide-left">
          <Link href="/" className="inline-flex items-center text-sm text-kemenag-600 hover:text-kemenag-800 mb-6 transition">
            <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Profil
          </Link>
        </ScrollReveal>

        {/* Header Section */}
        <ScrollReveal animation="blur-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-kemenag-100 rounded-full mb-6">
              <Eye className="w-10 h-10 text-kemenag-600" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
              Visi & Misi
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Arah dan tujuan KUA Kecamatan Parung Panjang dalam melayani masyarakat
            </p>
            <div className="w-24 h-1.5 bg-kemenag-600 mx-auto mt-6 rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* VISI - Card Besar */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative bg-gradient-to-br from-kemenag-600 to-kemenag-800 rounded-2xl shadow-2xl overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative p-8 md:p-12">
                {/* Label */}
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Eye className="w-5 h-5 text-white mr-2" />
                  <span className="text-white font-semibold text-sm uppercase tracking-wider">Visi Kami</span>
                </div>

                {/* Judul Visi */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  Terwujudnya Pelayanan Keagamaan yang Profesional
                </h2>

                {/* Isi Visi */}
                <p className="text-kemenag-100 text-base md:text-lg leading-relaxed">
                  Terwujudnya pelayanan keagamaan yang <span className="text-white font-semibold">profesional</span>, 
                  <span className="text-white font-semibold"> mudah diakses</span>, 
                  <span className="text-white font-semibold"> transparan</span>, 
                  <span className="text-white font-semibold"> akuntabel</span>, dan 
                  <span className="text-white font-semibold"> berintegritas</span> dalam mewujudkan masyarakat yang 
                  <span className="text-white font-semibold"> harmonis dan moderat</span>.
                </p>

                {/* Decorative line */}
                <div className="mt-8 w-24 h-1 bg-white/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* MISI - List dengan Cards */}
        <div className="max-w-4xl mx-auto mb-16">
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="text-center mb-10">
              <div className="inline-flex items-center bg-kemenag-100 px-4 py-2 rounded-full mb-4">
                <Target className="w-5 h-5 text-kemenag-600 mr-2" />
                <span className="text-kemenag-700 font-semibold text-sm uppercase tracking-wider">Misi Kami</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Lima Langkah Menuju Pelayanan Terbaik
              </h2>
            </div>
          </ScrollReveal>

          {/* Misi Items */}
          <div className="space-y-4">
            {misiList.map((misi, index) => (
              <ScrollReveal 
                key={misi.nomor}
                animation="fade-up" 
                delay={400 + (index * 100)}
              >
                <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">
                  <div className="flex items-stretch">
                    {/* Nomor & Icon */}
                    <div className={`flex-shrink-0 w-24 md:w-32 bg-gradient-to-br ${misi.color} p-4 md:p-6 flex flex-col items-center justify-center text-white`}>
                      <span className="text-3xl md:text-4xl font-bold mb-1 opacity-90">
                        {misi.nomor}
                      </span>
                      <div className="opacity-80">
                        {misi.icon}
                      </div>
                    </div>

                    {/* Teks Misi */}
                    <div className="flex-1 p-5 md:p-6">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
                        {misi.teks}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Nilai-Nilai Inti */}
        <ScrollReveal animation="fade-up" delay={1000}>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-kemenag-50 to-white rounded-2xl shadow-lg p-6 md:p-10 border-l-4 border-kemenag-600">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Nilai-Nilai Inti Pelayanan Kami
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { label: "Profesional", icon: <Star className="w-6 h-6" /> },
                  { label: "Transparan", icon: <Eye className="w-6 h-6" /> },
                  { label: "Akuntabel", icon: <Shield className="w-6 h-6" /> },
                  { label: "Integritas", icon: <Heart className="w-6 h-6" /> },
                  { label: "Harmonis", icon: <Users className="w-6 h-6" /> }
                ].map((nilai, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-kemenag-100"
                  >
                    <div className="w-12 h-12 bg-kemenag-100 rounded-full flex items-center justify-center mx-auto mb-2 text-kemenag-600">
                      {nilai.icon}
                    </div>
                    <p className="font-semibold text-gray-800 text-sm">{nilai.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}