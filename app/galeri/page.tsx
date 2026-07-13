import { Camera, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GalleryGrid from '@/components/ui/GalleryGrid';
import { getGaleriData } from '@/lib/galeriService';

export const metadata = {
  title: "Galeri - KUA Parung Panjang",
  description: "Dokumentasi kegiatan dan acara KUA Kecamatan Parung Panjang",
};

export default async function GaleriPage() {
  const galeriItems = await getGaleriData();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        <ScrollReveal animation="slide-left">
          <Link href="/" className="inline-flex items-center text-sm text-kemenag-600 hover:text-kemenag-800 mb-6 transition">
            <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Beranda
          </Link>
        </ScrollReveal>

        <ScrollReveal animation="blur-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-kemenag-100 rounded-full mb-6">
              <Camera className="w-10 h-10 text-kemenag-600" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
              Galeri Kegiatan
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Dokumentasi kegiatan dan acara KUA Kecamatan Parung Panjang
            </p>
            <div className="w-24 h-1.5 bg-kemenag-600 mx-auto mt-6 rounded-full"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="grid grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100">
              <p className="text-2xl md:text-3xl font-bold text-kemenag-600">{galeriItems.length}</p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Total Foto</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100">
              <p className="text-2xl md:text-3xl font-bold text-kemenag-600">
                {new Set(galeriItems.map(i => i.kategori)).size}
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Kategori</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100">
              <p className="text-2xl md:text-3xl font-bold text-kemenag-600">
                {galeriItems.filter(i => i.kategori === 'kegiatan').length}
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Kegiatan</p>
            </div>
          </div>
        </ScrollReveal>

        {galeriItems.length > 0 ? (
          <ScrollReveal animation="fade-up" delay={300}>
            <GalleryGrid items={galeriItems} />
          </ScrollReveal>
        ) : (
          <ScrollReveal animation="fade-up">
            <div className="text-center py-16">
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Belum ada foto di galeri</p>
              <p className="text-gray-400 text-sm mt-2">Foto akan muncul setelah ditambahkan oleh admin</p>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal animation="fade-up" delay={500}>
          <div className="mt-12 bg-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-kemenag-600">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Tentang Galeri</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Galeri ini berisi dokumentasi berbagai kegiatan, acara, dan fasilitas KUA Kecamatan Parung Panjang. 
              Klik pada foto untuk melihat dalam ukuran besar. Dokumentasi ini menjadi bukti transparansi 
              dan akuntabilitas pelayanan kami kepada masyarakat.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}