import Papa from 'papaparse';

const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSpLAcNziutXFNsTNsl2KXFhUFoYVXINpKDPtw3GH5xyrg4d5IyAEA8xETJDpkvu91RJYol9JErnWC/pub?output=csv";

// Export interface ini
export interface GaleriItem {
  id: string;
  kategori: string;
  judul: string;
  deskripsi?: string;
  foto: string;
  tanggal?: string;
}

export async function getGaleriData(): Promise<GaleriItem[]> {
  try {
    const response = await fetch(SHEET_URL, { 
      next: { revalidate: 0 }, 
      cache: 'no-store' 
    });
    
    const csvText = await response.text();
    const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
    const allData = parsed.data as GaleriItem[];

    const galeriItems = allData
      .filter(item => item.foto && item.foto.trim() !== '')
      .sort((a, b) => {
        if (a.tanggal && b.tanggal) {
          return new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime();
        }
        return parseInt(b.id) - parseInt(a.id);
      });

    return galeriItems;
  } catch (error) {
    console.error('Error fetching galeri data:', error);
    return [];
  }
}