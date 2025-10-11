'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      titleAr: 'العُنْوَان',
      content: 'Runsewe estate Ahmadiyyah ijaiye lagos, Lagos Harbour, Nigeria',
    },
    {
      icon: Phone,
      title: 'Phone',
      titleAr: 'الْهَاتِف',
      content: '+234 811 592 0823',
    },
    {
      icon: Mail,
      title: 'Email',
      titleAr: 'الْبَرِيدُ الإِلِكْتِرُونِيّ',
      content: 'info@majlisunnor.edu',
    },
    {
      icon: Clock,
      title: 'Hours',
      titleAr: 'سَاعَاتُ الْعَمَلِ',
      content: 'Mon–Fri: 8:00 AM – 6:00 PM',
    },
  ];

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section className='pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 islamic-pattern'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom duration-1000'>
            <h1 className='font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance'>
              Contact Us
            </h1>
            <p className='font-arabic text-4xl md:text-5xl text-primary' dir='rtl'>
              اتَّصِلْ بِنَا
            </p>
            <div className='w-24 h-1 bg-accent rounded-full mx-auto' />
            <p className='text-xl md:text-2xl text-muted-foreground leading-relaxed'>
              Get in touch with us for inquiries and enrollment
            </p>
            <p
              className='font-arabic text-xl md:text-2xl text-muted-foreground leading-relaxed'
              dir='rtl'
            >
              تَوَاصَلْ مَعَنَا لِلاِسْتِفْسَارَاتِ وَالتَّسْجِيلِ
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-24 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
            {/* Contact Info */}
            <div className='space-y-8'>
              <div className='space-y-4'>
                <h2 className='font-serif text-3xl font-bold text-foreground'>Get In Touch</h2>
                <p className='font-arabic text-2xl font-bold text-primary' dir='rtl'>
                  تَوَاصَلْ مَعَنَا
                </p>
                <p className='text-lg text-muted-foreground leading-relaxed'>
                  We'd love to hear from you. Whether you have questions about our programs or want
                  to enroll, feel free to reach out.
                </p>
                <p className='font-arabic text-base text-muted-foreground leading-loose' dir='rtl'>
                  نَسْعَدُ بِسَمَاعِ رَأْيِكَ. سَوَاءٌ كَانَتْ لَدَيْكَ أَسْئِلَةٌ حَوْلَ
                  بَرَامِجِنَا أَوْ تُرِيدُ التَّسْجِيلَ، فَلَا تَتَرَدَّدْ فِي التَّوَاصُلِ
                  مَعَنَا.
                </p>
              </div>

              <div className='space-y-6'>
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className='p-6 flex items-start gap-4 hover:shadow-md transition-all duration-300'
                  >
                    <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <info.icon className='h-6 w-6 text-primary' />
                    </div>

                    <div className='space-y-4 w-full'>
                      <h3 className='font-semibold text-lg text-foreground flex justify-between'>
                        <span>{info.title}</span>
                        <span>{info.titleAr}</span>
                      </h3>
                      <p className='text-muted-foreground leading-relaxed break-words' dir='ltr'>
                        {info.content}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className='h-64 md:h-96 overflow-hidden rounded-xl'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.873764281001!2d3.290221175065447!3d6.662562571531589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b976e386face1%3A0x8363803d10935e60!2sRunsewe%20Estate%20Community%20Mosque!5e0!3m2!1sen!2sng!4v1760225360954!5m2!1sen!2sng'
                  width='100%'
                  height='100%'
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </Card>
            </div>

            {/* Contact Form - Fixed (Sticky) */}
            <div className='lg:sticky lg:top-28 h-fit'>
              <Card className='p-8'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  {/* Name */}
                  <div className='space-y-2'>
                    <label
                      htmlFor='name'
                      className='text-sm font-medium text-foreground flex flex-col'
                    >
                      Full Name
                      <span className='font-arabic text-primary' dir='rtl'>
                        الِاسْمُ الْكَامِلُ
                      </span>
                    </label>
                    <Input
                      id='name'
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder='Enter your full name'
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className='space-y-2'>
                    <label
                      htmlFor='email'
                      className='text-sm font-medium text-foreground flex flex-row justify-between'
                    >
                      <span>Email</span>
                      <span className='font-arabic text-primary' dir='rtl'>
                        الْبَرِيدُ الإِلِكْتِرُونِيّ
                      </span>
                    </label>
                    <Input
                      id='email'
                      type='email'
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder='Enter your email address'
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className='space-y-2'>
                    <label
                      htmlFor='phone'
                      className='text-sm font-medium text-foreground flex flex-row justify-between'
                    >
                      <span>Phone Number</span>
                      <span className='font-arabic text-primary' dir='rtl'>
                        رَقْمُ الْهَاتِفِ
                      </span>
                    </label>
                    <Input
                      id='phone'
                      type='tel'
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder='Enter your phone number'
                    />
                  </div>

                  {/* Message */}
                  <div className='space-y-2'>
                    <label
                      htmlFor='message'
                      className='text-sm font-medium text-foreground flex flex-row justify-between'
                    >
                      <span>Message</span>
                      <span className='font-arabic text-primary' dir='rtl'>
                        الرِّسَالَةُ
                      </span>
                    </label>
                    <Textarea
                      id='message'
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder='Type your message here...'
                      required
                    />
                  </div>

                  <Button type='submit' className='w-full bg-primary hover:bg-primary/90'>
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
