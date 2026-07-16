export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      {/* Logo / Icon */}
      <div className="relative mb-6">
        <div className="w-20 h-20 border-4 border-kemenag-100 rounded-full"></div>
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-kemenag-600 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/favicon.ico" alt="Logo" className="w-10 h-10 object-contain" />
        </div>
      </div>

      {/* Teks Loading */}
      <h2 className="text-xl font-bold text-kemenag-700 mb-2">KUA Parung Panjang</h2>
      <p className="text-sm text-gray-500 animate-pulse">Memuat data...</p>
    </div>
  );
}