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

export async function getPetugasById(id: string) {
  try {
    const response = await fetch(SHEET_URL, { 
      next: { revalidate: 0 }, 
      cache: 'no-store' 
    });
    
    const csvText = await response.text();
    const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
    const allData = parsed.data as Petugas[];

    const petugas = allData.find(item => item.id === id);

    if (!petugas) {
      return null;
    }

    return {
      nama: petugas.nama,
      jabatan: petugas.jabatan,
      ttl: "Bogor, 07 April 1992",
      telepon: "081382387845",
      foto: petugas.foto || "https://via.placeholder.com/300",
      pendidikan: [
        { jenjang: "SD", nama: "SDN 04 Parung Panjang", tahun: "" },
        { jenjang: "SMP/MTs", nama: "MTs MH Parung Panjang", tahun: "" },
        { jenjang: "SMA/MA", nama: "Ma'had Al-Malibo Parung Panjang", tahun: "" },
        { jenjang: "S1", nama: "Universitas Islam Negeri (UIN) Jakarta", tahun: "" },
      ],
      deskripsi: `${petugas.nama} merupakan ${petugas.jabatan} yang bertugas di wilayah Kecamatan Parung Panjang.`
    };
  } catch (error) {
    console.error('Error fetching portofolio data:', error);
    return null;
  }
}