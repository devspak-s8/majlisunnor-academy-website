'use client';

import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    nameEn: 'Faisal Odunuga',
    nameAr: 'فَيْصَل أُدُونُغَا',
    roleEn: 'Student',
    roleAr: 'طَالِب',
    testimonialEn:
      'Majlisunnor Academy truly changed the way I approach learning. The teachers don’t just teach—they guide, encourage, and inspire you every step of the way.',
    testimonialAr:
      'حَقًّا غَيَّرَتْنِي أَكادِيمِيَّةُ مَجْلِسِ النُّور فِي طَرِيقَةِ تَعَلُّمِي. فالمُعلّمونَ لَا يُدَرِّسُونَ فَقَط، بَلْ يُوَجِّهُونَ وَيُشَجِّعُونَ وَيُلهِمُونَكَ فِي كُلِّ خُطْوَةٍ.',
  },
  {
    nameEn: 'Apatira Sulaiman',
    nameAr: 'أَبَاتِيرَا سُلَيْمَان',
    roleEn: 'Quran Hafiz',
    roleAr: 'حَافِظُ القُرْآن',
    testimonialEn:
      'Learning the Quran here felt like a journey with family. The patience and dedication of the teachers made every memorization session meaningful.',
    testimonialAr:
      'كُنتُ أَشْعُرُ أَنَّ تَعَلُّمِي القُرْآن هُنَا رِحْلَةٌ مَعَ أُسْرَة. صَبْرُ وَإخْلَاصُ المُعلِّمين جَعَلَ كُلَّ جَلْسَةِ حِفْظٍ مُغْنِيَةً وَمُؤثِّرَةً.',
  },
  {
    nameEn: 'Mustapha Zulaikhah',
    nameAr: 'مُصْطَفَى زُلَيْخَة',
    roleEn: 'Student',
    roleAr: 'طَالِب',
    testimonialEn:
      'The environment here makes you fall in love with learning. Every lesson feels alive, and the support from teachers feels genuinely heartfelt.',
    testimonialAr:
      'الْبِيئَةُ هُنَا تَجْعَلُكَ تُحِبُّ التَّعَلُّم. كُلُّ دَرْسٍ يَشْعُرُ بِالحَيَاة، وَدَعْمُ المُعلِّمين صَادِقٌ وَمُلْهِم.',
  },
];

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className='py-24 md:py-32 bg-card'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16 space-y-4'>
          <h2 className='font-serif text-xl md:text-2xl text-primary' dir='rtl'>
            شَهَادَاتُ طُلَّابِنَا
          </h2>
          <h3 className='font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance'>
            Student Testimonials
          </h3>
          <div className='w-24 h-1 bg-accent rounded-full mx-auto' />
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl bg-background border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className='w-10 h-10 text-primary/30 mb-6' />
              <p className='text-muted-foreground leading-relaxed mb-4 italic' dir='rtl'>
                "{testimonial.testimonialAr}"
              </p>
              <p className='text-muted-foreground leading-relaxed mb-6 italic'>
                "{testimonial.testimonialEn}"
              </p>
              <div className='pt-6 space-y-2 border-t border-border'>
                <p className='font-serif font-bold text-foreground flex justify-between' dir='rtl'>
                  <span>{testimonial.nameAr}</span>
                  <span>{testimonial.nameEn}</span>
                </p>

                <p className='text-sm text-muted-foreground flex justify-between' dir='rtl'>
                  <span> {testimonial.roleAr}</span>
                  <span>{testimonial.roleEn}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
