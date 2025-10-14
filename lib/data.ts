import { BookOpen, Languages, GraduationCap, Users, School, Home } from 'lucide-react';

export const arabicLyrics = [
  'أَلَا مَجْلِسُ النُّورِ مَدْرَسَتِي، وَدَارُ الْعُلُومِ كَذَا قُدْوَتِي',
  'كِتَابُ اللَّهِ لَنَا مَنْهَجٌ، وَالسُّنَّةُ شَرْحٌ لَنَا إِخْوَتِي',
  'لَأَنْتِ لِدِينِ الإِلَهِ نِعْمَةٌ، فَبُورِكَ فِيكِ أَكَادِيمِيَّتِي',
];

export const englishLyrics = [
  [
    'Truly, Majlissnoor Academy is my school,',
    'And Dār al-ʿUlūm is likewise my example and model.',
  ],
  ['The Book of Allah is our path and guide,', 'And the Sunnah is our explanation, O my brothers.'],
  [
    'Indeed, you (O Academy) are a blessing for the religion of Allah,',
    'So may you be blessed — my beloved Academy!',
  ],
];

export const programs = [
  {
    icon: Home,
    title: 'Hadanah (Nursery)',
    titleAr: 'الْحَضَانَةُ',
    description: 'Foundational Islamic and moral upbringing for young learners (Ages 3–4).',
    descriptionAr:
      'تَرْبِيَةٌ إِسْلَامِيَّةٌ وَأَخْلاقِيَّةٌ أَسَاسِيَّةٌ لِلأَطْفَالِ (أَعْمَارُ ٣–٤).',
    features: [
      'Duration: 2 years',
      'Basic Qur’an & Arabic',
      'Manners and Etiquette',
      'Interactive Learning',
    ],
    featuresAr: [
      'الْمُدَّةُ: سَنَتَانِ',
      'القُرْآنُ وَالعَرَبِيَّةُ الأَسَاسِيَّةُ',
      'الآدَابُ وَالأَخْلاقُ',
      'تَعَلُّمٌ تَفَاعُلِيٌّ',
    ],
    color: 'from-primary/10 to-primary/5',
  },
  {
    icon: School,
    title: 'Raudah (Kindergarten)',
    titleAr: 'الرَّوْضَةُ',
    description: 'Preparatory stage for early literacy, numeracy, and Qur’anic recitation.',
    descriptionAr:
      'مَرْحَلَةٌ تَحْضِيرِيَّةٌ لِلتَّعَلُّمِ الأَوَّلِيِّ وَقِرَاءَةِ القُرْآنِ وَالْكِتَابَةِ.',
    features: [
      'Duration: 2 years',
      'Arabic & English Literacy',
      'Qur’an Reading Basics',
      'Character Building',
    ],
    featuresAr: [
      'الْمُدَّةُ: سَنَتَانِ',
      'قِرَاءَةٌ وَكِتَابَةٌ بِالعَرَبِيَّةِ وَالإِنْجِلِيزِيَّةِ',
      'أُسُسُ قِرَاءَةِ القُرْآنِ',
      'بِنَاءُ الشَّخْصِيَّةِ',
    ],
    color: 'from-secondary/10 to-secondary/5',
  },
  {
    icon: BookOpen,
    title: 'Ibtidaaiyyah (Primary)',
    titleAr: 'الابْتِدَائِيَّةُ',
    description: 'Basic Islamic and Arabic education forming the foundation of knowledge.',
    descriptionAr: 'تَعْلِيمٌ إِسْلَامِيٌّ وَعَرَبِيٌّ أَسَاسِيٌّ يُكَوِّنُ قَاعِدَةَ العِلْمِ.',
    features: [
      'Duration: 3 years',
      'Arabic Grammar & Reading',
      'Basic Fiqh & Aqeedah',
      'Qur’an Memorization',
    ],
    featuresAr: [
      'الْمُدَّةُ: ٣ سَنَوَاتٍ',
      'قَوَاعِدُ اللُّغَةِ العَرَبِيَّةِ وَالقِرَاءَةِ',
      'الفِقْهُ وَالعَقِيدَةُ الأَسَاسِيَّةُ',
      'حِفْظُ القُرْآنِ',
    ],
    color: 'from-accent/10 to-primary/5',
  },
  {
    icon: GraduationCap,
    title: 'Ihdaadiyyah (Intermediate)',
    titleAr: 'الإِعْدَادِيَّةُ',
    description:
      'Intermediate level focusing on Islamic sciences, Arabic depth, and personal discipline.',
    descriptionAr:
      'مَرْحَلَةٌ وَسْطَى تُرَكِّزُ عَلَى العُلُومِ الإِسْلَامِيَّةِ وَالتَّعَمُّقِ فِي العَرَبِيَّةِ وَتَهْذِيبِ النَّفْسِ.',
    features: [
      'Duration: 3 years',
      'Arabic Composition',
      'Fiqh & Hadith Studies',
      'Moral Training',
    ],
    featuresAr: [
      'الْمُدَّةُ: ٣ سَنَوَاتٍ',
      'الإِنْشَاءُ العَرَبِيُّ',
      'دِرَاسَةُ الفِقْهِ وَالحَدِيثِ',
      'التَّرْبِيَةُ الأَخْلاقِيَّةُ',
    ],
    color: 'from-primary/10 to-secondary/10',
  },
  {
    icon: BookOpen,
    title: 'Thanaawiyyah (Advanced)',
    titleAr: 'الثَّانَوِيَّةُ',
    description:
      'Advanced Islamic education preparing students for higher studies in Shariah and Arabic sciences.',
    descriptionAr:
      'تَعْلِيمٌ إِسْلَامِيٌّ مُتَقَدِّمٌ يُؤَهِّلُ الطُّلَّابَ لِلدِّرَاسَاتِ العَالِيَةِ فِي الشَّرِيعَةِ وَالعُلُومِ العَرَبِيَّةِ.',
    features: [
      'Duration: 3 years',
      'Tafseer & Usul al-Fiqh',
      'Balagha & Nahw',
      'Research & Preaching Skills',
    ],
    featuresAr: [
      'الْمُدَّةُ: ٣ سَنَوَاتٍ',
      'التَّفْسِيرُ وَأُصُولُ الفِقْهِ',
      'الْبَلَاغَةُ وَالنَّحْوُ',
      'مَهَارَاتُ البَحْثِ وَالدَّعْوَةِ',
    ],
    color: 'from-accent/10 to-accent/5',
  },
  {
    icon: GraduationCap,
    title: 'Full-time Tahfeedh Program',
    titleAr: 'بَرْنَامَجُ التَّحْفِيظِ (دَوَامٌ كَامِلٌ)',
    description:
      'Comprehensive Qur’an memorization and review program for full-time students with hostel accommodation.',
    descriptionAr:
      'بَرْنَامَجُ حِفْظٍ شَامِلٌ لِلطُّلَّابِ المُقِيمِينَ فِي السَّكَنِ مَعَ مُرَاجَعَةٍ مُنَظَّمَةٍ.',
    features: [
      'Duration: 3 years + Ihdaadiyyah',
      'Full-time Residence',
      'Daily Hifz Sessions',
      'Tajweed Perfection',
    ],
    featuresAr: [
      'الْمُدَّةُ: ٣ سَنَوَاتٍ + الإِعْدَادِيَّةُ',
      'إِقَامَةٌ كَامِلَةٌ',
      'جَلَسَاتُ الحِفْظِ يَوْمِيًّا',
      'إِتْقَانُ التَّجْوِيدِ',
    ],
    color: 'from-primary/10 to-accent/5',
  },
  {
    icon: GraduationCap,
    title: 'Part-time Tahfeedh Program',
    titleAr: 'بَرْنَامَجُ التَّحْفِيظِ (جُزْئِيٌّ)',
    description:
      'Flexible Qur’an memorization program for day or weekend students with optional hostel access.',
    descriptionAr:
      'بَرْنَامَجُ حِفْظٍ مَرِنٌ لِلطُّلَّابِ النَّهَارِيِّينَ أَوْ نِهَايَةِ الأُسْبُوعِ مَعَ خِيَارِ السَّكَنِ.',
    features: [
      'Flexible Schedule',
      'Weekend and Evening Options',
      'Qualified Instructors',
      'Optional Hostel',
    ],
    featuresAr: [
      'جَدْوَلٌ مَرِنٌ',
      'خِيَارَاتُ نِهَايَةِ الأُسْبُوعِ وَالمَسَاءِ',
      'مُعَلِّمُونَ مُؤَهَّلُونَ',
      'خِيَارُ السَّكَنِ',
    ],
    color: 'from-secondary/10 to-primary/5',
  },
];
