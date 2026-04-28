import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'car-rental-app',
    title: 'Quickky Car Rental',
    category: 'Mobile / UX Design',
    coverImage: '/input_file_1.png',
    description: 'Simplifying the car booking process with transparency and ease.',
    overview: 'Quickky is a mobile-first solution aimed at bridging the gap between desire and mobility.',
    context: 'The car rental industry is often perceived as slow and untrustworthy. This project sought to redesign the digital experience to prioritize speed, transparency, and user autonomy.',
    myRole: 'UI/UX Designer',
    targetUsers: 'Urban professionals and travelers aged 22-45 who value efficiency and price clarity.',
    problem: 'Users find it difficult to book cars efficiently. Existing platforms are cluttered with hidden fees and complex navigation, leading to high drop-off rates during the checkout process.',
    research: 'Through 1:1 user interviews and competitive benchmarking, I discovered that 75% of users feel "anxiety" regarding final price shifts. Primary research focused on the "moment of commitment"—the point where users decide to pay.',
    painPoints: [
      'Lack of upfront total price transparency.',
      'Overwhelming mandatory upselling during booking.',
      'Complex document verification processes.',
      'Long queues at physical pick-up locations.'
    ],
    userJourney: 'Alex lands at the airport -> Opens app -> Filters by "Ready for Pickup" -> Sees total price including all fees -> 1-tap booking with saved profile -> Receives digital key code.',
    userFlow: 'Splash -> Global Health Check -> Search/Filter -> Select Vehicle -> Transparent Fare Breakdown -> Fast Checkout -> Digital Key Delivery.',
    uiDesign: 'A high-contrast clean aesthetic with a palette of Soft Rose and Charcoal. Large touch targets and bold typography ensure accessibility during on-the-go usage.',
    finalUiImages: [
      '/input_file_3.png',
      '/input_file_4.png',
      '/input_file_5.png'
    ],
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
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1200&h=800',
        imageAlt: 'Car booking flow'
      }
    ]
  },
  {
    id: '2',
    slug: 'mealza-food-app',
    title: 'MealZa',
    category: 'Food Delivery / Meal Planning',
    coverImage: '/input_file_2.png',
    description: 'Empowering home cooks with intelligent meal planning and recipe discovery.',
    overview: 'MealZa is a kitchen companion that streamlines the journey from craving to cooking.',
    context: 'Modern users have an abundance of recipes but lack the time to organize them into cohesive meal plans, leading to food waste and "decision paralysis."',
    myRole: 'UI/UX Designer',
    targetUsers: 'Busy professionals and health-conscious home cooks.',
    problem: 'Users struggle with disorganized meal planning and food waste.',
    research: 'I conducted observational studies of grocery shopping patterns. Data showed that "planless" shopping leads to 40% more food waste. Users expressed a desire for an app that "knows what is in my fridge."',
    painPoints: [
      'Fragmented experience between recipe discovery and shopping lists.',
      'Food waste from buying ingredients serving only one specific recipe.',
      'Choice paralysis when browsing hundreds of disconnected recipes.'
    ],
    userJourney: 'Sarah receives a notification with a recipe based on her pantry -> Taps "Add to Weekly Plan" -> App automatically identifies missing items -> Sarah adds them to the cart -> Ingredients delivered by 6 PM.',
    userFlow: 'Home -> AI Pantry Check -> Suggested Recipes -> Add to Meal Plan -> Auto-Grocery Generation -> Secure Checkout.',
    uiDesign: 'Used warm, appetizing colors (Sage Green and Saffron) to evoke freshness and healthy living.',
    finalUiImages: [
      '/input_file_6.png',
      '/input_file_0.png'
    ],
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
        image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=1200&h=800',
        imageAlt: 'AI Recipe interface'
      }
    ]
  },
  {
    id: '3',
    slug: 'hospitall-management',
    title: 'HospitALL',
    category: 'Web App / SaaS Design',
    coverImage: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=1600&h=900',
    description: 'A smarter way to manage hospital operations and patient flow.',
    overview: 'HospitALL is a unified command center for healthcare professionals to optimize care delivery.',
    context: 'Hospital administration is often bogged down by legacy systems that don’t talk to each other. This project aimed to create a real-time source of truth for patient management.',
    myRole: 'UI/UX Designer',
    targetUsers: 'Hospital administrators, doctors, and nursing staff.',
    problem: 'Hospital management tasks are slow and prone to errors. Doctors face notification fatigue and scheduling conflicts due to fractured visibility of patient data.',
    research: 'I shadowed three clinical teams for 48 hours. I observed that 25% of doctor downtime was caused by waiting for manual record retrieval. Staff interviews highlighted "mental burnout" from complex UI.',
    painPoints: [
      'Inconsistent patient records across departments.',
      'Manual scheduling leading to double-booked sessions.',
      'Legacy software that requires 10+ clicks for simple entries.'
    ],
    userJourney: 'Doctor logs in -> Sees high-level patient queue -> Taps patient for full history (lab results, previous visits) -> Adds new record -> Nurse receives instant update for post-op care.',
    userFlow: 'Provider Login -> Interactive Floor Map -> Patient Status Ticker -> Patient Detail View -> Order Management -> Hand-off Sync.',
    uiDesign: 'Selected a clinical but calming blue palette, compliant with accessibility standards (WCAG AA).',
    finalUiImages: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=1600'
    ],
    iterations: 'User testing showed that doctors preferred a "gesture-first" interface on tablets. We shifted from button-heavy forms to swipeable action cards for patient status updates.',
    solution: 'A unified SaaS portal with Conflict Detection and 1-click scheduling.',
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
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=800',
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
