'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function PrincipalSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className='py-24 md:py-32 bg-card islamic-pattern'>
      <div className='container mx-auto px-4'>
        <div
          className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Principal Photo */}
          <div className='flex justify-center md:justify-end'>
            <div className='relative group'>
              <div className='absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity' />
              <div className='relative w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-8 ring-background'>
                <Image
                  src='/mudeer.png'
                  alt='Sheikh Yusuf Nurudeen'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>

          {/* Principal Info */}
          <div className='space-y-6'>
            <div className='space-y-2'>
              <h2 className='font-serif text-xl md:text-2xl text-primary' dir='rtl'>
                عن مديرنا
              </h2>
              <h3 className='font-serif text-4xl md:text-5xl font-bold text-foreground text-balance'>
                About Our Principal
              </h3>
              <div className='w-24 h-1 bg-accent rounded-full' />
            </div>

            <div className='space-y-4 text-lg leading-relaxed text-muted-foreground'>
              <p dir='rtl'>
                يُعْرَفُ الشَّيْخ يُوسُف نُورُالدِّين بِخِبْرَتِهِ الواسِعَة فِي التَّعْلِيمِ
                الإِسْلَامِيِّ وَالدِّرَاسَاتِ القُرْآنِيَّةِ، وَهُوَ خَرِيجُ كُلِّيَّةِ الفِيزْيَاء
                مِنْ جَامِعَةِ فُنَاأب.
              </p>
              <p>
                Sheikh Yusuf Nurudeen is a graduate of Physics from FUNAAB and brings extensive
                experience in Islamic education and Quranic studies. He inspires students with his
                dedication and modern teaching methodologies.
              </p>
              <p dir='rtl'>
                يُسَاهِمُ فِي تَعْلِيمِ الطُّلَّابِ فَهْمَ القُرْآنِ وَالسُّنَّةِ وَيَسْعَى جَاهِدًا
                لِغَرْسِ الْمَعْرِفَةِ الإِسْلَامِيَّةِ الأَصِيلَةِ فِي أَفْئِدَةِ الجِيلِ
                الصَّاعِدِ.
              </p>
              <p>
                He continues to guide students in understanding the Quran and Sunnah while
                instilling authentic Islamic knowledge in the next generation.
              </p>
              <p className='font-serif italic text-primary text-xl' dir='rtl'>
                أَرْخِ الْعُلُومَ مَطِيَّةً نَحْوَ الْعُلَا،
                <br />
                تُصْبِحُ غَدًا بَيْنَ أَنَامٍ كَضَيْغَمٍ
              </p>

              <p className='font-serif italic text-primary text-lg mt-2'>
                "Use knowledge as a steed towards the heights,
                <br />
                Tomorrow you will rise among lions (the brave and strong)."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
