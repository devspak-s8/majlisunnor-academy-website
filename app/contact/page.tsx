"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      titleAr: "العنوان",
      content: "123 Islamic Center Road, City, Country",
      contentAr: "١٢٣ طريق المركز الإسلامي، المدينة، البلد",
    },
    {
      icon: Phone,
      title: "Phone",
      titleAr: "الهاتف",
      content: "+1 234 567 8900",
      contentAr: "٩٠٠ ٧٦٥ ٤٣٢ ١+",
    },
    {
      icon: Mail,
      title: "Email",
      titleAr: "البريد الإلكتروني",
      content: "info@majlisunnor.edu",
      contentAr: "info@majlisunnor.edu",
    },
    {
      icon: Clock,
      title: "Hours",
      titleAr: "ساعات العمل",
      content: "Mon-Fri: 8:00 AM - 6:00 PM",
      contentAr: "الإثنين-الجمعة: ٨:٠٠ ص - ٦:٠٠ م",
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
              Contact Us
            </h1>
            <p className="font-arabic text-4xl md:text-5xl text-primary" dir="rtl">
              اتصل بنا
            </p>
            <div className="w-24 h-1 bg-accent rounded-full mx-auto" />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Get in touch with us for inquiries and enrollment
            </p>
            <p className="font-arabic text-xl md:text-2xl text-muted-foreground leading-relaxed" dir="rtl">
              تواصل معنا للاستفسارات والتسجيل
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl font-bold text-foreground">Get In Touch</h2>
                <p className="font-arabic text-2xl font-bold text-primary" dir="rtl">
                  تواصل معنا
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We'd love to hear from you. Whether you have questions about our programs or want to enroll, feel free
                  to reach out.
                </p>
                <p className="font-arabic text-base text-muted-foreground leading-loose" dir="rtl">
                  يسعدنا سماع رأيك. سواء كان لديك أسئلة حول برامجنا أو ترغب في التسجيل، لا تتردد في التواصل معنا.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <p className="font-arabic text-sm text-primary" dir="rtl">
                        {info.titleAr}
                      </p>
                      <p className="text-muted-foreground">{info.content}</p>
                      <p className="font-arabic text-sm text-muted-foreground" dir="rtl">
                        {info.contentAr}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="h-64 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Map Location</p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
