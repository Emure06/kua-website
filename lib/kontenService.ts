import Papa from 'papaparse';

// GANTI DENGAN LINK CSV GOOGLE SHEETS LO (SAMA DENGAN YANG LAIN)
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTOCNcFJPpUxwXVx828GOJ2egLcBCBNrk8CjO-uSYI7ZjYln379Pqx_ABZVuLC-55CZ7bmeDRqNPF8V/pub?output=csv";

export interface KontenItem {
  section: string;
  key: string;
  value: string;
  foto?: string;
}

export async function getKontenData() {
  try {
    const response = await fetch(SHEET_URL, { 
      next: { revalidate: 0 }, 
      cache: 'no-store' 
    });
    
    const csvText = await response.text();
    const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
    const allData = parsed.data as KontenItem[];

    // Ambil background hero
    const heroBackground = allData.find(
      item => item.section === 'hero' && item.key === 'background'
    )?.value || '';

    // Ambil weekly activities
    const weeklyActivities = allData
      .filter(item => item.section === 'weekly')
      .sort((a, b) => a.key.localeCompare(b.key))
      .map(item => ({
        judul: item.value,
        foto: item.foto || '',
      }));

    return {
      heroBackground,
      weeklyActivities,
    };
  } catch (error) {
    console.error('Error fetching konten data:', error);
    return {
      heroBackground: '',
      weeklyActivities: [],
    };
  }
}