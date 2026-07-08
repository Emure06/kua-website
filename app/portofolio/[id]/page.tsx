import { 
  ArrowLeft, 
  GraduationCap, 
  Phone, 
  Calendar, 
  MapPin, 
  Briefcase, 
  User,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Portofolio - Sukron Naim, S.Sy",
  description: "Daftar Riwayat Hidup Sukron Naim, Penyuluh Agama Islam",
};

// Data portofolio - KEY HARUS STRING (bukan number)
const portofolioData: Record<string, {
  nama: string;
  jabatan: string;
  ttl: string;
  telepon: string;
  foto: string;
  pendidikan: Array<{ jenjang: string; nama: string; tahun: string }>;
  deskripsi: string;
}> = {
  "5": {
    nama: "SUKRON NAIM, S.Sy.",
    jabatan: "Penyuluh Ahli Agama Pertama",
    ttl: "Bogor, 07 April 1992",
    telepon: "081382387845",
    foto: "https://via.placeholder.com/300",
    pendidikan: [
      { jenjang: "SD", nama: "SDN 04 Parung Panjang", tahun: "" },
      { jenjang: "SMP/MTs", nama: "MTs MH Parung Panjang", tahun: "" },
      { jenjang: "SMA/MA", nama: "Ma'had Al-Malibo Parung Panjang", tahun: "" },
      { jenjang: "S1", nama: "Universitas Islam Negeri (UIN) Jakarta", tahun: "" },
    ],
    deskripsi: "Bapak Sukron Naim, S.Sy. merupakan Penyuluh Ahli Agama Pertama yang bertugas di wilayah Kecamatan Parung Panjang. Beliau aktif memberikan bimbingan dan penyuluhan keagamaan Islam kepada masyarakat. Bapak Sukron juga mengurus perhubungan dengan wakaf dan zakat, serta mendukung program-program keluarga sakinah di wilayahnya. Dengan pengalaman dan dedikasinya, beliau berkomitmen untuk meningkatkan kualitas pelayanan keagamaan di Kecamatan Parung Panjang."
  }
};

export default async function PortofolioPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // <-- await di sini!
  const data = portofolioData[id];

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Data Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-4">ID yang dicari: {id}</p>
          <Link href="/" className="text-kemenag-600 hover:underline">Kembali ke Beranda</Link>
        </div>
      </div>
    );
  }

  const waNumber = data.telepon.startsWith('0') 
    ? '62' + data.telepon.substring(1) 
    : data.telepon;
  const waLink = `https://wa.me/${waNumber}?text=Assalamualaikum%20Bapak%20${encodeURIComponent(data.nama.split(',')[0])},%20saya%20ingin%20bertanya%20tentang...`;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Breadcrumb */}
        <Link href="/" className="inline-flex items-center text-sm text-kemenag-600 hover:text-kemenag-800 mb-6 transition">
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali
        </Link>

        {/* HERO SECTION - Profil Utama */}
        <div className="bg-gradient-to-br from-kemenag-600 to-kemenag-800 rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              
              {/* Foto */}
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0 bg-white">
                <img 
                  src={data.foto} 
                  alt={data.nama}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Utama */}
              <div className="flex-1 text-center md:text-left text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{data.nama}</h1>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  <span className="text-sm md:text-base font-semibold">{data.jabatan}</span>
                </div>
                <p className="text-kemenag-100 text-sm md:text-base leading-relaxed">
                  {data.deskripsi}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GRID INFO - 2 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Info Pribadi */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <User className="w-5 h-5 mr-2 text-kemenag-600" />
              Informasi Pribadi
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-kemenag-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Tempat, Tanggal Lahir</p>
                  <p className="text-gray-800 font-medium">{data.ttl}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Briefcase className="w-5 h-5 text-kemenag-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Jabatan</p>
                  <p className="text-gray-800 font-medium">{data.jabatan}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-kemenag-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Wilayah Tugas</p>
                  <p className="text-gray-800 font-medium">Kecamatan Parung Panjang</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kontak */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-kemenag-600" />
              Kontak
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-kemenag-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Nomor Telepon</p>
                  <a 
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 font-medium hover:text-kemenag-600 transition"
                  >
                    {data.telepon}
                  </a>
                </div>
              </div>
              
              {/* Tombol WhatsApp */}
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition shadow-md mt-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* RIWAYAT PENDIDIKAN - Timeline */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <GraduationCap className="w-5 h-5 mr-2 text-kemenag-600" />
            Daftar Riwayat Hidup - Riwayat Pendidikan
          </h2>
          
          <div className="relative border-l-4 border-kemenag-200 ml-4 md:ml-6">
            {data.pendidikan.map((item, index) => (
              <div key={index} className="mb-6 ml-6 relative">
                {/* Titik Timeline */}
                <div className="absolute -left-[32px] w-6 h-6 bg-kemenag-600 rounded-full border-4 border-white shadow-md flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 text-white" />
                </div>
                
                {/* Card */}
                <div className="bg-kemenag-50 hover:bg-kemenag-100 transition rounded-lg p-4 border border-kemenag-100">
                  <div className="flex items-center mb-1">
                    <span className="inline-block bg-kemenag-600 text-white text-xs font-bold px-2 py-1 rounded mr-2">
                      {item.jenjang}
                    </span>
                    {item.tahun && (
                      <span className="text-xs text-gray-500">{item.tahun}</span>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-800">{item.nama}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Kembali */}
        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="inline-flex items-center text-kemenag-600 hover:text-kemenag-800 font-medium transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
        </div>

      </div>

        {/* Tombol buat wa nya */}
      <a 
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-50"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

 {/* Part paling hard kontol kontol */}