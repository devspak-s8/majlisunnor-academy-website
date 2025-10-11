"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { number: "500+", labelEn: "Students Enrolled", labelAr: "طالب مسجل" },
  { number: "25+", labelEn: "Expert Instructors", labelAr: "معلم خبير" },
  { number: "15+", labelEn: "Years of Excellence", labelAr: "سنة من التميز" },
  { number: "100+", labelEn: "Quran Hafiz Graduated", labelAr: "حافظ متخرج" },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-primary text-primary-foreground islamic-pattern-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-xl md:text-2xl" dir="rtl">
            إنجازاتنا
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-balance">Our Achievements</h3>
          <div className="w-24 h-1 bg-accent rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center space-y-2 transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold">{stat.number}</div>
              <div className="text-sm md:text-base opacity-90" dir="rtl">
                {stat.labelAr}
              </div>
              <div className="text-sm md:text-base opacity-90">{stat.labelEn}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
