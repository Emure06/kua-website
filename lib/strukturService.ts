import Papa from 'papaparse';

// LINK CSV LO
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTOCNcFJPpUxwXVx828GOJ2egLcBCBNrk8CjO-uSYI7ZjYln379Pqx_ABZVuLC-55CZ7bmeDRqNPF8V/pub?output=csv";

export interface Pegawai {
  kategori: string;
  nama: string;
  nip: string;
  jabatan: string;
  foto?: string; // <-- Tambahin ini (tanda tanya artinya boleh kosong)
}

export async function getStrukturData() {
  const response = await fetch(SHEET_URL, { 
    next: { revalidate: 0 }, 
    cache: 'no-store' 
  });
  
  const csvText = await response.text();
  const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
  const allData = parsed.data as Pegawai[];

  return {
    kepala: allData.find(item => item.kategori?.toLowerCase().trim() === 'kepala') || null,
    penghulu: allData.filter(item => item.kategori?.toLowerCase().trim() === 'penghulu'),
    penyuluh: allData.filter(item => item.kategori?.toLowerCase().trim() === 'penyuluh'),
    staf: allData.filter(item => item.kategori?.toLowerCase().trim() === 'staf'),
  };
}