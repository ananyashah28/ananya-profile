'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageLightboxProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function ImageLightbox({ src, alt, width = 800, height = 600 }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <Image src={src} alt={alt} width={width} height={height} className="rounded-lg hover:opacity-90 transition-opacity" />
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <button className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300" onClick={() => setIsOpen(false)}>
            ×
          </button>
          <Image src={src} alt={alt} width={1200} height={900} className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </>
  );
}
