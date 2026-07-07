export interface BimwinAnnouncement {
  id: number;
  judul: string;
  tanggal: string;
  waktu: string;
  lokasi: string;
  kuota: number;
  terdaftar: number;
  status: 'terbuka' | 'penuh' | 'selesai';
  deskripsi: string;
}

export const bimwinAnnouncements: BimwinAnnouncement[] = [
  {
    id: 1,
    judul: "Bimbingan Perkawinan Gelombang 1 - Januari 2026",
    tanggal: "15-16 Januari 2026",
    waktu: "08.00 - 16.00 WIB",
    lokasi: "Aula KUA Parung Panjang",
    kuota: 30,
    terdaftar: 25,
    status: 'terbuka',
    deskripsi: "Bimbingan perkawinan untuk calon pengantin yang akan menikah di bulan Februari-Maret 2026"
  },
  {
    id: 2,
    judul: "Bimbingan Perkawinan Gelombang 2 - Februari 2026",
    tanggal: "12-13 Februari 2026",
    waktu: "08.00 - 16.00 WIB",
    lokasi: "Aula KUA Parung Panjang",
    kuota: 30,
    terdaftar: 30,
    status: 'penuh',
    deskripsi: "Bimbingan perkawinan untuk calon pengantin yang akan menikah di bulan Maret-April 2026"
  },
  {
    id: 3,
    judul: "Bimbingan Perkawinan Khusus - Desember 2025",
    tanggal: "20-21 Desember 2025",
    waktu: "08.00 - 16.00 WIB",
    lokasi: "Aula KUA Parung Panjang",
    kuota: 30,
    terdaftar: 28,
    status: 'selesai',
    deskripsi: "Bimbingan perkawinan akhir tahun 2025"
  }
];