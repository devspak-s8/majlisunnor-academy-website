'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className='py-24 md:py-32 bg-gradient-to-br from-primary via-secondary to-primary'
    >
      <div className='container mx-auto px-4'>
        <div
          className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className='font-serif text-3xl md:text-4xl text-primary-foreground/90' dir='rtl'>
            ابدأ رِحْلَتَكَ التَّعْلِيمِيَّةَ اليَوْمَ
          </h2>
          <h3 className='font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-balance'>
            Begin Your Journey of Knowledge
          </h3>
          <p
            className='text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto'
            dir='rtl'
          >
            انْضَمْ إِلَى طُلَّابِ العِلْمِ فِي طَرِيقِ اللَّهِ وَاكْتَشِفْ جَمَالَ القُرْآنِ
            وَالعُلُومِ الإِسْلَامِيَّةِ
          </p>
          <p
            className='text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto mt-4 italic'
            dir='rtl'
          >
            اللَّهُمَّ اجْعَلْ هَذِهِ الرِّحْلَةَ لَنَا نُورًا وَهُدًى فِي الدُّنْيَا وَالآخِرَةِ
          </p>
          <p className='text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto'>
            Join our community of dedicated learners and discover the beauty of Quranic and Islamic
            sciences
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center pt-8'>
            <Button
              asChild
              size='lg'
              className='bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-2xl shadow-2xl group'
            >
              <Link href='/contact'>
                Enroll Now
                <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
              </Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 text-lg px-8 py-6 rounded-2xl backdrop-blur-sm'
            >
              <Link href='/programs'>View Programs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
