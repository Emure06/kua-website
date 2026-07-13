import { ArrowLeft, Users, Target, ClipboardList, TrendingUp, CheckCircle, Calendar, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Hero from '@/components/ui/hero';
export const metadata = {
  title: "Pokja - Kelompok Kerja KUA Parung Panjang",
  description: "Informasi tentang Kelompok Kerja (Pokja) di KUA Kecamatan Parung Panjang",
};

export default function PokjaPage() {
  // Data Pokja
  const pokjaList = [
    {
      id: 1,
      nama: "Pokja Bimbingan Perkawinan",
      deskripsi: "Menyelenggarakan bimbingan perkawinan (Bimwin) bagi calon pengantin",
      tugas: [
        "Menyusun materi bimbingan",
        "Melaksanakan bimwin secara berkala",
        "Evaluasi peserta bimwin",
        "Penerbitan sertifikat bimwin"
      ],
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 2,
      nama: "Pokja Keluarga Sakinah",
      deskripsi: "Pembinaan keluarga sakinah, mawaddah, warahmah di masyarakat",
      tugas: [
        "Penyuluhan keluarga sakinah",
        "Konsultasi keluarga",
        "Pendampingan keluarga bermasalah",
        "Pemberdayaan ekonomi keluarga"
      ],
      icon: <Target className="w-8 h-8" />
    },
    {
      id: 3,
      nama: "Pokja Wakaf dan Zakat",
      deskripsi: "Pengelolaan dan pelayanan administrasi wakaf dan zakat",
      tugas: [
        "Pendaftaran wakaf tanah/bangunan",
        "Pencatatan ikrar wakaf",
        "Pengumpulan dan pendistribusian zakat",
        "Sosialisasi wakaf dan zakat"
      ],
      icon: <ClipboardList className="w-8 h-8" />
    },
    {
      id: 4,
      nama: "Pokja Penyuluhan Agama",
      deskripsi: "Penyuluhan dan sosialisasi keagamaan di masyarakat",
      tugas: [
        "Ceramah dan pengajian",
        "Penyuluhan di sekolah/madrasah",
        "Bimbingan keagamaan",
        "Pembinaan masjid dan musholla"
      ],
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb */}
        <ScrollReveal animation="slide-left">
          <Link href="/" className="inline-flex items-center text-sm text-kemenag-600 hover:text-kemenag-800 mb-6 transition">
            <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Layanan
          </Link>
        </ScrollReveal>

        {/* Header Section */}
        <ScrollReveal animation="blur-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-kemenag-100 rounded-full mb-6">
              <Users className="w-10 h-10 text-kemenag-600" />
            </div>   
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
              Kelompok Kerja (Pokja)
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              KUA Kecamatan Parung Panjang
            </p>
            <div className="w-24 h-1.5 bg-kemenag-600 mx-auto mt-6 rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Pengantar */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tentang Pokja</h2>
            <div className="text-gray-600 space-y-3 leading-relaxed">
              <p>
                <strong>Kelompok Kerja (Pokja)</strong> adalah tim kerja yang dibentuk di lingkungan KUA 
                untuk menangani bidang-bidang khusus dalam pelayanan keagamaan. Pokja bertugas untuk 
                meningkatkan kualitas pelayanan dan program-program keagamaan di masyarakat.
              </p>
              <p>
                Di KUA Kecamatan Parung Panjang, terdapat beberapa Pokja yang masing-masing memiliki 
                fokus dan tanggung jawab spesifik dalam melayani kebutuhan keagamaan masyarakat.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Daftar Pokja */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {pokjaList.map((pokja, index) => (
            <ScrollReveal 
              key={pokja.id} 
              animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
              delay={300 + (index * 150)}
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">
                
                {/* Header Card */}
                <div className="bg-gradient-to-r from-kemenag-600 to-kemenag-700 p-6 text-white">
                  <div className="flex items-center mb-3">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      {pokja.icon}
                    </div>
                    <h3 className="text-xl font-bold">{pokja.nama}</h3>
                  </div>
                  <p className="text-kemenag-100 text-sm leading-relaxed">
                    {pokja.deskripsi}
                  </p>
                </div>

                {/* Tugas-Tugas */}
                <div className="p-6">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-kemenag-600 mr-2" />
                    Tugas dan Tanggung Jawab
                  </h4>
                  <ul className="space-y-2">
                    {pokja.tugas.map((tugas, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <span className="w-2 h-2 bg-kemenag-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span>{tugas}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Informasi Tambahan */}
        <ScrollReveal animation="fade-up" delay={800}>
          <div className="bg-gradient-to-br from-kemenag-50 to-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-kemenag-600">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cara Mengikuti Program Pokja</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-kemenag-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-lg">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Daftar</h4>
                  <p className="text-sm text-gray-600">Datang ke kantor KUA atau hubungi petugas terkait</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-kemenag-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-lg">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Ikuti Kegiatan</h4>
                  <p className="text-sm text-gray-600">Hadiri program sesuai jadwal yang ditentukan</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-kemenag-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-lg">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Dapatkan Manfaat</h4>
                  <p className="text-sm text-gray-600">Terima sertifikat dan bimbingan berkelanjutan</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Kontak Informasi */}
        <ScrollReveal animation="fade-up" delay={1000}>
          <div className="mt-10 bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Informasi Kontak</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center p-4 bg-kemenag-50 rounded-lg">
                <MapPin className="w-6 h-6 text-kemenag-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Lokasi</p>
                  <p className="text-gray-600 text-xs">KUA Kec. Parung Panjang</p>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 bg-kemenag-50 rounded-lg">
                <Clock className="w-6 h-6 text-kemenag-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Jam Operasional</p>
                  <p className="text-gray-600 text-xs">Senin - Jumat: 08.00 - 16.00</p>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 bg-kemenag-50 rounded-lg">
                <Calendar className="w-6 h-6 text-kemenag-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Jadwal Kegiatan</p>
                  <p className="text-gray-600 text-xs">Sesuai program Pokja</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}