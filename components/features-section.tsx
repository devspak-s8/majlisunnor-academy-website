"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, Users, GraduationCap, Heart, Globe, Award } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    titleEn: "Quranic Studies",
    titleAr: "الدراسات القرآنية",
    descriptionEn: "Comprehensive Quran memorization and Tajweed programs with certified instructors",
    descriptionAr: "برامج شاملة لحفظ القرآن والتجويد مع معلمين معتمدين",
  },
  {
    icon: Globe,
    titleEn: "Arabic Language",
    titleAr: "اللغة العربية",
    descriptionEn: "Master classical and modern Arabic through immersive learning methods",
    descriptionAr: "إتقان اللغة العربية الفصحى والحديثة من خلال أساليب التعلم الغامرة",
  },
  {
    icon: GraduationCap,
    titleEn: "Islamic Studies",
    titleAr: "الدراسات الإسلامية",
    descriptionEn: "In-depth study of Fiqh, Hadith, Seerah, and Islamic jurisprudence",
    descriptionAr: "دراسة متعمقة للفقه والحديث والسيرة والفقه الإسلامي",
  },
  {
    icon: Users,
    titleEn: "Community Learning",
    titleAr: "التعلم المجتمعي",
    descriptionEn: "Join a vibrant community of learners from diverse backgrounds",
    descriptionAr: "انضم إلى مجتمع نابض بالحياة من المتعلمين من خلفيات متنوعة",
  },
  {
    icon: Heart,
    titleEn: "Character Building",
    titleAr: "بناء الشخصية",
    descriptionEn: "Develop strong Islamic character and moral values",
    descriptionAr: "تطوير شخصية إسلامية قوية وقيم أخلاقية",
  },
  {
    icon: Award,
    titleEn: "Certified Programs",
    titleAr: "برامج معتمدة",
    descriptionEn: "Earn recognized certifications upon program completion",
    descriptionAr: "احصل على شهادات معترف بها عند إتمام البرنامج",
  },
]

export function FeaturesSection() {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-xl md:text-2xl text-primary" dir="rtl">
            ما نقدمه
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Our Programs & Services
          </h3>
          <div className="w-24 h-1 bg-accent rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group p-8 rounded-3xl bg-card hover:bg-card/80 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-serif text-sm text-muted-foreground mb-2" dir="rtl">
                  {feature.titleAr}
                </h4>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{feature.titleEn}</h3>
                <p className="text-muted-foreground leading-relaxed mb-3" dir="rtl">
                  {feature.descriptionAr}
                </p>
                <p className="text-muted-foreground leading-relaxed">{feature.descriptionEn}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
