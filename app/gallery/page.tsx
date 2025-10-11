'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: '/islamic-classroom-students-learning.jpg', alt: 'Students in classroom' },
    { src: '/quran-recitation-class.jpg', alt: 'Quran recitation' },
    { src: '/arabic-calligraphy-workshop.jpg', alt: 'Calligraphy workshop' },
    { src: '/islamic-library-books.jpg', alt: 'Academy library' },
    { src: '/students-graduation-ceremony.jpg', alt: 'Graduation ceremony' },
    { src: '/mosque-prayer-hall.jpg', alt: 'Prayer hall' },
    { src: '/islamic-art-exhibition.jpg', alt: 'Art exhibition' },
    { src: '/community-iftar-gathering.jpg', alt: 'Community event' },
    { src: '/children-learning-arabic.jpg', alt: 'Children class' },
  ];

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section className='pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 islamic-pattern'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom duration-1000'>
            <h1 className='font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance'>
              Gallery
            </h1>
            <div className='w-24 h-1 bg-accent rounded-full mx-auto' />
            <p className='text-xl md:text-2xl text-muted-foreground leading-relaxed'>
              Moments from our journey of knowledge and faith
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className='py-24 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
            {images.map((image, index) => (
              <div
                key={index}
                className='relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group'
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  fill
                  className='object-cover transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6'>
                  <p className='text-white font-medium'>{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className='fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in'
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant='ghost'
            size='icon'
            className='absolute top-4 right-4 text-white hover:bg-white/20'
            onClick={() => setSelectedImage(null)}
          >
            <X className='h-6 w-6' />
          </Button>
          <div className='relative w-full max-w-5xl aspect-[4/3]'>
            <Image
              src={images[selectedImage].src || '/placeholder.svg'}
              alt={images[selectedImage].alt}
              fill
              className='object-contain'
            />
          </div>
        </div>
      )}
    </main>
  );
}
