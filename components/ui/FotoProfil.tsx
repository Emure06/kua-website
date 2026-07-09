'use client';

import { User } from 'lucide-react';

interface FotoProfilProps {
  url?: string;
  nama: string;
  size?: string; // Format: "w-LEBAR h-TINGGI"
}

export default function FotoProfil({ url, nama, size = "w-32 h-40" }: FotoProfilProps) {
  if (url && url.trim() !== "") {
    return (
      <div className={`${size} rounded-xl overflow-hidden mx-auto mb-4 border-4 border-white shadow-xl bg-white`}>
        <img 
          src={url} 
          alt={`Foto ${nama}`} 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.parentElement) {
              target.parentElement.innerHTML = `
                <div class="w-full h-full bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
              `;
            }
          }}
        />
      </div>
    );
  }
  
  // Fallback kalau foto kosong
  return (
    <div className={`${size} bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-xl`}>
      <User className="w-1/2 h-1/2 text-gray-400" />
    </div>
  );
}