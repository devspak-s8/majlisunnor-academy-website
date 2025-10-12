'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function VideoHero() {
  const [isMuted, setIsMuted] = useState(true); // start muted for mobile
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect if the device is mobile
  useEffect(() => {
    const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(mobile);
    setIsMuted(mobile); // ensure mobile starts muted, desktop can be unmuted
  }, []);

  // Autoplay logic
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = isMuted;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay prevented:', error);
        });
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
      video.play(); // ensure video continues playing
    }
  };

  return (
    <section className='relative h-screen w-full overflow-hidden'>
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className='absolute inset-0 w-full h-full object-cover'
      >
        <source src='/Majlis.mp4' type='video/mp4' />
      </video>

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/90' />

      {/* Content */}
      <div className='relative h-full flex items-center justify-center'>
        <div className='container mx-auto px-4 text-center'>
          <div className='max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom duration-1000'>
            <h2
              className='font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 drop-shadow-2xl'
              dir='rtl'
            >
              أكاديمية مجلس النور
            </h2>
            <h1 className='font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl text-balance'>
              Welcome to Majlisunnor Academy
            </h1>
            <p
              className='text-lg md:text-xl text-white/90 font-light tracking-wide drop-shadow-lg'
              dir='rtl'
            >
              لِتَحْفِيظِ القُرْآنِ وَتَعَالِيمِ العَرَبِيَّةِ وَالقُرْآنِيَّةِ وَالإِسْلَامِيَّةِ
            </p>
            <p className='text-xl md:text-2xl lg:text-3xl text-white/95 font-light tracking-wide drop-shadow-lg'>
              Centre for Quranic Memorization, Arabic and Islamic Studies.
            </p>
            <div className='pt-8'>
              <Button
                size='lg'
                className='bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-2xl shadow-2xl'
              >
                Explore Our Programs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mute/Unmute Button */}
      <Button
        variant='secondary'
        size='icon'
        className='absolute bottom-8 right-8 rounded-full shadow-lg z-20'
        onClick={toggleMute}
      >
        {isMuted ? <VolumeX className='h-5 w-5' /> : <Volume2 className='h-5 w-5' />}
      </Button>

      {/* Mobile overlay to enable sound */}
      {isMuted && isMobile && (
        <div className='absolute inset-0 flex items-center justify-center z-10'>
          <Button
            size='lg'
            className='bg-accent/90 hover:bg-accent/100 text-white px-6 py-3 rounded-xl shadow-lg'
            onClick={toggleMute}
          >
            Tap to Enable Sound 🔊
          </Button>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20'>
        <div className='w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2'>
          <div className='w-1.5 h-3 bg-white/70 rounded-full animate-pulse' />
        </div>
      </div>
    </section>
  );
}
