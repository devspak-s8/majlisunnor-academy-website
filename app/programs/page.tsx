import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { programs } from '@/lib/data';

export default function ProgramsPage() {
  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section className='pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 islamic-pattern'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom duration-1000'>
            <h1 className='font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance'>
              Our Programs
            </h1>
            <p className='font-arabic text-4xl md:text-5xl text-primary' dir='rtl'>
              بَرَامِجُنَا
            </p>
            <div className='w-24 h-1 bg-accent rounded-full mx-auto' />
            <p className='text-xl md:text-2xl text-muted-foreground leading-relaxed'>
              Structured Islamic education from foundation to advanced levels
            </p>
            <p
              className='font-arabic text-xl md:text-2xl text-muted-foreground leading-relaxed'
              dir='rtl'
            >
              تَعْلِيمٌ إِسْلَامِيٌّ مُنَظَّمٌ مِنَ الأَسَاسِ إِلَى المَرَاحِلِ المُتَقَدِّمَةِ
            </p>
          </div>
        </div>
      </section>

      {/* Main Academic Programs */}
      <section className='py-24 bg-background'>
        <div className='container mx-auto px-4 space-y-16'>
          {/* Stage-based Programs */}
          <div>
            <h2 className='font-serif text-3xl md:text-4xl font-bold text-center mb-12'>
              Academic Stages
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
              {programs
                .filter(
                  (p) =>
                    !p.title.toLowerCase().includes('tahfeedh') &&
                    !p.title.toLowerCase().includes('tahfīdh')
                )
                .map((program, index) => (
                  <Card
                    key={index}
                    className={`p-8 space-y-6 bg-gradient-to-br ${program.color} hover:shadow-2xl transition-all duration-300`}
                  >
                    <div className='flex items-start gap-4'>
                      <div className='w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0'>
                        <program.icon className='h-7 w-7 text-primary-foreground' />
                      </div>
                      <div className='space-y-2'>
                        <h3 className='font-serif text-2xl font-bold text-foreground'>
                          {program.title}
                        </h3>
                        <p className='font-arabic text-xl font-bold text-primary' dir='rtl'>
                          {program.titleAr}
                        </p>
                        <p className='text-muted-foreground leading-relaxed'>
                          {program.description}
                        </p>
                        <p
                          className='font-arabic text-sm text-muted-foreground leading-loose'
                          dir='rtl'
                        >
                          {program.descriptionAr}
                        </p>
                      </div>
                    </div>

                    <div className='space-y-4'>
                      <ul className='space-y-2'>
                        {program.features.map((feature, idx) => (
                          <li key={idx} className='flex items-center gap-2 text-foreground'>
                            <div className='w-1.5 h-1.5 bg-accent rounded-full' />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <ul className='space-y-2 font-arabic' dir='rtl'>
                        {program.featuresAr.map((feature, idx) => (
                          <li key={idx} className='flex items-center gap-2 text-primary'>
                            <div className='w-1.5 h-1.5 bg-accent rounded-full' />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
            </div>
          </div>

          {/* Tahfeedh Programs */}
          <div>
            <h2 className='font-serif text-3xl md:text-4xl font-bold text-center mb-12'>
              Tahfeedh Programs
            </h2>
            <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
              {programs
                .filter((p) => p.title.toLowerCase().includes('tahfeedh'))
                .map((program, index) => (
                  <Card
                    key={index}
                    className={`p-8 space-y-6 bg-gradient-to-br ${program.color} hover:shadow-2xl transition-all duration-300`}
                  >
                    <div className='flex items-start gap-4'>
                      <div className='w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0'>
                        <program.icon className='h-7 w-7 text-primary-foreground' />
                      </div>
                      <div className='space-y-2'>
                        <h3 className='font-serif text-2xl font-bold text-foreground'>
                          {program.title}
                        </h3>
                        <p className='font-arabic text-xl font-bold text-primary' dir='rtl'>
                          {program.titleAr}
                        </p>
                        <p className='text-muted-foreground leading-relaxed'>
                          {program.description}
                        </p>
                        <p
                          className='font-arabic text-sm text-muted-foreground leading-loose'
                          dir='rtl'
                        >
                          {program.descriptionAr}
                        </p>
                      </div>
                    </div>

                    <div className='space-y-4'>
                      <ul className='space-y-2'>
                        {program.features.map((feature, idx) => (
                          <li key={idx} className='flex items-center gap-2 text-foreground'>
                            <div className='w-1.5 h-1.5 bg-accent rounded-full' />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <ul className='space-y-2 font-arabic' dir='rtl'>
                        {program.featuresAr.map((feature, idx) => (
                          <li key={idx} className='flex items-center gap-2 text-primary'>
                            <div className='w-1.5 h-1.5 bg-accent rounded-full' />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
