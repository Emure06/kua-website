'use client';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profilOpen, setProfilOpen] = useState(false);
  const [layananOpen, setLayananOpen] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setProfilOpen(false);
    setLayananOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeAllMenus();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50" ref={headerRef}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={closeAllMenus}>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 p-1">
              <img src="/favicon.ico" alt="Logo KUA" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-[18px] text-white leading-tight">Kantor Urusan Agama</h1>
              <p className="text-[15px] text-white">KUA Parung Panjang</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-sm text-white">
            <li><Link href="/" className="hover:text-kemenag-200 transition">Beranda</Link></li>
            <li><Link href="/profil" className="hover:text-kemenag-200 transition">Profil</Link></li>
            <li><Link href="/layanan" className="hover:text-kemenag-200 transition">Layanan</Link></li>
            <li><Link href="/bimwin" className="hover:text-kemenag-200 transition">Bimwin</Link></li>
            <li><Link href="/pokja" className="hover:text-kemenag-200 transition">Pokja</Link></li>
            <li><Link href="/galeri" className="hover:text-kemenag-200 transition">Galeri</Link></li>
            <li><Link href="/kontak" className="hover:text-kemenag-200 transition">Kontak</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden bg-kemenag-600 hover:bg-kemenag-700 text-white p-2 rounded transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="divide-y divide-gray-200">
            <li>
              <Link 
                href="/" 
                className="block px-4 py-3 text-gray-800 hover:bg-gray-50"
                onClick={closeAllMenus}
              >
                Beranda
              </Link>
            </li>
            
            {/* Profil dengan Dropdown */}
            <li>
              <button
                onClick={() => {
                  setProfilOpen(!profilOpen);
                  setLayananOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-50"
              >
                <span>Profil</span>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform ${profilOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {profilOpen && (
                <ul className="bg-gray-50 divide-y divide-gray-100">
                  <li>
                    <Link href="/profil/visi-misi" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeAllMenus}>
                      Visi & Misi
                    </Link>
                  </li>
                  <li>
                    <Link href="/profil/struktur" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeAllMenus}>
                      Struktur Organisasi
                    </Link>
                  </li>
                  <li>
                    <Link href="/profil/sejarah" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeAllMenus}>
                      Sejarah
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Layanan dengan Dropdown */}
            <li>
              <button
                onClick={() => {
                  setLayananOpen(!layananOpen);
                  setProfilOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-50"
              >
                <span>Layanan</span>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform ${layananOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {layananOpen && (
                <ul className="bg-gray-50 divide-y divide-gray-100">
                  <li>
                    <Link href="/layanan/pernikahan" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeAllMenus}>
                      Pernikahan
                    </Link>
                  </li>
                  <li>
                    <Link href="/bimwin" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeAllMenus}>
                      Bimbingan Perkawinan
                    </Link>
                  </li>
                  <li>
                    <Link href="/layanan/keluarga-sakinah" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeAllMenus}>
                      Keluarga Sakinah
                    </Link>
                  </li>
                  <li>
                    <Link href="/layanan/wakaf-zakat" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeAllMenus}>
                      Wakaf & Zakat
                    </Link>
                  </li>
                  <li>
                    <Link href="/layanan/penyuluhan" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeAllMenus}>
                      Penyuluhan Agama
                    </Link>
                  </li>
                  <li>
                    <Link href="/layanan/masjid" className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeAllMenus}>
                      Urusan Masjid
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Pokja */}
            <li>
              <Link 
                href="/pokja" 
                className="block px-4 py-3 text-gray-800 hover:bg-gray-50"
                onClick={closeAllMenus}
              >
                Pokja
              </Link>
            </li>

            <li>
              <Link 
                href="/galeri" 
                className="block px-4 py-3 text-gray-800 hover:bg-gray-50"
                onClick={closeAllMenus}
              >
                Galeri
              </Link>
            </li>

            <li>
              <Link 
                href="/bimwin" 
                className="block px-4 py-3 text-gray-800 hover:bg-gray-50"
                onClick={closeAllMenus}
              >
                Bimwin
              </Link>
            </li>

            <li>
              <Link 
                href="/kontak" 
                className="block px-4 py-3 text-gray-800 hover:bg-gray-50"
                onClick={closeAllMenus}
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}