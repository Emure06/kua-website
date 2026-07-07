'use client'; // WAJIB ADA DI BARIS PERTAMA!

import { User } from 'lucide-react';

interface FotoProfilProps {
  url?: string;
  nama: string;
  size?: string;
}

export default function FotoProfil({ url, nama, size = "w-24 h-24" }: FotoProfilProps) {
  // Kalau ada URL dan nggak kosong
  if (url && url.trim() !== "") {
    return (
      <div className={`${size} rounded-full overflow-hidden mx-auto mb-4 border-4 border-kemenag-100 shadow-sm`}>
        <img 
          src={url} 
          alt={`Foto ${nama}`} 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Kalau link gambar error/rusak, ganti jadi icon default
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.parentElement) {
              target.parentElement.innerHTML = `
                <div class="w-full h-full bg-kemenag-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              `;
            }
          }}
        />
      </div>
    );
  }
  
  // Fallback kalau kolom foto kosong
  return (
    <div className={`${size} bg-kemenag-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm`}>
      <User className="w-1/2 h-1/2 text-kemenag-600" />
    </div>
  );
}