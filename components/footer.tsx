import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className='bg-primary text-primary-foreground'>
      <div className='container mx-auto px-4 py-16'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* About */}
          <div className='space-y-4'>
            <h3 className='font-serif text-2xl font-bold'>Majlisunnor Academy</h3>
            <p className='text-primary-foreground/80 leading-relaxed'>
              A Centre for Quranic, Arabic and Islamic Studies dedicated to nurturing knowledge and
              spiritual growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='font-semibold text-lg'>Quick Links</h4>
            <ul className='space-y-2'>
              {['Home', 'About Us', 'Programs', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    target='_blank'
                    className='text-primary-foreground/80 hover:text-primary-foreground transition-colors'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h4 className='font-semibold text-lg'>Contact Us</h4>
            <ul className='space-y-3'>
              <li className='flex items-start gap-3'>
                <MapPin className='h-5 w-5 mt-0.5 flex-shrink-0' />
                <span className='text-primary-foreground/80'>
                  Runsewe estate Ahmadiyyah ijaiye lagos, Lagos Harbour, Nigeria.
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <Phone className='h-5 w-5 flex-shrink-0' />
                <span className='text-primary-foreground/80'>
                  <a href='tel:+234 811 592 0823'>+234 811 592 0823</a>
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <Mail className='h-5 w-5 flex-shrink-0' />
                <span className='text-primary-foreground/80'>info@majlisunnor.edu</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className='space-y-4'>
            <h4 className='font-semibold text-lg'>Follow Us</h4>
            <div className='flex gap-4'>
              {[
                { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100067841017204' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className='w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors'
                >
                  <social.icon className='h-5 w-5' />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/80'>
          <p>© {new Date().getFullYear()} Majlisunnor Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
