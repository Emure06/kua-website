import { Heart, FileText, Clock, MapPin, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Layanan Pernikahan - KUA Parung Panjang",
  description: "Informasi lengkap pelayanan pendaftaran dan pencatatan nikah",
};

export default function PernikahanPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb */}
        <Link href="/" className="inline-flex items-center text-sm text-kemenag-600 hover:text-kemenag-800 mb-6 transition">
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Layanan
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-kemenag-600 to-kemenag-700 rounded-lg p-8 md:p-12 text-white mb-8">
          <div className="flex items-center mb-4">
            <Heart className="w-12 h-12 mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold">Pernikahan</h1>
          </div>
          <p className="text-kemenag-100 text-lg">
            Pelayanan pendaftaran dan pencatatan nikah sesuai syariat Islam dan peraturan perundang-undangan
          </p>
        </div>

        {/* Konten Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Kiri: Deskripsi */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Tentang Layanan</h2>
              <div className="text-gray-600 space-y-3 leading-relaxed">
                <p>
                  Kantor Urusan Agama (KUA) Kecamatan Parung Panjang melayani pendaftaran dan pencatatan 
                  pernikahan bagi umat Islam yang berdomisili di wilayah Kecamatan Parung Panjang.
                </p>
                <p>
                  Pernikahan merupakan ibadah yang diatur oleh negara melalui Undang-Undang Perkawinan 
                  No. 1 Tahun 1974. Setiap pernikahan harus dicatatkan kepada Pegawai Pencatat Nikah (PPN) 
                  di KUA agar memiliki kekuatan hukum dan diakui oleh negara.
                </p>
              </div>
            </div>

            {/* Persyaratan */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-kemenag-600" />
                Persyaratan Administrasi
              </h2>
              <ul className="space-y-3">
                {[
                  'Surat keterangan untuk menikah (N1, N2, N4) dari Kelurahan/Desa',
                  'Fotokopi KTP calon suami dan istri (2 lembar)',
                  'Fotokopi Kartu Keluarga (KK) calon suami dan istri',
                  'Fotokopi Akta Kelahiran / Ijazah terakhir',
                  'Pas foto berwarna ukuran 3x4 dan 4x6 masing-masing 4 lembar',
                  'Surat izin orang tua (jika usia di bawah 21 tahun)',
                  'Surat izin istri (bagi suami yang akan menikah lagi)',
                  'Fotokopi sertifikat Bimbingan Perkawinan (Bimwin)',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-kemenag-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prosedur */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Prosedur Pendaftaran</h2>
              <ol className="space-y-3 list-decimal list-inside text-gray-600">
                <li>Calon pengantin mengisi formulir pendaftaran di KUA</li>
                <li>Menyerahkan berkas persyaratan administrasi</li>
                <li>Petugas KUA memeriksa kelengkapan berkas</li>
                <li>Pengumuman kehendak nikah selama 10 hari</li>
                <li>Pelaksanaan akad nikah oleh Penghulu</li>
                <li>Penandatanganan akta nikah dan penerbitan buku nikah</li>
              </ol>
            </div>
          </div>

          {/* Kolom Kanan: Info Cepat */}
          <div className="space-y-6">
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
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}