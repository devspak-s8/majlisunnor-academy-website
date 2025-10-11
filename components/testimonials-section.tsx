"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    nameEn: "Ahmed Hassan",
    nameAr: "أحمد حسن",
    roleEn: "Quran Hafiz Graduate",
    roleAr: "خريج حافظ القرآن",
    testimonialEn:
      "Majlisunnor Academy transformed my life. The dedicated teachers and structured curriculum helped me complete my Quran memorization journey with proper Tajweed.",
    testimonialAr:
      "غيرت أكاديمية مجلس النور حياتي. ساعدني المعلمون المتفانون والمنهج المنظم على إكمال رحلة حفظ القرآن مع التجويد الصحيح.",
  },
  {
    nameEn: "Fatima Al-Zahra",
    nameAr: "فاطمة الزهراء",
    roleEn: "Arabic Language Student",
    roleAr: "طالبة اللغة العربية",
    testimonialEn:
      "The Arabic language program is exceptional. I went from knowing basic phrases to reading classical Arabic texts fluently in just two years.",
    testimonialAr:
      "برنامج اللغة العربية استثنائي. انتقلت من معرفة العبارات الأساسية إلى قراءة النصوص العربية الكلاسيكية بطلاقة في عامين فقط.",
  },
  {
    nameEn: "Ibrahim Malik",
    nameAr: "إبراهيم مالك",
    roleEn: "Islamic Studies Scholar",
    roleAr: "باحث في الدراسات الإسلامية",
    testimonialEn:
      "The depth of knowledge and authentic sources used in teaching Islamic jurisprudence is remarkable. This academy truly preserves the tradition of Islamic scholarship.",
    testimonialAr:
      "عمق المعرفة والمصادر الأصيلة المستخدمة في تدريس الفقه الإسلامي رائع. هذه الأكاديمية تحافظ حقًا على تقاليد العلم الإسلامي.",
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-xl md:text-2xl text-primary" dir="rtl">
            شهادات طلابنا
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Student Testimonials
          </h3>
          <div className="w-24 h-1 bg-accent rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl bg-background border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4 italic" dir="rtl">
                "{testimonial.testimonialAr}"
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.testimonialEn}"</p>
              <div className="pt-6 border-t border-border">
                <p className="font-serif font-bold text-foreground" dir="rtl">
                  {testimonial.nameAr}
                </p>
                <p className="font-serif font-bold text-foreground">{testimonial.nameEn}</p>
                <p className="text-sm text-muted-foreground mt-1" dir="rtl">
                  {testimonial.roleAr}
                </p>
                <p className="text-sm text-muted-foreground">{testimonial.roleEn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
