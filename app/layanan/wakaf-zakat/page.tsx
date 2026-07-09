import { FileText, ArrowLeft, User } from 'lucide-react';
import Link from 'next/link';
import { getPetugasData } from '@/lib/petugasService';

export const metadata = {
  title: "Layanan Wakaf & Zakat - KUA Parung Panjang",
  description: "Pelayanan administrasi wakaf dan zakat",
};

export default async function WakafZakatPage() {
  const data = await getPetugasData();

  // Filter cuma Pa Sukron (ID 5)
  const petugasWakafZakat = data.penyuluh.filter(p => p.id === '5');

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb */}
        <Link href="/layanan" className="inline-flex items-center text-sm text-kemenag-600 hover:text-kemenag-800 mb-6 transition">
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Layanan
        </Link>

        {/* Header Halaman */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Layanan Wakaf & Zakat
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Pelayanan administrasi wakaf dan pengelolaan zakat sesuai syariat Islam
          </p>
          <div className="w-24 h-1 bg-kemenag-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 2 BOX PEMBERITAHUAN - Atas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Box 1: Wakaf */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg p-8 text-white shadow-lg">
            <div className="flex items-center mb-4">
              <FileText className="w-10 h-10 mr-3" />
              <h2 className="text-2xl font-bold">Wakaf</h2>
            </div>
            <div className="space-y-3 text-blue-100">
              <h3 className="font-semibold text-white text-lg border-b border-blue-400 pb-2 mb-3">
                Persyaratan Wakaf:
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Sertifikat tanah asli</li>
                <li>• Fotokopi KTP Wakif</li>
                <li>• Fotokopi KK</li>
                <li>• Surat keterangan dari Kelurahan</li>
                <li>• Akta Ikrar Wakaf</li>
              </ul>
            </div>
          </div>

          {/* Box 2: Zakat */}
          <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-lg p-8 text-white shadow-lg">
            <div className="flex items-center mb-4">
              <FileText className="w-10 h-10 mr-3" />
              <h2 className="text-2xl font-bold">Zakat</h2>
            </div>
            <div className="space-y-3 text-emerald-100">
              <h3 className="font-semibold text-white text-lg border-b border-emerald-400 pb-2 mb-3">
                Persyaratan Zakat:
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Fotokopi KTP Muzakki</li>
                <li>• Mengisi formulir zakat</li>
                <li>• Perhitungan harta zakat</li>
                <li>• Bukti pembayaran (jika ada)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* INFORMASI PETUGAS YANG BERKAITAN - Bawah */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Informasi Petugas yang Berkaitan
          </h2>
          <p className="text-gray-600 text-center mb-8 text-sm">
            Hubungi petugas berikut untuk informasi lebih lanjut
          </p>

          {/* Kartu Petugas - Layout Foto Portrait (Persegi Panjang) */}
          {petugasWakafZakat.length > 0 ? (
            <div className="flex justify-center">
              {petugasWakafZakat.map((petugas) => (
                <Link 
                  key={petugas.id} 
                  href={`/portofolio/${petugas.id}`}
                  className="group block w-full max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1"
                >
                  {/* Foto Section */}
                  <div className="relative bg-gradient-to-br from-kemenag-50 to-kemenag-100 pt-8 pb-12">
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-kemenag-600 to-kemenag-700"></div>
                    
                    {/* UBAHAN DI SINI: w-40 h-52 rounded-2xl (Persegi panjang vertikal) */}
                    <div className="relative mx-auto w-40 h-52 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white">
                      {petugas.foto && petugas.foto.trim() !== "" ? (
                        <img 
                          src={petugas.foto} 
                          alt={petugas.nama}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100">
                          <User className="w-20 h-20 text-gray-400" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="px-6 pb-6 pt-2 text-center">
                    <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-kemenag-600 transition">
                      {petugas.nama}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      NIP. {petugas.nip || '-'}
                    </p>
                    <div className="inline-block bg-kemenag-600 text-white text-xs font-semibold px-4 py-2 rounded-full">
                      {petugas.jabatan}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-8">Data petugas belum tersedia.</p>
          )}

          {/* Catatan */}
          <div className="mt-6 p-4 bg-kemenag-50 rounded-lg border-l-4 border-kemenag-600">
            <p className="text-sm text-gray-700">
              <strong>Keterangan:</strong> Klik pada kartu petugas di atas untuk melihat profil lengkap atau hubungi kami langsung di kantor KUA.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}