'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Image as ImageIcon } from 'lucide-react';
import type { GaleriItem } from '@/lib/galeriService'; // <-- IMPORT DARI SINI

interface GalleryGridProps {
    items: GaleriItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        document.body.style.overflow = 'auto';
    };

    const goToPrevious = () => {
        if (selectedIndex !== null) {
            setSelectedIndex(selectedIndex === 0 ? items.length - 1 : selectedIndex - 1);
        }
    };

    const goToNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex(selectedIndex === items.length - 1 ? 0 : selectedIndex + 1);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'ArrowRight') goToNext();
    };

    const formatDate = (dateString?: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <>
            {/* Grid Foto */}
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                {items.map((item, index) => (
                    <div
                        key={`${item.id}-${index}`} 
                        onClick={() => openLightbox(index)}
                        className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 bg-white aspect-square"
                    >
                        <img
                            src={item.foto}
                            alt={item.judul}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="inline-block bg-kemenag-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 capitalize">
                                    {item.kategori}
                                </span>
                                <h3 className="text-white font-bold text-lg leading-tight mb-1">
                                    {item.judul}
                                </h3>
                                {item.tanggal && (
                                    <p className="text-gray-200 text-xs">
                                        {formatDate(item.tanggal)}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ImageIcon className="w-5 h-5 text-kemenag-600" />
                        </div>
                    </div>
                ))}
            </div>

            {/* LIGHTBOX MODAL */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition"
                        aria-label="Close"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <a
                        href={items[selectedIndex].foto}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-4 right-20 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition"
                        aria-label="Download"
                    >
                        <Download className="w-6 h-6" />
                    </a>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToPrevious();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToNext();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div
                        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={items[selectedIndex].foto}
                            alt={items[selectedIndex].judul}
                            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                        />

                        <div className="mt-4 text-center text-white max-w-2xl">
                            <span className="inline-block bg-kemenag-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 capitalize">
                                {items[selectedIndex].kategori}
                            </span>
                            <h3 className="text-xl font-bold mb-1">
                                {items[selectedIndex].judul}
                            </h3>
                            {items[selectedIndex].deskripsi && (
                                <p className="text-gray-300 text-sm mb-2">
                                    {items[selectedIndex].deskripsi}
                                </p>
                            )}
                            {items[selectedIndex].tanggal && (
                                <p className="text-gray-400 text-xs">
                                    {formatDate(items[selectedIndex].tanggal)}
                                </p>
                            )}
                            <p className="text-gray-500 text-xs mt-2">
                                {selectedIndex + 1} / {items.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}