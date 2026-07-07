import { User, Briefcase, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { getStrukturData } from '@/lib/strukturService';
import FotoProfil from '@/components/ui/FotoProfil';

export const metadata = {
  title: "Struktur Organisasi - KUA Parung Panjang",
  description: "Susunan pejabat dan staf di KUA Kecamatan Parung Panjang",
};

export default async function StrukturPage() {
  const data = await getStrukturData();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb */}
        <Link href="/" className="inline-flex items-center text-sm text-kemenag-600 hover:text-kemenag-800 mb-6 transition">
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Beranda
        </Link>

        {/* Header Halaman */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Struktur Organisasi</h1>
          <p className="text-gray-600 text-sm md:text-base">Susunan pejabat dan staf Kantor Urusan Agama Kecamatan Parung Panjang</p>
          <div className="w-24 h-1 bg-kemenag-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 1. Kepala KUA */}
        {data.kepala ? (
          <div className="max-w-md mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg border-t-4 border-kemenag-600 p-6 text-center">
              <FotoProfil url={data.kepala.foto} nama={data.kepala.nama} size="w-32 h-32" />
              <h2 className="text-xl font-bold text-gray-800">{data.kepala.nama}</h2>
              <p className="text-xs text-gray-500 mb-2">NIP. {data.kepala.nip}</p>
              <div className="inline-block bg-kemenag-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                {data.kepala.jabatan}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500 mb-12">Data Kepala KUA belum tersedia</div>
        )}

        <div className="hidden md:block w-0.5 h-8 bg-kemenag-300 mx-auto mb-8"></div>

        {/* 2. Penghulu */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center">
            <Briefcase className="w-5 h-5 mr-2 text-kemenag-600" /> Para Penghulu
          </h3>
          {data.penghulu.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {data.penghulu.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-5 text-center border-l-4 border-kemenag-500">
                  <FotoProfil url={item.foto} nama={item.nama} size="w-20 h-20" />
                  <h4 className="font-bold text-gray-800">{item.nama}</h4>
                  <p className="text-xs text-gray-500 mb-2">NIP. {item.nip}</p>
                  <p className="text-sm text-kemenag-700 font-semibold">{item.jabatan}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Data Penghulu belum tersedia</p>
          )}
        </div>

        {/* 3. Penyuluh Agama */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center">
            <Briefcase className="w-5 h-5 mr-2 text-kemenag-600" /> Penyuluh Agama Islam
          </h3>
          {data.penyuluh.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {data.penyuluh.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-4 text-center border border-gray-100 hover:shadow-md transition">
                  <FotoProfil url={item.foto} nama={item.nama} size="w-16 h-16" />
                  <h4 className="font-semibold text-gray-800 text-sm">{item.nama}</h4>
                  <p className="text-xs text-gray-500 mb-1">NIP. {item.nip}</p>
                  <p className="text-xs text-kemenag-600 font-medium">{item.jabatan}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Data Penyuluh belum tersedia</p>
          )}
        </div>

        {/* 4. Staf Tata Usaha */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center">
            <Briefcase className="w-5 h-5 mr-2 text-kemenag-600" /> Staf Tata Usaha & Administrasi
          </h3>
          {data.staf.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {data.staf.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-4 text-center border border-gray-100 hover:shadow-md transition">
                  <FotoProfil url={item.foto} nama={item.nama} size="w-16 h-16" />
                  <h4 className="font-semibold text-gray-800 text-sm">{item.nama}</h4>
                  <p className="text-xs text-gray-500 mb-1">NIP. {item.nip}</p>
                  <p className="text-xs text-kemenag-600 font-medium">{item.jabatan}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Data Staf belum tersedia</p>
          )}
        </div>

      </div>
    </div>
  );
}