import Papa from 'papaparse';

// GANTI DENGAN LINK CSV GOOGLE SHEETS LO
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTOCNcFJPpUxwXVx828GOJ2egLcBCBNrk8CjO-uSYI7ZjYln379Pqx_ABZVuLC-55CZ7bmeDRqNPF8V/pub?output=csv";

export interface Petugas {
  id: string;
  kategori: string;
  nama: string;
  nip: string;
  jabatan: string;
  foto?: string;
}

export async function getPetugasData() {
  try {
    const response = await fetch(SHEET_URL, { 
      next: { revalidate: 0 }, 
      cache: 'no-store' 
    });
    
    const csvText = await response.text();
    const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
    const allData = parsed.data as Petugas[];

    // filter data di sheed -ribed
    return {
      kepala: allData.filter(item => item.kategori?.toLowerCase().trim() === 'kepala'),
      penghulu: allData.filter(item => item.kategori?.toLowerCase().trim() === 'penghulu'),
      penyuluh: allData.filter(item => item.kategori?.toLowerCase().trim() === 'penyuluh'),
    };
  } catch (error) {
    console.error('Error fetching petugas data:', error);
    return {
      kepala: [],
      penghulu: [],
      penyuluh: [],
    };
  }
}