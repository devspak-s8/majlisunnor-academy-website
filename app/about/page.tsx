import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookOpen, Users, Award, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  const values = [
    {
      icon: BookOpen,
      title: "Knowledge",
      titleAr: "العلم",
      description: "We pursue authentic Islamic knowledge rooted in the Quran and Sunnah",
      descriptionAr: "نسعى للعلم الإسلامي الأصيل المتجذر في القرآن والسنة",
    },
    {
      icon: Users,
      title: "Community",
      titleAr: "المجتمع",
      description: "Building a strong, supportive community of learners and scholars",
      descriptionAr: "بناء مجتمع قوي وداعم من المتعلمين والعلماء",
    },
    {
      icon: Award,
      title: "Excellence",
      titleAr: "التميز",
      description: "Striving for excellence in both spiritual and academic pursuits",
      descriptionAr: "السعي للتميز في المساعي الروحية والأكاديمية",
    },
    {
      icon: Heart,
      title: "Compassion",
      titleAr: "الرحمة",
      description: "Fostering compassion, understanding, and respect for all",
      descriptionAr: "تعزيز الرحمة والتفاهم والاحترام للجميع",
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
              About Majlisunnor Academy
            </h1>
            <p className="font-arabic text-4xl md:text-5xl text-primary" dir="rtl">
              عن أكاديمية مجلس النور
            </p>
            <div className="w-24 h-1 bg-accent rounded-full mx-auto" />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A beacon of Islamic knowledge and spiritual enlightenment
            </p>
            <p className="font-arabic text-xl md:text-2xl text-muted-foreground leading-relaxed" dir="rtl">
              منارة للعلم الإسلامي والتنوير الروحي
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 space-y-4 bg-gradient-to-br from-primary/5 to-transparent">
              <h2 className="font-serif text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="font-arabic text-2xl font-bold text-primary" dir="rtl">
                رسالتنا
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide comprehensive Islamic education that combines traditional scholarship with contemporary
                teaching methods, nurturing students who are well-versed in Quranic studies, Arabic language, and
                Islamic sciences while being active contributors to society.
              </p>
              <p className="font-arabic text-base text-muted-foreground leading-loose" dir="rtl">
                تقديم تعليم إسلامي شامل يجمع بين المنهج التقليدي وأساليب التدريس المعاصرة، وتنشئة طلاب متمكنين في
                الدراسات القرآنية واللغة العربية والعلوم الإسلامية مع كونهم مساهمين فاعلين في المجتمع.
              </p>
            </Card>

            <Card className="p-8 space-y-4 bg-gradient-to-br from-secondary/5 to-transparent">
              <h2 className="font-serif text-3xl font-bold text-foreground">Our Vision</h2>
              <p className="font-arabic text-2xl font-bold text-secondary" dir="rtl">
                رؤيتنا
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be a leading center of Islamic learning that produces scholars, leaders, and professionals who embody
                the values of Islam and contribute positively to the global Muslim community and humanity at large.
              </p>
              <p className="font-arabic text-base text-muted-foreground leading-loose" dir="rtl">
                أن نكون مركزاً رائداً للتعليم الإسلامي ينتج علماء وقادة ومهنيين يجسدون قيم الإسلام ويساهمون بشكل إيجابي في
                المجتمع الإسلامي العالمي والإنسانية جمعاء.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Our Core Values</h2>
            <p className="font-arabic text-3xl md:text-4xl text-primary" dir="rtl">
              قيمنا الأساسية
            </p>
            <div className="w-24 h-1 bg-accent rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center space-y-4 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">{value.title}</h3>
                <p className="font-arabic text-xl font-bold text-primary" dir="rtl">
                  {value.titleAr}
                </p>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                <p className="font-arabic text-sm text-muted-foreground leading-loose" dir="rtl">
                  {value.descriptionAr}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
