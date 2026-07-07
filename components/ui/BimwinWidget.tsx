import Link from 'next/link';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { getBimwinData } from '@/lib/bimwinService';

export default async function BimwinWidget() {
  // Ambil data langsung dari Google Sheets
  const allAnnouncements = await getBimwinData();
  
  // Filter yang statusnya 'terbuka' dan ambil 3 teratas
  const openAnnouncements = allAnnouncements
    .filter(a => a.status === 'terbuka')
    .slice(0, 3);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Pengumuman Bimbingan Perkawinan
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Daftar segera untuk mengikuti bimbingan perkawinan. Kuota terbatas!
          </p>
        </div>

        {/* Announcement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {openAnnouncements.map((announcement) => (
            <div 
              key={announcement.id}
              className="border border-kemenag-200 rounded-lg p-5 hover:shadow-lg transition bg-kemenag-50"
            >
              {/* Badge Status */}
              <div className="mb-3">
                <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {announcement.status.toUpperCase()}
                </span>
              </div>

              {/* Judul */}
              <h3 className="font-bold text-gray-800 mb-3 text-sm md:text-base line-clamp-2">
                {announcement.judul}
              </h3>

              {/* Info Detail */}
              <div className="space-y-2 text-xs md:text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <Calendar className="w-4 h-4 text-kemenag-600 flex-shrink-0 mt-0.5" />
                  <span>{announcement.tanggal}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-kemenag-600 flex-shrink-0" />
                  <span>{announcement.waktu}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-kemenag-600 flex-shrink-0" />
                  <span className="truncate">{announcement.lokasi}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-kemenag-600 flex-shrink-0" />
                  <span>Kuota: {announcement.terdaftar}/{announcement.kuota} peserta</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-kemenag-600 h-2 rounded-full transition-all"
                    style={{ 
                      width: `${(announcement.terdaftar / announcement.kuota) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button Lihat Semua */}
        <div className="text-center">
          <Link 
            href="/bimwin"
            className="inline-flex items-center space-x-2 bg-kemenag-700 hover:bg-kemenag-800 text-white px-6 py-3 rounded-lg font-semibold transition text-sm md:text-base"
          >
            <span>Lihat Semua Jadwal Bimwin</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}