'use client';

import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Tunggu 1.5 detik sebelum menghilangkan splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-kemenag-600 to-kemenag-800 transition-opacity duration-500">
      
      {/* Animasi Logo */}
      <div className="relative mb-8 animate-bounce">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
          <img src="/favicon.ico" alt="Logo KUA" className="w-14 h-14 object-contain" />
        </div>
      </div>

      {/* Teks */}
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide">
        KUA PARUNG PANJANG
      </h1>
      <p className="text-kemenag-200 text-sm md:text-base mb-8">
        Kantor Urusan Agama
      </p>

      {/* Loading Bar */}
      <div className="w-48 h-1.5 bg-white/20 rounded-full overflow-hidden">
        <div className="h-full bg-white rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
}