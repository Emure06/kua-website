import { Home, FileText, Clock, MapPin, ArrowLeft, CheckCircle, Users, Heart, BookOpen, Phone } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: "Keluarga Sakinah - KUA Parung Panjang",
  description: "Pembinaan dan konsultasi keluarga sakinah, mawaddah, warahmah",
};

export default function KeluargaSakinahPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb */}
        <ScrollReveal animation="slide-left">
          <Link href="/layanan" className="inline-flex items-center text-sm text-kemenag-600 hover:text-kemenag-800 mb-6 transition">
            <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Layanan
          </Link>
        </ScrollReveal>

        {/* Hero Section */}
        <ScrollReveal animation="blur-in">
          <div className="bg-gradient-to-r from-kemenag-600 to-kemenag-700 rounded-lg p-8 md:p-12 text-white mb-8">
            <div className="flex items-center mb-4">
              <Home className="w-12 h-12 mr-4" />
              <h1 className="text-3xl md:text-4xl font-bold">Keluarga Sakinah</h1>
            </div>
            <p className="text-kemenag-100 text-lg">
              Pembinaan dan konsultasi keluarga sakinah, mawaddah, warahmah untuk mewujudkan keluarga bahagia dan sejahtera
            </p>
          </div>
        </ScrollReveal>

        {/* Konten Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Kiri: Deskripsi */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tentang Layanan */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Tentang Keluarga Sakinah</h2>
                <div className="text-gray-600 space-y-3 leading-relaxed">
                  <p>
                    <strong>Keluarga Sakinah</strong> adalah keluarga yang dibina atas dasar perkawinan yang sah, 
                    mampu memenuhi hajat hidup spiritual dan material secara layak dan seimbang, diliputi suasana 
                    kasih sayang antara anggota keluarga dan lingkungan secara selaras, serasi, dan seimbang.
                  </p>
                  <p>
                    KUA Kecamatan Parung Panjang menyelenggarakan program pembinaan keluarga sakinah melalui 
                    berbagai kegiatan seperti penyuluhan, konsultasi, dan pemberdayaan keluarga untuk mewujudkan 
                    keluarga yang <strong>sakinah, mawaddah, dan warahmah (sakinah, penuh cinta kasih, dan penuh rahmat)</strong>.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Indikator Keluarga Sakinah */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Heart className="w-6 h-6 mr-2 text-kemenag-600" />
                  Indikator Keluarga Sakinah
                </h2>
                <ul className="space-y-3">
                  {[
                    'Terpenuhi kebutuhan dasar (sandang, pangan, papan)',
                    'Terpenuhi kebutuhan spiritual dan keagamaan',
                    'Terjalin komunikasi yang baik antar anggota keluarga',
                    'Saling menghormati dan menghargai antar anggota keluarga',
                    'Mampu menyelesaikan masalah keluarga dengan bijak',
                    'Terlibat dalam kegiatan sosial kemasyarakatan',
                    'Memiliki perencanaan keluarga yang matang',
                    'Anak mendapatkan pendidikan yang layak',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-kemenag-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Program Pembinaan */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-kemenag-600" />
                  Program Pembinaan
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      judul: "Penyuluhan Keluarga Sakinah",
                      deskripsi: "Kegiatan penyuluhan tentang pentingnya keluarga sakinah dan cara mewujudkannya"
                    },
                    {
                      judul: "Konsultasi Keluarga",
                      deskripsi: "Layanan konsultasi bagi keluarga yang mengalami permasalahan"
                    },
                    {
                      judul: "Bimbingan Pra-Nikah",
                      deskripsi: "Persiapan calon pengantin menuju keluarga sakinah"
                    },
                    {
                      judul: "Pemberdayaan Ekonomi Keluarga",
                      deskripsi: "Pelatihan keterampilan dan kewirausahaan untuk meningkatkan ekonomi keluarga"
                    },
                  ].map((program, index) => (
                    <div key={index} className="border-l-4 border-kemenag-600 pl-4 py-2">
                      <h3 className="font-bold text-gray-800 mb-1">{program.judul}</h3>
                      <p className="text-sm text-gray-600">{program.deskripsi}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Persyaratan Konsultasi */}
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-kemenag-600" />
                  Persyaratan Konsultasi Keluarga
                </h2>
                <ul className="space-y-3">
                  {[
                    'Fotokopi KTP suami dan istri',
                    'Fotokopi Kartu Keluarga (KK)',
                    'Fotokopi Akta Nikah',
                    'Surat pengantar dari Kelurahan/Desa (jika diperlukan)',
                    'Mengisi formulir pendaftaran konsultasi',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-kemenag-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

          </div>

          {/* Kolom Kanan: Info Cepat */}
          <div className="space-y-6">
            
            {/* Informasi Penting */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-kemenag-50 rounded-lg p-6 border-l-4 border-kemenag-600">
                <h3 className="font-bold text-gray-800 mb-4">Informasi Penting</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-kemenag-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800">Waktu Pelayanan</p>
                      <p className="text-gray-600">Senin - Jumat: 08.00 - 16.00 WIB</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-kemenag-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800">Lokasi</p>
                      <p className="text-gray-600">Kantor KUA Kecamatan Parung Panjang</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-kemenag-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800">Kontak</p>
                      <p className="text-gray-600">Hubungi petugas KUA</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Manfaat */}
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-kemenag-600" />
                  Manfaat Program
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-kemenag-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>Keluarga lebih harmonis dan bahagia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-kemenag-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>Anak mendapatkan lingkungan yang baik</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-kemenag-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>Ekonomi keluarga lebih sejahtera</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-kemenag-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>Hubungan sosial lebih baik</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </div>
  );
}