import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'car-rental-app',
    title: 'Quickky Car Rental',
    category: 'Mobile / UX Design',
    coverImage: '/input_file_0.png',
    coverFallback: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600',
    description: 'Simplifying the car booking process with transparency and ease.',
    overview: 'Quickky is a mobile-first solution aimed at bridging the gap between desire and mobility.',
    context: 'The car rental industry is often perceived as slow and untrustworthy. This project sought to redesign the digital experience to prioritize speed, transparency, and user autonomy.',
    myRole: 'UI/UX Designer',
    targetUsers: 'Urban professionals and travelers aged 22-45 who value efficiency and price clarity.',
    problem: 'Users encounter significant friction due to cluttered interfaces, lack of pricing transparency, and complex booking steps that lead to high drop-off rates.',
    research: 'Users prefer clear pricing and simple booking experiences, while complex flows and hidden charges lead to drop-offs and lower trust.',
    painPoints: [
      'Cluttered UI and lengthy booking forms',
      'Lack of pricing transparency',
      'High booking drop-offs due to complex steps',
      'Unclear availability and rental policies'
    ],
    userJourney: 'Alex lands at the airport -> Opens app -> Filters by "Ready for Pickup" -> Sees total price including all fees -> 1-tap booking with saved profile -> Receives digital key code.',
    uiDesign: 'A high-contrast clean aesthetic with a palette of Soft Rose and Charcoal. Large touch targets and bold typography ensure accessibility during on-the-go usage.',
    iterations: 'Initial testing revealed users were confused by the "Insurance Selection" screen. I iterated by creating a simplified toggle system with clear "Most Popular" badges, which increased conversion by 18%.',
    solution: 'A simplified 3-step booking flow with a "No Surprise" pricing model and a clean, minimalist UI that reduces cognitive load.',
    outcome: {
      metrics: [
        '45% reduction in average booking time.',
        '28% increase in conversion rate.',
        '92% user satisfaction score.'
      ],
      summary: 'Quickky successfully reduced friction in the rental process, proving that transparency is the most powerful loyalty driver in the mobility sector.'
    },
    behanceLink: 'https://www.behance.net/gallery/236477433/Car-rental-app-UXUI-Case-Study',
    sections: [
      {
        id: 'c1',
        title: 'Frictionless Booking',
        content: 'We stripped away every distraction. The interface focuses on essential steps, allowing users to find and book their ideal vehicle without navigating through endless menus.',
        imageAlt: 'Car booking flow'
      },
      {
        id: 'c2',
        title: 'Interaction Model',
        content: 'Smooth transitions and clear feedback states ensure the user feels in control at every stage of the booking journey.',
        imageAlt: 'Interaction model'
      },
      {
        id: 'c3',
        title: 'Final Interfaces',
        content: 'The final design prioritizes readability and ease of use, even in high-stress travel environments.',
        imageAlt: 'Final UI screens'
      }
    ]
  },
  {
    id: '2',
    slug: 'mealza-food-app',
    title: 'MealZa',
    category: 'Food Delivery / Meal Planning',
    coverImage: 'https://priyadharsiniv-portfolio.vercel.app/images/mini-cover.jpg',
    coverFallback: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=1600',
    description: 'Empowering home cooks with intelligent meal planning and recipe discovery.',
    overview: 'MealZa is a kitchen companion that streamlines the journey from craving to cooking.',
    context: 'Modern users have an abundance of recipes but lack the time to organize them into cohesive meal plans, leading to food waste and "decision paralysis."',
    myRole: 'UI/UX Designer',
    targetUsers: 'Busy professionals and health-conscious home cooks.',
    problem: 'Users struggle with disorganized meal planning and food waste, often feeling overwhelmed by recipe discovery without a clear structure.',
    research: 'Planless grocery shopping leads to food waste and inefficient ingredient usage. Users need a smarter way to plan meals and discover relevant recipes without feeling overwhelmed.',
    painPoints: [
      'Fragmented experience between recipe discovery and shopping lists.',
      'Food waste from buying ingredients serving only one specific recipe.',
      'Choice paralysis when browsing hundreds of disconnected recipes.'
    ],
    userJourney: 'Sarah receives a notification with a recipe based on her pantry -> Taps "Add to Weekly Plan" -> App automatically identifies missing items -> Sarah adds them to the cart -> Ingredients delivered by 6 PM.',
    uiDesign: 'Used warm, appetizing colors (Sage Green and Saffron) to evoke freshness and healthy living.',
    iterations: 'Early prototypes lacked a "leftover" feature. After feedback, I added a "Waste Warrior" mode that suggests recipes based specifically on items about to expire.',
    solution: 'Simplified recipe management and AI-integrated shopping flows.',
    outcome: {
      metrics: [
        '30% reduction in reported food waste.',
        '50% faster meal planning sessions.',
        '88% retention rate in the first month.'
      ],
      summary: 'MealZa solved the choice paralysis and logistical friction of home cooking by providing a holistic, data-driven food journey.'
    },
    behanceLink: 'https://www.behance.net/gallery/238553887/MealZa-The-Complete-Food-Journey-in-One-App',
    sections: [
      {
        id: 'm1',
        title: 'AI Recipe Engine',
        content: 'Personalized meal suggestions based on taste, dietary needs, and ingredients already in your kitchen. It’s like having a chef who knows your pantry.',
        imageAlt: 'AI Recipe interface'
      },
      {
        id: 'm2',
        title: 'Visual Flavors',
        content: 'Clean layouts with vibrant food photography encourage exploration and healthy habits.',
        imageAlt: 'Meal planning interface'
      }
    ]
  },
  {
    id: '3',
    slug: 'hospitall-management',
    title: 'HospitALL',
    category: 'Web App / SaaS Design',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600&h=900',
    description: 'A smarter way to manage hospital operations and patient flow.',
    overview: 'HospitALL is a unified command center for healthcare professionals to optimize care delivery.',
    context: 'Hospital administration is often bogged down by legacy systems that don’t talk to each other. This project aimed to create a real-time source of truth for patient management.',
    myRole: 'UI/UX Designer',
    targetUsers: 'Hospital administrators, doctors, and nursing staff.',
    problem: 'Healthcare efficiency is hindered by manual scheduling errors, fragmented patient data access, and friction-filled patient booking experiences.',
    research: 'Manual processes and unconnected systems slow down work, and complicated interfaces make it harder and more stressful for staff.',
    painPoints: [
      'Manual scheduling leads to errors and double bookings, affecting overall efficiency.',
      'Doctors struggle to manage and access patient information efficiently.',
      'Patients face friction due to mandatory account creation when booking appointments.',
      'Patients find rescheduling appointments confusing and lacking flexibility.'
    ],
    userJourney: 'Doctor logs in -> Sees high-level patient queue -> Taps patient for full history (lab results, previous visits) -> Adds new record -> Nurse receives instant update for post-op care.',
    uiDesign: 'Selected a clinical but calming blue palette, compliant with accessibility standards (WCAG AA).',
    iterations: 'User testing showed that doctors preferred a "gesture-first" interface on tablets. We shifted from button-heavy forms to swipeable action cards for patient status updates.',
    solution: 'A centralized platform with role-based dashboards for doctors and admins, and an intuitive web interface for patients to simplify appointment management.',
    outcome: {
      metrics: [
        '60% faster patient registration.',
        'Zero reported scheduling conflicts.',
        '95% adoption rate among clinical staff.'
      ],
      summary: 'HospitALL brought modern efficiency to a critical infrastructure, prioritizing clarity and speed to allow medical professionals to focus on care.'
    },
    behanceLink: 'https://www.behance.net/gallery/245544973/HospitALL-Smarter-Hospital-Management',
    sections: [
      {
        id: 'h1',
        title: 'The Unified Dashboard',
        content: 'Admins can manage the entire facility from one view, while doctors get a dedicated space to track patient history and manage their specific sessions.',
        imageAlt: 'Admin Dashboard interface'
      }
    ]
  }
];

export interface DribbbleShot {
  id: string;
  title: string;
  image: string;
  link: string;
}

export const RESUME_LINK = 'https://drive.google.com/file/d/11Es0300vJ0EQ4luTCibKVnHL4wC9PHcO/view?usp=drive_link';

export const DRIBBBLE_SHOTS: DribbbleShot[] = [
  {
    id: 'd1',
    title: 'Smart Home App UI',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://dribbble.com/shots/26523931-Smart-home-app-UI-design'
  },
  {
    id: 'd2',
    title: 'E-commerce App UI',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://dribbble.com/shots/26494367-Ecommerce-application-UI-design'
  },
  {
    id: 'd3',
    title: 'Glasses Store UI',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://dribbble.com/shots/26461243-Glasses-Store-UI'
  },
  {
    id: 'd4',
    title: 'Flight Booking UI',
    image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://dribbble.com/shots/26436377-Flight-booking-app-UI-design'
  },
  {
    id: 'd5',
    title: 'Cafe Kiosk UI',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://dribbble.com/shots/26410095-Cafe-Kiosk-UI-design'
  },
  {
    id: 'd6',
    title: 'Television UI Design',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://dribbble.com/shots/26407774-Television-UI-design'
  }
];
