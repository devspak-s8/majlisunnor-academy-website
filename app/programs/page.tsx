import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookOpen, Languages, GraduationCap, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProgramsPage() {
  const programs = [
    {
      icon: BookOpen,
      title: "Quranic Studies",
      titleAr: "الدراسات القرآنية",
      description: "Comprehensive Quran memorization, recitation with Tajweed, and Tafsir courses",
      descriptionAr: "حفظ القرآن الكريم الشامل، التلاوة بالتجويد، ودورات التفسير",
      features: ["Hifz Program", "Tajweed Mastery", "Tafsir Classes", "Quranic Arabic"],
      featuresAr: ["برنامج الحفظ", "إتقان التجويد", "دروس التفسير", "العربية القرآنية"],
      color: "from-primary/10 to-primary/5",
    },
    {
      icon: Languages,
      title: "Arabic Language",
      titleAr: "اللغة العربية",
      description: "Classical and Modern Standard Arabic for all proficiency levels",
      descriptionAr: "اللغة العربية الفصحى الكلاسيكية والحديثة لجميع مستويات الكفاءة",
      features: ["Beginner to Advanced", "Grammar & Morphology", "Conversation Skills", "Literature"],
      featuresAr: ["من المبتدئ إلى المتقدم", "النحو والصرف", "مهارات المحادثة", "الأدب"],
      color: "from-secondary/10 to-secondary/5",
    },
    {
      icon: GraduationCap,
      title: "Islamic Studies",
      titleAr: "الدراسات الإسلامية",
      description: "In-depth study of Hadith, Fiqh, Seerah, and Islamic history",
      descriptionAr: "دراسة متعمقة للحديث والفقه والسيرة والتاريخ الإسلامي",
      features: ["Hadith Sciences", "Islamic Jurisprudence", "Prophetic Biography", "Islamic History"],
      featuresAr: ["علوم الحديث", "الفقه الإسلامي", "السيرة النبوية", "التاريخ الإسلامي"],
      color: "from-accent/10 to-accent/5",
    },
    {
      icon: Users,
      title: "Community Programs",
      titleAr: "البرامج المجتمعية",
      description: "Special programs for families, youth, and new Muslims",
      descriptionAr: "برامج خاصة للعائلات والشباب والمسلمين الجدد",
      features: ["Weekend Classes", "Youth Programs", "Family Workshops", "New Muslim Support"],
      featuresAr: ["دروس نهاية الأسبوع", "برامج الشباب", "ورش العائلة", "دعم المسلمين الجدد"],
      color: "from-primary/5 to-secondary/5",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom duration-1000">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance">
              Our Programs
            </h1>
            <p className="font-arabic text-4xl md:text-5xl text-primary" dir="rtl">
              برامجنا
            </p>
            <div className="w-24 h-1 bg-accent rounded-full mx-auto" />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Comprehensive Islamic education for all ages and levels
            </p>
            <p className="font-arabic text-xl md:text-2xl text-muted-foreground leading-relaxed" dir="rtl">
              تعليم إسلامي شامل لجميع الأعمار والمستويات
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card
                key={index}
                className={`p-8 space-y-6 bg-gradient-to-br ${program.color} hover:shadow-2xl transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <program.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-foreground">{program.title}</h3>
                    <p className="font-arabic text-xl font-bold text-primary" dir="rtl">
                      {program.titleAr}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                    <p className="font-arabic text-sm text-muted-foreground leading-loose" dir="rtl">
                      {program.descriptionAr}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <ul className="space-y-2 font-arabic" dir="rtl">
                    {program.featuresAr.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-primary">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
