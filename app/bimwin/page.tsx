import { Calendar, Clock, MapPin, Users, FileText, Phone } from 'lucide-react';
import { getBimwinData } from '@/lib/bimwinService';

export const metadata = {
  title: "Bimbingan Perkawinan - KUA Parung Panjang",
  description: "Informasi jadwal dan pendaftaran bimbingan perkawinan"
};

export default async function BimwinPage() {
  // Ambil data dari Google Sheets
  const bimwinAnnouncements = await getBimwinData();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-kemenag-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Bimbingan Perkawinan
          </h1>
          <p className="text-kemenag-100 text-sm md:text-base max-w-2xl mx-auto">
            Persiapkan pernikahan Anda dengan bimbingan dari para ahli. 
            Daftar sekarang dan dapatkan sertifikat bimbingan perkawinan.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8 md:py-12 bg-kemenag-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Apa itu Bimbingan Perkawinan?
            </h2>
            <div className="text-gray-600 text-sm md:text-base space-y-3 leading-relaxed">
              <p>
                Bimbingan Perkawinan (Bimwin) adalah program wajib bagi calon pengantin 
                yang akan melangsungkan pernikahan. Program ini dirancang untuk memberikan 
                bekal pengetahuan dan ketrampilan kepada calon pengantin dalam membina 
                keluarga yang sakinah, mawaddah, dan warahmah.
              </p>
              <p>
                Materi yang disampaikan meliputi: hukum pernikahan, hak dan kewajiban suami istri, 
                kesehatan reproduksi, pengelolaan keuangan keluarga, dan komunikasi dalam keluarga.
              </p>
            </div>

            {/* Syarat Pendaftaran */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-kemenag-600" />
                Syarat Pendaftaran:
              </h3>
              <ul className="text-sm md:text-base text-gray-600 space-y-2 list-disc list-inside">
                <li>Fotokopi KTP calon pengantin (suami & istri)</li>
                <li>Fotokopi KK calon pengantin (suami & istri)</li>
                <li>Pas foto berukuran 3x4 (2 lembar per orang)</li>
                <li>Mengisi formulir pendaftaran</li>
              </ul>
            </div>

            {/* Kontak Info */}
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-kemenag-600" />
                <span>(021) 1234567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-kemenag-600" />
                <span>KUA Kecamatan Parung Panjang</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jadwal Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
            Jadwal Bimbingan Perkawinan
          </h2>

          {/* Handle kalau data kosong */}
          {bimwinAnnouncements.length === 0 ? (
            <div className="text-center py-12 bg-kemenag-50 rounded-lg">
              <p className="text-gray-600 text-sm md:text-base">
                Belum ada jadwal bimbingan perkawinan saat ini.
              </p>
              <p className="text-gray-500 text-xs md:text-sm mt-2">
                Silakan hubungi KUA untuk informasi lebih lanjut.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {bimwinAnnouncements.map((announcement) => (
                <div 
                  key={announcement.id}
                  className={`border-2 rounded-lg p-5 md:p-6 ${
                    announcement.status === 'terbuka' 
                      ? 'border-kemenag-500 bg-kemenag-50' 
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  {/* Status Badge */}
                  <div className="mb-4">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                      announcement.status === 'terbuka' 
                        ? 'bg-green-500 text-white' 
                        : announcement.status === 'penuh'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-500 text-white'
                    }`}>
                      {announcement.status === 'terbuka' ? 'PEMBUKAAN DIBUKA' : 
                      announcement.status === 'penuh' ? 'KUOTA PENUH' : 'SELESAI'}
                    </span>
                  </div>

                  {/* Judul */}
                  <h3 className="font-bold text-gray-800 text-lg md:text-xl mb-4">
                    {announcement.judul}
                  </h3>

                  {/* Detail Info */}
                  <div className="space-y-3 text-sm md:text-base text-gray-600">
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-kemenag-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-800">Tanggal</p>
                        <p>{announcement.tanggal}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-kemenag-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Waktu</p>
                        <p>{announcement.waktu}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-kemenag-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Lokasi</p>
                        <p>{announcement.lokasi}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-kemenag-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Kuota Peserta</p>
                        <p>{announcement.terdaftar} dari {announcement.kuota} peserta terdaftar</p>
                        {/* Progress Bar */}
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all ${
                              announcement.status === 'terbuka' ? 'bg-kemenag-600' : 'bg-gray-500'
                            }`}
                            style={{ 
                              width: `${(announcement.terdaftar / announcement.kuota) * 100}%` 
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Deskripsi */}
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                    {announcement.deskripsi}
                  </p>

                  {/* Button */}
                  <div className="mt-6">
                    {announcement.status === 'terbuka' ? (
                      <button className="w-full bg-kemenag-600 hover:bg-kemenag-700 text-white font-semibold py-3 rounded-lg transition text-sm md:text-base">
                        Daftar Sekarang
                      </button>
                    ) : (
                      <button 
                        disabled
                        className="w-full bg-gray-400 text-white font-semibold py-3 rounded-lg cursor-not-allowed text-sm md:text-base"
                      >
                        {announcement.status === 'penuh' ? 'Kuota Penuh' : 'Pendaftaran Ditutup'}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}