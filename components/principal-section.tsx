"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function PrincipalSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-card islamic-pattern">
      <div className="container mx-auto px-4">
        <div
          className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Principal Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-8 ring-background">
                <Image src="/islamic-scholar-principal-portrait.jpg" alt="Principal" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Principal Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-xl md:text-2xl text-primary" dir="rtl">
                عن مديرنا
              </h2>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
                About Our Principal
              </h3>
              <div className="w-24 h-1 bg-accent rounded-full" />
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p dir="rtl">
                يجلب الدكتور محمد الرشيد أكثر من 25 عامًا من الخبرة في التعليم الإسلامي والدراسات القرآنية. لقد غير
                تفانيه في الحفاظ على المعرفة الإسلامية الأصيلة مع تبني أساليب التدريس الحديثة حياة عدد لا يحصى من الناس.
              </p>
              <p>
                Dr. Muhammad Al-Rashid brings over 25 years of experience in Islamic education and Quranic studies. His
                dedication to preserving authentic Islamic knowledge while embracing modern teaching methodologies has
                transformed countless lives.
              </p>
              <p dir="rtl">
                خريج جامعة الأزهر الحاصل على درجة الدكتوراه في الفقه الإسلامي، ألف الدكتور الرشيد العديد من الأعمال
                العلمية ويواصل إلهام الطلاب بفهمه العميق للقرآن والسنة.
              </p>
              <p>
                A graduate of Al-Azhar University with a PhD in Islamic Jurisprudence, Dr. Al-Rashid has authored
                numerous scholarly works and continues to inspire students with his profound understanding of the Quran
                and Sunnah.
              </p>
              <p className="font-serif italic text-primary text-xl" dir="rtl">
                "العلم نور، ونور العلم ينير طريق الصلاح"
              </p>
              <p className="font-serif italic text-primary text-xl">
                "Knowledge is light, and the light of knowledge illuminates the path to righteousness."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
