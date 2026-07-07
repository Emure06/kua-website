import Papa from 'papaparse';
import { BimwinAnnouncement } from '@/constants/bimwinData';

// GANTI INI DENGAN LINK CSV DARI GOOGLE SHEETS LO
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT_zakS6nXhBuTZ_Tl96kS9t6bz6GxeK3hqWHjThyeV8PAsEm5GoD6QoyZaj_G30PHhgvWs1UluwUtt/pub?output=csv   ";

export async function getBimwinData(): Promise<BimwinAnnouncement[]> {
  // Fetch CSV dari Sheet Google jadwal bimwin
const response = await fetch(SHEET_CSV_URL, {
  next: { revalidate: 0 },
  cache: 'no-store'
});

  const csvText = await response.text();
  
  // Parse CSV jadi JSON
  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true
  });

  // Ubah tipe data (karena CSV semuanya jadi String, kita perlu ubah ke Number)
  const data = parsed.data as any[];
  
  return data.map((row) => ({
    id: Number(row.id),
    judul: row.judul,
    tanggal: row.tanggal,
    waktu: row.waktu,
    lokasi: row.lokasi,
    kuota: Number(row.kuota),
    terdaftar: Number(row.terdaftar),
    status: row.status as 'terbuka' | 'penuh' | 'selesai',
    deskripsi: row.deskripsi
  }));
}