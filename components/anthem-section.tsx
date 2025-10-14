'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { arabicLyrics, englishLyrics } from '@/lib/data';

export function AnthemSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Fade-in animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.2,
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Audio control
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      ref={sectionRef}
      className='py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden'
    >
      {/* Decorative Blur Circles */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2' />
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2' />

      <div className='container mx-auto px-4 relative'>
        <div
          className={`max-w-4xl mx-auto text-center space-y-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className='space-y-4'>
            <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground'>
              Our Madrasa Anthem
            </h2>
            <p className='font-arabic text-3xl md:text-4xl text-primary'>نشيد مدرستنا</p>
            <div className='w-24 h-1 bg-accent rounded-full mx-auto' />
          </div>

          {/* Anthem Card */}
          <Card className='p-8 md:p-12 bg-card/80 backdrop-blur-sm shadow-2xl'>
            <div className='space-y-8'>
              {/* Audio Player */}
              <div className='flex items-center justify-center'>
                <Button
                  size='lg'
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause anthem' : 'Play anthem'}
                  className='w-20 h-20 rounded-full bg-primary hover:bg-primary/90 shadow-xl transition-transform hover:scale-105'
                >
                  {isPlaying ? <Pause className='h-8 w-8' /> : <Play className='h-8 w-8 ml-1' />}
                </Button>
                <audio ref={audioRef} src='/anthem.mp3' preload='none' />
              </div>

              {/* Lyrics */}
              <div className='space-y-8'>
                {/* Arabic Lyrics */}
                <div className='space-y-4 font-arabic text-right' dir='rtl'>
                  <p className='text-2xl md:text-3xl text-primary font-semibold leading-relaxed'>
                    أَلَا مَجْلِسُ النُّورِ مَدْرَسَتِي
                  </p>
                  <div className='space-y-3 text-lg md:text-xl text-muted-foreground leading-loose'>
                    {arabicLyrics.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className='w-full h-px bg-border' />

                {/* English Lyrics */}
                <div className='space-y-4 text-left'>
                  <p className='font-serif text-2xl md:text-3xl text-primary italic leading-relaxed'>
                    "Truly, Majlissnoor Academy is my school"
                  </p>

                  <div className='space-y-6 text-lg md:text-xl text-muted-foreground'>
                    {englishLyrics.map((stanza, stanzaIndex) => (
                      <div key={stanzaIndex} className='space-y-1'>
                        {stanza.map((line, lineIndex) => (
                          <p key={lineIndex}>{line}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
