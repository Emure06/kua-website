import Link from 'next/link';

export default function ProfileSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 md:mb-8">
            <div className="inline-block p-2 bg-kemenag-100 rounded-lg">
              {/* Gambar responsive: width 100% tapi maksimal 16rem (256px) */}
              <div className="w-full max-w-xs md:max-w-md h-40 md:h-48 bg-kemenag-200 rounded flex items-center justify-center mx-auto">
                <span className="text-kemenag-700 text-sm">Foto Gedung KUA</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
            Profil Singkat KUA
          </h2>

          {/* Teks rata kiri-kanan di HP, rata tengah di layar gede */}
          <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base text-justify md:text-center px-2 md:px-0">
            KUA Kecamatan Parung Panjang merupakan unit pelaksana teknis di bawah 
            Kementerian Agama Kabupaten Bogor yang memberikan pelayanan di bidang urusan 
            keagamaan Islam, seperti pernikahan, wakaf, zakat, dan bimbingan keluarga 
            sakinah. Kami berkomitmen memberikan pelayanan yang profesional, amanah, 
            dan transparan demi terwujudnya masyarakat yang religius dan harmonis.
          </p>

          <Link 
            href="/profil" 
            className="inline-block bg-kemenag-700 hover:bg-kemenag-800 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold transition shadow-md text-sm md:text-base"
          >
            SELENGKAPNYA
          </Link>
        </div>
      </div>
    </section>
  );
}